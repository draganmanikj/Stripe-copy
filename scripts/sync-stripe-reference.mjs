import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { objectSourceOverrides, referenceSources } from "./reference-sources.mjs";

const plain = (value) =>
  value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const rich = (value) => value.replace(/\s+/g, " ").trim();

function paragraphsBetween(markdown, startHeading, endHeading) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === startHeading);
  const end = lines.findIndex(
    (line, index) => index > start && line.trim() === endHeading,
  );
  const body = lines.slice(start + 1, end === -1 ? lines.length : end);
  const paragraphs = [];
  let current = [];

  for (const line of body) {
    if (!line.trim()) {
      if (current.length) {
        paragraphs.push(rich(current.join(" ")));
        current = [];
      }
      continue;
    }
    if (!line.startsWith("#") && !line.startsWith("```")) current.push(line.trim());
  }
  if (current.length) paragraphs.push(rich(current.join(" ")));
  return paragraphs.filter(Boolean);
}

function proseBeforeSchema(markdown, startHeading, endHeading) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === startHeading);
  const end = lines.findIndex(
    (line, index) => index > start && line.trim() === endHeading,
  );
  const body = lines.slice(start + 1, end === -1 ? lines.length : end);
  const firstSchemaLine = body.findIndex((line) => /^-\s+`/.test(line.trim()));
  const prose = firstSchemaLine === -1 ? body : body.slice(0, firstSchemaLine);
  const paragraphs = [];
  let current = [];

  for (const line of prose) {
    if (!line.trim()) {
      if (current.length) {
        paragraphs.push(rich(current.join(" ")));
        current = [];
      }
      continue;
    }
    if (!line.startsWith("#") && !line.startsWith("```")) current.push(line.trim());
  }
  if (current.length) paragraphs.push(rich(current.join(" ")));
  return paragraphs.filter(Boolean);
}

function firstCodeBlockAfter(markdown, heading) {
  const start = markdown.indexOf(heading);
  if (start === -1) return "";
  const tail = markdown.slice(start + heading.length);
  const match = tail.match(/```[^\n]*\n([\s\S]*?)```/);
  return match?.[1]?.trim() ?? "";
}

function parseTopLevelFields(markdown, heading) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === heading);
  if (start === -1) return [];
  const headingEnd = lines.findIndex(
    (line, index) => index > start && /^## /.test(line),
  );
  const sectionEnd = headingEnd === -1 ? lines.length : headingEnd;
  const entries = [];

  for (let index = start + 1; index < sectionEnd; index += 1) {
    const match = lines[index].match(/^(\s*)- `([^`]+)` \(([^)]+)\)/);
    if (!match) continue;
    entries.push({
      index,
      indent: match[1].length,
      fullName: match[2],
      type: match[3],
    });
  }

  const parsed = entries.map((entry, entryIndex) => {
    const blockEnd = entries[entryIndex + 1]?.index ?? sectionEnd;
    const block = lines.slice(entry.index + 1, blockEnd);
    const description = [];
    for (const next of block) {
      if (/^\s+- `/.test(next) || next.trim() === "Possible enum values:") break;
      if (next.trim()) description.push(next.trim());
      else if (description.length) break;
    }

    const possibleIndex = block.findIndex(
      (item) => item.trim() === "Possible enum values:",
    );
    const options = [];
    if (possibleIndex !== -1) {
      for (let cursor = possibleIndex + 1; cursor < block.length; cursor += 1) {
        const optionMatch = block[cursor].match(/^\s+- `([^`]+)`/);
        if (!optionMatch) continue;
        const optionDescription = [];
        for (
          let descriptionCursor = cursor + 1;
          descriptionCursor < block.length;
          descriptionCursor += 1
        ) {
          const optionLine = block[descriptionCursor];
          if (/^\s+- `/.test(optionLine)) break;
          if (optionLine.trim()) optionDescription.push(optionLine.trim());
          else if (optionDescription.length) break;
        }
        options.push({
          value: optionMatch[1],
          description: rich(optionDescription.join(" ")),
        });
      }
    }

    return {
      fullName: entry.fullName,
      indent: entry.indent,
      field: {
        name: entry.fullName,
        type: plain(entry.type),
        description: rich(description.join(" ")),
        expandable: false,
        options,
        children: [],
      },
    };
  });

  const roots = [];
  const stack = [];
  for (const item of parsed) {
    while (stack.length && stack.at(-1).indent >= item.indent) stack.pop();
    const parent = [...stack]
      .reverse()
      .find((candidate) =>
        item.fullName.startsWith(`${candidate.fullName}.`),
      );

    if (parent) {
      item.field.name = item.fullName.slice(parent.fullName.length + 1);
      parent.field.children.push(item.field);
      parent.field.expandable = true;
    } else {
      roots.push(item.field);
    }
    stack.push(item);
  }

  return roots;
}

function parseEndpoints(markdown) {
  const endpointBlock = markdown.split("## Endpoints")[1] ?? "";
  const pattern =
    /### ([^\n]+)\s+\n+- \[([A-Z]+) ([^\]]+)\]\((https:\/\/docs\.stripe\.com\/api\/[^)]+)\)/g;
  return [...endpointBlock.matchAll(pattern)].map((match) => ({
    name: plain(match[1]),
    method: match[2],
    path: match[3],
    source: match[4].replace(/\.md$/, ""),
  }));
}

function parseEvents(markdown) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === "## Events");
  if (start === -1) return [];
  const events = [];

  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^## /.test(lines[index])) break;
    const event = lines[index].match(/^- `([^`]+)`/);
    if (!event) continue;
    const description = [];
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      if (/^- `/.test(lines[cursor]) || /^## /.test(lines[cursor])) break;
      if (lines[cursor].trim()) description.push(lines[cursor].trim());
    }
    events.push({
      name: event[1],
      description: rich(description.join(" ")),
    });
  }

  return events;
}

function parseErrorCodes(markdown) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === "## Error Codes");
  if (start === -1) return [];
  return lines
    .slice(start + 1)
    .map((line) => line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/))
    .filter(Boolean)
    .slice(2)
    .map((match) => ({
      status: plain(match[1]),
      code: plain(match[2]),
      description: plain(match[3]),
    }));
}

async function getMarkdown(url) {
  const response = await fetch(`${url}.md`);
  if (!response.ok) throw new Error(`${response.status} ${url}.md`);
  return response.text();
}

async function mapConcurrent(items, concurrency, worker) {
  const result = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (next < items.length) {
        const index = next;
        next += 1;
        result[index] = await worker(items[index], index);
      }
    }),
  );
  return result;
}

async function readOperation(endpoint) {
  try {
    const markdown = await getMarkdown(endpoint.source);
    return {
      ...endpoint,
      summary: paragraphsBetween(markdown, `# ${endpoint.name}`, "## Request"),
      request: firstCodeBlockAfter(markdown, "## Request"),
      response: firstCodeBlockAfter(markdown, "### Response"),
      parameters: parseTopLevelFields(markdown, "## Parameters"),
      returns: proseBeforeSchema(markdown, "## Returns", "## Error Codes"),
      errors: parseErrorCodes(markdown),
    };
  } catch (error) {
    console.warn(`Skipping operation ${endpoint.source}: ${error.message}`);
    return {
      ...endpoint,
      summary: [],
      request: "",
      response: "",
      parameters: [],
      returns: [],
      errors: [],
    };
  }
}

async function readResource([id, path]) {
  const source = `https://docs.stripe.com/api/${path}`;
  const overviewMarkdown = await getMarkdown(source);
  const endpoints = parseEndpoints(overviewMarkdown);
  const events = parseEvents(overviewMarkdown);
  const operations = await mapConcurrent(endpoints, 6, readOperation);

  let object = { source: "", title: "", response: "", attributes: [] };
  try {
    const objectSource = `https://docs.stripe.com/api/${objectSourceOverrides[id] ?? `${path}/object`}`;
    const objectMarkdown = await getMarkdown(objectSource);
    object = {
      source: objectSource,
      title: objectMarkdown.match(/^# (.+)$/m)?.[1] ?? "",
      response: firstCodeBlockAfter(objectMarkdown, "###"),
      attributes: parseTopLevelFields(objectMarkdown, "## Attributes"),
    };
  } catch (error) {
    console.warn(`Skipping object ${source}/object: ${error.message}`);
  }

  return [
    id,
    {
      source,
      overview: paragraphsBetween(overviewMarkdown, `# ${overviewMarkdown.match(/^# (.+)$/m)?.[1] ?? ""}`, "## Endpoints"),
      events,
      object,
      operations,
    },
  ];
}

const entries = await mapConcurrent(Object.entries(referenceSources), 5, readResource);
const content = Object.fromEntries(entries);
const output = `// Generated from the public Stripe API reference. Run scripts/sync-stripe-reference.mjs to refresh.\n\nexport type ResourceField = {\n  name: string;\n  type: string;\n  description: string;\n  expandable?: boolean;\n  options?: Array<{ value: string; description: string }>;\n};\n\nexport type ResourceOperationContent = {\n  name: string;\n  method: string;\n  path: string;\n  source: string;\n  summary: string[];\n  request: string;\n  response: string;\n  parameters: ResourceField[];\n  returns: string[];\n  errors: Array<{ status: string; code: string; description: string }>;\n};\n\nexport type ResourceReferenceContent = {\n  source: string;\n  overview: string[];\n  events: Array<{ name: string; description: string }>;\n  object: {\n    source: string;\n    title: string;\n    response: string;\n    attributes: ResourceField[];\n  };\n  operations: ResourceOperationContent[];\n};\n\nexport const resourceReferenceContent: Record<string, ResourceReferenceContent> = ${JSON.stringify(content, null, 2)};\n`;
const outputWithChildren = output.replace(
  "  options?: Array<{ value: string; description: string }>;\n};",
  "  options?: Array<{ value: string; description: string }>;\n  children?: ResourceField[];\n};",
);

await writeFile(
  resolve("app/resourceContent.generated.ts"),
  outputWithChildren,
  "utf8",
);
console.log(`Generated ${entries.length} resource references.`);

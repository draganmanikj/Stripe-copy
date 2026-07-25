import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const languages = [
  ["cURL", "curl"],
  ["Stripe CLI", "cli"],
  ["Ruby", "ruby"],
  ["Python", "python"],
  ["PHP", "php"],
  ["Java", "java"],
  ["Node.js", "node"],
  ["Go", "go"],
  [".NET", "dotnet"],
];

function generatedJson(source) {
  const marker =
    "export const resourceReferenceContent: Record<string, ResourceReferenceContent> = ";
  const start = source.indexOf(marker);
  if (start === -1) throw new Error("Unable to find generated resource content.");
  return JSON.parse(source.slice(start + marker.length).replace(/;\s*$/, ""));
}

function firstCodeBlockAfter(markdown, heading) {
  const start = markdown.indexOf(heading);
  if (start === -1) return "";
  const match = markdown
    .slice(start + heading.length)
    .match(/```[^\n]*\n([\s\S]*?)```/);
  return match?.[1]?.replace(/\r\n/g, "\n").trim() ?? "";
}

function codeTabPlaintext(html, id) {
  const marker = `"id":"${id}"`;
  const start = html.indexOf(marker);
  if (start === -1) return "";
  const match = html
    .slice(start, start + 180000)
    .match(/"plaintext":"((?:\\.|[^"])*)"/);
  if (!match) return "";
  return JSON.parse(`"${match[1]}"`)
    .replace(/sk_test_[A-Za-z0-9]+/g, "<<YOUR_SECRET_KEY>>")
    .trim();
}

async function fetchText(url, attempts = 3) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      await new Promise((resolvePromise) =>
        setTimeout(resolvePromise, 400 * (attempt + 1)),
      );
    }
  }
  throw lastError;
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

const generatedSource = await readFile(
  resolve("app/resourceContent.generated.ts"),
  "utf8",
);
const resources = generatedJson(generatedSource);
const jobs = [];

for (const [resourceId, resource] of Object.entries(resources)) {
  for (const operation of resource.operations) {
    for (const [language, key] of languages) {
      jobs.push({ resourceId, operation, language, key });
    }
  }
}

const results = await mapConcurrent(jobs, 18, async (job) => {
  const separator = job.operation.source.includes("?") ? "&" : "?";
  const markdown = await fetchText(
    `${job.operation.source}.md${separator}lang=${job.key}`,
  );
  return {
    resourceId: job.resourceId,
    operationName: job.operation.name,
    language: job.language,
    code: firstCodeBlockAfter(markdown, "## Request"),
  };
});

const examples = {};
for (const result of results) {
  examples[result.resourceId] ??= {};
  examples[result.resourceId][result.operationName] ??= {};
  examples[result.resourceId][result.operationName][result.language] =
    result.code;
}

const sdkLanguages = languages.filter(
  ([language]) => language !== "cURL" && language !== "Stripe CLI",
);
const operationJobs = [];
for (const [resourceId, resource] of Object.entries(resources)) {
  for (const operation of resource.operations) {
    operationJobs.push({ resourceId, operation });
  }
}

const globalResults = await mapConcurrent(
  operationJobs,
  12,
  async ({ resourceId, operation }) => {
    const html = await fetchText(operation.source);
    return {
      resourceId,
      operationName: operation.name,
      examples: Object.fromEntries(
        sdkLanguages.map(([language, key]) => [
          language,
          codeTabPlaintext(html, `${key}__resources`),
        ]),
      ),
    };
  },
);

const globalExamples = {};
for (const result of globalResults) {
  globalExamples[result.resourceId] ??= {};
  globalExamples[result.resourceId][result.operationName] = result.examples;
}

const output = `// Generated from the live public Stripe API reference.
// Run \`node scripts/sync-stripe-resource-examples.mjs\` to refresh it.

export const resourceRequestExamples: Record<
  string,
  Record<string, Record<string, string>>
> = ${JSON.stringify(examples, null, 2)};

export const resourceGlobalRequestExamples: Record<
  string,
  Record<string, Record<string, string>>
> = ${JSON.stringify(globalExamples, null, 2)};
`;

await writeFile(resolve("app/resourceExamples.generated.ts"), output, "utf8");
console.log(
  `Generated ${results.length} language-specific operation examples and ${globalResults.length * sdkLanguages.length} Global Config variants across ${Object.keys(resources).length} resource pages.`,
);

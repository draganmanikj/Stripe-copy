import { writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { referenceSources } from "./reference-sources.mjs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const browser = await chromium.launch({
  headless: true,
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const context = await browser.newContext({ viewport: { width: 1549, height: 850 } });
const page = await context.newPage();
const display = {};

async function openReference(url) {
  let lastError;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 1200 * (attempt + 1)));
    }
  }
  throw lastError;
}

try {
  for (const [id, path] of Object.entries(referenceSources)) {
    await openReference(`https://docs.stripe.com/api/${path}`);
    await page.waitForSelector("section.ApiSection", { timeout: 15000 });
    display[id] = await page.evaluate(() => {
      const sections = [...document.querySelectorAll("section.ApiSection")];
      const objectSection = sections.find(
        (section, index) =>
          index > 0 && /object/i.test(section.querySelector("h1")?.textContent ?? ""),
      );
      const names = (list) =>
        list
          ? [...list.querySelectorAll(":scope > li [data-testid='element-title']")].map(
              (title) => title.querySelectorAll("span")[1]?.textContent?.trim() ?? "",
            )
          : [];
      const sectionFields = (section) => {
        const lists = [
          ...section.querySelectorAll(".ApiSection-MainContent ul.method-list"),
        ];
        return {
          primaryFields: names(lists[0]),
          moreFields: names(lists[1]),
        };
      };
      const sectionSummary = (section) => {
        const main = section.querySelector(".ApiSection-MainContent");
        if (!main) return [];
        const mainTop = main.getBoundingClientRect().top;
        const listTop =
          main.querySelector("ul.method-list")?.getBoundingClientRect().top ??
          Number.POSITIVE_INFINITY;
        const returnsTop = [...main.querySelectorAll("*")]
          .filter(
            (element) =>
              element.children.length === 0 &&
              element.textContent?.trim() === "Returns" &&
              element.getBoundingClientRect().height > 0,
          )
          .reduce(
            (top, element) => Math.min(top, element.getBoundingClientRect().top),
            Number.POSITIVE_INFINITY,
          );
        const boundary = Math.min(listTop, returnsTop);
        return [...main.querySelectorAll("p")]
          .filter((paragraph) => {
            const top = paragraph.getBoundingClientRect().top;
            return top >= mainTop && top < boundary;
          })
          .map((paragraph) => paragraph.textContent?.trim() ?? "")
          .filter(Boolean);
      };
      const objectFields = objectSection
        ? sectionFields(objectSection)
        : { primaryFields: [], moreFields: [] };

      return {
        overviewHeight: sections[0]?.getBoundingClientRect().height ?? 0,
        objectHeight: objectSection?.getBoundingClientRect().height ?? 0,
        primaryFields: objectFields.primaryFields,
        moreFields: objectFields.moreFields,
        sections: sections.map((section) => {
          const fields = sectionFields(section);
          return {
            id: section.id,
            title: section.querySelector("h1")?.textContent?.trim() ?? "",
            height: section.getBoundingClientRect().height,
            primaryFields: fields.primaryFields,
            moreFields: fields.moreFields,
            summaryParagraphs: sectionSummary(section),
          };
        }),
      };
    });
    console.log(`Audited ${id}`);
  }
} finally {
  await browser.close();
}

const output = `// Generated from the live public Stripe API reference.\n\nexport type ResourceDisplay = {\n  overviewHeight: number;\n  objectHeight: number;\n  primaryFields: string[];\n  moreFields: string[];\n  sections: Array<{\n    id: string;\n    title: string;\n    height: number;\n    primaryFields: string[];\n    moreFields: string[];\n    summaryParagraphs: string[];\n  }>;\n};\n\nexport const resourceDisplay: Record<string, ResourceDisplay> = ${JSON.stringify(display, null, 2)};\n`;
await writeFile("app/resourceDisplay.generated.ts", output, "utf8");
console.log(`Generated ${Object.keys(display).length} resource display profiles.`);

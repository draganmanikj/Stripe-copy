import { writeFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const chromePath =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

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

const sectionIds = {
  introduction: "api-section-intro",
  authentication: "api-section-authentication",
  errors: "api-section-errors",
  "handling-errors": "api-section-error_handling",
  "expanding-responses": "api-section-expanding_objects",
  "idempotent-requests": "api-section-idempotent_requests",
  "include-dependent-response-values":
    "api-section-include_dependent_response_values",
  metadata: "api-section-metadata",
  pagination: "api-section-pagination",
  search: "api-section-search_pagination",
  "auto-pagination": "api-section-auto_pagination",
  "request-ids": "api-section-request_ids",
  "connected-accounts": "api-section-connected_accounts",
  versioning: "api-section-versioning",
};

function normalizeCode(value) {
  return value
    .replace(/sk_test_[A-Za-z0-9.]+/g, "__STRIPE_SAMPLE_TEST_KEY__")
    .replace(
      /__STRIPE_SAMPLE_TEST_KEY__(?:\s*__STRIPE_SAMPLE_TEST_KEY__)+/g,
      "__STRIPE_SAMPLE_TEST_KEY__",
    )
    .replaceAll(
      "__STRIPE_SAMPLE_TEST_KEY__\n",
      "__STRIPE_SAMPLE_TEST_KEY__",
    )
    .replace(/\r\n/g, "\n")
    .trim();
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
});
const page = await browser.newPage({
  viewport: { width: 1500, height: 900 },
});

await page.goto("https://docs.stripe.com/api", {
  waitUntil: "domcontentloaded",
  timeout: 45_000,
});
await page.waitForSelector("section.ApiSection", { timeout: 20_000 });
await page.waitForTimeout(2_000);

const examples = Object.fromEntries(
  Object.keys(sectionIds).map((sectionId) => [
    sectionId,
    { byLanguage: {}, responses: [] },
  ]),
);

for (const [language, key] of languages) {
  await page
    .locator(`[role="option"][data-key="${key}"]`)
    .first()
    .evaluate((element) => element.click());
  await page.waitForTimeout(180);

  for (const [sectionId, apiSectionId] of Object.entries(sectionIds)) {
    const section = page.locator(`#${apiSectionId}`);
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(120);
    const cards = await section.evaluate((section) => {
      return [...section.querySelectorAll(".ApiSection-Aside pre")].map(
        (pre) => {
          const card = pre.parentElement;
          const title =
            card?.firstElementChild?.firstElementChild?.textContent?.trim() ??
            "";
          return {
            title,
            code: pre.innerText,
          };
        },
      );
    });

    const requestCards = cards
      .filter((card) => !/response$/i.test(card.title))
      .map((card) => ({
        title: card.title,
        code: normalizeCode(card.code),
      }));
    examples[sectionId].byLanguage[language] = requestCards;

    if (language === "cURL") {
      examples[sectionId].responses = cards
        .filter((card) => /response$/i.test(card.title))
        .map((card) => ({
          title: card.title,
          code: normalizeCode(card.code),
        }));
    }
  }
}

await browser.close();

const output = `// Generated from the live public Stripe API reference.
// Run \`node scripts/sync-stripe-sections.mjs\` to refresh it.

export type OfficialGeneralExample = {
  title: string;
  code: string;
};

export type OfficialGeneralSectionExamples = {
  byLanguage: Record<string, OfficialGeneralExample[]>;
  responses: OfficialGeneralExample[];
};

export const officialGeneralExamples: Record<string, OfficialGeneralSectionExamples> = ${JSON.stringify(
  examples,
  null,
  2,
)};
`;

await writeFile(
  new URL("../app/sectionExamples.generated.ts", import.meta.url),
  output,
);

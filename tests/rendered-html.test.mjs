import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("contains the complete API reference interface", async () => {
  const [component, content, packageJson] = await Promise.all([
    readFile(new URL("../app/ApiReference.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/content.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(component, /Introduction/);
  assert.match(component, /Authentication/);
  assert.match(component, /Include-dependent response values/);
  assert.match(component, /Connected Accounts/);
  assert.match(component, /Versioning/);
  assert.match(content, /https:\/\/api\.stripe\.com|Stripe API/);
  assert.match(packageJson, /"name": "stripe-api-reference"/);
  assert.doesNotMatch(packageJson, /wrangler|drizzle|cloudflare/i);
});

test("does not include workspace-specific hosting scaffolding", async () => {
  await assert.rejects(access(new URL("../.openai/", import.meta.url)));
  await assert.rejects(access(new URL("../app/chatgpt-auth.ts", import.meta.url)));
  await assert.rejects(access(new URL("../worker/", import.meta.url)));
  await access(new URL("dist/server/index.js", projectRoot));
});

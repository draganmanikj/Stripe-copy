"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiFileText,
  FiGithub,
  FiHelpCircle,
  FiMenu,
  FiMessageSquare,
  FiPlay,
  FiX,
} from "react-icons/fi";
import {
  resourceDefinitions,
  resourcesByCategory,
  type ResourceDefinition,
  type ResourceCategory,
} from "./resourceData";
import {
  resourceReferenceContent,
  type ResourceField,
  type ResourceOperationContent,
} from "./resourceContent.generated";
import { resourceDisplay } from "./resourceDisplay.generated";
import {
  resourceGlobalRequestExamples,
  resourceRequestExamples,
} from "./resourceExamples.generated";
import { officialGeneralExamples } from "./sectionExamples.generated";
import { sectionCopy } from "./content";

type Section = {
  id: string;
  copyKey: string;
  label: string;
  showExamples?: boolean;
  codeTitle?: string;
  code?: string;
  codeLanguage?: string;
  infoTitle?: string;
  infoBody?: string[];
  responseTitle?: string;
  response?: string;
};

const sections: Section[] = [
  {
    id: "introduction",
    copyKey: "introduction",
    label: "Introduction",
    codeTitle: "BASE URL",
    code: "https://api.stripe.com",
    codeLanguage: "plaintext",
  },
  {
    id: "authentication",
    copyKey: "authentication",
    label: "Authentication",
    codeTitle: "AUTHENTICATED REQUEST",
    code: `curl https://api.stripe.com/v1/charges \\
  -u YOUR_STRIPE_SECRET_KEY:
# The colon prevents curl from asking for a password.`,
    infoTitle: "YOUR API KEY",
    infoBody: [
      "A sample test API key is included in all the examples here, so you can test any example right away. Do not submit any personally identifiable information in requests made with this key.",
      "To test requests using your account, replace the sample API key with your actual API key or [sign in](https://dashboard.stripe.com/login).",
    ],
  },
  {
    id: "errors",
    copyKey: "errors",
    label: "Errors",
  },
  {
    id: "handling-errors",
    copyKey: "handlingErrors",
    label: "Handling errors",
    codeTitle: "",
    code: `# Select a client library to see examples of
# handling different kinds of errors.`,
    codeLanguage: "bash",
  },
  {
    id: "expanding-responses",
    copyKey: "expanding",
    label: "Expanding Responses",
    codeTitle: "REQUEST",
    code: `curl https://api.stripe.com/v1/charges/ch_3LmzzQ2eZvKYlo2C0XjzUzJV \\
  -u YOUR_STRIPE_SECRET_KEY: \\
  -d "expand[]"=customer \\
  -d "expand[]"="payment_intent.customer" \\
  -G`,
    responseTitle: "RESPONSE",
    response: `{
  "id": "ch_3LmzzQ2eZvKYlo2C0XjzUzJV",
  "object": "charge",
  "customer": {
    "id": "cu_14HOpH2eZvKYlo2CxXIM7Pb2",
    "object": "customer"
  },
  "payment_intent": {
    "id": "pi_3MtwBwLkdIwHu7ix28a3tqPa",
    "object": "payment_intent",
    "customer": {
      "id": "cus_NffrFeUfNV2Hib",
      "object": "customer"
    }
  }
}`,
  },
  {
    id: "idempotent-requests",
    copyKey: "idempotency",
    label: "Idempotent requests",
    codeTitle: "REQUEST",
    code: `curl https://api.stripe.com/v1/customers \\
  -u YOUR_STRIPE_SECRET_KEY: \\
  -H "Idempotency-Key: KG5LxwFBepaKHyUD" \\
  -d description="My First Test Customer (created for API docs at https://docs.stripe.com/api)"`,
  },
  {
    id: "include-dependent-response-values",
    copyKey: "include",
    label: "Include-dependent response values (API v2)",
    codeTitle: "REQUEST",
    code: `curl -X POST https://api.stripe.com/v2/core/accounts \\
  -H "Authorization: Bearer YOUR_STRIPE_SECRET_KEY" \\
  -H "Stripe-Version: 2026-06-24.preview" \\
  --json '{
    "include": [
      "identity",
      "configuration.customer"
    ]
  }'`,
    infoTitle: "INCLUDED RESPONSE PROPERTIES",
    infoBody: [
      "The response includes actual values for the properties specified in the include parameter, and null for all other include-dependent properties.",
    ],
    responseTitle: "RESPONSE",
    response: `{
  "id": "acct_123",
  "object": "v2.core.account",
  "applied_configurations": [
    "customer",
    "merchant"
  ],
  "configuration": {
    "customer": {
      "automatic_indirect_tax": { ... },
      "billing": { ... },
      "capabilities": { ... }
    },
    "merchant": null,
    "recipient": null
  },
  "contact_email": "furever@example.com",
  "created": "2025-06-09T21:16:00.000Z",
  "dashboard": "full",
  "identity": {
    "business_details": {
      "doing_business_as": "Furever",
      "id_numbers": [ ... ],
      "product_description": "SaaS pet grooming platform",
      "url": "https://accessible.stripe.com"
    },
    "country": "us"
  },
  "livemode": true,
  "metadata": {},
  "requirements": null
}`,
  },
  {
    id: "metadata",
    copyKey: "metadata",
    label: "Metadata",
    codeTitle: "REQUEST",
    code: `curl https://api.stripe.com/v1/customers \\
  -u YOUR_STRIPE_SECRET_KEY: \\
  -d "metadata[order_id]"=6735`,
    responseTitle: "RESPONSE",
    response: `{
  "id": "cus_123456789",
  "object": "customer",
  "address": {
    "city": "city",
    "country": "US",
    "line1": "line 1",
    "line2": "line 2",
    "postal_code": "90210",
    "state": "CA"
  },
  "balance": 0,
  "created": 1483565364,
  "currency": null,
  "default_source": null,
  "delinquent": false,
  "description": null,
  "discount": null,
  "email": null,
  "invoice_prefix": "C11F7E1",
  "invoice_settings": {
    "custom_fields": null,
    "default_payment_method": null,
    "footer": null,
    "rendering_options": null
  },
  "livemode": false,
  "metadata": {
    "order_id": "6735"
  },
  "name": null,
  "next_invoice_sequence": 1,
  "phone": null,
  "preferred_locales": [],
  "shipping": null,
  "tax_exempt": "none"
}`,
  },
  {
    id: "pagination",
    copyKey: "pagination",
    label: "Pagination",
    codeTitle: undefined,
    code: undefined,
    responseTitle: "RESPONSE",
    response: `{
  "object": "list",
  "url": "/v1/customers",
  "has_more": false,
  "data": [
    {
      "id": "cus_4QFJOjw2pOmAGJ",
      "object": "customer",
      "address": null,
      "balance": 0,
      "created": 1405641735,
      "currency": "usd",
      "default_source": "card_14HOpG2eZvKYlo2Cz4u5AJG5",
      "delinquent": false,
      "description": "New customer",
      "discount": null,
      "email": null,
      "invoice_prefix": "7D11B54",
      "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
      },
      "livemode": false,
      "metadata": { "order_id": "6735" },
      "name": "cus_4QFJOjw2pOmAGJ",
      "next_invoice_sequence": 25,
      "phone": null,
      "preferred_locales": [],
      "shipping": null,
      "tax_exempt": "none",
      "test_clock": null
    }
  ]
}`,
  },
  {
    id: "search",
    copyKey: "search",
    label: "Search",
    codeTitle: undefined,
    code: undefined,
    responseTitle: "RESPONSE",
    response: `{
  "object": "search_result",
  "url": "/v1/customers/search",
  "has_more": false,
  "data": [
    {
      "id": "cus_4QFJOjw2pOmAGJ",
      "object": "customer",
      "address": null,
      "balance": 0,
      "created": 1405641735,
      "currency": "usd",
      "default_source": "card_14HOpG2eZvKYlo2Cz4u5AJG5",
      "delinquent": false,
      "description": "someone@example.com for Coderwall",
      "discount": null,
      "email": null,
      "invoice_prefix": "7D11B54",
      "livemode": false,
      "metadata": { "foo": "bar" },
      "name": "fakename",
      "next_invoice_sequence": 25,
      "phone": null,
      "preferred_locales": [],
      "shipping": null,
      "tax_exempt": "none",
      "test_clock": null
    }
  ]
}`,
  },
  {
    id: "auto-pagination",
    copyKey: "autoPagination",
    label: "Auto-pagination",
    codeTitle: "",
    code: `# The auto-pagination feature is specific to Stripe's
# libraries and cannot be used directly with curl.`,
    codeLanguage: "bash",
  },
  {
    id: "request-ids",
    copyKey: "requestIds",
    label: "Request IDs",
    codeTitle: "",
    code: `curl https://api.stripe.com/v1/customers \\
  -u YOUR_STRIPE_SECRET_KEY: \\
  -D "-" \\
  -X POST`,
  },
  {
    id: "connected-accounts",
    copyKey: "connectedAccounts",
    label: "Connected Accounts",
    codeTitle: "REQUEST",
    code: `curl https://api.stripe.com/v1/charges/ch_3LmjFA2eZvKYlo2C09TLIsrw \\
  -u YOUR_STRIPE_SECRET_KEY: \\
  -H "Stripe-Account: acct_1032D82eZvKYlo2C" \\
  -G`,
  },
  {
    id: "versioning",
    copyKey: "versioning",
    label: "Versioning",
    codeTitle: undefined,
    code: undefined,
  },
];

type CodeLanguage =
  | "cURL"
  | "Stripe CLI"
  | "Ruby"
  | "Python"
  | "PHP"
  | "Java"
  | "Node.js"
  | "Go"
  | ".NET";

type CodeFlavor = "Stripe Client" | "Global Config";

const languageOptions: CodeLanguage[] = [
  "cURL",
  "Stripe CLI",
  "Ruby",
  "Python",
  "PHP",
  "Java",
  "Node.js",
  "Go",
  ".NET",
];

const languageVersionLabels: Record<CodeLanguage, string> = {
  cURL: "2026-06-24.dahlia",
  "Stripe CLI": "2026-06-24.dahlia",
  Ruby: "Ruby SDK 19.3.0 • Dahlia",
  Python: "Python SDK 15.3.0 • Dahlia",
  PHP: "PHP SDK 20.3.0 • Dahlia",
  Java: "Java SDK 33.1.0 • Dahlia",
  "Node.js": "Node.js SDK 22.3.0 • Dahlia",
  Go: "Go SDK 86.1.0 • Dahlia",
  ".NET": ".NET SDK 52.1.0 • Dahlia",
};

const libraries: Array<{
  name: Exclude<CodeLanguage, "cURL" | "Stripe CLI">;
  icon: string;
  install: string;
  repository: string;
}> = [
  { name: "Ruby", icon: "/library-icons/ruby.png", install: "gem install stripe", repository: "stripe-ruby" },
  { name: "Python", icon: "/library-icons/python.png", install: "pip install stripe", repository: "stripe-python" },
  { name: "PHP", icon: "/library-icons/php.png", install: "composer require stripe/stripe-php", repository: "stripe-php" },
  { name: "Java", icon: "/library-icons/java.png", install: "implementation 'com.stripe:stripe-java:33.1.0'", repository: "stripe-java" },
  { name: "Node.js", icon: "/library-icons/nodejs.png", install: "npm install stripe", repository: "stripe-node" },
  { name: "Go", icon: "/library-icons/go.png", install: "go get github.com/stripe/stripe-go/v86", repository: "stripe-go" },
  { name: ".NET", icon: "/library-icons/dotnet.png", install: "dotnet add package Stripe.net", repository: "stripe-dotnet" },
];

async function writeToClipboard(value: string) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Fall through to the selection-based copy method for browsers that
      // expose Clipboard API but block it without an explicit permission.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function InlineMarkdown({ value }: { value: string }) {
  const tokens = value.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g);
  return (
    <>
      {tokens.map((token, index) => {
        const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const href = link[2].replace(/\.md(?=($|#))/, "");
          return <a href={href} key={`${token}-${index}`}>{link[1]}</a>;
        }
        if (/^`[^`]+`$/.test(token)) {
          return <code key={`${token}-${index}`}>{token.slice(1, -1)}</code>;
        }
        if (/^\*\*[^*]+\*\*$/.test(token)) {
          return <strong key={`${token}-${index}`}>{token.slice(2, -2)}</strong>;
        }
        return token;
      })}
    </>
  );
}

function StripeSearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.883 9.085a5 5 0 1 1 1.202-1.202l2.666 2.666a.847.847 0 0 1 0 1.202.847.847 0 0 1-1.202 0L7.883 9.085ZM8.3 5a3.3 3.3 0 1 1-6.6 0 3.3 3.3 0 0 1 6.6 0Z"
      />
    </svg>
  );
}

function StripeCopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z"
      />
    </svg>
  );
}

function StripeSparklesIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path
        fill="currentColor"
        d="M11.472 2.624a.25.25 0 0 0 .152-.152l.64-1.807A.246.246 0 0 1 12.5.499c.098 0 .196.055.236.166l.64 1.807a.25.25 0 0 0 .152.152l1.807.64c.111.04.166.138.166.236a.246.246 0 0 1-.166.236l-1.807.64a.25.25 0 0 0-.152.152l-.64 1.807a.246.246 0 0 1-.236.166.246.246 0 0 1-.236-.166l-.64-1.807a.25.25 0 0 0-.152-.152l-1.807-.64A.246.246 0 0 1 9.5 3.5c0-.098.055-.196.166-.236l1.807-.64Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m7 5.491-.56 1.58a2.25 2.25 0 0 1-1.37 1.37L3.492 9l1.58.56a2.25 2.25 0 0 1 1.37 1.37L7 12.508l.56-1.58a2.25 2.25 0 0 1 1.37-1.37L10.508 9l-1.58-.56a2.25 2.25 0 0 1-1.37-1.37L7 5.492Zm.707-2.496a.737.737 0 0 0-.707-.5.737.737 0 0 0-.707.5L5.026 6.57a.75.75 0 0 1-.456.456L.995 8.293a.737.737 0 0 0-.5.707c0 .294.167.589.5.707l3.575 1.267a.75.75 0 0 1 .456.456l1.267 3.575c.118.333.413.5.707.5a.737.737 0 0 0 .707-.5l1.267-3.575a.75.75 0 0 1 .456-.456l3.575-1.267a.737.737 0 0 0 .5-.707.737.737 0 0 0-.5-.707L9.43 7.026a.75.75 0 0 1-.456-.456L7.707 2.995Z"
      />
    </svg>
  );
}

function StripeLanguageChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.926 7.243a.8.8 0 0 1 1.131-.017L6 10.085l2.943-2.859a.8.8 0 0 1 1.114 1.148l-3.5 3.4a.798.798 0 0 1-1.114 0l-3.5-3.4a.8.8 0 0 1-.017-1.131ZM5.443.226a.798.798 0 0 1 1.114 0l3.5 3.4a.8.8 0 0 1-1.114 1.148L6 1.915 3.057 4.774a.8.8 0 1 1-1.114-1.148l3.5-3.4Z"
      />
    </svg>
  );
}

function StripeSidebarChevronIcon({ expanded = false }: { expanded?: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width="12"
      height="12"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d={
          expanded
            ? "M.381 3.381a.875.875 0 0 1 1.238 0L6 7.763l4.381-4.382A.875.875 0 1 1 11.62 4.62l-5 5a.875.875 0 0 1-1.238 0l-5-5a.875.875 0 0 1 0-1.238Z"
            : "M3.381.381a.875.875 0 0 1 1.238 0l5 5a.875.875 0 0 1 0 1.238l-5 5A.875.875 0 0 1 3.38 10.38L7.763 6 3.38 1.619a.875.875 0 0 1 0-1.238Z"
        }
      />
    </svg>
  );
}

function StripeMarkdownIcon() {
  return (
    <svg aria-hidden="true" className="markdown-action-icon" viewBox="0 0 208 128">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10a5 5 0 0 0-5 5v98a5 5 0 0 0 5 5h178a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5ZM0 15C0 6.716 6.716 0 15 0h178c8.284 0 15 6.716 15 15v98c0 8.284-6.716 15-15 15H15c-8.284 0-15-6.716-15-15V15Z"
      />
      <path fill="currentColor" d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39H30Zm125 0-30-33h20V30h20v35h20l-30 33Z" />
    </svg>
  );
}

function CopyButton({ value, compact = false }: { value: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await writeToClipboard(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
      className={`copy-button ${compact ? "compact" : ""} ${copied ? "copied" : ""}`}
      type="button"
      onClick={copy}
    >
      {copied ? <FiCheck aria-hidden="true" /> : <StripeCopyIcon />}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

function CopyForLlmButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await writeToClipboard(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className={copied ? "copied" : ""} type="button" onClick={copy} aria-label="Copy section content for LLM">
      <StripeCopyIcon />
      <span>{copied ? "Copied" : "Copy for LLM"}</span>
    </button>
  );
}

function SectionActions({
  copyValue,
  markdownUrl,
  onAsk,
}: {
  copyValue: string;
  markdownUrl?: string;
  onAsk: () => void;
}) {
  return (
    <div className="section-actions">
      <button type="button" onClick={onAsk}><StripeSparklesIcon /> Ask about this section</button>
      <span />
      <CopyForLlmButton value={copyValue} />
      <span />
      <button
        type="button"
        onClick={() => {
          if (markdownUrl) {
            window.open(`${markdownUrl}.md`, "_blank", "noopener,noreferrer");
            return;
          }
          const markdown = URL.createObjectURL(new Blob([copyValue], { type: "text/markdown" }));
          window.open(markdown, "_blank", "noopener,noreferrer");
          window.setTimeout(() => URL.revokeObjectURL(markdown), 1000);
        }}
      >
        <StripeMarkdownIcon />
        View as Markdown
      </button>
    </div>
  );
}

function LanguageSelector({
  initialLanguage = "cURL",
  value,
  onChange,
}: {
  initialLanguage?: CodeLanguage;
  value?: CodeLanguage;
  onChange?: (language: CodeLanguage) => void;
}) {
  const [open, setOpen] = useState(false);
  const [internalLanguage, setInternalLanguage] = useState(initialLanguage);
  const menuRef = useRef<HTMLDivElement>(null);
  const language = value ?? internalLanguage;

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && menuRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="language-menu" ref={menuRef}>
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Server-side language: ${language}`}
        className="language-select"
        type="button"
        onClick={() => setOpen((value) => !value)}
      >
        {language} <StripeLanguageChevronIcon />
      </button>
      {open && (
        <div className="language-options" role="listbox" aria-label="Code language">
          {languageOptions.map((option) => (
            <button
              aria-selected={language === option}
              className={language === option ? "selected" : ""}
              key={option}
              role="option"
              type="button"
              onClick={() => {
                setInternalLanguage(option);
                onChange?.(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FlavorSelector({
  value,
  onChange,
}: {
  value: CodeFlavor;
  onChange: (flavor: CodeFlavor) => void;
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const options: CodeFlavor[] = ["Stripe Client", "Global Config"];

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && menuRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="language-menu flavor-menu" ref={menuRef}>
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`SDK configuration: ${value}`}
        className="language-select"
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        {value} <StripeLanguageChevronIcon />
      </button>
      {open && (
        <div className="language-options flavor-options" role="listbox" aria-label="SDK configuration">
          {options.map((option) => (
            <button
              aria-selected={value === option}
              className={value === option ? "selected" : ""}
              key={option}
              role="option"
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function highlightedLine(line: string) {
  if (line.trimStart().startsWith("#")) {
    return <span className="code-comment">{line}</span>;
  }

  const parts = line.split(
    /("[^"]*"|'[^']*'|`[^`]*`|\b(?:from|import|require|new|var|const|let|await|async|return|public|private|class|try|catch|except|begin|rescue|end)\b|(?<![=!<>])=(?![=>])|\b(?:true|false|null)\b|-?\b\d+(?:\.\d+)?\b)/g,
  );
  return parts.map((part, index) => {
      if (
        (part.startsWith('"') && part.endsWith('"')) ||
        (part.startsWith("'") && part.endsWith("'")) ||
        (part.startsWith("`") && part.endsWith("`"))
      ) {
        const isKey = parts[index + 1]?.trimStart().startsWith(":");
        const quote = part[0];
        return (
          <span key={`${index}-${part}`}>
            <span className="code-punctuation">{quote}</span>
            <span className={isKey ? "code-key" : "code-string"}>{part.slice(1, -1)}</span>
            <span className="code-punctuation">{quote}</span>
          </span>
        );
      }
      if (/^(from|import|require|new|var|const|let|await|async|return|public|private|class|try|catch|except|begin|rescue|end|=)$/.test(part)) {
        return <span className="code-keyword" key={`${index}-${part}`}>{part}</span>;
      }
      if (/^(true|false|null)$/.test(part)) {
        return <span className="code-literal" key={`${index}-${part}`}>{part}</span>;
      }
      if (/^-?\d+(?:\.\d+)?$/.test(part)) {
        return <span className="code-number" key={`${index}-${part}`}>{part}</span>;
      }
      return part;
    });
}

function CodeBlock({
  value,
  language = "bash",
  showLineNumbers = true,
}: {
  value: string;
  language?: string;
  showLineNumbers?: boolean;
}) {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (!preRef.current) return;
    preRef.current.scrollLeft = 0;
    preRef.current.scrollTop = 0;
  }, [language, value]);

  return (
    <pre
      className={showLineNumbers ? "" : "without-line-numbers"}
      data-language={language}
      ref={preRef}
    >
      <code>
        {value.split("\n").map((line, index) => {
          return (
            <span className="code-line" key={`${index}-${line}`}>
              {showLineNumbers && <span className="line-number">{index + 1}</span>}
              <span>{highlightedLine(line)}</span>
            </span>
          );
        })}
      </code>
    </pre>
  );
}

function words(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);
}

function camel(value: string) {
  const parts = words(value);
  return parts
    .map((part, index) =>
      index === 0
        ? part.toLowerCase()
        : `${part[0]?.toUpperCase()}${part.slice(1).toLowerCase()}`,
    )
    .join("");
}

function pascal(value: string) {
  return words(value)
    .map((part) => `${part[0]?.toUpperCase()}${part.slice(1).toLowerCase()}`)
    .join("");
}

function singular(value: string) {
  if (value.endsWith("ies")) return `${value.slice(0, -3)}y`;
  if (value.endsWith("sses")) return value.slice(0, -2);
  if (value.endsWith("s") && !value.endsWith("ss")) return value.slice(0, -1);
  return value;
}

function operationAction(name: string) {
  const normalized = name.toLowerCase();
  const actions = [
    "create",
    "update",
    "retrieve",
    "list",
    "delete",
    "close",
    "cancel",
    "capture",
    "confirm",
    "search",
    "verify",
    "reverse",
    "attach",
    "detach",
    "validate",
    "disable",
    "enable",
    "increment",
    "reconcile",
    "revoke",
    "ping",
    "fund",
  ];
  return actions.find((action) => normalized.includes(action)) ?? operationMethod(name).toLowerCase();
}

function operationSdkParts(operation: ResourceOperationContent) {
  const segments = operation.path.split("/").filter(Boolean);
  const pathSegments = segments.filter((segment) => !segment.startsWith(":") && !segment.startsWith("{"));
  const resourceSegment = pathSegments.at(-1) ?? "resources";
  const namespace = pathSegments.map(camel);
  const action = operationAction(operation.name);
  const hasId = segments.some((segment) => segment.startsWith(":") || segment.startsWith("{"));
  const resource = camel(resourceSegment);
  const result = camel(singular(resourceSegment));
  const className = pascal(singular(resourceSegment));
  const idValue = `${result}_id`;
  return { action, className, hasId, idValue, namespace, resource, result };
}

function requestExampleForLanguage(
  request: string,
  language: CodeLanguage,
  operation: ResourceOperationContent,
  flavor: CodeFlavor = "Stripe Client",
) {
  if (language === "cURL") return request;
  const maskedSecret = "sk_test_••••••••••••••";

  const { action, className, hasId, idValue, namespace, resource, result } =
    operationSdkParts(operation);
  const needsParams =
    operation.method !== "GET" || action === "list" || action === "search";
  const sdkAction = action === "delete" ? "del" : action;
  const namespacePath = namespace.join(".");
  const phpPath = namespace
    .filter((segment) => segment !== "v1")
    .map((segment) => `->${segment}`)
    .join("");
  const javaPath = namespace.map((segment) => `${segment}()`).join(".");
  const goPath = namespace.map((segment) => pascal(segment)).join("");
  const dotnetPath = namespace.map((segment) => pascal(segment)).join(".");
  const quotedId = `"${idValue}"`;

  if (language === "Stripe CLI") {
    const cliResource = resource.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    return `stripe ${cliResource} ${action}${hasId ? ` ${idValue}` : ""}`;
  }

  const isBalanceRetrieve =
    operation.path === "/v1/balance" && operation.method === "GET";
  const isCashBalanceUpdate =
    operation.path === "/v1/customers/:id/cash_balance" &&
    operation.method !== "GET";

  if (isBalanceRetrieve && language === "Python") {
    if (flavor === "Global Config") {
      return `stripe.api_key = "${maskedSecret}"

balance = stripe.Balance.retrieve()`;
    }
    return `client = StripeClient("${maskedSecret}")

balance = client.v1.balance.retrieve()`;
  }

  if (isBalanceRetrieve && language === ".NET") {
    if (flavor === "Global Config") {
      return `StripeConfiguration.ApiKey = "${maskedSecret}";

var service = new BalanceService();
Balance balance = service.Get();`;
    }
    return `var client = new StripeClient("${maskedSecret}");

Balance balance = client.V1.Balance.Retrieve();`;
  }

  if (isCashBalanceUpdate && language === ".NET") {
    if (flavor === "Global Config") {
      return `StripeConfiguration.ApiKey = "${maskedSecret}";
var options = new CustomerCashBalanceUpdateOptions
{
    Settings = new CustomerCashBalanceSettingsOptions
    {
        ReconciliationMode = "manual",
    },
};
var service = new CustomerCashBalanceService();
CashBalance cashBalance = service.Update("{{CUSTOMER_ID}}", options);`;
    }
    return `var options = new CustomerCashBalanceUpdateOptions
{
    Settings = new CustomerCashBalanceSettingsOptions
    {
        ReconciliationMode = "manual",
    },
};
var client = new StripeClient("${maskedSecret}");
var service = client.V1.Customers.CashBalance;
CashBalance cashBalance = service.Update("{{CUSTOMER_ID}}", options);`;
  }

  if (language === "Ruby") {
    const args = [hasId ? quotedId : "", needsParams ? "{}" : ""].filter(Boolean).join(", ");
    if (flavor === "Global Config") {
      return `Stripe.api_key = ENV["STRIPE_SECRET_KEY"]
${result} = Stripe::${className}.${sdkAction}(${args})`;
    }
    return `client = Stripe::StripeClient.new(ENV["STRIPE_SECRET_KEY"])
${result} = client.${namespacePath}.${sdkAction}(${args})`;
  }

  if (language === "Python") {
    const args = [hasId ? quotedId : "", needsParams ? "{}" : ""].filter(Boolean).join(", ");
    if (flavor === "Global Config") {
      return `stripe.api_key = os.environ["STRIPE_SECRET_KEY"]
${result} = stripe.${className}.${sdkAction}(${args})`;
    }
    return `client = StripeClient(os.environ["STRIPE_SECRET_KEY"])
${result} = client.${namespacePath}.${sdkAction}(${args})`;
  }

  if (language === "PHP") {
    const args = [hasId ? `'${idValue}'` : "", needsParams ? "[]" : ""].filter(Boolean).join(", ");
    if (flavor === "Global Config") {
      return `\\Stripe\\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));
$${result} = \\Stripe\\${className}::${sdkAction}(${args});`;
    }
    return `$stripe = new \\Stripe\\StripeClient(getenv('STRIPE_SECRET_KEY'));
$${result} = $stripe${phpPath}->${sdkAction}(${args});`;
  }

  if (language === "Java") {
    const paramsClass = `${className}${pascal(action)}Params`;
    const idArgument = hasId ? `${quotedId}, ` : "";
    if (flavor === "Global Config") {
      return `Stripe.apiKey = System.getenv("STRIPE_SECRET_KEY");
${paramsClass} params = ${paramsClass}.builder().build();
${className} ${result} = ${className}.${sdkAction}(${idArgument}params);`;
    }
    return `StripeClient client = new StripeClient(System.getenv("STRIPE_SECRET_KEY"));
${paramsClass} params = ${paramsClass}.builder().build();
${className} ${result} = client.${javaPath}.${sdkAction}(${idArgument}params);`;
  }

  if (language === "Node.js") {
    const args = [hasId ? quotedId : "", needsParams ? "{}" : ""].filter(Boolean).join(", ");
    const nodePath = namespace.filter((segment) => segment !== "v1").join(".");
    if (flavor === "Global Config") {
      return `const stripe = require('stripe');
stripe.setApiKey(process.env.STRIPE_SECRET_KEY);
const ${result} = await stripe.${nodePath}.${sdkAction}(${args});`;
    }
    return `const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const ${result} = await stripe.${nodePath}.${sdkAction}(${args});`;
  }

  if (language === "Go") {
    const paramsClass = `${className}${pascal(action)}Params`;
    const idArgument = hasId ? `${quotedId}, ` : "";
    if (flavor === "Global Config") {
      return `stripe.Key = os.Getenv("STRIPE_SECRET_KEY")
params := &stripe.${paramsClass}{}
${result}, err := ${resource}.${pascal(action)}(${idArgument}params)`;
    }
    return `sc := stripe.NewClient(os.Getenv("STRIPE_SECRET_KEY"))
params := &stripe.${paramsClass}{}
${result}, err := sc.${goPath}.${pascal(action)}(context.TODO(), ${idArgument}params)`;
  }

  const optionsClass = `${className}${pascal(action)}Options`;
  const idArgument = hasId ? `${quotedId}, ` : "";
  if (flavor === "Global Config") {
    return `StripeConfiguration.ApiKey =
  Environment.GetEnvironmentVariable("STRIPE_SECRET_KEY");
var options = new ${optionsClass}();
var service = new ${className}Service();
${className} ${result} = service.${pascal(action)}(${idArgument}options);`;
  }
  return `var options = new ${optionsClass}();
var client = new StripeClient(
  Environment.GetEnvironmentVariable("STRIPE_SECRET_KEY")
);
var service = client.${dotnetPath};
${className} ${result} = service.${pascal(action)}(${idArgument}options);`;
}

const stripeSampleTestKey = ["sk", "test", "BQokikJ...2HlWgH4olfQ2"].join("_");

function officialExampleCode(value: string) {
  return value
    .replaceAll("__STRIPE_SAMPLE_TEST_KEY__", stripeSampleTestKey)
    .replaceAll("<<YOUR_SECRET_KEY>>", stripeSampleTestKey)
    .replaceAll(`${stripeSampleTestKey}\n`, stripeSampleTestKey);
}

function OfficialSectionExamples({
  section,
  language,
  onLanguageChange,
  onAsk,
}: {
  section: Section;
  language: CodeLanguage;
  onLanguageChange: (language: CodeLanguage) => void;
  onAsk: () => void;
}) {
  const examples = officialGeneralExamples[section.id];
  const selectedExamples = examples?.byLanguage[language] ?? [];
  const requests = selectedExamples.filter(({ code }) => !code.trimStart().startsWith("{"));
  const inlineResponses = selectedExamples.filter(({ code }) => code.trimStart().startsWith("{"));
  const responses = [...(examples?.responses ?? []), ...inlineResponses];

  return (
    <>
      {requests.map((example, index) => {
        const code = officialExampleCode(example.code);
        return (
        <div
          className={`code-card ${section.id === "authentication" ? "authentication-code-card" : ""}`}
          key={`${example.title}-${index}`}
        >
          <div className="code-card-header">
            <span>{example.title || section.codeTitle || ""}</span>
            <div className="code-card-controls">
              <LanguageSelector value={language} onChange={onLanguageChange} />
              <CopyButton value={code} compact />
              <button
                aria-label="Ask about this code"
                className="code-control-button"
                type="button"
                onClick={onAsk}
              >
                <StripeSparklesIcon />
              </button>
            </div>
          </div>
          <CodeBlock
            value={code}
            language={language === "cURL" || language === "Stripe CLI" ? "bash" : language.toLowerCase()}
          />
        </div>
        );
      })}

      {responses.map((example, index) => (
        <div className="code-card response-card" key={`response-${example.title}-${index}`}>
          <div className="code-card-header">
            <span>{example.title || section.responseTitle || "RESPONSE"}</span>
          </div>
          <CodeBlock
            value={officialExampleCode(example.code)}
            language="json"
          />
        </div>
      ))}
    </>
  );
}

function OperationExampleStack({
  resourceId,
  operation,
  request,
  response,
  language,
  onLanguageChange,
  onAsk,
}: {
  resourceId: string;
  operation: ResourceOperationContent;
  request: string;
  response: string;
  language: CodeLanguage;
  onLanguageChange: (language: CodeLanguage) => void;
  onAsk: () => void;
}) {
  const [flavor, setFlavor] = useState<CodeFlavor>("Stripe Client");
  const [ran, setRan] = useState(false);
  const syncedRequest =
    resourceRequestExamples[resourceId]?.[operation.name]?.[language];
  const syncedGlobalRequest =
    resourceGlobalRequestExamples[resourceId]?.[operation.name]?.[language];
  const displayedRequest = officialExampleCode(
    flavor === "Global Config" && syncedGlobalRequest
      ? syncedGlobalRequest
      : syncedRequest || requestExampleForLanguage(request, language, operation, flavor),
  );
  const isSdkLanguage = language !== "cURL" && language !== "Stripe CLI";
  const supportsGlobalConfig = isSdkLanguage && Boolean(syncedGlobalRequest);

  function runExample() {
    setRan(true);
    window.setTimeout(() => setRan(false), 1400);
  }

  return (
    <div className="example-stack">
      <div className="code-card">
        <div className="code-card-header">
          <span aria-hidden="true" />
          <div className="code-card-controls">
            <LanguageSelector value={language} onChange={onLanguageChange} />
            {supportsGlobalConfig && <FlavorSelector value={flavor} onChange={setFlavor} />}
            <button
              aria-label="Open this request in Stripe documentation"
              className="code-control-button"
              type="button"
              onClick={() => window.open(operation.source, "_blank", "noopener,noreferrer")}
            >
              <FiArrowUpRight aria-hidden="true" />
            </button>
            <CopyButton value={displayedRequest} compact />
            <button
              aria-label="Ask about this code"
              className="code-control-button"
              type="button"
              onClick={onAsk}
            >
              <StripeSparklesIcon />
            </button>
            <button
              aria-label={ran ? "Request example checked" : "Run request example"}
              className={`code-control-button ${ran ? "ran" : ""}`}
              type="button"
              onClick={runExample}
            >
              {ran ? <FiCheck aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
            </button>
          </div>
        </div>
        <CodeBlock
          value={displayedRequest}
          language={language === "cURL" || language === "Stripe CLI" ? "bash" : language.toLowerCase()}
        />
      </div>
      <div className="code-card response-card resource-object-card">
        <div className="code-card-header">
          <span>RESPONSE</span>
        </div>
        <CodeBlock value={response} language="json" showLineNumbers={false} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a className="brand" href="#introduction" aria-label="Stripe API home">
      <svg className="stripe-wordmark-svg" height="20" width="48" viewBox="0 0 360 150" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M360 77.4c0 2.4-.2 7.6-.2 8.9h-48.9c1.1 11.8 9.7 15.2 19.4 15.2 9.9 0 17.7-2.1 24.5-5.5v20c-6.8 3.8-15.8 6.5-27.7 6.5-24.4 0-41.4-15.2-41.4-45.3 0-25.4 14.4-45.6 38.2-45.6 23.7 0 36.1 20.2 36.1 45.8zm-49.4-9.5h25.8c0-11.3-6.5-16-12.6-16-6.3 0-13.2 4.7-13.2 16zm-63.5-36.3c17.5 0 34 15.8 34.1 44.8 0 31.7-16.3 46.1-34.2 46.1-8.8 0-14.1-3.7-17.7-6.3l-.1 28.3-25 5.3V33.2h22l1.3 6.2c3.5-3.2 9.8-7.8 19.6-7.8zm-6 68.9c9.2 0 15.4-10 15.4-23.4 0-13.1-6.3-23.3-15.4-23.3-5.7 0-9.3 2-11.9 4.9l.1 37.1c2.4 2.6 5.9 4.7 11.8 4.7zm-71.3-74.8V5.3L194.9 0v20.3l-25.1 5.4zm0 7.6h25.1v87.5h-25.1V33.3zm-26.9 7.4c5.9-10.8 17.6-8.6 20.8-7.4v23c-3.1-1.1-13.1-2.5-19 5.2v59.3h-25V33.3h21.6l1.6 7.4zm-50-29.1l-.1 21.7h19v21.3h-19v35.5c0 14.8 15.8 10.2 19 8.9v20.3c-3.3 1.8-9.3 3.3-17.5 3.3-14.8 0-25.9-10.9-25.9-25.7l.1-80.1 24.4-5.2zM25.3 58.7c0 11.2 38.1 5.9 38.2 35.7 0 17.9-14.3 28.2-35.1 28.2-8.6 0-18-1.7-27.3-5.7V93.1c8.4 4.6 19 8 27.3 8 5.6 0 9.6-1.5 9.6-6.1 0-11.9-38-7.5-38-35.1 0-17.7 13.5-28.3 33.8-28.3 8.3 0 16.5 1.3 24.8 4.6v23.5c-7.6-4.1-17.2-6.4-24.8-6.4-5.3 0-8.5 1.5-8.5 5.4z"
        />
      </svg>
      <svg className="stripe-api-svg" height="10" width="23" viewBox="0 0 260 113" aria-hidden="true">
        <path
          d="M42.056.992.248 113h22.776l8.892-24.024h46.176L86.984 113h23.244L68.264.992H42.056zm12.792 25.428L70.76 69.476H39.092L54.848 26.42zm95.582 45.396h22.932c25.74 0 41.808-12.324 41.808-35.412C215.17 13.16 199.102.992 173.362.992h-45.864V113h22.932V71.816zm0-19.5V20.492h21.684c13.416 0 20.28 5.772 20.28 15.912 0 9.984-6.864 15.912-20.28 15.912H150.43zM259.423.992h-22.932V113h22.932V.992z"
          fill="#69B6E3"
        />
      </svg>
    </a>
  );
}

const errorStatuses = [
  ["200", "OK", "Everything worked as expected."],
  ["400", "Bad Request", "The request was unacceptable, often due to missing a required parameter."],
  ["401", "Unauthorized", "No valid API key provided."],
  ["402", "Request Failed", "The parameters were valid but the request failed."],
  ["403", "Forbidden", "The API key doesn't have permissions to perform the request."],
  ["404", "Not Found", "The requested resource doesn't exist."],
  ["409", "Conflict", "The request conflicts with another request (perhaps due to using the same idempotent key)."],
  ["424", "External Dependency Failed", "The request couldn't be completed due to a failure in a dependency external to Stripe."],
  ["429", "Too Many Requests", "Too many requests hit the API too quickly. We recommend an exponential backoff of your requests."],
  ["500, 502, 503, 504", "Server Errors", "Something went wrong on Stripe's end. (These are rare.)"],
];

const errorTypes = [
  ["api_error", "API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers), and are extremely uncommon."],
  ["card_error", "Card errors are the most common type of error you should expect to handle. They result when the user enters a card that can't be charged for some reason."],
  ["idempotency_error", "Idempotency errors occur when an Idempotency-Key is re-used on a request that does not match the first request's API endpoint and parameters."],
  ["invalid_request_error", "Invalid request errors arise when your request has invalid parameters."],
];

const errorAttributes: Array<[string, string, ReactNode]> = [
  ["code", "nullable string", <>For some errors that could be handled programmatically, a short string indicating the <a href="#handling-errors">error code</a> reported.</>],
  ["decline_code", "nullable string", <>For card errors resulting from a card issuer decline, a short string indicating the <a href="#handling-errors">card issuer&apos;s reason for the decline</a> if they provide one.</>],
  ["message", "nullable string", <>A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.</>],
  ["param", "nullable string", <>If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.</>],
  ["payment_intent", "nullable object", <>The PaymentIntent object for errors returned by a request involving a PaymentIntent.</>],
  ["type", "enum", <>The type of error returned. One of <code>api_error</code>, <code>card_error</code>, <code>idempotency_error</code>, or <code>invalid_request_error</code>.</>],
];

const errorTypeValues = ["api_error", "card_error", "idempotency_error", "invalid_request_error"];

const moreErrorAttributes: Array<[string, string, ReactNode]> = [
  ["advice_code", "nullable string", <>For card errors, a short string indicating how to proceed with an error if one is provided.</>],
  ["charge", "nullable string", <>For card errors, the ID of the failed charge.</>],
  ["doc_url", "nullable string", <>A URL to more information about the error code reported.</>],
  ["network_advice_code", "nullable string", <>For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchants by the card network on how to proceed with an error.</>],
  ["network_decline_code", "nullable string", <>For payments declined by the network, an alphanumeric code which indicates the reason the payment failed.</>],
  ["payment_method", "nullable object", <>The PaymentMethod object associated with the error.</>],
  ["payment_method_type", "nullable string", <>If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.</>],
  ["request_log_url", "nullable string", <>A URL to the request log entry in your dashboard.</>],
  ["setup_intent", "nullable object", <>The SetupIntent object associated with the error.</>],
  ["source", "nullable object", <>The source object associated with the error.</>],
];

function ErrorsDocumentation() {
  const [allExpanded, setAllExpanded] = useState(false);

  return (
    <>
      <div className="markdoc-copy errors-intro">
        <p>
          Stripe uses conventional HTTP response codes to indicate the success or failure of an API
          request. In general: Codes in the <code>2xx</code> range indicate success. Codes in the{" "}
          <code>4xx</code> range indicate an error that failed given the information provided (e.g.,
          a required parameter was omitted, a charge failed, etc.). Codes in the <code>5xx</code>{" "}
          range indicate an error with Stripe&apos;s servers (these are rare).
        </p>
        <p>
          Some <code>4xx</code> errors that could be handled programmatically (e.g., a card is{" "}
          <a href="#handling-errors">declined</a>) include an <a href="#handling-errors">error code</a>{" "}
          that briefly explains the error reported.
        </p>
      </div>
      <Helpful />
      <div className="error-attributes">
        <h2>Attributes</h2>
        {errorAttributes.map(([name, type, description]) => (
          <div className="error-attribute" key={name}>
            <div><code>{name}</code><span>{type}</span></div>
            <p>{description}</p>
            {name === "type" && (
              <div className="possible-values">
                <strong>Possible enum values</strong>
                {errorTypeValues.map((value) => <code key={value}>{value}</code>)}
              </div>
            )}
          </div>
        ))}
        <div className="more-attributes-heading">
          <h2>More</h2>
          <button type="button" onClick={() => setAllExpanded((value) => !value)}>
            {allExpanded ? "Collapse all" : "Expand all"}
          </button>
        </div>
        {moreErrorAttributes.map(([name, type, description]) => (
          <details className="more-error-attribute" key={name} open={allExpanded || undefined}>
            <summary>
              <FiChevronRight aria-hidden="true" />
              <code>{name}</code>
              <span>{type}</span>
            </summary>
            <p>{description}</p>
          </details>
        ))}
      </div>
    </>
  );
}

function ErrorsExamples() {
  return (
    <div className="error-card-stack">
      <div className="error-reference-card">
        <strong>HTTP STATUS CODE SUMMARY</strong>
        <div className="status-list">
          {errorStatuses.map(([status, meaning, description]) => (
            <div className="status-row" key={status}>
              <b>{status}</b><span>{meaning}</span><p>{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="error-reference-card">
        <strong>ERROR TYPES</strong>
        <div className="error-type-list">
          {errorTypes.map(([type, description]) => (
            <div className="error-type-row" key={type}>
              <code>{type}</code><p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function operationSlug(resourceId: string, operation: string) {
  return `resource-${resourceId}-${operation.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function operationMethod(operation: string) {
  const name = operation.toLowerCase();
  if (name.startsWith("create") || name.startsWith("attach") || name.startsWith("confirm") || name.startsWith("capture") || name.startsWith("verify") || name.startsWith("fund") || name.startsWith("ping") || name.startsWith("reconcile") || name.startsWith("increment")) return "POST";
  if (name.startsWith("update")) return "POST";
  if (name.startsWith("close") || name.startsWith("cancel") || name.startsWith("disable") || name.startsWith("revoke")) return "POST";
  if (name.startsWith("delete") || name.startsWith("detach")) return "DELETE";
  return "GET";
}

function resourceObjectName(resource: ResourceDefinition) {
  return resource.name.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "").toLowerCase();
}

function fallbackObjectFields(resource: ResourceDefinition): ResourceField[] {
  const objectName = resourceObjectName(resource);
  return [
    { name: "id", type: "string", description: `Unique identifier for the ${resource.name}.` },
    {
      name: "object",
      type: `string, value is "${objectName}"`,
      description: "String representing the object’s type.",
    },
    { name: "created", type: "timestamp", description: "Time at which the object was created." },
    {
      name: "livemode",
      type: "boolean",
      description: "Whether the object exists in live mode.",
    },
    {
      name: "metadata",
      type: "map, nullable",
      description: "Set of key-value pairs attached to the object.",
    },
  ];
}

function fallbackObjectResponse(resource: ResourceDefinition) {
  const objectName = resourceObjectName(resource);
  return `{
  "id": "${objectName.slice(0, 3)}_123456789",
  "object": "${objectName}",
  "created": 1753372800,
  "livemode": false,
  "metadata": {}
}`;
}

function ResourceSectionHeader({
  title,
  version,
  copyValue,
  markdownUrl,
  onAsk,
}: {
  title: string;
  version?: "v2";
  copyValue: string;
  markdownUrl?: string;
  onAsk: () => void;
}) {
  return (
    <div className="resource-section-header">
      <div className="resource-title-row">
        <h1>{title}</h1>
        {version === "v2" && <span className="resource-version-text">v2</span>}
      </div>
      <SectionActions copyValue={copyValue} markdownUrl={markdownUrl} onAsk={onAsk} />
    </div>
  );
}

function Helpful() {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  return (
    <div className="helpful resource-helpful">
      <strong>Was this section helpful?</strong>
      <button className={vote === "yes" ? "selected" : ""} type="button" onClick={() => setVote("yes")}>Yes</button>
      <button className={vote === "no" ? "selected" : ""} type="button" onClick={() => setVote("no")}>No</button>
      {vote && <span className="helpful-thanks">Thanks!</span>}
    </div>
  );
}

function ResourceFieldMetadata({ type }: { type: string }) {
  const parts = type.split(",").map((part) => part.trim()).filter(Boolean);
  const requirement = parts.find((part) =>
    /^(?:required|recommended|usually required)\b/i.test(part),
  );
  const displayType = parts
    .filter(
      (part) =>
        part.toLowerCase() !== "optional" &&
        !/^(?:required|recommended|usually required)\b/i.test(part),
    )
    .join(", ");
  const requirementLabel =
    requirement?.toLowerCase() === "required" ? "Required" : requirement;

  return (
    <>
      <span className="resource-field-type">{displayType}</span>
      {requirementLabel && (
        <span className="resource-field-required">{requirementLabel}</span>
      )}
    </>
  );
}

function ResourceChildFields({ fields }: { fields: ResourceField[] }) {
  return (
    <div className="resource-child-field-list">
      {fields.map((field, fieldIndex) => (
        <div className="resource-child-field" key={`${field.name}-${fieldIndex}`}>
          <div>
            <code>{field.name}</code>
            <ResourceFieldMetadata type={field.type} />
          </div>
          {field.description && <p><InlineMarkdown value={field.description} /></p>}
          {field.options && field.options.length > 0 && (
            <EnumValues fieldName={field.name} options={field.options} />
          )}
          {field.children && field.children.length > 0 && (
            <details className="resource-child-attributes nested">
              <summary>
                <b aria-hidden="true">+</b>
                <span>Show child attributes</span>
              </summary>
              <ResourceChildFields fields={field.children} />
            </details>
          )}
        </div>
      ))}
    </div>
  );
}

function ResourceFields({
  fields,
  compact = false,
}: {
  fields: ResourceField[];
  compact?: boolean;
}) {
  return (
    <div className={`resource-attributes ${compact ? "compact" : ""}`}>
      {fields.map((field, fieldIndex) => (
        <div
          className={`resource-attribute ${
            compact && (field.name === "include" || (field.options?.length ?? 0) > 10)
              ? "large-enum-attribute"
              : ""
          }`}
          key={`${field.name}-${fieldIndex}`}
        >
          <div>
            <code>{field.name}</code>
            <ResourceFieldMetadata type={field.type} />
          </div>
          {field.description && <p><InlineMarkdown value={field.description} /></p>}
          {field.options && field.options.length > 0 && (
            <EnumValues fieldName={field.name} options={field.options} />
          )}
          {field.expandable && (
            <details className={`resource-child-attributes ${compact ? "parameter-children" : ""}`}>
              <summary>
                <b aria-hidden="true">+</b>
                <span>{compact ? "Show child parameters" : "Show child attributes"}</span>
              </summary>
              {field.children?.length ? (
                <ResourceChildFields fields={field.children} />
              ) : (
                <p>Nested properties for <code>{field.name}</code> are included in this object.</p>
              )}
            </details>
          )}
        </div>
      ))}
    </div>
  );
}

function EnumValues({
  fieldName,
  options,
}: {
  fieldName: string;
  options: Array<{ value: string; description: string }>;
}) {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? options : options.slice(0, 10);
  return (
    <div className="resource-enum-values">
      <strong>Possible enum values</strong>
      {shown.map((option, optionIndex) => (
        <div
          className={option.description ? "" : "enum-value-compact"}
          key={`${fieldName}-${option.value}-${optionIndex}`}
        >
          <code>{option.value}</code>
          {option.description && <p><InlineMarkdown value={option.description} /></p>}
        </div>
      ))}
      {options.length > 10 && (
        <button className="enum-show-more" type="button" onClick={() => setShowAll((value) => !value)}>
          {showAll ? "Show less" : `Show ${options.length - 10} more`}
        </button>
      )}
    </div>
  );
}

function ResourceMoreFields({
  fields,
  heading = "More attributes",
  childLabel = "Show child attributes",
  compact = false,
}: {
  fields: ResourceField[];
  heading?: string;
  childLabel?: string;
  compact?: boolean;
}) {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const allExpanded = fields.length > 0 && fields.every((field) => expanded.has(field.name));

  function toggle(name: string) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  return (
    <div className={`resource-more-fields ${compact ? "compact" : ""}`}>
      <div className="resource-more-heading">
        <h3>{heading}</h3>
        <button
          type="button"
          onClick={() => setExpanded(allExpanded ? new Set() : new Set(fields.map((field) => field.name)))}
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>
      </div>
      <div className="resource-more-list">
        {fields.map((field) => {
          const open = expanded.has(field.name);
          return (
            <div className={`resource-more-item ${open ? "open" : ""}`} key={field.name}>
              <button
                aria-expanded={open}
                className="resource-more-summary"
                type="button"
                onClick={() => toggle(field.name)}
              >
                <FiChevronRight aria-hidden="true" />
                <code>{field.name}</code>
                <ResourceFieldMetadata type={field.type} />
              </button>
              <div className="resource-more-content" aria-hidden={!open}>
                {field.description && <p><InlineMarkdown value={field.description} /></p>}
                {field.expandable && (
                  <details className="resource-child-attributes">
                    <summary>
                      <b aria-hidden="true">+</b>
                      <span>{childLabel}</span>
                    </summary>
                    {field.children?.length ? (
                      <ResourceChildFields fields={field.children} />
                    ) : (
                      <p>Nested properties for <code>{field.name}</code> are included in this object.</p>
                    )}
                  </details>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ResourcePage({
  resource,
  onAsk,
  language,
  onLanguageChange,
}: {
  resource: ResourceDefinition;
  onAsk: () => void;
  language: CodeLanguage;
  onLanguageChange: (language: CodeLanguage) => void;
}) {
  const [overviewTab, setOverviewTab] = useState<"endpoints" | "events">("endpoints");
  const reference = resourceReferenceContent[resource.id];
  const display = resourceDisplay[resource.id];
  const objectTitle = reference?.object.title || resource.operations[0] || `The ${resource.name} object`;
  const objectResponse = reference?.object.response || fallbackObjectResponse(resource);
  const objectFields = reference?.object.attributes.length
    ? reference.object.attributes
    : fallbackObjectFields(resource);
  const primaryObjectFields = display?.primaryFields.length
    ? display.primaryFields
        .map((name) => objectFields.find((field) => field.name === name))
        .filter((field): field is ResourceField => Boolean(field))
    : objectFields;
  const moreObjectFields = display?.moreFields.length
    ? display.moreFields
        .map((name) => objectFields.find((field) => field.name === name))
        .filter((field): field is ResourceField => Boolean(field))
    : [];
  const objectRowCompression: Record<string, number> = {
    balance: 4,
    "balance-transactions": 0.65,
    charges: 0.5,
    customers: 2.5,
    disputes: 3,
    "events-v1": 3,
    "events-v2": 0.3,
    "file-links": 3,
    mandates: 2.5,
    payouts: 3,
    refunds: 5.3,
    "bank-accounts": 4,
    tokens: 1,
    "payment-method-domains": 1,
  };
  const overview = reference?.overview.length
    ? reference.overview
    : [
        `Use the ${resource.name} API to create, retrieve, update, and manage the corresponding objects for your integration.`,
      ];
  const operations: ResourceOperationContent[] = reference?.operations.length
    ? reference.operations
    : resource.operations.slice(1).map((operation) => ({
        name: operation,
        method: operationMethod(operation),
        path: resource.apiPath,
        source: "",
        summary: [`Use this endpoint to ${operation.toLowerCase()}.`],
        request: "",
        response: objectResponse,
        parameters: [],
        returns: [],
        errors: [],
      }));
  const pageCopy = `${resource.name}\n\n${overview.join("\n\n")}\n\n${operations
    .map((operation) => `${operation.name}\n${operation.method} ${operation.path}`)
    .join("\n\n")}`;
  const objectCopy = `${objectTitle}\n\n${objectFields
    .map((field) => `${field.name} (${field.type})\n${field.description}`)
    .join("\n\n")}\n\n${objectResponse}`;
  const objectId = operationSlug(resource.id, resource.operations[0] ?? objectTitle);

  return (
    <div
      className={`resource-page ${resource.version === "v2" ? "resource-v2" : ""} ${
        moreObjectFields.length ? "has-collapsible-object" : "has-expanded-object"
      }`}
      style={{
        "--resource-row-compression": `${objectRowCompression[resource.id] ?? 0}px`,
      } as CSSProperties}
    >
      <section
        className="resource-section resource-overview"
        id={`resource-${resource.id}`}
        style={display ? { minHeight: `${display.overviewHeight}px` } : undefined}
      >
        <ResourceSectionHeader
          title={resource.name}
          version={resource.version}
          copyValue={pageCopy}
          markdownUrl={reference?.source}
          onAsk={onAsk}
        />
        <div className="resource-section-grid">
          <article className="resource-overview-copy">
            {overview.map((paragraph, paragraphIndex) => (
              <p key={`overview-${paragraphIndex}`}><InlineMarkdown value={paragraph} /></p>
            ))}
            {resource.version === "v2" && (
              <a className="resource-learn-link" href="https://docs.stripe.com/api-v2-overview">
                Learn more about calling API v2 endpoints.
                <FiChevronRight aria-hidden="true" />
              </a>
            )}
            <Helpful />
          </article>
          <div className="resource-index-column">
            {(reference?.events.length ?? 0) > 0 && (
              <div className="resource-index-tabs" role="tablist" aria-label={`${resource.name} reference groups`}>
                <button
                  className={overviewTab === "endpoints" ? "active" : ""}
                  role="tab"
                  aria-selected={overviewTab === "endpoints"}
                  type="button"
                  onClick={() => setOverviewTab("endpoints")}
                >
                  Endpoints
                </button>
                <button
                  className={overviewTab === "events" ? "active" : ""}
                  role="tab"
                  aria-selected={overviewTab === "events"}
                  type="button"
                  onClick={() => setOverviewTab("events")}
                >
                  Events
                </button>
              </div>
            )}
            {overviewTab === "endpoints" ? (
              <nav className="endpoint-index" aria-label={`${resource.name} endpoints`}>
                {operations.map((operation) => {
                  const operationId = operationSlug(resource.id, operation.name);
                  return (
                    <a href={`#${operationId}`} key={`${operation.method}-${operation.path}-${operation.name}`}>
                      <strong>{operation.name}</strong>
                      <span>
                        <b className={`endpoint-method endpoint-${operation.method.toLowerCase()}`}>
                          {operation.method}
                        </b>
                        <code>{operation.path}</code>
                      </span>
                      <FiChevronRight aria-hidden="true" />
                    </a>
                  );
                })}
              </nav>
            ) : (
              <div className="event-index" role="tabpanel">
                {reference?.events.map((event) => (
                  <div key={event.name}>
                    <code>{event.name}</code>
                    <p><InlineMarkdown value={event.description} /></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        className="resource-section resource-object-section"
        id={objectId}
        style={display ? { minHeight: `${display.objectHeight}px` } : undefined}
      >
        <ResourceSectionHeader
          title={objectTitle}
          version={resource.version}
          copyValue={objectCopy}
          markdownUrl={reference?.object.source}
          onAsk={onAsk}
        />
        <div className="resource-section-grid">
          <article className="resource-object-copy">
            <h3>Attributes</h3>
            <ResourceFields fields={primaryObjectFields} />
            {moreObjectFields.length > 0 && <ResourceMoreFields fields={moreObjectFields} />}
          </article>
          <aside className="resource-example-column">
            <div className="code-card response-card resource-object-card">
              <div className="code-card-header">
                <span>{objectTitle.toUpperCase()}</span>
              </div>
              <CodeBlock value={objectResponse} language="json" showLineNumbers={false} />
            </div>
          </aside>
        </div>
      </section>

      {operations.map((operation, operationIndex) => {
        const operationId = operationSlug(resource.id, operation.name);
        const operationDisplay = display?.sections[operationIndex + 2];
        const displaySaysNoParameters = Boolean(
          operationDisplay?.summaryParagraphs.some((paragraph) =>
            /^no parameters\.?$/i.test(paragraph.trim()),
          ),
        );
        const hasOperationFieldGroups = Boolean(
          operationDisplay?.primaryFields.length || operationDisplay?.moreFields.length,
        );
        const groupedPrimaryOperationFields = hasOperationFieldGroups
          ? operationDisplay!.primaryFields
              .map((name) => operation.parameters.find((field) => field.name === name))
              .filter((field): field is ResourceField => Boolean(field))
          : operation.parameters;
        const groupedMoreOperationFields = hasOperationFieldGroups
          ? operationDisplay!.moreFields
              .map((name) => operation.parameters.find((field) => field.name === name))
              .filter((field): field is ResourceField => Boolean(field))
          : [];
        const primaryOperationFields = displaySaysNoParameters
          ? []
          : groupedPrimaryOperationFields;
        const moreOperationFields = displaySaysNoParameters
          ? [...groupedPrimaryOperationFields, ...groupedMoreOperationFields]
          : groupedMoreOperationFields;
        const visibleSummary = operationDisplay?.summaryParagraphs.length
          ? operationDisplay.summaryParagraphs.filter(
              (paragraph) => !/^no parameters\.?$/i.test(paragraph.trim()),
            )
          : operation.summary.slice(0, 1);
        const request =
          operation.request ||
          `curl -X ${operation.method} https://api.stripe.com${operation.path} \\
  -u YOUR_STRIPE_SECRET_KEY:`;
        const response = operation.response || objectResponse;
        const copyValue = `${operation.name}\n${operation.method} ${operation.path}\n\n${visibleSummary.join(
          "\n\n",
        )}\n\n${request}\n\n${response}\n\n${operation.returns.join("\n\n")}\n\n${operation.errors
          .map((error) => `${error.status} ${error.code}: ${error.description}`)
          .join("\n")}`;

        return (
          <section
            className="resource-section resource-operation"
            id={operationId}
            key={operation.name}
          >
            <ResourceSectionHeader
              title={operation.name}
              version={resource.version}
              copyValue={copyValue}
              markdownUrl={operation.source}
              onAsk={onAsk}
            />
            <div className="resource-section-grid">
              <article className="resource-operation-copy">
                <div className="operation-kicker">
                  <span
                    className={`method-badge method-${operation.method.toLowerCase()}`}
                  >
                    {operation.method}
                  </span>
                  <code>{operation.path}</code>
                </div>
                {visibleSummary.map((paragraph, paragraphIndex) => (
                  <p key={`summary-${paragraphIndex}`}><InlineMarkdown value={paragraph} /></p>
                ))}
                {resource.version === "v2" && (
                  <a className="resource-learn-link operation-learn-link" href="https://docs.stripe.com/api-v2-overview">
                    Learn more about calling API v2 endpoints.
                    <FiChevronRight aria-hidden="true" />
                  </a>
                )}
                <h3>Parameters</h3>
                {operation.parameters.length > 0 ? (
                    <>
                      {displaySaysNoParameters && (
                        <p className="no-parameters">No parameters.</p>
                      )}
                      {primaryOperationFields.length > 0 && (
                        <ResourceFields fields={primaryOperationFields} compact />
                      )}
                      {moreOperationFields.length > 0 && (
                        <ResourceMoreFields
                          fields={moreOperationFields}
                          heading="More parameters"
                          childLabel="Show child parameters"
                          compact
                        />
                      )}
                    </>
                  ) : (
                    <p className="no-parameters">No parameters.</p>
                )}
                {operation.returns.length > 0 && (
                  <div className="operation-returns">
                    <h3>Returns</h3>
                    {operation.returns.map((paragraph, paragraphIndex) => (
                      <p key={`return-${paragraphIndex}`}><InlineMarkdown value={paragraph} /></p>
                    ))}
                  </div>
                )}
                {operation.errors.length > 0 && (
                  <div className="operation-errors">
                    <div className="operation-error-table">
                      <strong><a href="#errors">Error Codes</a></strong>
                      <div className="operation-error-rows">
                      {operation.errors.map((error, errorIndex) => (
                        <div key={`${error.status}-${error.code}-${errorIndex}`}>
                          <div>
                            <b>{error.status}</b>
                            <code>{error.code}</code>
                          </div>
                          <p>{error.description}</p>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
              <aside className="resource-example-column">
                <OperationExampleStack
                  resourceId={resource.id}
                  operation={operation}
                  request={request}
                  response={response}
                  language={language}
                  onLanguageChange={onLanguageChange}
                  onAsk={onAsk}
                />
              </aside>
            </div>
          </section>
        );
      })}

      {resource.operations
        .slice(1)
        .filter((operation) => !operations.some((item) => item.name === operation))
        .map((operation) => {
          const operationId = operationSlug(resource.id, operation);
          const isEventTypeReference = /event types|types of events/i.test(operation);
          return (
            <section
              className={`resource-section resource-operation resource-reference-only ${
                isEventTypeReference ? "resource-event-types-section" : ""
              }`}
              id={operationId}
              key={operation}
            >
              <ResourceSectionHeader
                title={operation}
                version={resource.version}
                copyValue={
                  isEventTypeReference && reference?.events.length
                    ? `${operation}\n\n${reference.events
                        .map((event) => `${event.name}\n${event.description}`)
                        .join("\n\n")}`
                    : `${operation}\n\nReference information for ${resource.name}.`
                }
                onAsk={onAsk}
              />
              <div className="resource-section-grid">
                <article className="resource-operation-copy">
                  {isEventTypeReference && reference?.events.length ? (
                    <div className="resource-event-type-list">
                      {reference.events.map((event) => (
                        <div key={event.name}>
                          <code>{event.name}</code>
                          <p><InlineMarkdown value={event.description} /></p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Reference information for {operation.toLowerCase()}.</p>
                  )}
                  <Helpful />
                </article>
                <aside />
              </div>
            </section>
          );
        })}
    </div>
  );
}

function resourceFromCurrentHash() {
  if (typeof window === "undefined") return undefined;
  const hash = window.location.hash.slice(1);
  return resourceDefinitions.find(
    (item) => hash === `resource-${item.id}` || hash.startsWith(`resource-${item.id}-`),
  );
}

export function ApiReference({ renderedCopy }: { renderedCopy: Record<string, ReactNode> }) {
  const [activeId, setActiveId] = useState("introduction");
  const [searchOpen, setSearchOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantQuestion, setAssistantQuestion] = useState("");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [versionMenuOpen, setVersionMenuOpen] = useState(false);
  const [apiMenuOpen, setApiMenuOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    core: true,
    payments: true,
  });
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<CodeLanguage>("cURL");
  const selectedResource = resourceDefinitions.find((item) => item.id === selectedResourceId) ?? null;
  const selectedLibrary = libraries.find((library) => library.name === selectedLanguage);

  useEffect(() => {
    const closeTopMenus = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest(".topnav-menu")) return;
      setVersionMenuOpen(false);
      setApiMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeTopMenus);
    return () => document.removeEventListener("pointerdown", closeTopMenus);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const resource = resourceFromCurrentHash();
      if (!resource) return;
      const hash = window.location.hash.slice(1);
      setSelectedResourceId(resource.id);
      setActiveId(hash || `resource-${resource.id}`);
      setOpenCategories({ [resource.category]: true });
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!selectedResourceId) return;
    const scroller = document.querySelector<HTMLElement>(".sidebar-scroll");
    const target =
      document.querySelector<HTMLElement>(`[data-section-id="${activeId}"]`) ??
      document.querySelector<HTMLElement>(`[data-resource-id="${selectedResourceId}"]`);
    if (!scroller || !target) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < scrollerRect.top + 8) {
      scroller.scrollTo({
        top: Math.max(0, scroller.scrollTop + targetRect.top - scrollerRect.top - 8),
        behavior: "smooth",
      });
    } else if (targetRect.bottom > scrollerRect.bottom - 8) {
      scroller.scrollTo({
        top: scroller.scrollTop + targetRect.bottom - scrollerRect.bottom + 8,
        behavior: "smooth",
      });
    }
  }, [activeId, selectedResourceId]);

  function toggleCategory(category: string) {
    setOpenCategories((current) => ({ ...current, [category]: !current[category] }));
  }

  function selectResource(resource: ResourceDefinition, operation?: string) {
    setSearchOpen(false);
    setSelectedResourceId(resource.id);
    setOpenCategories((current) => ({ ...current, [resource.category]: true }));
    setMenuOpen(false);
    setVersionMenuOpen(false);
    setApiMenuOpen(false);
    const hash = operation ? operationSlug(resource.id, operation) : `resource-${resource.id}`;
    setActiveId(hash);
    window.history.replaceState(null, "", `#${hash}`);
    window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ block: "start" }), 40);
  }

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const nodes = selectedResourceId
        ? Array.from(document.querySelectorAll<HTMLElement>(".resource-page .resource-section[id]"))
        : sections
            .map(({ id }) => document.getElementById(id))
            .filter((node): node is HTMLElement => Boolean(node));
      if (!nodes.length) return;

      const marker = 55 + 96;
      let current = nodes[0];
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= marker) current = node;
        else break;
      }
      setActiveId((value) => value === current.id ? value : current.id);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    const timer = window.setTimeout(updateActiveSection, 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [selectedResourceId]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = window.setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" }),
      250,
    );
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey && event.key.toLowerCase() === "k") ||
        (!(event.target instanceof HTMLInputElement) && event.key === "/")
      ) {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setAssistantOpen(false);
        setMenuOpen(false);
        setVersionMenuOpen(false);
        setApiMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const entries: Array<{
      id: string;
      label: string;
      resource?: ResourceDefinition;
    }> = [
      ...sections.map((section) => ({ id: section.id, label: section.label })),
      ...resourceDefinitions.map((resource) => ({
        id: `resource-${resource.id}`,
        label: resource.name,
        resource,
      })),
    ];
    if (!normalized) return entries.slice(0, 14);
    return entries.filter((entry) => entry.label.toLowerCase().includes(normalized));
  }, [query]);

  function goTo(id: string) {
    setActiveId(id);
    setSearchOpen(false);
    setMenuOpen(false);
    setVersionMenuOpen(false);
    setApiMenuOpen(false);
    setSelectedResourceId(null);
    window.history.replaceState(null, "", `#${id}`);
    window.setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" }),
      40,
    );
  }

  return (
    <div className="site-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand-row">
          <Logo />
        </div>

        <div className="sidebar-tools">
          <button className="find-trigger" type="button" onClick={() => setSearchOpen(true)}>
            <StripeSearchIcon />
            <span>Find anything</span>
            <kbd>/</kbd>
          </button>
          <button className="ask-trigger" type="button" onClick={() => setAssistantOpen(true)}>
            <StripeSparklesIcon />
            <span>Ask AI</span>
          </button>
        </div>

        <div className="sidebar-scroll">
          <nav className="section-nav" aria-label="API reference sections">
            {sections.map((section) => {
              if (section.id === "handling-errors" || section.id === "search" || section.id === "auto-pagination") return null;
              if (section.id === "errors") {
                const errorsOpen = activeId === "errors" || activeId === "handling-errors";
                return (
                  <div className="error-nav-group" key={section.id}>
                    <button
                      type="button"
                      className={!selectedResource && activeId === section.id ? "active" : ""}
                      onClick={() => goTo(section.id)}
                    >
                      {section.label}
                    </button>
                    {errorsOpen && (
                      <button
                        type="button"
                        className={`nested-nav-item ${!selectedResource && activeId === "handling-errors" ? "active" : ""}`}
                        onClick={() => goTo("handling-errors")}
                      >
                        Handling errors
                      </button>
                    )}
                  </div>
                );
              }
              if (section.id === "pagination") {
                const paginationOpen = ["pagination", "search", "auto-pagination"].includes(activeId);
                return (
                  <div className="pagination-nav-group" key={section.id}>
                    <button
                      type="button"
                      className={!selectedResource && activeId === section.id ? "active" : ""}
                      onClick={() => goTo(section.id)}
                    >
                      {section.label}
                    </button>
                    {paginationOpen && (
                      <>
                        <button
                          type="button"
                          className={`nested-nav-item ${!selectedResource && activeId === "search" ? "active" : ""}`}
                          onClick={() => goTo("search")}
                        >
                          Search
                        </button>
                        <button
                          type="button"
                          className={`nested-nav-item ${!selectedResource && activeId === "auto-pagination" ? "active" : ""}`}
                          onClick={() => goTo("auto-pagination")}
                        >
                          Auto-pagination
                        </button>
                      </>
                    )}
                  </div>
                );
              }
              return (
                <button
                  type="button"
                  key={section.id}
                  className={!selectedResource && activeId === section.id ? "active" : ""}
                  onClick={() => goTo(section.id)}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>

          <nav className="category-nav" aria-label="Additional API categories">
            {([
              ["core", "Core Resources"],
              ["payments", "Payment Methods"],
            ] as Array<[ResourceCategory, string]>).map(([category, label]) => (
              <div className="category-group" key={category}>
                <button
                  aria-expanded={Boolean(openCategories[category])}
                  type="button"
                  onClick={() => toggleCategory(category)}
                >
                  <span>{label}</span>
                  <StripeSidebarChevronIcon expanded={Boolean(openCategories[category])} />
                </button>
                <div className={`category-items-shell ${openCategories[category] ? "open" : ""}`}>
                  <div className="category-items">
                    {resourcesByCategory(category).map((resource) => (
                      <div className="resource-nav-group" key={resource.id}>
                        <button
                          className={
                            selectedResource?.id === resource.id &&
                            activeId === `resource-${resource.id}`
                              ? "resource-active"
                              : ""
                          }
                          data-resource-id={resource.id}
                          type="button"
                          onClick={() => selectResource(resource)}
                        >
                          <span>{resource.name}</span>
                          {resource.version === "v2" && <small>v2</small>}
                        </button>
                        <div className={`operation-nav-shell ${selectedResource?.id === resource.id ? "open" : ""}`}>
                          <div className="operation-nav-items">
                            {resource.operations.map((operation) => (
                              <button
                                className={
                                  activeId === operationSlug(resource.id, operation)
                                    ? "operation-active"
                                    : ""
                                }
                                data-section-id={operationSlug(resource.id, operation)}
                                key={operation}
                                type="button"
                                onClick={() => selectResource(resource, operation)}
                              >
                                <span>{operation}</span>
                                {resource.version === "v2" && <small>v2</small>}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <header className="topbar">
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className="topnav" aria-label="Primary navigation">
          <div className="topnav-menu">
            <button
              aria-expanded={versionMenuOpen}
              className="version-link"
              type="button"
              onClick={() => {
                setVersionMenuOpen((value) => !value);
                setApiMenuOpen(false);
              }}
            >
              {languageVersionLabels[selectedLanguage]} <FiChevronDown aria-hidden="true" />
            </button>
            {versionMenuOpen && (
              <div className="topnav-popover version-popover">
                <strong>API version</strong>
                <button type="button" onClick={() => goTo("versioning")}>
                  2026-06-24.dahlia <b>Current</b>
                </button>
                <a href="https://dashboard.stripe.com/workbench">Manage in Workbench</a>
                <a href="https://docs.stripe.com/changelog">API changelog</a>
              </div>
            )}
          </div>
          <div className="topnav-menu">
            <button
              aria-expanded={apiMenuOpen}
              className="current"
              type="button"
              onClick={() => {
                setApiMenuOpen((value) => !value);
                setVersionMenuOpen(false);
              }}
            >
              API Reference <FiChevronDown aria-hidden="true" />
            </button>
            {apiMenuOpen && (
              <div className="topnav-popover api-popover">
                <button type="button" onClick={() => goTo("introduction")}>API Reference</button>
                <button
                  type="button"
                  onClick={() => {
                    setOpenCategories((current) => ({ ...current, core: true }));
                    setApiMenuOpen(false);
                  }}
                >
                  Core Resources
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpenCategories((current) => ({ ...current, payments: true }));
                    setApiMenuOpen(false);
                  }}
                >
                  Payment Methods
                </button>
              </div>
            )}
          </div>
          <a href="https://docs.stripe.com/">Docs</a>
          <a href="https://support.stripe.com/">Support</a>
          <a href="https://dashboard.stripe.com/login">Sign in →</a>
        </nav>
      </header>

      <main className="reference-main">
        {selectedResource ? (
          <ResourcePage
            resource={selectedResource}
            onAsk={() => setAssistantOpen(true)}
            language={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        ) : (
          <>
          {sections.map((section, index) => (
          <section
            className={`reference-section ${index === 0 ? "intro-section" : "standard-section"} ${section.id === "errors" ? "errors-section" : ""}`}
            id={section.id}
            key={section.id}
          >
            <article className="documentation">
              <h1>{index === 0 ? "API Reference" : section.label}</h1>
              {section.id === "errors" ? (
                <ErrorsDocumentation />
              ) : (
                <>
                  <div className="markdoc-copy">{renderedCopy[section.copyKey]}</div>
                  {section.id !== "handling-errors" && <Helpful />}
                </>
              )}
            </article>

            <aside className="examples" aria-label={`${section.label} examples`}>
              <SectionActions
                copyValue={[
                  section.label,
                  sectionCopy[section.copyKey],
                  ...(officialGeneralExamples[section.id]?.byLanguage[selectedLanguage] ?? [])
                    .map(({ code }) => officialExampleCode(code)),
                  ...(section.infoBody ?? []),
                  ...(officialGeneralExamples[section.id]?.responses ?? [])
                    .map(({ code }) => officialExampleCode(code)),
                ].filter(Boolean).join("\n\n")}
                onAsk={() => setAssistantOpen(true)}
              />

              {section.id === "errors" ? (
                <ErrorsExamples />
              ) : index === 0 ? (
                <>
                  <div className="intro-prompt">
                    <h2>Just getting started?</h2>
                    <p>Check out our <a href="#authentication">development quickstart</a> guide.</p>
                    <h2>Not a developer?</h2>
                    <p>
                      Use Stripe&apos;s <a href="#metadata">no-code options</a> or apps from{" "}
                      <a href="#connected-accounts">our partners</a> to get started with Stripe and
                      to do more with your Stripe account—no code required.
                    </p>
                  </div>

                  <div className="base-url-card">
                    <div className="base-url-header">
                      <strong>BASE URL</strong>
                      <div><CopyButton value="https://api.stripe.com" compact /><StripeSparklesIcon /></div>
                    </div>
                    <code>https://api.stripe.com</code>
                  </div>

                  <div className="libraries-card">
                    <strong className="libraries-title">CLIENT LIBRARIES</strong>
                    <div className="library-grid">
                      {libraries.map(({ name, icon }) => (
                        <button
                          aria-pressed={selectedLanguage === name}
                          className={selectedLanguage === name ? "selected" : ""}
                          key={name}
                          type="button"
                          onClick={() => setSelectedLanguage(name)}
                        >
                          <span
                            aria-hidden="true"
                            className="library-logo"
                            style={{ backgroundImage: `url("${icon}")` }}
                          />
                          <span>{name}</span>
                        </button>
                      ))}
                    </div>
                    {selectedLibrary ? (
                      <div className="library-install">
                        <div className="library-install-command">
                          <span aria-hidden="true">$</span>
                          <code>{selectedLibrary.install}</code>
                        </div>
                        <div className="library-install-actions">
                          <a
                            href={`https://github.com/stripe/${selectedLibrary.repository}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiGithub aria-hidden="true" />
                            <span>{selectedLibrary.repository}</span>
                          </a>
                          <CopyButton value={selectedLibrary.install} compact />
                        </div>
                      </div>
                    ) : (
                      <p>
                        By default, the Stripe API Docs demonstrate using curl to interact with the API
                        over HTTP. Select one of our official <a href="#authentication">client libraries</a>{" "}
                        to see examples in code.
                      </p>
                    )}
                  </div>
                </>
              ) : section.showExamples === false ? null : (
                <div className="example-stack">
                  <OfficialSectionExamples
                    section={section}
                    language={selectedLanguage}
                    onLanguageChange={setSelectedLanguage}
                    onAsk={() => setAssistantOpen(true)}
                  />

                  {section.infoTitle && section.infoBody && (
                    <div className="info-card">
                      <strong>{section.infoTitle}</strong>
                      <div>
                        {section.infoBody.map((paragraph) => (
                          <p key={paragraph}><InlineMarkdown value={paragraph} /></p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </aside>
          </section>
          ))}

          <section className="reference-resources" aria-label="Stripe developer resources">
            <a href="#request-ids"><FiHelpCircle aria-hidden="true" /><span>Need help? <b>Contact Support.</b></span></a>
            <a href="#connected-accounts"><FiMessageSquare aria-hidden="true" /><span>Chat with Stripe developers on <b>Discord.</b></span></a>
            <a href="#versioning"><FiFileText aria-hidden="true" /><span>Check out our <b>changelog.</b></span></a>
            <a href="#authentication"><FiHelpCircle aria-hidden="true" /><span>Questions? <b>Contact Sales.</b></span></a>
            <a href="#introduction"><StripeSparklesIcon /><span>LLM? <b>Read llms.txt.</b></span></a>
            <p>Powered by <a href="https://markdoc.dev/">Markdoc</a></p>
          </section>
          </>
        )}
      </main>

      {menuOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {assistantOpen && (
        <aside className="assistant-panel" role="dialog" aria-modal="false" aria-label="Stripe assistant">
          <header>
            <h2><StripeSparklesIcon /> New chat</h2>
            <button type="button" aria-label="Close assistant" onClick={() => setAssistantOpen(false)}>
              <FiX aria-hidden="true" />
            </button>
          </header>
          <div className="assistant-disclaimer">
            Responses are generated using AI and may contain mistakes.
          </div>
          <div className="assistant-body">
            <StripeSparklesIcon />
            <h3>Ask questions about Stripe and get help with your integration.</h3>
            <p>Tip: you can highlight any text to ask questions about it with <kbd>⌘ + I</kbd></p>
            <span>API Reference - {selectedResource?.name ?? sections.find((section) => section.id === activeId)?.label ?? "Introduction"}</span>
            {assistantQuestion && (
              <div className="assistant-question">
                <strong>You</strong>
                <p>{assistantQuestion}</p>
              </div>
            )}
          </div>
          <form
            className="assistant-composer"
            onSubmit={(event) => {
              event.preventDefault();
              setAssistantQuestion((event.currentTarget.elements.namedItem("assistant-question") as HTMLInputElement).value);
            }}
          >
            <input name="assistant-question" aria-label="Ask a question" placeholder="Ask a question" />
            <button type="submit" aria-label="Send question">↑</button>
          </form>
        </aside>
      )}

      {searchOpen && (
        <div className="search-overlay" role="presentation" onMouseDown={() => setSearchOpen(false)}>
          <div
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Find anything"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-input-wrap">
              <StripeSearchIcon />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Find anything"
                aria-label="Find anything"
              />
              <kbd>ESC</kbd>
            </div>
            <div className="search-results">
              <p>{query ? "RESULTS" : "API REFERENCE"}</p>
              {results.length > 0 ? results.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => entry.resource ? selectResource(entry.resource) : goTo(entry.id)}
                >
                  <span>{entry.label}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              )) : <div className="no-results">No sections found.</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiChevronDown,
  FiChevronRight,
  FiChevronUp,
  FiClipboard,
  FiFileText,
  FiHelpCircle,
  FiMenu,
  FiMessageSquare,
  FiSearch,
  FiTerminal,
  FiX,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  SiDotnet,
  SiGo,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPython,
  SiRuby,
} from "react-icons/si";

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
      "A sample test API key is included in these examples so you can explore the request format. Never submit personal or production information with a shared sample key.",
      "To test with your own account, replace the sample value with a key from your Dashboard. Keep all secret keys on the server.",
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
    codeTitle: "REQUEST",
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

const libraries = [
  { name: "Ruby", Icon: SiRuby, className: "ruby" },
  { name: "Python", Icon: SiPython, className: "python" },
  { name: "PHP", Icon: SiPhp, className: "php" },
  { name: "Java", Icon: SiOpenjdk, className: "java" },
  { name: "Node.js", Icon: SiNodedotjs, className: "node" },
  { name: "Go", Icon: SiGo, className: "go" },
  { name: ".NET", Icon: SiDotnet, className: "dotnet" },
];

function CopyButton({ value, compact = false }: { value: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button className={`copy-button ${compact ? "compact" : ""}`} type="button" onClick={copy}>
      <FiClipboard aria-hidden="true" />
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

function highlightedLine(line: string, language: string) {
  if (language === "bash" && line.trimStart().startsWith("#")) {
    return <span className="code-comment">{line}</span>;
  }

  const parts = line.split(/("[^"]*"|\b(?:true|false|null)\b|-?\b\d+(?:\.\d+)?\b)/g);
  return parts.map((part, index) => {
      if (part.startsWith('"') && part.endsWith('"')) {
        const isKey = parts[index + 1]?.trimStart().startsWith(":");
        return <span className={isKey ? "code-key" : "code-string"} key={`${index}-${part}`}>{part}</span>;
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
  return (
    <pre className={showLineNumbers ? "" : "without-line-numbers"} data-language={language}>
      <code>
        {value.split("\n").map((line, index) => {
          return (
            <span className="code-line" key={`${index}-${line}`}>
              {showLineNumbers && <span className="line-number">{index + 1}</span>}
              <span>{highlightedLine(line, language)}</span>
            </span>
          );
        })}
      </code>
    </pre>
  );
}

function Logo() {
  return (
    <a className="brand" href="#introduction" aria-label="Stripe API home">
      <span className="wordmark">stripe</span>
      <span className="api-mark">API</span>
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
  ["payment_intent", "nullable object", <>The PaymentIntent object associated with the error, when applicable.</>],
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
      <p className="helpful">
        <strong>Was this section helpful?</strong>
        <a href="#yes">Yes</a>
        <a href="#no">No</a>
      </p>
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

export function ApiReference({ renderedCopy }: { renderedCopy: Record<string, ReactNode> }) {
  const [activeId, setActiveId] = useState("introduction");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-18% 0px -60% 0px", threshold: [0.05, 0.25, 0.6] },
    );

    sections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

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
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return sections;
    return sections.filter((section) => section.label.toLowerCase().includes(normalized));
  }, [query]);

  function goTo(id: string) {
    setSearchOpen(false);
    setMenuOpen(false);
    requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }),
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
            <FiSearch aria-hidden="true" />
            <span>Find anything</span>
            <kbd>/</kbd>
          </button>
          <button className="ask-trigger" type="button" onClick={() => setSearchOpen(true)}>
            <HiOutlineSparkles aria-hidden="true" />
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
                      className={activeId === section.id ? "active" : ""}
                      onClick={() => goTo(section.id)}
                    >
                      {section.label}
                    </button>
                    {errorsOpen && (
                      <button
                        type="button"
                        className={`nested-nav-item ${activeId === "handling-errors" ? "active" : ""}`}
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
                      className={activeId === section.id ? "active" : ""}
                      onClick={() => goTo(section.id)}
                    >
                      {section.label}
                    </button>
                    {paginationOpen && (
                      <>
                        <button
                          type="button"
                          className={`nested-nav-item ${activeId === "search" ? "active" : ""}`}
                          onClick={() => goTo("search")}
                        >
                          Search
                        </button>
                        <button
                          type="button"
                          className={`nested-nav-item ${activeId === "auto-pagination" ? "active" : ""}`}
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
                  className={activeId === section.id ? "active" : ""}
                  onClick={() => goTo(section.id)}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>

          <nav className="category-nav" aria-label="Additional API categories">
            <button type="button">
              <span>Core Resources</span>
              <FiChevronRight aria-hidden="true" />
            </button>
            <button type="button">
              <span>Payment Methods</span>
              <FiChevronRight aria-hidden="true" />
            </button>
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
          <a className="version-link" href="#versioning">
            2026-06-24.dahlia <FiChevronDown aria-hidden="true" />
          </a>
          <a className="current" href="#introduction">
            API Reference <FiChevronDown aria-hidden="true" />
          </a>
          <a href="#introduction">Docs</a>
          <a href="#request-ids">Support</a>
          <a href="#authentication">Sign in →</a>
        </nav>
      </header>

      <main className="reference-main">
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
                  <p className="helpful">
                    <strong>Was this section helpful?</strong>
                    <a href="#yes">Yes</a>
                    <a href="#no">No</a>
                  </p>
                </>
              )}
            </article>

            <aside className="examples" aria-label={`${section.label} examples`}>
              <div className="section-actions">
                <button type="button"><HiOutlineSparkles /> Ask about this section</button>
                <span />
                <button type="button"><FiClipboard /> Copy for LLM</button>
                <span />
                <button type="button"><FiBookOpen /> View as Markdown</button>
              </div>

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
                      <div><CopyButton value="https://api.stripe.com" compact /><HiOutlineSparkles /></div>
                    </div>
                    <code>https://api.stripe.com</code>
                  </div>

                  <div className="libraries-card">
                    <strong className="libraries-title">CLIENT LIBRARIES</strong>
                    <div className="library-grid">
                      {libraries.map(({ name, Icon, className }) => (
                        <a href="#authentication" key={name}>
                          <Icon className={className} aria-hidden="true" />
                          <span>{name}</span>
                        </a>
                      ))}
                    </div>
                    <p>
                      By default, the Stripe API Docs demonstrate using curl to interact with the API
                      over HTTP. Select one of our official <a href="#authentication">client libraries</a>{" "}
                      to see examples in code.
                    </p>
                  </div>
                </>
              ) : section.showExamples === false ? null : (
                <div className="example-stack">
                  {section.code !== undefined && (
                    <div className="code-card">
                      <div className="code-card-header">
                        <span>{section.codeTitle}</span>
                        <div className="code-card-controls">
                          <span className="language-select">
                            {section.codeLanguage === "json" ? "JSON" : "cURL"} <FiChevronDown />
                          </span>
                          <CopyButton value={section.code} compact />
                          <HiOutlineSparkles aria-hidden="true" />
                        </div>
                      </div>
                      <CodeBlock value={section.code} language={section.codeLanguage ?? "bash"} />
                    </div>
                  )}

                  {section.infoTitle && section.infoBody && (
                    <div className="info-card">
                      <strong>{section.infoTitle}</strong>
                      <div>
                        {section.infoBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    </div>
                  )}

                  {section.responseTitle && section.response && (
                    <div className="code-card response-card">
                      <div className="code-card-header">
                        <span>{section.responseTitle}</span>
                        <CopyButton value={section.response} compact />
                      </div>
                      <CodeBlock value={section.response} language="json" showLineNumbers={false} />
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
          <a href="#introduction"><HiOutlineSparkles aria-hidden="true" /><span>LLM? <b>Read llms.txt.</b></span></a>
          <p>Powered by <a href="https://markdoc.dev/">Markdoc</a></p>
        </section>
      </main>

      <footer className="developer-bar">
        <div><FiTerminal aria-hidden="true" /><span>Developers</span></div>
        <button type="button" aria-label="Back to top" onClick={() => goTo("introduction")}>
          <FiChevronUp />
        </button>
      </footer>

      {menuOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
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
              <FiSearch aria-hidden="true" />
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
              {results.length > 0 ? results.map((section) => (
                <button key={section.id} type="button" onClick={() => goTo(section.id)}>
                  <span>{section.label}</span>
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

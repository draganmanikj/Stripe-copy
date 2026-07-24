export const sectionCopy: Record<string, string> = {
  introduction: `
The Stripe API is organized around [REST](#authentication). Our API has predictable resource-oriented URLs, accepts [form-encoded](#authentication) request bodies, returns [JSON-encoded](#errors) responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Stripe API in [sandboxes](#authentication) without affecting your live data or interacting with banking networks. The API key that you use to [authenticate](#authentication) the request determines whether the request runs in live mode or in a sandbox. Sandboxes support all v2 APIs. Test mode sandboxes support some [v2 APIs](#include-dependent-response-values).

The Stripe API doesn't support bulk updates. You can work on only one object per request.

The Stripe API differs for every account as we release new [versions](#versioning) and tailor functionality. [Log in](#authentication) to see docs with your test key and data.
`,
  authentication: `
The Stripe API uses [API keys](#authentication) to authenticate requests. You can view and manage your API keys in the [Stripe Dashboard](#authentication).

Test mode secret keys start with \`sk_test_\` and have unrestricted access to their sandboxes. In live mode, you configure a [restricted API key](#authentication) (starts with \`rk_live_\`) with specific API permissions. Using a restricted API key with only a subset of API permissions limits the damage a bad actor could cause if they obtained the key. In both test mode and live mode, you can create as many restricted API keys as you need for different use cases or components of your application. We also create a live mode secret key (starts with \`sk_live_\`) that grants access to all Stripe API resources. To protect your business, use restricted API keys instead.

Your API keys carry many privileges. Follow [best practices](#authentication) to keep your keys safe. Don't embed secret or restricted API keys in source code or client-side applications. Instead, use your server platform's secrets vault to provide keys to your server-side applications. If your platform doesn't offer a secrets vault, set your keys in environment variables.

Make all API requests over [HTTPS](#authentication). Calls made over plain HTTP fail. API requests without authentication also fail.
`,
  errors: `
Stripe uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the \`2xx\` range indicate success. Codes in the \`4xx\` range indicate an error that failed given the information provided. Codes in the \`5xx\` range indicate a rare problem with Stripe's servers.

Some \`4xx\` errors that can be handled programmatically, such as a declined card, include an error code that briefly explains the reported problem.

### HTTP Status Code Summary

| Status | Meaning | Description |
| --- | --- | --- |
| \`200\` | OK | Everything worked as expected. |
| \`400\` | Bad Request | The request was unacceptable, often because a required parameter was missing. |
| \`401\` | Unauthorized | No valid API key was provided. |
| \`402\` | Request Failed | The parameters were valid but the request failed. |
| \`403\` | Forbidden | The API key doesn't have permission to perform the request. |
| \`404\` | Not Found | The requested resource doesn't exist. |
| \`409\` | Conflict | The request conflicts with another request. |
| \`424\` | External Dependency Failed | An external dependency prevented the request from completing. |
| \`429\` | Too Many Requests | Too many requests reached the API too quickly. |
| \`500, 502, 503, 504\` | Server Errors | Something went wrong on Stripe's end. These errors are rare. |

### Error Types

| Type | Description |
| --- | --- |
| \`api_error\` | Covers temporary API-side problems and is extremely uncommon. |
| \`card_error\` | A card can't be charged and the integration must handle the failure. |
| \`idempotency_error\` | An idempotency key was reused with a different endpoint or parameters. |
| \`invalid_request_error\` | One or more request parameters are invalid. |

### Attributes

- \`code\`: a short value that identifies an error programmatically.
- \`decline_code\`: the card issuer's reason for a decline, when available.
- \`doc_url\`: a link to more information about the reported error code.
- \`message\`: a human-readable explanation of the error.
- \`param\`: the request parameter related to the error.
- \`request_log_url\`: a link to the request log entry in the Dashboard.
- \`type\`: one of \`api_error\`, \`card_error\`, \`idempotency_error\`, or \`invalid_request_error\`.
`,
  handlingErrors: `
Our client libraries raise exceptions for many reasons, such as a failed charge, invalid parameters, authentication errors, and network unavailability. We recommend writing code that gracefully handles all possible API exceptions.

Related guide: [Error Handling](https://docs.stripe.com/error-handling).
`,
  expanding: `
Many objects allow you to request additional information as an expanded response by using the \`expand\` request parameter. This parameter is available on all API requests and applies only to the response of that request.

In many cases, an object contains the ID of a related object in its response properties. For example, a \`Charge\` might have an associated Customer ID. You can expand these objects in line with the \`expand\` request parameter. The \`expandable\` label in this documentation indicates ID fields that you can expand into objects.

Some available fields aren't included in the responses by default, such as the \`number\` and \`cvc\` fields for the Issuing Card object. You can request these fields as an expanded response by using the \`expand\` request parameter.

You can expand recursively by specifying nested fields after a dot (\`.\`). For example, requesting \`payment_intent.customer\` on a charge expands the \`payment_intent\` property into a full PaymentIntent object, then expands the \`customer\` property on that payment intent into a full Customer object.

You can use the \`expand\` parameter on any endpoint that returns expandable fields, including list, create, and update endpoints.

Expansions on list requests start with the \`data\` property. For example, you can expand \`data.customers\` on a request to list charges and associated customers. Performing deep expansions on numerous list requests might result in slower processing times.

Expansions have a maximum depth of four levels (for example, the deepest expansion allowed when listing charges is \`data.payment_intent.customer.default_source\`).

You can expand multiple objects at the same time by identifying multiple items in the \`expand\` array.

Related guide: [Expanding responses](https://docs.stripe.com/expand)

Related video: [Expand](https://docs.stripe.com/expand)
`,
  idempotency: `
The API supports [idempotency](#idempotent-requests) for safely retrying requests without accidentally performing the same operation twice. When creating or updating an object, use an idempotency key. Then, if a connection error occurs, you can safely repeat the request without risk of creating a second object or performing the update twice.

To perform an idempotent request, provide an additional \`IdempotencyKey\` element to the request options.

Stripe's idempotency works by saving the resulting status code and body of the first request made for any given idempotency key, regardless of whether it succeeds or fails. Subsequent requests with the same key return the same result, including \`500\` errors.

A client generates an idempotency key, which is a unique key that the server uses to recognize subsequent retries of the same request. Use V4 UUIDs or another random string with enough entropy to avoid collisions. Idempotency keys can be up to 255 characters long. Avoid using sensitive data, such as email addresses or personal identifiers, as idempotency keys.

Keys can be removed automatically after they're at least 24 hours old. A reused key produces a new request after the original is pruned. The idempotency layer compares incoming parameters with the original request and returns an error when they don't match.

Results are saved only after endpoint execution begins. If parameters fail validation, or the request conflicts with another request executing concurrently, no idempotent result is saved and you can retry the request.

Learn more about when you can [retry idempotent requests](#idempotent-requests).

All \`POST\` requests accept idempotency keys. Don't send idempotency keys in \`GET\` and \`DELETE\` requests because they have no effect. These requests are idempotent by definition.
`,
  include: `
Some API v2 responses contain \`null\` values for certain properties by default, regardless of their actual values. This reduces response payload size while maintaining the basic response structure. To retrieve the actual values for those properties, specify them in the \`include\` array request parameter.

To determine whether you need the \`include\` parameter in a given request, look at the request description. The parameter's enum values identify the response properties that depend on \`include\`.

> **NOTE**
>
> Whether a response property defaults to \`null\` depends on the request endpoint, not the object that the endpoint references. If multiple endpoints return data from the same object, a particular property can depend on \`include\` in one endpoint and return its actual value by default for a different endpoint.

A hash property can depend on a single \`include\` value, or on multiple \`include\` values associated with its child properties. If you request only some children, those children contain actual values while unspecified children remain \`null\`. If you don't specify any configurations, the configuration hash is null in the response.

Related guide: [Include-dependent response values](#include-dependent-response-values)
`,
  metadata: `
Updateable Stripe objects - including Account, Charge, Customer, PaymentIntent, Refund, Subscription, and Transfer - have a \`metadata\` parameter. Use this parameter to attach key-value data to those objects.

You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long. Keys and values are stored as strings. Square brackets aren't allowed in key names.

Metadata can store additional structured information on an object. For example, attach your system's unique user ID to a Customer. Stripe doesn't use metadata to authorize or decline a charge, and users won't see it unless you choose to show it to them.

Some objects also support a \`description\` parameter. Unlike metadata, a description is a single human-readable string that users might see, such as in an email receipt. Don't store bank account numbers, card details, or other sensitive information in metadata or descriptions.

Related guide: [Metadata](#metadata)

### Sample metadata use cases

- **Link IDs:** Attach your system's unique IDs to Stripe objects to simplify lookups. For example, add your order number to a charge, your user ID to a customer or recipient, or a unique receipt number to a transfer.
- **Refund paper trails:** Store information about the reason for a refund and the individual responsible for its creation.
- **Customer details:** Annotate a customer by storing an internal ID for your future use.
`,
  pagination: `
All top-level API resources have support for bulk fetches through list methods. For example, you can list charges, list customers, and list invoices. These list API methods share a common structure and accept, at a minimum, the following three parameters: \`limit\`, \`starting_after\`, and \`ending_before\`.

Stripe's list API methods use cursor-based pagination through the \`starting_after\` and \`ending_before\` parameters. Both parameters accept an existing object ID value and return objects in reverse chronological order. The \`ending_before\` parameter returns objects listed before the named object. The \`starting_after\` parameter returns objects listed after the named object. These parameters are mutually exclusive.

Our client libraries offer [auto-pagination helpers](#auto-pagination) to traverse all pages of a list.

### Parameters

- \`limit\` — optional, default is 10. Specifies a limit on the number of objects to return, ranging between 1 and 100.
- \`starting_after\` — optional object ID. A cursor to use in pagination that defines your place in the list and fetches the next page.
- \`ending_before\` — optional object ID. A cursor to use in pagination that defines your place in the list and fetches the previous page.

### List Response Format

- \`object\` — string, value is "list". Identifies the response as a list.
- \`data\` — array. Contains the actual response elements, paginated by any request parameters.
- \`has_more\` — boolean. Whether or not there are more elements available after this set.
- \`url\` — string. The URL for accessing this list.

> **V2 API PAGINATION**
>
> APIs within the \`/v2\` namespace use a different pagination interface from the \`v1\` namespace.
`,
  search: `
Some top-level API resources have support for retrieval via "search" API methods. For example, you can [search charges](#pagination), [search customers](#pagination), and [search subscriptions](#pagination).

Stripe's search API methods utilize cursor-based pagination via the \`page\` request parameter and \`next_page\` response parameter. For example, if you make a search request and receive \`"next_page": "pagination_key"\` in the response, your subsequent call can include \`page=pagination_key\` to fetch the next page of results.

Our client libraries offer [auto-pagination](#auto-pagination) helpers to easily traverse all pages of a search result.

### Search request format

- \`query\` — required. The search query string. See search query language.
- \`limit\` — optional. A limit on the number of objects returned, ranging between 1 and 100. The default is 10.
- \`page\` — optional. A cursor for pagination across multiple pages of results. Don't include this parameter on the first call.

### Search response format

- \`object\` — string, value is "search_result". A string describing the object type returned.
- \`url\` — string. The URL for accessing this list.
- \`has_more\` — boolean. Whether or not there are more elements available after this set.
- \`data\` — array. Contains the actual response elements, paginated by any request parameters.
- \`next_page\` — string. A cursor to fetch the next page when \`has_more\` is true.
- \`total_count\` — optional positive integer or zero. The total number of objects that match the query when requested.
`,
  autoPagination: `
Our libraries support auto-pagination. This feature allows you to easily iterate through large lists of resources without having to manually perform the requests to fetch subsequent pages.

Since curl simply emits raw HTTP requests, it doesn't support auto-pagination.
`,
  requestIds: `
Each API request has an associated request identifier. You can find this value in the response headers under \`Request-Id\`. You can also find request identifiers in the URLs of individual request logs in your [Dashboard](#request-ids).

To expedite the resolution process, provide the request identifier when you contact support about a specific request.
`,
  connectedAccounts: `
If you use Stripe Connect, you can issue requests on behalf of your connected accounts. To act as a connected account, include a \`Stripe-Account\` header containing the connected account ID, which typically starts with the \`acct_\` prefix.

The connected account ID is set per request. Methods on the returned object reuse the same account ID.
`,
  versioning: `
Each major release, such as [Acacia](#versioning), includes changes that aren't backward-compatible with previous releases. Upgrading to a new major release can require updates to existing code. Each monthly release includes only backward-compatible changes, and uses the same name as the last major release. You can safely upgrade to a new monthly release without breaking any existing code. The current version is 2026-06-24.dahlia. For information on all API versions, view our [API changelog](#versioning).

You can upgrade your API version in [Workbench](#versioning). As a precaution, use API Versioning to test a new API version before committing to an upgrade.
`,
};

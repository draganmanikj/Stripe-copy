// Generated from the live public Stripe API reference.

export type ResourceDisplay = {
  overviewHeight: number;
  objectHeight: number;
  primaryFields: string[];
  moreFields: string[];
  sections: Array<{
    id: string;
    title: string;
    height: number;
    primaryFields: string[];
    moreFields: string[];
    summaryParagraphs: string[];
  }>;
};

export const resourceDisplay: Record<string, ResourceDisplay> = {
  "accounts-v2": {
    "overviewHeight": 420,
    "objectHeight": 2543,
    "primaryFields": [
      "id",
      "object",
      "applied_configurations",
      "closed",
      "configuration",
      "contact_email",
      "contact_phone",
      "created",
      "dashboard",
      "defaults",
      "display_name",
      "future_requirements",
      "identity",
      "livemode",
      "metadata",
      "requirements"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-v2_accounts",
        "title": "Accounts v2",
        "height": 420,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "An Account v2 object represents a company, individual, or other entity that your Stripe integration interacts with. It contains both identifying information and properties that control its behavior and functionality. An Account can have one or more configurations that enable sets of related features, such as allowing it to act as a merchant or customer. The Accounts v2 API is broadly available to Connect platforms, and to other users in preview. The Accounts v2 API also supports the Global Payouts preview feature."
        ]
      },
      {
        "id": "api-section-v2_account_object",
        "title": "The Account object v2",
        "height": 2543,
        "primaryFields": [
          "id",
          "object",
          "applied_configurations",
          "closed",
          "configuration",
          "contact_email",
          "contact_phone",
          "created",
          "dashboard",
          "defaults",
          "display_name",
          "future_requirements",
          "identity",
          "livemode",
          "metadata",
          "requirements"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-v2_create_accounts",
        "title": "Create an account v2",
        "height": 10477,
        "primaryFields": [
          "account_token",
          "configuration",
          "contact_email",
          "contact_phone",
          "dashboard",
          "defaults",
          "display_name",
          "identity",
          "include",
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Create an Account that represents a company, individual, or other entity that your business interacts with. Accounts contain identifying information about the entity, and configurations that store the features an account has access to. An account can be configured as any or all of the following configurations: Customer, Merchant and/or Recipient."
        ]
      },
      {
        "id": "api-section-v2_update_accounts",
        "title": "Update an account v2",
        "height": 10324,
        "primaryFields": [
          "account_token",
          "configuration",
          "contact_email",
          "contact_phone",
          "dashboard",
          "defaults",
          "display_name",
          "identity",
          "include",
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Updates the details of an Account."
        ]
      },
      {
        "id": "api-section-v2_retrieve_accounts",
        "title": "Retrieve an account v2",
        "height": 1672,
        "primaryFields": [
          "include"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of an Account."
        ]
      },
      {
        "id": "api-section-v2_list_accounts",
        "title": "List accounts v2",
        "height": 1689,
        "primaryFields": [
          "applied_configurations",
          "closed",
          "limit",
          "page"
        ],
        "moreFields": [
          "data",
          "next_page_url",
          "previous_page_url"
        ],
        "summaryParagraphs": [
          "Returns a list of Accounts."
        ]
      },
      {
        "id": "api-section-v2_close_accounts",
        "title": "Close an account v2",
        "height": 1976,
        "primaryFields": [
          "applied_configurations"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Removes access to the Account and its associated resources. Closed Accounts can no longer be operated on, but limited information can still be retrieved through the API in order to be able to track their history."
        ]
      },
      {
        "id": "api-section-v2_accounts_event_types",
        "title": "Account event types v2",
        "height": 1221.71875,
        "primaryFields": [
          "id",
          "object",
          "context",
          "created",
          "livemode",
          "related_object",
          "type"
        ],
        "moreFields": [
          "changes",
          "data",
          "reason"
        ],
        "summaryParagraphs": [
          "This is a list of all public thin events we currently send for updates to Account, which are continually evolving and expanding. The payload of thin events is unversioned. During processing, you must fetch the versioned event from the API or fetch the resource’s current state."
        ]
      }
    ]
  },
  "account-links-v2": {
    "overviewHeight": 278,
    "objectHeight": 867,
    "primaryFields": [
      "object",
      "account",
      "created",
      "expires_at",
      "livemode",
      "url",
      "use_case"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-v2_account_links",
        "title": "Account Links v2",
        "height": 278,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Account Links let a platform create a temporary, single-use URL that an account can use to access a Stripe-hosted flow for collecting or updating required information."
        ]
      },
      {
        "id": "api-section-v2_account_link_object",
        "title": "The Account Link object v2",
        "height": 867,
        "primaryFields": [
          "object",
          "account",
          "created",
          "expires_at",
          "livemode",
          "url",
          "use_case"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-v2_create_account_links",
        "title": "Create an account link v2",
        "height": 1030,
        "primaryFields": [
          "account",
          "use_case"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates an AccountLink object that includes a single-use URL that an account can use to access a Stripe-hosted flow for collecting or updating required information."
        ]
      }
    ]
  },
  "account-tokens-v2": {
    "overviewHeight": 278,
    "objectHeight": 759,
    "primaryFields": [
      "id",
      "object",
      "created",
      "expires_at",
      "livemode",
      "used"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-v2_account_tokens",
        "title": "Account Tokens v2",
        "height": 278,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Account tokens are single-use tokens which tokenize an account’s contact_email, display_name, contact_phone, and identity."
        ]
      },
      {
        "id": "api-section-v2_account_token_object",
        "title": "The Account Token object v2",
        "height": 759,
        "primaryFields": [
          "id",
          "object",
          "created",
          "expires_at",
          "livemode",
          "used"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-v2_create_account_tokens",
        "title": "Create an account token v2",
        "height": 1286,
        "primaryFields": [
          "contact_email",
          "contact_phone",
          "display_name",
          "identity"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Create an account token with a publishable key and pass it to the Accounts v2 API to create or update an account without its data touching your server. Learn more about account tokens. In live mode, you can only create account tokens with your application’s publishable key. In test mode, you can create account tokens with your secret key or publishable key."
        ]
      },
      {
        "id": "api-section-v2_retrieve_account_tokens",
        "title": "Retrieve an account token v2",
        "height": 743,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves an Account Token.",
          "No parameters."
        ]
      }
    ]
  },
  "balance": {
    "overviewHeight": 308,
    "objectHeight": 900,
    "primaryFields": [
      "available",
      "pending"
    ],
    "moreFields": [
      "object",
      "connect_reserved",
      "instant_available",
      "issuing",
      "livemode",
      "refund_and_dispute_prefunding"
    ],
    "sections": [
      {
        "id": "api-section-balance",
        "title": "Balance",
        "height": 308,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "This is an object representing your Stripe balance. You can retrieve it to see the balance currently on your Stripe account.",
          "The top-level available and pending comprise your “payments balance.”",
          "Related guide: Balances and settlement time, Understanding Connect account balances"
        ]
      },
      {
        "id": "api-section-balance_object",
        "title": "The Balance object",
        "height": 900,
        "primaryFields": [
          "available",
          "pending"
        ],
        "moreFields": [
          "object",
          "connect_reserved",
          "instant_available",
          "issuing",
          "livemode",
          "refund_and_dispute_prefunding"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-retrieve_balance",
        "title": "Retrieve balance",
        "height": 795.625,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the current account balance, based on the authentication that was used to make the request. For a sample request, see Accounting for negative balances.",
          "No parameters."
        ]
      }
    ]
  },
  "balance-transactions": {
    "overviewHeight": 272,
    "objectHeight": 2447,
    "primaryFields": [
      "id",
      "amount",
      "currency",
      "description",
      "fee",
      "fee_details",
      "net",
      "source",
      "status",
      "type"
    ],
    "moreFields": [
      "object",
      "available_on",
      "balance_type",
      "created",
      "exchange_rate",
      "reporting_category"
    ],
    "sections": [
      {
        "id": "api-section-balance_transactions",
        "title": "Balance Transactions",
        "height": 272,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Balance transactions represent funds moving through your Stripe account. Stripe creates them for every type of transaction that enters or leaves your Stripe account balance.",
          "Related guide: Balance transaction types"
        ]
      },
      {
        "id": "api-section-balance_transaction_object",
        "title": "The Balance Transaction object",
        "height": 2447,
        "primaryFields": [
          "id",
          "amount",
          "currency",
          "description",
          "fee",
          "fee_details",
          "net",
          "source",
          "status",
          "type"
        ],
        "moreFields": [
          "object",
          "available_on",
          "balance_type",
          "created",
          "exchange_rate",
          "reporting_category"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-balance_transaction_retrieve",
        "title": "Retrieve a balance transaction",
        "height": 586.5625,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the balance transaction with the given ID.",
          "Note that this endpoint previously used the path /v1/balance/history/:id.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-balance_transaction_list",
        "title": "List all balance transactions",
        "height": 1345,
        "primaryFields": [
          "payout",
          "type"
        ],
        "moreFields": [
          "created",
          "currency",
          "ending_before",
          "limit",
          "source",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of transactions that have contributed to the Stripe account balance (for example, charges, transfers, and so on). The transactions return in sorted order, with the most recent transactions appearing first.",
          "The previous name of this endpoint was “Balance history,” and it used the path /v1/balance/history."
        ]
      }
    ]
  },
  "charges": {
    "overviewHeight": 501,
    "objectHeight": 3672,
    "primaryFields": [
      "id",
      "amount",
      "balance_transaction",
      "billing_details",
      "currency",
      "customer",
      "description",
      "disputed",
      "metadata",
      "payment_intent",
      "payment_method_details",
      "receipt_email",
      "refunded",
      "shipping",
      "statement_descriptor",
      "statement_descriptor_suffix",
      "status"
    ],
    "moreFields": [
      "object",
      "amount_captured",
      "amount_refunded",
      "application",
      "application_fee",
      "application_fee_amount",
      "calculated_statement_descriptor",
      "captured",
      "created",
      "failure_balance_transaction",
      "failure_code",
      "failure_message",
      "fraud_details",
      "livemode",
      "on_behalf_of",
      "outcome",
      "paid",
      "payment_method",
      "presentment_details",
      "radar_options",
      "receipt_number",
      "receipt_url",
      "refunds",
      "review",
      "source_transfer",
      "transfer",
      "transfer_data",
      "transfer_group"
    ],
    "sections": [
      {
        "id": "api-section-charges",
        "title": "Charges",
        "height": 501,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "The Charge object represents a single attempt to move money into your Stripe account. PaymentIntent confirmation is the most common way to create Charges, but Account Debits may also create Charges. Some legacy payment flows create Charges directly, which is not recommended for new integrations."
        ]
      },
      {
        "id": "api-section-charge_object",
        "title": "The Charge object",
        "height": 3672,
        "primaryFields": [
          "id",
          "amount",
          "balance_transaction",
          "billing_details",
          "currency",
          "customer",
          "description",
          "disputed",
          "metadata",
          "payment_intent",
          "payment_method_details",
          "receipt_email",
          "refunded",
          "shipping",
          "statement_descriptor",
          "statement_descriptor_suffix",
          "status"
        ],
        "moreFields": [
          "object",
          "amount_captured",
          "amount_refunded",
          "application",
          "application_fee",
          "application_fee_amount",
          "calculated_statement_descriptor",
          "captured",
          "created",
          "failure_balance_transaction",
          "failure_code",
          "failure_message",
          "fraud_details",
          "livemode",
          "on_behalf_of",
          "outcome",
          "paid",
          "payment_method",
          "presentment_details",
          "radar_options",
          "receipt_number",
          "receipt_url",
          "refunds",
          "review",
          "source_transfer",
          "transfer",
          "transfer_data",
          "transfer_group"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_charge",
        "title": "Create a chargeDeprecated",
        "height": 2355.03125,
        "primaryFields": [
          "amount",
          "currency",
          "customer",
          "description",
          "metadata",
          "receipt_email",
          "shipping",
          "source",
          "statement_descriptor",
          "statement_descriptor_suffix"
        ],
        "moreFields": [
          "application_fee_amount",
          "capture",
          "on_behalf_of",
          "radar_options",
          "transfer_data",
          "transfer_group"
        ],
        "summaryParagraphs": [
          "This method is no longer recommended—use the Payment Intents API to initiate a new payment instead. Confirmation of the PaymentIntent creates the Charge object used to request payment."
        ]
      },
      {
        "id": "api-section-update_charge",
        "title": "Update a charge",
        "height": 1215,
        "primaryFields": [
          "customer",
          "description",
          "metadata",
          "receipt_email",
          "shipping"
        ],
        "moreFields": [
          "fraud_details",
          "transfer_group"
        ],
        "summaryParagraphs": [
          "Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged."
        ]
      },
      {
        "id": "api-section-retrieve_charge",
        "title": "Retrieve a charge",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_charges",
        "title": "List all charges",
        "height": 917,
        "primaryFields": [
          "customer"
        ],
        "moreFields": [
          "created",
          "ending_before",
          "limit",
          "payment_intent",
          "starting_after",
          "transfer_group"
        ],
        "summaryParagraphs": [
          "Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first."
        ]
      },
      {
        "id": "api-section-capture_charge",
        "title": "Capture a charge",
        "height": 1371,
        "primaryFields": [
          "amount",
          "receipt_email",
          "statement_descriptor",
          "statement_descriptor_suffix"
        ],
        "moreFields": [
          "application_fee_amount",
          "transfer_data",
          "transfer_group"
        ],
        "summaryParagraphs": [
          "Capture the payment of an existing, uncaptured charge that was created with the capture option set to false.",
          "Uncaptured payments expire a set number of days after they are created (7 by default), after which they are marked as refunded and capture attempts will fail.",
          "Don’t use this method to capture a PaymentIntent-initiated charge. Use Capture a PaymentIntent."
        ]
      },
      {
        "id": "api-section-search_charges",
        "title": "Search charges",
        "height": 886,
        "primaryFields": [
          "query",
          "limit",
          "page"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Search for charges you’ve previously created using Stripe’s Search Query Language. Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up to an hour behind during outages. Search functionality is not available to merchants in India."
        ]
      }
    ]
  },
  "customers": {
    "overviewHeight": 501,
    "objectHeight": 2428,
    "primaryFields": [
      "id",
      "address",
      "customer_account",
      "description",
      "email",
      "metadata",
      "name",
      "phone",
      "shipping",
      "tax"
    ],
    "moreFields": [
      "object",
      "balance",
      "business_name",
      "cash_balance",
      "created",
      "currency",
      "default_source",
      "delinquent",
      "discount",
      "individual_name",
      "invoice_credit_balance",
      "invoice_prefix",
      "invoice_settings",
      "livemode",
      "next_invoice_sequence",
      "preferred_locales",
      "sources",
      "subscriptions",
      "tax_exempt",
      "tax_ids",
      "test_clock"
    ],
    "sections": [
      {
        "id": "api-section-customers",
        "title": "Customers",
        "height": 501,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "This object represents a customer of your business. Use it to create recurring charges, save payment and contact information, and track payments that belong to the same customer."
        ]
      },
      {
        "id": "api-section-customer_object",
        "title": "The Customer object",
        "height": 2428,
        "primaryFields": [
          "id",
          "address",
          "customer_account",
          "description",
          "email",
          "metadata",
          "name",
          "phone",
          "shipping",
          "tax"
        ],
        "moreFields": [
          "object",
          "balance",
          "business_name",
          "cash_balance",
          "created",
          "currency",
          "default_source",
          "delinquent",
          "discount",
          "individual_name",
          "invoice_credit_balance",
          "invoice_prefix",
          "invoice_settings",
          "livemode",
          "next_invoice_sequence",
          "preferred_locales",
          "sources",
          "subscriptions",
          "tax_exempt",
          "tax_ids",
          "test_clock"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_customer",
        "title": "Create a customer",
        "height": 2167,
        "primaryFields": [
          "address",
          "description",
          "email",
          "metadata",
          "name",
          "payment_method",
          "phone",
          "shipping",
          "tax"
        ],
        "moreFields": [
          "balance",
          "business_name",
          "cash_balance",
          "individual_name",
          "invoice_prefix",
          "invoice_settings",
          "next_invoice_sequence",
          "preferred_locales",
          "source",
          "tax_exempt",
          "tax_id_data",
          "test_clock"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-update_customer",
        "title": "Update a customer",
        "height": 2277,
        "primaryFields": [
          "address",
          "description",
          "email",
          "metadata",
          "name",
          "phone",
          "shipping",
          "tax"
        ],
        "moreFields": [
          "balance",
          "business_name",
          "cash_balance",
          "default_source",
          "individual_name",
          "invoice_prefix",
          "invoice_settings",
          "next_invoice_sequence",
          "preferred_locales",
          "source",
          "tax_exempt"
        ],
        "summaryParagraphs": [
          "Updates the specified customer by setting the values of the parameters passed. Any parameters not provided are left unchanged. For example, if you pass the source parameter, that becomes the customer’s active source (such as a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the source parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the past_due state, then the latest open invoice for the subscription with automatic collection enabled is retried. This retry doesn’t count as an automatic retry, and doesn’t affect the next regularly scheduled payment for the invoice. Changing the default_source for a customer doesn’t trigger this behavior.",
          "This request accepts mostly the same arguments as the customer creation call."
        ]
      },
      {
        "id": "api-section-retrieve_customer",
        "title": "Retrieve a customer",
        "height": 786.625,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a Customer object.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_customers",
        "title": "List all customers",
        "height": 921,
        "primaryFields": [
          "email"
        ],
        "moreFields": [
          "created",
          "ending_before",
          "limit",
          "starting_after",
          "test_clock"
        ],
        "summaryParagraphs": [
          "Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first."
        ]
      },
      {
        "id": "api-section-delete_customer",
        "title": "Delete a customer",
        "height": 537,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-search_customers",
        "title": "Search customers",
        "height": 886,
        "primaryFields": [
          "query",
          "limit",
          "page"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Search for customers you’ve previously created using Stripe’s Search Query Language. Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up to an hour behind during outages. Search functionality is not available to merchants in India."
        ]
      }
    ]
  },
  "customer-session": {
    "overviewHeight": 294,
    "objectHeight": 950,
    "primaryFields": [
      "client_secret",
      "components",
      "customer",
      "expires_at"
    ],
    "moreFields": [
      "object",
      "created",
      "customer_account",
      "livemode"
    ],
    "sections": [
      {
        "id": "api-section-customer_sessions",
        "title": "Customer Session",
        "height": 294,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A Customer Session allows you to grant Stripe’s frontend SDKs (like Stripe.js) client-side access control over a Customer.",
          "Related guides: Customer Session with the Payment Element, Customer Session with the Pricing Table, Customer Session with the Buy Button."
        ]
      },
      {
        "id": "api-section-customer_session_object",
        "title": "The Customer Session object",
        "height": 950,
        "primaryFields": [
          "client_secret",
          "components",
          "customer",
          "expires_at"
        ],
        "moreFields": [
          "object",
          "created",
          "customer_account",
          "livemode"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_customer_session",
        "title": "Create a Customer Session",
        "height": 711,
        "primaryFields": [
          "components",
          "customer"
        ],
        "moreFields": [
          "customer_account"
        ],
        "summaryParagraphs": [
          "Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources."
        ]
      }
    ]
  },
  "disputes": {
    "overviewHeight": 389,
    "objectHeight": 2372,
    "primaryFields": [
      "id",
      "amount",
      "charge",
      "currency",
      "evidence",
      "metadata",
      "payment_intent",
      "reason",
      "status"
    ],
    "moreFields": [
      "object",
      "balance_transactions",
      "created",
      "enhanced_eligibility_types",
      "evidence_details",
      "is_charge_refundable",
      "livemode",
      "payment_method_details"
    ],
    "sections": [
      {
        "id": "api-section-disputes",
        "title": "Disputes",
        "height": 389,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A dispute occurs when a customer questions your charge with their card issuer. When this happens, you have the opportunity to respond to the dispute with evidence that shows that the charge is legitimate.",
          "Related guide: Disputes and fraud"
        ]
      },
      {
        "id": "api-section-dispute_object",
        "title": "The Dispute object",
        "height": 2372,
        "primaryFields": [
          "id",
          "amount",
          "charge",
          "currency",
          "evidence",
          "metadata",
          "payment_intent",
          "reason",
          "status"
        ],
        "moreFields": [
          "object",
          "balance_transactions",
          "created",
          "enhanced_eligibility_types",
          "evidence_details",
          "is_charge_refundable",
          "livemode",
          "payment_method_details"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-update_dispute",
        "title": "Update a dispute",
        "height": 958,
        "primaryFields": [
          "evidence",
          "metadata",
          "submit"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your dashboard, but if you prefer, you can use the API to submit evidence programmatically.",
          "Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our guide to dispute types."
        ]
      },
      {
        "id": "api-section-retrieve_dispute",
        "title": "Retrieve a dispute",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the dispute with the given ID.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_disputes",
        "title": "List all disputes",
        "height": 886,
        "primaryFields": [
          "charge",
          "payment_intent"
        ],
        "moreFields": [
          "created",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of your disputes."
        ]
      },
      {
        "id": "api-section-close_dispute",
        "title": "Close a dispute",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.",
          "The status of the dispute will change from needs_response to lost. Closing a dispute is irreversible.",
          "No parameters."
        ]
      }
    ]
  },
  "events-v1": {
    "overviewHeight": 542,
    "objectHeight": 1130,
    "primaryFields": [
      "id",
      "api_version",
      "data",
      "request",
      "type"
    ],
    "moreFields": [
      "object",
      "account",
      "context",
      "created",
      "livemode",
      "pending_webhooks"
    ],
    "sections": [
      {
        "id": "api-section-events",
        "title": "Events",
        "height": 542,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Snapshot events allow you to track and react to activity in your Stripe integration. When the state of another API resource changes, Stripe creates an Event object that contains all the relevant information associated with that action, including the affected API resource. For example, a successful payment triggers a charge.succeeded event, which contains the Charge in the event’s data property. Some actions trigger multiple events. For example, if you create a new subscription for a customer, it triggers both a customer.subscription.created event and a charge.succeeded event.",
          "Configure an event destination in your account to listen for events that represent actions your integration needs to respond to. Additionally, you can retrieve an individual event or a list of events from the API.",
          "Connect platforms can also receive event notifications that occur in their connected accounts. These events include an account attribute that identifies the relevant connected account.",
          "You can access events through the Retrieve Event API for 30 days."
        ]
      },
      {
        "id": "api-section-event_object",
        "title": "The Event object",
        "height": 1130,
        "primaryFields": [
          "id",
          "api_version",
          "data",
          "request",
          "type"
        ],
        "moreFields": [
          "object",
          "account",
          "context",
          "created",
          "livemode",
          "pending_webhooks"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-retrieve_event",
        "title": "Retrieve an event",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of an event if it was created in the last 30 days. Supply the unique identifier of the event, which you might have received in a webhook.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_events",
        "title": "List all events",
        "height": 961,
        "primaryFields": [
          "types"
        ],
        "moreFields": [
          "created",
          "delivery_success",
          "ending_before",
          "limit",
          "starting_after",
          "type"
        ],
        "summaryParagraphs": [
          "List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in event object api_version attribute (not according to your current Stripe API version or Stripe-Version header)."
        ]
      },
      {
        "id": "api-section-event_types",
        "title": "Types of events",
        "height": 22152,
        "primaryFields": [
          "account.application.authorized",
          "account.application.deauthorized",
          "account.external_account.created",
          "account.external_account.deleted",
          "account.external_account.updated",
          "account.updated",
          "application_fee.created",
          "application_fee.refund.updated",
          "application_fee.refunded",
          "balance_settings.updated",
          "balance.available",
          "billing_portal.configuration.created",
          "billing_portal.configuration.updated",
          "billing_portal.session.created",
          "billing.alert.triggered",
          "billing.credit_balance_transaction.created",
          "billing.credit_grant.created",
          "billing.credit_grant.updated",
          "billing.meter.created",
          "billing.meter.deactivated",
          "billing.meter.reactivated",
          "billing.meter.updated",
          "capability.updated",
          "cash_balance.funds_available",
          "charge.captured",
          "charge.dispute.closed",
          "charge.dispute.created",
          "charge.dispute.funds_reinstated",
          "charge.dispute.funds_withdrawn",
          "charge.dispute.updated",
          "charge.expired",
          "charge.failed",
          "charge.pending",
          "charge.refund.updated",
          "charge.refunded",
          "charge.succeeded",
          "charge.updated",
          "checkout.session.async_payment_failed",
          "checkout.session.async_payment_succeeded",
          "checkout.session.completed",
          "checkout.session.expired",
          "climate.order.canceled",
          "climate.order.created",
          "climate.order.delayed",
          "climate.order.delivered",
          "climate.order.product_substituted",
          "climate.product.created",
          "climate.product.pricing_updated",
          "coupon.created",
          "coupon.deleted",
          "coupon.updated",
          "credit_note.created",
          "credit_note.updated",
          "credit_note.voided",
          "customer_cash_balance_transaction.created",
          "customer.created",
          "customer.deleted",
          "customer.discount.created",
          "customer.discount.deleted",
          "customer.discount.updated",
          "customer.source.created",
          "customer.source.deleted",
          "customer.source.expiring",
          "customer.source.updated",
          "customer.subscription.created",
          "customer.subscription.deleted",
          "customer.subscription.paused",
          "customer.subscription.pending_update_applied",
          "customer.subscription.pending_update_expired",
          "customer.subscription.resumed",
          "customer.subscription.trial_will_end",
          "customer.subscription.updated",
          "customer.tax_id.created",
          "customer.tax_id.deleted",
          "customer.tax_id.updated",
          "customer.updated",
          "entitlements.active_entitlement_summary.updated",
          "file.created",
          "financial_connections.account.account_numbers_updated",
          "financial_connections.account.created",
          "financial_connections.account.deactivated",
          "financial_connections.account.disconnected",
          "financial_connections.account.expected_deactivation_date_updated",
          "financial_connections.account.reactivated",
          "financial_connections.account.refreshed_balance",
          "financial_connections.account.refreshed_ownership",
          "financial_connections.account.refreshed_transactions",
          "financial_connections.account.upcoming_account_number_expiry",
          "financial_connections.account.upcoming_deactivation",
          "financial_connections.authorization.expected_deactivation_date_updated",
          "financial_connections.authorization.upcoming_deactivation",
          "identity.verification_session.canceled",
          "identity.verification_session.created",
          "identity.verification_session.processing",
          "identity.verification_session.redacted",
          "identity.verification_session.requires_input",
          "identity.verification_session.verified",
          "invoice_payment.paid",
          "invoice.created",
          "invoice.deleted",
          "invoice.finalization_failed",
          "invoice.finalized",
          "invoice.marked_uncollectible",
          "invoice.overdue",
          "invoice.overpaid",
          "invoice.paid",
          "invoice.payment_action_required",
          "invoice.payment_attempt_required",
          "invoice.payment_failed",
          "invoice.payment_succeeded",
          "invoice.sent",
          "invoice.upcoming",
          "invoice.updated",
          "invoice.voided",
          "invoice.will_be_due",
          "invoiceitem.created",
          "invoiceitem.deleted",
          "issuing_authorization.created",
          "issuing_authorization.request",
          "issuing_authorization.updated",
          "issuing_card.created",
          "issuing_card.updated",
          "issuing_cardholder.created",
          "issuing_cardholder.updated",
          "issuing_dispute.closed",
          "issuing_dispute.created",
          "issuing_dispute.funds_reinstated",
          "issuing_dispute.funds_rescinded",
          "issuing_dispute.submitted",
          "issuing_dispute.updated",
          "issuing_personalization_design.activated",
          "issuing_personalization_design.deactivated",
          "issuing_personalization_design.rejected",
          "issuing_personalization_design.updated",
          "issuing_token.created",
          "issuing_token.updated",
          "issuing_transaction.created",
          "issuing_transaction.purchase_details_receipt_updated",
          "issuing_transaction.updated",
          "mandate.updated",
          "payment_intent.amount_capturable_updated",
          "payment_intent.canceled",
          "payment_intent.created",
          "payment_intent.partially_funded",
          "payment_intent.payment_failed",
          "payment_intent.processing",
          "payment_intent.requires_action",
          "payment_intent.succeeded",
          "payment_link.created",
          "payment_link.updated",
          "payment_method.attached",
          "payment_method.automatically_updated",
          "payment_method.detached",
          "payment_method.updated",
          "payout.canceled",
          "payout.created",
          "payout.failed",
          "payout.paid",
          "payout.reconciliation_completed",
          "payout.updated",
          "person.created",
          "person.deleted",
          "person.updated",
          "plan.created",
          "plan.deleted",
          "plan.updated",
          "price.created",
          "price.deleted",
          "price.updated",
          "product.created",
          "product.deleted",
          "product.updated",
          "promotion_code.created",
          "promotion_code.updated",
          "quote.accepted",
          "quote.canceled",
          "quote.created",
          "quote.finalized",
          "quote.will_expire",
          "radar.early_fraud_warning.created",
          "radar.early_fraud_warning.updated",
          "refund.created",
          "refund.failed",
          "refund.updated",
          "reporting.report_run.failed",
          "reporting.report_run.succeeded",
          "reporting.report_type.updated",
          "reserve.hold.created",
          "reserve.hold.updated",
          "reserve.plan.created",
          "reserve.plan.disabled",
          "reserve.plan.expired",
          "reserve.plan.updated",
          "reserve.release.created",
          "review.closed",
          "review.opened",
          "setup_intent.canceled",
          "setup_intent.created",
          "setup_intent.requires_action",
          "setup_intent.setup_failed",
          "setup_intent.succeeded",
          "sigma.scheduled_query_run.created",
          "source.canceled",
          "source.chargeable",
          "source.failed",
          "source.mandate_notification",
          "source.refund_attributes_required",
          "source.transaction.created",
          "source.transaction.updated",
          "subscription_schedule.aborted",
          "subscription_schedule.canceled",
          "subscription_schedule.completed",
          "subscription_schedule.created",
          "subscription_schedule.expiring",
          "subscription_schedule.released",
          "subscription_schedule.updated",
          "tax_rate.created",
          "tax_rate.updated",
          "tax.settings.updated",
          "terminal.reader.action_failed",
          "terminal.reader.action_succeeded",
          "terminal.reader.action_updated",
          "test_helpers.test_clock.advancing",
          "test_helpers.test_clock.created",
          "test_helpers.test_clock.deleted",
          "test_helpers.test_clock.internal_failure",
          "test_helpers.test_clock.ready",
          "topup.canceled",
          "topup.created",
          "topup.failed",
          "topup.reversed",
          "topup.succeeded",
          "transfer.created",
          "transfer.reversed",
          "transfer.updated"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "This is a list of all public snapshot events we currently send for /v1 resources, which is continually evolving and expanding.",
          "Stripe events use the resource.event naming convention. Events that occur on subresources like customer.subscription.updated don’t trigger a corresponding event for the parent resource (customer.updated).",
          "Stripe creates event types marked as Selection required only when at least one webhook is listening for it. A webhook set to listen to all events doesn’t satisfy this requirement and won’t generate Selection required event types."
        ]
      }
    ]
  },
  "events-v2": {
    "overviewHeight": 410,
    "objectHeight": 1145,
    "primaryFields": [
      "id",
      "object",
      "changes",
      "context",
      "created",
      "data",
      "livemode",
      "reason",
      "related_object",
      "type"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-v2_events",
        "title": "Events v2",
        "height": 410,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Events are generated to keep you informed of activity in your business account. APIs in the /v2 namespace generate thin events which have small, unversioned payloads that include a reference to the ID of the object that has changed. The Events v2 API returns these new thin events. Retrieve the event object for additional data about the event. Use the related object ID in the event payload to fetch the API resource of the object associated with the event. Comparatively, events generated by most API v1 include a versioned snapshot of an API object in their payload. You can access events through the Retrieve Event API for 30 days."
        ]
      },
      {
        "id": "api-section-v2_event_object",
        "title": "The Event object v2",
        "height": 1145,
        "primaryFields": [
          "id",
          "object",
          "changes",
          "context",
          "created",
          "data",
          "livemode",
          "reason",
          "related_object",
          "type"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-v2_retrieve_events",
        "title": "Retrieve an Event v2",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of an event if it was created in the last 30 days. Supply the unique identifier of the event, which might have been delivered to your event destination.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-v2_list_events",
        "title": "List Events v2",
        "height": 1175,
        "primaryFields": [
          "created",
          "limit",
          "object_id",
          "page",
          "types"
        ],
        "moreFields": [
          "data",
          "next_page_url",
          "previous_page_url"
        ],
        "summaryParagraphs": [
          "List events, going back up to 30 days."
        ]
      },
      {
        "id": "api-section-v2_ping_events",
        "title": "Ping an Event Destination v2",
        "height": 568.375,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Send a ping event to an event destination.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-v2_event_types",
        "title": "Types of events v2",
        "height": 1980.71875,
        "primaryFields": [
          "id",
          "object",
          "context",
          "created",
          "livemode",
          "related_object",
          "type"
        ],
        "moreFields": [
          "changes",
          "data",
          "reason"
        ],
        "summaryParagraphs": [
          "This is a list of all public thin events we currently send for /v1 and /v2 resources, which are continually evolving and expanding. The payload of thin events is unversioned. During processing, you must fetch the versioned event from the API or fetch the resource’s current state."
        ]
      }
    ]
  },
  "event-destinations-v2": {
    "overviewHeight": 532,
    "objectHeight": 2729,
    "primaryFields": [
      "id",
      "object",
      "amazon_eventbridge",
      "azure_event_grid",
      "created",
      "description",
      "enabled_events",
      "event_payload",
      "events_from",
      "livemode",
      "metadata",
      "name",
      "snapshot_api_version",
      "status",
      "status_details",
      "type",
      "updated",
      "webhook_endpoint"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-v2_event_destinations",
        "title": "Event Destinations v2",
        "height": 532,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Set up an event destination to receive events from Stripe across multiple destination types, including webhook endpoints and Amazon EventBridge. Event destinations support receiving thin events and snapshot events."
        ]
      },
      {
        "id": "api-section-v2_event_destination_object",
        "title": "The Event Destination object v2",
        "height": 2729,
        "primaryFields": [
          "id",
          "object",
          "amazon_eventbridge",
          "azure_event_grid",
          "created",
          "description",
          "enabled_events",
          "event_payload",
          "events_from",
          "livemode",
          "metadata",
          "name",
          "snapshot_api_version",
          "status",
          "status_details",
          "type",
          "updated",
          "webhook_endpoint"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-v2_create_event_destinations",
        "title": "Create an Event Destination v2",
        "height": 2764,
        "primaryFields": [
          "enabled_events",
          "event_payload",
          "name",
          "type",
          "amazon_eventbridge",
          "azure_event_grid",
          "description",
          "events_from",
          "include",
          "metadata",
          "snapshot_api_version",
          "webhook_endpoint"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Create a new event destination."
        ]
      },
      {
        "id": "api-section-v2_update_event_destinations",
        "title": "Update an Event Destination v2",
        "height": 1248,
        "primaryFields": [
          "description",
          "enabled_events",
          "include",
          "metadata",
          "name",
          "webhook_endpoint"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Update the details of an event destination."
        ]
      },
      {
        "id": "api-section-v2_retrieve_event_destinations",
        "title": "Retrieve an Event Destination v2",
        "height": 841.1875,
        "primaryFields": [
          "include"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of an event destination."
        ]
      },
      {
        "id": "api-section-v2_list_event_destinations",
        "title": "List Event Destinations v2",
        "height": 1091,
        "primaryFields": [
          "include",
          "limit",
          "page"
        ],
        "moreFields": [
          "data",
          "next_page_url",
          "previous_page_url"
        ],
        "summaryParagraphs": [
          "Lists all event destinations."
        ]
      },
      {
        "id": "api-section-v2_delete_event_destinations",
        "title": "Delete an Event Destination v2",
        "height": 838,
        "primaryFields": [
          "id",
          "object"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Delete an event destination.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-v2_disable_event_destinations",
        "title": "Disable an Event Destination v2",
        "height": 823,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Disable an event destination.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-v2_enable_event_destinations",
        "title": "Enable an Event Destination v2",
        "height": 750.25,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Enable an event destination.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-v2_event_destinations_event_types",
        "title": "Event Destination event types v2",
        "height": 393.71875,
        "primaryFields": [
          "id",
          "object",
          "context",
          "created",
          "livemode",
          "related_object",
          "type"
        ],
        "moreFields": [
          "changes",
          "data",
          "reason"
        ],
        "summaryParagraphs": [
          "This is a list of all public thin events we currently send for updates to Event Destination, which are continually evolving and expanding. The payload of thin events is unversioned. During processing, you must fetch the versioned event from the API or fetch the resource’s current state."
        ]
      }
    ]
  },
  "files": {
    "overviewHeight": 333,
    "objectHeight": 1821,
    "primaryFields": [
      "id",
      "purpose",
      "type"
    ],
    "moreFields": [
      "object",
      "created",
      "expires_at",
      "filename",
      "links",
      "size",
      "title",
      "url"
    ],
    "sections": [
      {
        "id": "api-section-files",
        "title": "Files",
        "height": 333,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "This object represents files hosted on Stripe’s servers. You can upload files with the create file request (for example, when uploading dispute evidence). Stripe also creates files independently (for example, the results of a Sigma scheduled query).",
          "Related guide: File upload guide"
        ]
      },
      {
        "id": "api-section-file_object",
        "title": "The File object",
        "height": 1821,
        "primaryFields": [
          "id",
          "purpose",
          "type"
        ],
        "moreFields": [
          "object",
          "created",
          "expires_at",
          "filename",
          "links",
          "size",
          "title",
          "url"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_file",
        "title": "Create a file",
        "height": 1610,
        "primaryFields": [
          "file",
          "purpose"
        ],
        "moreFields": [
          "file_link_data"
        ],
        "summaryParagraphs": [
          "To upload a file to Stripe, you need to send a request of type multipart/form-data. Include the file you want to upload in the request, and the parameters for creating a file.",
          "All of Stripe’s officially supported Client libraries support sending multipart/form-data."
        ]
      },
      {
        "id": "api-section-retrieve_file",
        "title": "Retrieve a file",
        "height": 604.75,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to access file contents.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_files",
        "title": "List all files",
        "height": 809,
        "primaryFields": [
          "purpose"
        ],
        "moreFields": [
          "created",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top."
        ]
      }
    ]
  },
  "file-links": {
    "overviewHeight": 364,
    "objectHeight": 908,
    "primaryFields": [
      "id",
      "expires_at",
      "file",
      "metadata",
      "url"
    ],
    "moreFields": [
      "object",
      "created",
      "expired",
      "livemode"
    ],
    "sections": [
      {
        "id": "api-section-file_links",
        "title": "File Links",
        "height": 364,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "To share the contents of a File object with non-Stripe users, you can create a FileLink. FileLinks contain a URL that you can use to retrieve the contents of the file without authentication."
        ]
      },
      {
        "id": "api-section-file_link_object",
        "title": "The File Link object",
        "height": 908,
        "primaryFields": [
          "id",
          "expires_at",
          "file",
          "metadata",
          "url"
        ],
        "moreFields": [
          "object",
          "created",
          "expired",
          "livemode"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_file_link",
        "title": "Create a file link",
        "height": 766,
        "primaryFields": [
          "file",
          "expires_at",
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a new file link object."
        ]
      },
      {
        "id": "api-section-update_file_link",
        "title": "Update a file link",
        "height": 616,
        "primaryFields": [
          "expires_at",
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Updates an existing file link object. Expired links can no longer be updated."
        ]
      },
      {
        "id": "api-section-retrieve_file_link",
        "title": "Retrieve a file link",
        "height": 477.4375,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the file link with the given ID.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_file_links",
        "title": "List all file links",
        "height": 842,
        "primaryFields": [
          "created",
          "ending_before",
          "expired",
          "file",
          "limit",
          "starting_after"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Returns a list of file links.",
          "No parameters."
        ]
      }
    ]
  },
  "mandates": {
    "overviewHeight": 236,
    "objectHeight": 1638,
    "primaryFields": [
      "id",
      "customer_acceptance",
      "payment_method",
      "payment_method_details",
      "status",
      "type"
    ],
    "moreFields": [
      "object",
      "livemode",
      "multi_use",
      "on_behalf_of",
      "single_use"
    ],
    "sections": [
      {
        "id": "api-section-mandates",
        "title": "Mandates",
        "height": 236,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A Mandate is a record of the permission that your customer gives you to debit their payment method."
        ]
      },
      {
        "id": "api-section-mandate_object",
        "title": "The Mandate object",
        "height": 1638,
        "primaryFields": [
          "id",
          "customer_acceptance",
          "payment_method",
          "payment_method_details",
          "status",
          "type"
        ],
        "moreFields": [
          "object",
          "livemode",
          "multi_use",
          "on_behalf_of",
          "single_use"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-retrieve_mandate",
        "title": "Retrieve a Mandate",
        "height": 722.875,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a Mandate object.",
          "No parameters."
        ]
      }
    ]
  },
  "payment-intents": {
    "overviewHeight": 837,
    "objectHeight": 5472,
    "primaryFields": [
      "id",
      "amount",
      "automatic_payment_methods",
      "client_secret",
      "currency",
      "customer",
      "customer_account",
      "description",
      "last_payment_error",
      "latest_charge",
      "metadata",
      "next_action",
      "payment_method",
      "receipt_email",
      "setup_future_usage",
      "shipping",
      "statement_descriptor",
      "statement_descriptor_suffix",
      "status"
    ],
    "moreFields": [
      "object",
      "allowed_payment_method_types",
      "amount_capturable",
      "amount_details",
      "amount_received",
      "application",
      "application_fee_amount",
      "canceled_at",
      "cancellation_reason",
      "capture_method",
      "confirmation_method",
      "created",
      "excluded_payment_method_types",
      "hooks",
      "livemode",
      "managed_payments",
      "on_behalf_of",
      "payment_details",
      "payment_method_configuration_details",
      "payment_method_options",
      "payment_method_types",
      "presentment_details",
      "processing",
      "review",
      "transfer_data",
      "transfer_group"
    ],
    "sections": [
      {
        "id": "api-section-payment_intents",
        "title": "Payment Intents",
        "height": 837,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A PaymentIntent guides you through the process of collecting a payment from your customer. We recommend that you create exactly one PaymentIntent for each order or customer session in your system. You can reference the PaymentIntent later to see the history of payment attempts for a particular session.",
          "A PaymentIntent transitions through multiple statuses throughout its lifetime as it interfaces with Stripe.js to perform authentication flows and ultimately creates at most one successful charge.",
          "Related guide: Payment Intents API"
        ]
      },
      {
        "id": "api-section-payment_intent_object",
        "title": "The PaymentIntent object",
        "height": 5472,
        "primaryFields": [
          "id",
          "amount",
          "automatic_payment_methods",
          "client_secret",
          "currency",
          "customer",
          "customer_account",
          "description",
          "last_payment_error",
          "latest_charge",
          "metadata",
          "next_action",
          "payment_method",
          "receipt_email",
          "setup_future_usage",
          "shipping",
          "statement_descriptor",
          "statement_descriptor_suffix",
          "status"
        ],
        "moreFields": [
          "object",
          "allowed_payment_method_types",
          "amount_capturable",
          "amount_details",
          "amount_received",
          "application",
          "application_fee_amount",
          "canceled_at",
          "cancellation_reason",
          "capture_method",
          "confirmation_method",
          "created",
          "excluded_payment_method_types",
          "hooks",
          "livemode",
          "managed_payments",
          "on_behalf_of",
          "payment_details",
          "payment_method_configuration_details",
          "payment_method_options",
          "payment_method_types",
          "presentment_details",
          "processing",
          "review",
          "transfer_data",
          "transfer_group"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_payment_intent",
        "title": "Create a PaymentIntent",
        "height": 4557,
        "primaryFields": [
          "amount",
          "currency",
          "automatic_payment_methods",
          "confirm",
          "customer",
          "customer_account",
          "description",
          "metadata",
          "off_session",
          "payment_method",
          "receipt_email",
          "setup_future_usage",
          "shipping",
          "statement_descriptor",
          "statement_descriptor_suffix"
        ],
        "moreFields": [
          "allowed_payment_method_types",
          "amount_details",
          "application_fee_amount",
          "capture_method",
          "confirmation_method",
          "confirmation_token",
          "error_on_requires_action",
          "excluded_payment_method_types",
          "hooks",
          "mandate",
          "mandate_data",
          "on_behalf_of",
          "payment_details",
          "payment_method_configuration",
          "payment_method_data",
          "payment_method_options",
          "payment_method_types",
          "radar_options",
          "return_url",
          "transfer_data",
          "transfer_group",
          "use_stripe_sdk"
        ],
        "summaryParagraphs": [
          "Creates a PaymentIntent object.",
          "After the PaymentIntent is created, attach a payment method and confirm to continue the payment. Learn more about the available payment flows with the Payment Intents API.",
          "When you use confirm=true during creation, it’s equivalent to creating and confirming the PaymentIntent in the same call. You can use any parameters available in the confirm API when you supply confirm=true."
        ]
      },
      {
        "id": "api-section-update_payment_intent",
        "title": "Update a PaymentIntent",
        "height": 3539,
        "primaryFields": [
          "amount",
          "currency",
          "customer",
          "customer_account",
          "description",
          "metadata",
          "payment_method",
          "receipt_email",
          "setup_future_usage",
          "shipping",
          "statement_descriptor",
          "statement_descriptor_suffix"
        ],
        "moreFields": [
          "allowed_payment_method_types",
          "amount_details",
          "application_fee_amount",
          "capture_method",
          "excluded_payment_method_types",
          "hooks",
          "payment_details",
          "payment_method_configuration",
          "payment_method_data",
          "payment_method_options",
          "payment_method_types",
          "transfer_data",
          "transfer_group"
        ],
        "summaryParagraphs": [
          "Updates properties on a PaymentIntent object without confirming.",
          "Depending on which properties you update, you might need to confirm the PaymentIntent again. For example, updating the payment_method always requires you to confirm the PaymentIntent again. If you prefer to update and confirm at the same time, we recommend updating properties through the confirm API instead."
        ]
      },
      {
        "id": "api-section-retrieve_payment_intent",
        "title": "Retrieve a PaymentIntent",
        "height": 886,
        "primaryFields": [
          "client_secret"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of a PaymentIntent that has previously been created.",
          "You can retrieve a PaymentIntent client-side using a publishable key when the client_secret is in the query string.",
          "If you retrieve a PaymentIntent with a publishable key, it only returns a subset of properties. Refer to the payment intent object reference for more details."
        ]
      },
      {
        "id": "api-section-list_payment_intents",
        "title": "List all PaymentIntents",
        "height": 893,
        "primaryFields": [
          "customer",
          "customer_account"
        ],
        "moreFields": [
          "created",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of PaymentIntents."
        ]
      },
      {
        "id": "api-section-list_payment_intents_amount_details_line_items",
        "title": "List all PaymentIntent LineItems",
        "height": 680,
        "primaryFields": [
          "ending_before",
          "limit",
          "starting_after"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Lists all LineItems of a given PaymentIntent.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-cancel_payment_intent",
        "title": "Cancel a PaymentIntent",
        "height": 886,
        "primaryFields": [
          "cancellation_reason"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "You can cancel a PaymentIntent object when it’s in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action or, in rare cases, processing.",
          "After it’s canceled, no additional charges are made by the PaymentIntent and any operations on the PaymentIntent fail with an error. For PaymentIntents with a status of requires_capture, the remaining amount_capturable is automatically refunded.",
          "You can directly cancel the PaymentIntent for a Checkout Session only when the PaymentIntent has a status of requires_capture. Otherwise, you must expire the Checkout Session."
        ]
      },
      {
        "id": "api-section-capture_payment_intent",
        "title": "Capture a PaymentIntent",
        "height": 1269,
        "primaryFields": [
          "amount_to_capture",
          "metadata"
        ],
        "moreFields": [
          "amount_details",
          "application_fee_amount",
          "final_capture",
          "hooks",
          "payment_details",
          "statement_descriptor",
          "statement_descriptor_suffix",
          "transfer_data"
        ],
        "summaryParagraphs": [
          "Capture the funds of an existing uncaptured PaymentIntent when its status is requires_capture.",
          "Uncaptured PaymentIntents are cancelled a set number of days (7 by default) after their creation.",
          "Learn more about separate authorization and capture."
        ]
      },
      {
        "id": "api-section-confirm_payment_intent",
        "title": "Confirm a PaymentIntent",
        "height": 2827,
        "primaryFields": [
          "payment_method",
          "receipt_email",
          "setup_future_usage",
          "shipping"
        ],
        "moreFields": [
          "allowed_payment_method_types",
          "amount_details",
          "capture_method",
          "confirmation_token",
          "error_on_requires_action",
          "excluded_payment_method_types",
          "hooks",
          "mandate",
          "mandate_data",
          "off_session",
          "payment_details",
          "payment_method_data",
          "payment_method_options",
          "payment_method_types",
          "radar_options",
          "return_url",
          "use_stripe_sdk"
        ],
        "summaryParagraphs": [
          "Confirm that your customer intends to pay with current or provided payment method. Upon confirmation, the PaymentIntent will attempt to initiate a payment.",
          "If the selected payment method requires additional authentication steps, the PaymentIntent will transition to the requires_action status and suggest additional actions via next_action. If payment fails, the PaymentIntent transitions to the requires_payment_method status or the canceled status if the confirmation limit is reached.  If payment succeeds, the PaymentIntent will transition to the succeeded status (or requires_capture, if capture_method is set to manual).",
          "If the confirmation_method is automatic, payment may be attempted using our client SDKs and the PaymentIntent’s client_secret. After next_actions are handled by the client, no additional confirmation is required to complete the payment.",
          "If the confirmation_method is manual, all payment attempts must be initiated using a secret key.",
          "If any actions are required for the payment, the PaymentIntent will return to the requires_confirmation state after those actions are completed. Your server needs to then explicitly re-confirm the PaymentIntent to initiate the next payment attempt.",
          "There is a variable upper limit on how many times a PaymentIntent can be confirmed. After this limit is reached, any further calls to this endpoint will transition the PaymentIntent to the canceled state."
        ]
      },
      {
        "id": "api-section-increment_authorization",
        "title": "Increment an authorization",
        "height": 1589,
        "primaryFields": [
          "amount",
          "description",
          "metadata",
          "statement_descriptor"
        ],
        "moreFields": [
          "amount_details",
          "application_fee_amount",
          "hooks",
          "payment_details",
          "transfer_data"
        ],
        "summaryParagraphs": [
          "Perform an incremental authorization on an eligible PaymentIntent. To be eligible, the PaymentIntent’s status must be requires_capture and incremental_authorization_supported must be true.",
          "Incremental authorizations attempt to increase the authorized amount on your customer’s card to the new, higher amount provided. Similar to the initial authorization, incremental authorizations can be declined. A single PaymentIntent can call this endpoint multiple times to further increase the authorized amount.",
          "If the incremental authorization succeeds, the PaymentIntent object returns with the updated amount. If the incremental authorization fails, a card_declined error returns, and no other fields on the PaymentIntent or Charge update. The PaymentIntent object remains capturable for the previously authorized amount.",
          "Each PaymentIntent can have a maximum of 10 incremental authorization attempts, including declines. After it’s captured, a PaymentIntent can no longer be incremented.",
          "Learn more about incremental authorizations with in-person payments and online payments."
        ]
      },
      {
        "id": "api-section-apply_customer_balance",
        "title": "Reconcile a customer_balance PaymentIntent",
        "height": 886,
        "primaryFields": [
          "amount",
          "currency"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Manually reconcile the remaining amount for a customer_balance PaymentIntent."
        ]
      },
      {
        "id": "api-section-search_payment_intents",
        "title": "Search PaymentIntents",
        "height": 886,
        "primaryFields": [
          "query",
          "limit",
          "page"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Search for PaymentIntents you’ve previously created using Stripe’s Search Query Language. Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up to an hour behind during outages. Search functionality is not available to merchants in India."
        ]
      },
      {
        "id": "api-section-verify_microdeposits_payment_intent",
        "title": "Verify microdeposits on a PaymentIntent",
        "height": 886,
        "primaryFields": [
          "amounts",
          "descriptor_code"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Verifies microdeposits on a PaymentIntent object."
        ]
      }
    ]
  },
  "persons-v2": {
    "overviewHeight": 420,
    "objectHeight": 3197,
    "primaryFields": [
      "id",
      "object",
      "account",
      "additional_addresses",
      "additional_names",
      "additional_terms_of_service",
      "address",
      "created",
      "date_of_birth",
      "documents",
      "email",
      "given_name",
      "id_numbers",
      "legal_gender",
      "livemode",
      "metadata",
      "nationalities",
      "phone",
      "political_exposure",
      "relationship",
      "script_addresses",
      "script_names",
      "surname",
      "updated"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-v2_persons",
        "title": "Persons v2",
        "height": 420,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A Person represents an individual associated with an Account’s identity (for example, an owner, director, executive, or representative). Use Persons to provide and update identity information for verification and compliance."
        ]
      },
      {
        "id": "api-section-v2_person_object",
        "title": "The Person object v2",
        "height": 3197,
        "primaryFields": [
          "id",
          "object",
          "account",
          "additional_addresses",
          "additional_names",
          "additional_terms_of_service",
          "address",
          "created",
          "date_of_birth",
          "documents",
          "email",
          "given_name",
          "id_numbers",
          "legal_gender",
          "livemode",
          "metadata",
          "nationalities",
          "phone",
          "political_exposure",
          "relationship",
          "script_addresses",
          "script_names",
          "surname",
          "updated"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-v2_create_persons",
        "title": "Create a person v2",
        "height": 7090,
        "primaryFields": [
          "additional_addresses",
          "additional_names",
          "additional_terms_of_service",
          "address",
          "date_of_birth",
          "documents",
          "email",
          "given_name",
          "id_numbers",
          "legal_gender",
          "metadata",
          "nationalities",
          "person_token",
          "phone",
          "political_exposure",
          "relationship",
          "script_addresses",
          "script_names",
          "surname"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Create a Person. Adds an individual to an Account’s identity. You can set relationship attributes and identity information at creation."
        ]
      },
      {
        "id": "api-section-v2_update_persons",
        "title": "Update a person v2",
        "height": 6904,
        "primaryFields": [
          "additional_addresses",
          "additional_names",
          "additional_terms_of_service",
          "address",
          "date_of_birth",
          "documents",
          "email",
          "given_name",
          "id_numbers",
          "legal_gender",
          "metadata",
          "nationalities",
          "person_token",
          "phone",
          "political_exposure",
          "relationship",
          "script_addresses",
          "script_names",
          "surname"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Updates a Person associated with an Account."
        ]
      },
      {
        "id": "api-section-v2_retrieve_persons",
        "title": "Retrieve a person v2",
        "height": 1031,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a Person associated with an Account.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-v2_list_persons",
        "title": "List persons v2",
        "height": 1433,
        "primaryFields": [
          "limit",
          "page"
        ],
        "moreFields": [
          "data",
          "next_page_url",
          "previous_page_url"
        ],
        "summaryParagraphs": [
          "Returns a paginated list of Persons associated with an Account."
        ]
      },
      {
        "id": "api-section-v2_delete_persons",
        "title": "Delete a person v2",
        "height": 1248,
        "primaryFields": [
          "id",
          "object"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Delete a Person associated with an Account.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-v2_people_event_types",
        "title": "Person event types v2",
        "height": 531.71875,
        "primaryFields": [
          "id",
          "object",
          "context",
          "created",
          "livemode",
          "related_object",
          "type"
        ],
        "moreFields": [
          "changes",
          "data",
          "reason"
        ],
        "summaryParagraphs": [
          "This is a list of all public thin events we currently send for updates to Person, which are continually evolving and expanding. The payload of thin events is unversioned. During processing, you must fetch the versioned event from the API or fetch the resource’s current state."
        ]
      }
    ]
  },
  "person-tokens-v2": {
    "overviewHeight": 278,
    "objectHeight": 759,
    "primaryFields": [
      "id",
      "object",
      "created",
      "expires_at",
      "livemode",
      "used"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-v2_person_tokens",
        "title": "Person Tokens v2",
        "height": 278,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Person Tokens are single-use tokens which tokenize person information, and are used for creating or updating a Person."
        ]
      },
      {
        "id": "api-section-v2_person_token_object",
        "title": "The Person Token object v2",
        "height": 759,
        "primaryFields": [
          "id",
          "object",
          "created",
          "expires_at",
          "livemode",
          "used"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-v2_create_person_tokens",
        "title": "Create a person token v2",
        "height": 3296,
        "primaryFields": [
          "additional_addresses",
          "additional_names",
          "additional_terms_of_service",
          "address",
          "date_of_birth",
          "documents",
          "email",
          "given_name",
          "id_numbers",
          "legal_gender",
          "metadata",
          "nationalities",
          "phone",
          "political_exposure",
          "relationship",
          "script_addresses",
          "script_names",
          "surname"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a single-use token that represents the details for a person. Use this when you create or update persons associated with an Account v2. Learn more about account tokens. You can only create person tokens with your application’s publishable key and in live mode. You can use your application’s secret key to create person tokens only in test mode."
        ]
      },
      {
        "id": "api-section-v2_retrieve_person_tokens",
        "title": "Retrieve a person token v2",
        "height": 743,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a Person Token associated with an Account.",
          "No parameters."
        ]
      }
    ]
  },
  "setup-intents": {
    "overviewHeight": 644,
    "objectHeight": 3016,
    "primaryFields": [
      "id",
      "automatic_payment_methods",
      "client_secret",
      "customer",
      "customer_account",
      "description",
      "last_setup_error",
      "metadata",
      "next_action",
      "payment_method",
      "status",
      "usage"
    ],
    "moreFields": [
      "object",
      "allowed_payment_method_types",
      "application",
      "attach_to_self",
      "cancellation_reason",
      "created",
      "excluded_payment_method_types",
      "flow_directions",
      "latest_attempt",
      "livemode",
      "mandate",
      "on_behalf_of",
      "payment_method_configuration_details",
      "payment_method_options",
      "payment_method_types",
      "single_use_mandate"
    ],
    "sections": [
      {
        "id": "api-section-setup_intents",
        "title": "Setup Intents",
        "height": 644,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A SetupIntent guides you through the process of setting up and saving a customer’s payment credentials for future payments. For example, you can use a SetupIntent to set up and save your customer’s card without immediately collecting a payment. Later, you can use PaymentIntents to drive the payment flow.",
          "Create a SetupIntent when you’re ready to collect your customer’s payment credentials. Don’t maintain long-lived, unconfirmed SetupIntents because they might not be valid. The SetupIntent transitions through multiple statuses as it guides you through the setup process.",
          "Successful SetupIntents result in payment credentials that are optimized for future payments. For example, cardholders in certain regions might need to be run through Strong Customer Authentication during payment method collection to streamline later off-session payments. If you use the SetupIntent with a Customer, it automatically attaches the resulting payment method to that Customer after successful setup. We recommend using SetupIntents or setup_future_usage on PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.",
          "By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.",
          "Related guide: Setup Intents API"
        ]
      },
      {
        "id": "api-section-setup_intent_object",
        "title": "The SetupIntent object",
        "height": 3016,
        "primaryFields": [
          "id",
          "automatic_payment_methods",
          "client_secret",
          "customer",
          "customer_account",
          "description",
          "last_setup_error",
          "metadata",
          "next_action",
          "payment_method",
          "status",
          "usage"
        ],
        "moreFields": [
          "object",
          "allowed_payment_method_types",
          "application",
          "attach_to_self",
          "cancellation_reason",
          "created",
          "excluded_payment_method_types",
          "flow_directions",
          "latest_attempt",
          "livemode",
          "mandate",
          "on_behalf_of",
          "payment_method_configuration_details",
          "payment_method_options",
          "payment_method_types",
          "single_use_mandate"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_setup_intent",
        "title": "Create a SetupIntent",
        "height": 2521,
        "primaryFields": [
          "automatic_payment_methods",
          "confirm",
          "customer",
          "customer_account",
          "description",
          "metadata",
          "payment_method",
          "usage"
        ],
        "moreFields": [
          "allowed_payment_method_types",
          "attach_to_self",
          "confirmation_token",
          "excluded_payment_method_types",
          "flow_directions",
          "mandate_data",
          "on_behalf_of",
          "payment_method_configuration",
          "payment_method_data",
          "payment_method_options",
          "payment_method_types",
          "return_url",
          "single_use",
          "use_stripe_sdk"
        ],
        "summaryParagraphs": [
          "Creates a SetupIntent object.",
          "After you create the SetupIntent, attach a payment method and confirm it to collect any required permissions to charge the payment method later."
        ]
      },
      {
        "id": "api-section-update_setup_intent",
        "title": "Update a SetupIntent",
        "height": 1521,
        "primaryFields": [
          "customer",
          "customer_account",
          "description",
          "metadata",
          "payment_method"
        ],
        "moreFields": [
          "allowed_payment_method_types",
          "attach_to_self",
          "excluded_payment_method_types",
          "flow_directions",
          "payment_method_configuration",
          "payment_method_data",
          "payment_method_options",
          "payment_method_types"
        ],
        "summaryParagraphs": [
          "Updates a SetupIntent object."
        ]
      },
      {
        "id": "api-section-retrieve_setup_intent",
        "title": "Retrieve a SetupIntent",
        "height": 859.375,
        "primaryFields": [
          "client_secret"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of a SetupIntent that has previously been created.",
          "Client-side retrieval using a publishable key is allowed when the client_secret is provided in the query string.",
          "When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the SetupIntent object reference for more details."
        ]
      },
      {
        "id": "api-section-list_setup_intents",
        "title": "List all SetupIntents",
        "height": 987,
        "primaryFields": [
          "customer",
          "customer_account",
          "payment_method"
        ],
        "moreFields": [
          "attach_to_self",
          "created",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of SetupIntents."
        ]
      },
      {
        "id": "api-section-cancel_setup_intent",
        "title": "Cancel a SetupIntent",
        "height": 859.375,
        "primaryFields": [
          "cancellation_reason"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "You can cancel a SetupIntent object when it’s in one of these statuses: requires_payment_method, requires_confirmation, or requires_action.",
          "After you cancel it, setup is abandoned and any operations on the SetupIntent fail with an error. You can’t cancel the SetupIntent for a Checkout Session. Expire the Checkout Session instead."
        ]
      },
      {
        "id": "api-section-confirm_setup_intent",
        "title": "Confirm a SetupIntent",
        "height": 2158,
        "primaryFields": [
          "allowed_payment_method_types",
          "payment_method"
        ],
        "moreFields": [
          "confirmation_token",
          "mandate_data",
          "payment_method_data",
          "payment_method_options",
          "return_url",
          "use_stripe_sdk"
        ],
        "summaryParagraphs": [
          "Confirm that your customer intends to set up the current or provided payment method. For example, you would confirm a SetupIntent when a customer hits the “Save” button on a payment method management page on your website.",
          "If the selected payment method does not require any additional steps from the customer, the SetupIntent will transition to the succeeded status.",
          "Otherwise, it will transition to the requires_action status and suggest additional actions via next_action. If setup fails, the SetupIntent will transition to the requires_payment_method status or the canceled status if the confirmation limit is reached."
        ]
      },
      {
        "id": "api-section-verify_microdeposits_setup_intent",
        "title": "Verify microdeposits on a SetupIntent",
        "height": 886,
        "primaryFields": [
          "amounts",
          "descriptor_code"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Verifies microdeposits on a SetupIntent object."
        ]
      }
    ]
  },
  "setup-attempts": {
    "overviewHeight": 258,
    "objectHeight": 2081,
    "primaryFields": [
      "id",
      "object",
      "application",
      "attach_to_self",
      "created",
      "customer",
      "customer_account",
      "flow_directions",
      "livemode",
      "on_behalf_of",
      "payment_method",
      "payment_method_details",
      "setup_error",
      "setup_intent",
      "status",
      "usage"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-setup_attempts",
        "title": "Setup Attempts",
        "height": 258,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A SetupAttempt describes one attempted confirmation of a SetupIntent, whether that confirmation is successful or unsuccessful. You can use SetupAttempts to inspect details of a specific attempt at setting up a payment method using a SetupIntent."
        ]
      },
      {
        "id": "api-section-setup_attempt_object",
        "title": "The SetupAttempt object",
        "height": 2081,
        "primaryFields": [
          "id",
          "object",
          "application",
          "attach_to_self",
          "created",
          "customer",
          "customer_account",
          "flow_directions",
          "livemode",
          "on_behalf_of",
          "payment_method",
          "payment_method_details",
          "setup_error",
          "setup_intent",
          "status",
          "usage"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-list_setup_attempts",
        "title": "List all SetupAttempts",
        "height": 823,
        "primaryFields": [
          "setup_intent"
        ],
        "moreFields": [
          "created",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of SetupAttempts that associate with a provided SetupIntent."
        ]
      }
    ]
  },
  "stripe-balance-debit-agreement": {
    "overviewHeight": 308,
    "objectHeight": 1345,
    "primaryFields": [
      "id",
      "object",
      "financial_account",
      "livemode",
      "multi_use",
      "seller_network_business_profile",
      "single_use",
      "status"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-stripe_balance_debit_agreements",
        "title": "Stripe Balance Debit Agreement",
        "height": 308,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A Stripe Balance Debit Agreement represents the permission for a Stripe account to debit funds from another Stripe account’s balance. The debit agreement token can be passed in payment_method_options to create a Stripe Balance payment method and mandate via SetupIntent or PaymentIntent APIs."
        ]
      },
      {
        "id": "api-section-stripe_balance_debit_agreement_object",
        "title": "The StripeBalanceDebitAgreement object",
        "height": 1345,
        "primaryFields": [
          "id",
          "object",
          "financial_account",
          "livemode",
          "multi_use",
          "seller_network_business_profile",
          "single_use",
          "status"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_stripe_balance_debit_agreement",
        "title": "Create a StripeBalanceDebitAgreement",
        "height": 854,
        "primaryFields": [
          "seller_network_business_profile",
          "financial_account",
          "multi_use",
          "single_use"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a Stripe Balance Debit Agreement granting permission to debit from a financial account’s balance via the Stripe Balance payment method. The returned token can be used in payment_method_options[stripe_balance][mandate_options] to generate a payment method and mandate."
        ]
      },
      {
        "id": "api-section-retrieve_stripe_balance_debit_agreement",
        "title": "Retrieve a StripeBalanceDebitAgreement",
        "height": 514.8125,
        "primaryFields": [
          "id"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a Stripe Balance Debit Agreement by its ID."
        ]
      },
      {
        "id": "api-section-revoke_stripe_balance_debit_agreement",
        "title": "Revoke a StripeBalanceDebitAgreement",
        "height": 514.8125,
        "primaryFields": [
          "id"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Revokes a Stripe Balance Debit Agreement, preventing further use for creating payment methods."
        ]
      }
    ]
  },
  "payouts": {
    "overviewHeight": 501,
    "objectHeight": 2102,
    "primaryFields": [
      "id",
      "amount",
      "arrival_date",
      "currency",
      "description",
      "metadata",
      "statement_descriptor",
      "status"
    ],
    "moreFields": [
      "object",
      "application_fee",
      "application_fee_amount",
      "automatic",
      "balance_transaction",
      "created",
      "destination",
      "failure_balance_transaction",
      "failure_code",
      "failure_message",
      "livemode",
      "method",
      "original_payout",
      "payout_method",
      "reconciliation_status",
      "reversed_by",
      "source_type",
      "trace_id",
      "type"
    ],
    "sections": [
      {
        "id": "api-section-payouts",
        "title": "Payouts",
        "height": 501,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A Payout object is created when you receive funds from Stripe, or when you initiate a payout to either a bank account or debit card of a connected Stripe account. You can retrieve individual payouts, and list all payouts. Payouts are made on varying schedules, depending on your country and industry.",
          "Related guide: Receiving payouts"
        ]
      },
      {
        "id": "api-section-payout_object",
        "title": "The Payout object",
        "height": 2102,
        "primaryFields": [
          "id",
          "amount",
          "arrival_date",
          "currency",
          "description",
          "metadata",
          "statement_descriptor",
          "status"
        ],
        "moreFields": [
          "object",
          "application_fee",
          "application_fee_amount",
          "automatic",
          "balance_transaction",
          "created",
          "destination",
          "failure_balance_transaction",
          "failure_code",
          "failure_message",
          "livemode",
          "method",
          "original_payout",
          "payout_method",
          "reconciliation_status",
          "reversed_by",
          "source_type",
          "trace_id",
          "type"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_payout",
        "title": "Create a payout",
        "height": 1437,
        "primaryFields": [
          "amount",
          "currency",
          "description",
          "metadata",
          "statement_descriptor"
        ],
        "moreFields": [
          "destination",
          "method",
          "payout_method",
          "source_type"
        ],
        "summaryParagraphs": [
          "To send funds to your own bank account, create a new payout object. Your Stripe balance must cover the payout amount. If it doesn’t, you receive an “Insufficient Funds” error.",
          "If your API key is in test mode, money won’t actually be sent, though every other action occurs as if you’re in live mode.",
          "If you create a manual payout on a Stripe account that uses multiple payment source types, you need to specify the source type balance that the payout draws from. The balance object details available and pending amounts by source type."
        ]
      },
      {
        "id": "api-section-update_payout",
        "title": "Update a payout",
        "height": 786.625,
        "primaryFields": [
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Updates the specified payout by setting the values of the parameters you pass. We don’t change parameters that you don’t provide. This request only accepts the metadata as arguments."
        ]
      },
      {
        "id": "api-section-retrieve_payout",
        "title": "Retrieve a payout",
        "height": 732.0625,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list. Stripe returns the corresponding payout information.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_payouts",
        "title": "List all payouts",
        "height": 917,
        "primaryFields": [
          "status"
        ],
        "moreFields": [
          "arrival_date",
          "created",
          "destination",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of existing payouts sent to third-party bank accounts or payouts that Stripe sent to you. The payouts return in sorted order, with the most recently created payouts appearing first."
        ]
      },
      {
        "id": "api-section-cancel_payout",
        "title": "Cancel a payout",
        "height": 732.0625,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "You can cancel a previously created payout if its status is pending. Stripe refunds the funds to your available balance. You can’t cancel automatic Stripe payouts.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-reverse_payout",
        "title": "Reverse a payout",
        "height": 732.0625,
        "primaryFields": [
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Reverses a payout by debiting the destination bank account. At this time, you can only reverse payouts for connected accounts to US and Canadian bank accounts. If the payout is manual and in the pending status, use /v1/payouts/:id/cancel instead.",
          "By requesting a reversal through /v1/payouts/:id/reverse, you confirm that the authorized signatory of the selected bank account authorizes the debit on the bank account and that no other authorization is required."
        ]
      }
    ]
  },
  "refunds": {
    "overviewHeight": 445,
    "objectHeight": 1742,
    "primaryFields": [
      "id",
      "amount",
      "charge",
      "currency",
      "description",
      "metadata",
      "payment_intent",
      "reason",
      "status"
    ],
    "moreFields": [
      "object",
      "balance_transaction",
      "created",
      "destination_details",
      "failure_balance_transaction",
      "failure_reason",
      "instructions_email",
      "next_action",
      "pending_reason",
      "receipt_number",
      "source_transfer_reversal",
      "transfer_reversal"
    ],
    "sections": [
      {
        "id": "api-section-refunds",
        "title": "Refunds",
        "height": 445,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Refund objects allow you to refund a previously created charge that isn’t refunded yet. Funds are refunded to the credit or debit card that’s initially charged.",
          "Related guide: Refunds"
        ]
      },
      {
        "id": "api-section-refund_object",
        "title": "The Refund object",
        "height": 1742,
        "primaryFields": [
          "id",
          "amount",
          "charge",
          "currency",
          "description",
          "metadata",
          "payment_intent",
          "reason",
          "status"
        ],
        "moreFields": [
          "object",
          "balance_transaction",
          "created",
          "destination_details",
          "failure_balance_transaction",
          "failure_reason",
          "instructions_email",
          "next_action",
          "pending_reason",
          "receipt_number",
          "source_transfer_reversal",
          "transfer_reversal"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_refund",
        "title": "Create a refund",
        "height": 1451,
        "primaryFields": [
          "amount",
          "charge",
          "metadata",
          "payment_intent",
          "reason"
        ],
        "moreFields": [
          "instructions_email",
          "origin",
          "refund_application_fee",
          "reverse_transfer"
        ],
        "summaryParagraphs": [
          "When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.",
          "Creating a new refund will refund a charge that has previously been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged.",
          "You can optionally refund only part of a charge. You can do so multiple times, until the entire charge has been refunded.",
          "Once entirely refunded, a charge can’t be refunded again. This method will raise an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge."
        ]
      },
      {
        "id": "api-section-update_refund",
        "title": "Update a refund",
        "height": 786.625,
        "primaryFields": [
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Updates the refund that you specify by setting the values of the passed parameters. Any parameters that you don’t provide remain unchanged.",
          "This request only accepts metadata as an argument."
        ]
      },
      {
        "id": "api-section-retrieve_refund",
        "title": "Retrieve a refund",
        "height": 732.0625,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of an existing refund.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_refunds",
        "title": "List all refunds",
        "height": 915,
        "primaryFields": [
          "charge",
          "payment_intent"
        ],
        "moreFields": [
          "created",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object."
        ]
      },
      {
        "id": "api-section-cancel_refund",
        "title": "Cancel a refund",
        "height": 604.75,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Cancels a refund with a status of requires_action.",
          "You can’t cancel refunds in other states. Only refunds for payment methods that require customer action can enter the requires_action state.",
          "No parameters."
        ]
      }
    ]
  },
  "confirmation-token": {
    "overviewHeight": 366,
    "objectHeight": 2015,
    "primaryFields": [
      "id",
      "object",
      "created",
      "expires_at",
      "livemode",
      "mandate_data",
      "payment_intent",
      "payment_method_options",
      "payment_method_preview",
      "return_url",
      "setup_future_usage",
      "setup_intent",
      "shipping",
      "use_stripe_sdk"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-confirmation_tokens",
        "title": "Confirmation Token",
        "height": 366,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "ConfirmationTokens help transport client side data collected by Stripe JS over to your server for confirming a PaymentIntent or SetupIntent. If the confirmation is successful, values present on the ConfirmationToken are written onto the Intent.",
          "To learn more about how to use ConfirmationToken, visit the related guides:"
        ]
      },
      {
        "id": "api-section-confirmation_token_object",
        "title": "The Confirmation Token object",
        "height": 2015,
        "primaryFields": [
          "id",
          "object",
          "created",
          "expires_at",
          "livemode",
          "mandate_data",
          "payment_intent",
          "payment_method_options",
          "payment_method_preview",
          "return_url",
          "setup_future_usage",
          "setup_intent",
          "shipping",
          "use_stripe_sdk"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-retrieve_confirmation_token",
        "title": "Retrieve a ConfirmationToken",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves an existing ConfirmationToken object",
          "No parameters."
        ]
      },
      {
        "id": "api-section-test_create",
        "title": "Create a test Confirmation TokenTest helper",
        "height": 1336.03125,
        "primaryFields": [
          "payment_method",
          "payment_method_data",
          "payment_method_options",
          "return_url",
          "setup_future_usage",
          "shipping"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a test mode Confirmation Token server side for your integration tests."
        ]
      }
    ]
  },
  "tokens": {
    "overviewHeight": 550,
    "objectHeight": 896,
    "primaryFields": [
      "id",
      "card"
    ],
    "moreFields": [
      "object",
      "bank_account",
      "client_ip",
      "created",
      "description",
      "livemode",
      "type",
      "used"
    ],
    "sections": [
      {
        "id": "api-section-tokens",
        "title": "Tokens",
        "height": 550,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. A token representing this information is returned to your server to use. Use our recommended payments integrations to perform this process on the client-side. This guarantees that no sensitive card data touches your server, and allows your integration to operate in a PCI-compliant way.",
          "If you can’t use client-side tokenization, you can also create tokens using the API with either your publishable or secret API key. If your integration uses this method, you’re responsible for any PCI compliance that it might require, and you must keep your secret API key safe. Unlike with client-side tokenization, your customer’s information isn’t sent directly to Stripe, so we can’t determine how it’s handled or stored.",
          "You can’t store or use tokens more than once. To store card or bank account information for later use, create Customer objects or External accounts. Radar, our integrated solution for automatic fraud protection, performs best with integrations that use client-side tokenization."
        ]
      },
      {
        "id": "api-section-token_object",
        "title": "The Token object",
        "height": 896,
        "primaryFields": [
          "id",
          "card"
        ],
        "moreFields": [
          "object",
          "bank_account",
          "client_ip",
          "created",
          "description",
          "livemode",
          "type",
          "used"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_bank_account_token",
        "title": "Create a bank account token",
        "height": 832,
        "primaryFields": [
          "bank_account"
        ],
        "moreFields": [
          "customer"
        ],
        "summaryParagraphs": [
          "Creates a single-use token that represents a bank account’s details. You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a connected account where controller.requirement_collection is application, which includes Custom accounts."
        ]
      },
      {
        "id": "api-section-create_card_token",
        "title": "Create a card token",
        "height": 886,
        "primaryFields": [
          "card"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a single-use token that represents a credit card’s details. You can use this token in place of a credit card dictionary with any v1 API method. You can only use these tokens once by creating a new Charge object or by attaching them to a Customer object.",
          "To use this functionality, you need to enable access to the raw card data APIs. In most cases, you can use our recommended payments integrations instead of using the API."
        ]
      },
      {
        "id": "api-section-create_cvc_update_token",
        "title": "Create a CVC update token",
        "height": 614,
        "primaryFields": [
          "cvc_update"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a single-use token that represents an updated CVC value that you can use for CVC re-collection. Use this token when you confirm a card payment or use a saved card on a PaymentIntent with confirmation_method: manual.",
          "For most cases, use our JavaScript library instead of using the API. For a PaymentIntent with confirmation_method: automatic, use our recommended payments integration without tokenizing the CVC value."
        ]
      },
      {
        "id": "api-section-create_person_token",
        "title": "Create a person token",
        "height": 614,
        "primaryFields": [
          "person"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a single-use token that represents the details for a person. Use this when you create or update persons associated with a Connect account. Learn more about account tokens.",
          "You can only create person tokens with your application’s publishable key and in live mode. You can use your application’s secret key to create person tokens only in test mode."
        ]
      },
      {
        "id": "api-section-create_pii_token",
        "title": "Create a PII token",
        "height": 556,
        "primaryFields": [
          "pii"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a single-use token that represents the details of personally identifiable information (PII). You can use this token in place of an id_number or id_number_secondary in Account or Person Update API methods. You can only use a PII token once."
        ]
      },
      {
        "id": "api-section-create_account_token",
        "title": "Create an account token",
        "height": 570,
        "primaryFields": [
          "account"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a single-use token that wraps a user’s legal entity information. Use this when creating or updating a Connect account. Learn more about account tokens.",
          "In live mode, you can only create account tokens with your application’s publishable key. In test mode, you can only create account tokens with your secret key or publishable key."
        ]
      },
      {
        "id": "api-section-retrieve_token",
        "title": "Retrieve a token",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the token with the given ID.",
          "No parameters."
        ]
      }
    ]
  },
  "payment-methods": {
    "overviewHeight": 613,
    "objectHeight": 5225,
    "primaryFields": [
      "id",
      "billing_details",
      "customer",
      "metadata",
      "type"
    ],
    "moreFields": [
      "object",
      "acss_debit",
      "affirm",
      "afterpay_clearpay",
      "alipay",
      "allow_redisplay",
      "alma",
      "amazon_pay",
      "au_becs_debit",
      "bacs_debit",
      "bancontact",
      "billie",
      "bizum",
      "blik",
      "boleto",
      "card",
      "card_present",
      "cashapp",
      "created",
      "crypto",
      "custom",
      "customer_balance",
      "eps",
      "fpx",
      "giropay",
      "grabpay",
      "ideal",
      "interac_present",
      "kakao_pay",
      "klarna",
      "konbini",
      "kr_card",
      "link",
      "livemode",
      "mb_way",
      "mobilepay",
      "multibanco",
      "naver_pay",
      "nz_bank_account",
      "oxxo",
      "p24",
      "pay_by_bank",
      "payco",
      "paynow",
      "paypal",
      "paypay",
      "payto",
      "pix",
      "promptpay",
      "radar_options",
      "revolut_pay",
      "samsung_pay",
      "satispay",
      "scalapay",
      "sepa_debit",
      "sofort",
      "sunbit",
      "swish",
      "twint",
      "upi",
      "us_bank_account",
      "wechat_pay",
      "zip"
    ],
    "sections": [
      {
        "id": "api-section-payment_methods",
        "title": "Payment Methods",
        "height": 613,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "PaymentMethod objects represent your customer’s payment instruments. You can use them with PaymentIntents to collect payments or save them to Customer objects to store instrument details for future payments.",
          "Related guides: Payment Methods and More Payment Scenarios."
        ]
      },
      {
        "id": "api-section-payment_method_object",
        "title": "The PaymentMethod object",
        "height": 5225,
        "primaryFields": [
          "id",
          "billing_details",
          "customer",
          "metadata",
          "type"
        ],
        "moreFields": [
          "object",
          "acss_debit",
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "allow_redisplay",
          "alma",
          "amazon_pay",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "bizum",
          "blik",
          "boleto",
          "card",
          "card_present",
          "cashapp",
          "created",
          "crypto",
          "custom",
          "customer_balance",
          "eps",
          "fpx",
          "giropay",
          "grabpay",
          "ideal",
          "interac_present",
          "kakao_pay",
          "klarna",
          "konbini",
          "kr_card",
          "link",
          "livemode",
          "mb_way",
          "mobilepay",
          "multibanco",
          "naver_pay",
          "nz_bank_account",
          "oxxo",
          "p24",
          "pay_by_bank",
          "payco",
          "paynow",
          "paypal",
          "paypay",
          "payto",
          "pix",
          "promptpay",
          "radar_options",
          "revolut_pay",
          "samsung_pay",
          "satispay",
          "scalapay",
          "sepa_debit",
          "sofort",
          "sunbit",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_payment_method",
        "title": "Create a PaymentMethod",
        "height": 5136,
        "primaryFields": [
          "type",
          "billing_details",
          "metadata"
        ],
        "moreFields": [
          "acss_debit",
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "allow_redisplay",
          "alma",
          "amazon_pay",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "bizum",
          "blik",
          "boleto",
          "card",
          "cashapp",
          "crypto",
          "custom",
          "customer_balance",
          "eps",
          "fpx",
          "giropay",
          "grabpay",
          "ideal",
          "interac_present",
          "kakao_pay",
          "klarna",
          "konbini",
          "kr_card",
          "link",
          "mb_way",
          "mobilepay",
          "multibanco",
          "naver_pay",
          "nz_bank_account",
          "oxxo",
          "p24",
          "pay_by_bank",
          "payco",
          "paynow",
          "paypal",
          "paypay",
          "payto",
          "pix",
          "promptpay",
          "radar_options",
          "revolut_pay",
          "samsung_pay",
          "satispay",
          "scalapay",
          "sepa_debit",
          "sofort",
          "sunbit",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip"
        ],
        "summaryParagraphs": [
          "Creates a PaymentMethod object. Read the Stripe.js reference to learn how to create PaymentMethods via Stripe.js.",
          "Instead of creating a PaymentMethod directly, we recommend using the PaymentIntents API to accept a payment immediately or the SetupIntent API to collect payment method details ahead of a future payment."
        ]
      },
      {
        "id": "api-section-update_payment_method",
        "title": "Update a PaymentMethod",
        "height": 961,
        "primaryFields": [
          "billing_details",
          "metadata"
        ],
        "moreFields": [
          "allow_redisplay",
          "card",
          "payto",
          "us_bank_account"
        ],
        "summaryParagraphs": [
          "Updates a PaymentMethod object. A PaymentMethod must be attached to a customer to be updated."
        ]
      },
      {
        "id": "api-section-retrieve_payment_method",
        "title": "Retrieve a PaymentMethod",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a PaymentMethod object attached to the StripeAccount. To retrieve a payment method attached to a Customer, you should use Retrieve a Customer’s PaymentMethods",
          "No parameters."
        ]
      },
      {
        "id": "api-section-retrieve_customer_payment_method",
        "title": "Retrieve a Customer's PaymentMethod",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a PaymentMethod object for a given Customer.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_payment_methods",
        "title": "List PaymentMethods",
        "height": 939,
        "primaryFields": [
          "type"
        ],
        "moreFields": [
          "allow_redisplay",
          "customer",
          "customer_account",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of all PaymentMethods."
        ]
      },
      {
        "id": "api-section-list_customer_payment_methods",
        "title": "List a Customer's PaymentMethods",
        "height": 886,
        "primaryFields": [
          "type"
        ],
        "moreFields": [
          "allow_redisplay",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Returns a list of PaymentMethods for a given Customer"
        ]
      },
      {
        "id": "api-section-customer_attach_payment_method",
        "title": "Attach a PaymentMethod to a Customer",
        "height": 886,
        "primaryFields": [
          "customer",
          "customer_account"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Attaches a PaymentMethod object to a Customer.",
          "To attach a new PaymentMethod to a customer for future payments, we recommend you use a SetupIntent or a PaymentIntent with setup_future_usage. These approaches will perform any necessary steps to set up the PaymentMethod for future payments. Using the /v1/payment_methods/:id/attach endpoint without first using a SetupIntent or PaymentIntent with setup_future_usage does not optimize the PaymentMethod for future use, which makes later declines and payment friction more likely. See Optimizing cards for future payments for more information about setting up future payments.",
          "To use this PaymentMethod as the default for invoice or subscription payments, set invoice_settings.default_payment_method, on the Customer to the PaymentMethod’s ID."
        ]
      },
      {
        "id": "api-section-customer_detach_payment_method",
        "title": "Detach a PaymentMethod from a Customer",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Detaches a PaymentMethod object from a Customer. After a PaymentMethod is detached, it can no longer be used for a payment or re-attached to a Customer.",
          "No parameters."
        ]
      }
    ]
  },
  "payment-method-configurations": {
    "overviewHeight": 698,
    "objectHeight": 4100,
    "primaryFields": [
      "id",
      "object",
      "active",
      "application",
      "is_default",
      "name",
      "parent"
    ],
    "moreFields": [
      "acss_debit",
      "affirm",
      "afterpay_clearpay",
      "alipay",
      "alma",
      "amazon_pay",
      "apple_pay",
      "au_becs_debit",
      "bacs_debit",
      "bancontact",
      "billie",
      "bizum",
      "blik",
      "boleto",
      "card",
      "cartes_bancaires",
      "cashapp",
      "crypto",
      "customer_balance",
      "eps",
      "fpx",
      "giropay",
      "google_pay",
      "grabpay",
      "ideal",
      "jcb",
      "kakao_pay",
      "klarna",
      "konbini",
      "kr_card",
      "link",
      "livemode",
      "mb_way",
      "mobilepay",
      "multibanco",
      "naver_pay",
      "nz_bank_account",
      "oxxo",
      "p24",
      "pay_by_bank",
      "payco",
      "paynow",
      "paypal",
      "paypay",
      "payto",
      "pix",
      "promptpay",
      "revolut_pay",
      "samsung_pay",
      "satispay",
      "scalapay",
      "sepa_debit",
      "sofort",
      "sunbit",
      "swish",
      "twint",
      "upi",
      "us_bank_account",
      "wechat_pay",
      "zip"
    ],
    "sections": [
      {
        "id": "api-section-payment_method_configurations",
        "title": "Payment Method Configurations",
        "height": 698,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "PaymentMethodConfigurations control which payment methods are displayed to your customers when you don’t explicitly specify payment method types. You can have multiple configurations with different sets of payment methods for different scenarios.",
          "There are two types of PaymentMethodConfigurations. Which is used depends on the charge type:",
          "Direct configurations apply to payments created on your account, including Connect destination charges, Connect separate charges and transfers, and payments not involving Connect.",
          "Child configurations apply to payments created on your connected accounts using direct charges, and charges with the on_behalf_of parameter.",
          "Child configurations have a parent that sets default values and controls which settings connected accounts may override. You can specify a parent ID at payment time, and Stripe will automatically resolve the connected account’s associated child configuration. Parent configurations are managed in the dashboard and are not available in this API.",
          "Related guides:"
        ]
      },
      {
        "id": "api-section-payment_method_configuration_object",
        "title": "The Payment Method Configuration object",
        "height": 4100,
        "primaryFields": [
          "id",
          "object",
          "active",
          "application",
          "is_default",
          "name",
          "parent"
        ],
        "moreFields": [
          "acss_debit",
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "alma",
          "amazon_pay",
          "apple_pay",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "bizum",
          "blik",
          "boleto",
          "card",
          "cartes_bancaires",
          "cashapp",
          "crypto",
          "customer_balance",
          "eps",
          "fpx",
          "giropay",
          "google_pay",
          "grabpay",
          "ideal",
          "jcb",
          "kakao_pay",
          "klarna",
          "konbini",
          "kr_card",
          "link",
          "livemode",
          "mb_way",
          "mobilepay",
          "multibanco",
          "naver_pay",
          "nz_bank_account",
          "oxxo",
          "p24",
          "pay_by_bank",
          "payco",
          "paynow",
          "paypal",
          "paypay",
          "payto",
          "pix",
          "promptpay",
          "revolut_pay",
          "samsung_pay",
          "satispay",
          "scalapay",
          "sepa_debit",
          "sofort",
          "sunbit",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_payment_method_configurations",
        "title": "Create a payment method configuration",
        "height": 3955,
        "primaryFields": [
          "name",
          "parent"
        ],
        "moreFields": [
          "acss_debit",
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "alma",
          "amazon_pay",
          "apple_pay",
          "apple_pay_later",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "bizum",
          "blik",
          "boleto",
          "card",
          "cartes_bancaires",
          "cashapp",
          "crypto",
          "customer_balance",
          "eps",
          "fpx",
          "fr_meal_voucher_conecs",
          "giropay",
          "google_pay",
          "grabpay",
          "ideal",
          "jcb",
          "kakao_pay",
          "klarna",
          "konbini",
          "kr_card",
          "link",
          "mb_way",
          "mobilepay",
          "multibanco",
          "naver_pay",
          "nz_bank_account",
          "oxxo",
          "p24",
          "pay_by_bank",
          "payco",
          "paynow",
          "paypal",
          "paypay",
          "payto",
          "pix",
          "promptpay",
          "revolut_pay",
          "samsung_pay",
          "satispay",
          "scalapay",
          "sepa_debit",
          "sofort",
          "sunbit",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip"
        ],
        "summaryParagraphs": [
          "Creates a payment method configuration"
        ]
      },
      {
        "id": "api-section-update_payment_method_configurations",
        "title": "Update payment method configuration",
        "height": 3919,
        "primaryFields": [
          "active",
          "name"
        ],
        "moreFields": [
          "acss_debit",
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "alma",
          "amazon_pay",
          "apple_pay",
          "apple_pay_later",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "bizum",
          "blik",
          "boleto",
          "card",
          "cartes_bancaires",
          "cashapp",
          "crypto",
          "customer_balance",
          "eps",
          "fpx",
          "fr_meal_voucher_conecs",
          "giropay",
          "google_pay",
          "grabpay",
          "ideal",
          "jcb",
          "kakao_pay",
          "klarna",
          "konbini",
          "kr_card",
          "link",
          "mb_way",
          "mobilepay",
          "multibanco",
          "naver_pay",
          "nz_bank_account",
          "oxxo",
          "p24",
          "pay_by_bank",
          "payco",
          "paynow",
          "paypal",
          "paypay",
          "payto",
          "pix",
          "promptpay",
          "revolut_pay",
          "samsung_pay",
          "satispay",
          "scalapay",
          "sepa_debit",
          "sofort",
          "sunbit",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip"
        ],
        "summaryParagraphs": [
          "Update payment method configuration"
        ]
      },
      {
        "id": "api-section-retrieve_payment_method_configurations",
        "title": "Retrieve payment method configuration",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieve payment method configuration",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_payment_method_configurations",
        "title": "List payment method configurations",
        "height": 886,
        "primaryFields": [
          "active",
          "application",
          "ending_before",
          "limit",
          "starting_after"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "List payment method configurations",
          "No parameters."
        ]
      }
    ]
  },
  "payment-method-domains": {
    "overviewHeight": 420,
    "objectHeight": 1010,
    "primaryFields": [
      "id",
      "domain_name",
      "enabled"
    ],
    "moreFields": [
      "object",
      "amazon_pay",
      "apple_pay",
      "created",
      "google_pay",
      "klarna",
      "link",
      "livemode",
      "paypal"
    ],
    "sections": [
      {
        "id": "api-section-payment_method_domains",
        "title": "Payment Method Domains",
        "height": 420,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A payment method domain represents a web domain that you have registered with Stripe. Stripe Elements use registered payment method domains to control where certain payment methods are shown.",
          "Related guide: Payment method domains."
        ]
      },
      {
        "id": "api-section-payment_method_domain_object",
        "title": "The PaymentMethodDomain object",
        "height": 1010,
        "primaryFields": [
          "id",
          "domain_name",
          "enabled"
        ],
        "moreFields": [
          "object",
          "amazon_pay",
          "apple_pay",
          "created",
          "google_pay",
          "klarna",
          "link",
          "livemode",
          "paypal"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_payment_method_domain",
        "title": "Create a payment method domain",
        "height": 668.3125,
        "primaryFields": [
          "domain_name",
          "enabled"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Creates a payment method domain."
        ]
      },
      {
        "id": "api-section-update_payment_method_domain",
        "title": "Update a payment method domain",
        "height": 659.3125,
        "primaryFields": [
          "enabled"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Updates an existing payment method domain."
        ]
      },
      {
        "id": "api-section-retrieve_payment_method_domain",
        "title": "Retrieve a payment method domain",
        "height": 641.125,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves the details of an existing payment method domain.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_payment_method_domain",
        "title": "List payment method domains",
        "height": 786.625,
        "primaryFields": [
          "domain_name",
          "enabled"
        ],
        "moreFields": [
          "ending_before",
          "limit",
          "starting_after"
        ],
        "summaryParagraphs": [
          "Lists the details of existing payment method domains."
        ]
      },
      {
        "id": "api-section-validate_payment_method_domain",
        "title": "Validate an existing payment method domain",
        "height": 641.125,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Some payment methods might require additional steps to register a domain. If the requirements weren’t satisfied when the domain was created, the payment method will be inactive on the domain. The payment method doesn’t appear in Elements or Embedded Checkout for this domain until it is active.",
          "To activate a payment method on an existing payment method domain, complete the required registration steps specific to the payment method, and then validate the payment method domain with this endpoint.",
          "Related guides: Payment method domains.",
          "No parameters."
        ]
      }
    ]
  },
  "bank-accounts": {
    "overviewHeight": 501,
    "objectHeight": 1488,
    "primaryFields": [
      "id",
      "account_holder_name",
      "account_holder_type",
      "bank_name",
      "country",
      "currency",
      "customer",
      "fingerprint",
      "last4",
      "metadata",
      "routing_number"
    ],
    "moreFields": [
      "object",
      "account",
      "account_type",
      "available_payout_methods",
      "status"
    ],
    "sections": [
      {
        "id": "api-section-bank_accounts",
        "title": "Bank Accounts",
        "height": 501,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "These bank accounts are payment methods on Customer objects.",
          "On the other hand External Accounts are transfer destinations on Account objects for connected accounts. They can be bank accounts or debit cards as well, and are documented in the links above.",
          "Related guide: Bank debits and transfers"
        ]
      },
      {
        "id": "api-section-customer_bank_account_object",
        "title": "The Bank Account object",
        "height": 1488,
        "primaryFields": [
          "id",
          "account_holder_name",
          "account_holder_type",
          "bank_name",
          "country",
          "currency",
          "customer",
          "fingerprint",
          "last4",
          "metadata",
          "routing_number"
        ],
        "moreFields": [
          "object",
          "account",
          "account_type",
          "available_payout_methods",
          "status"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-customer_create_bank_account",
        "title": "Create a bank account",
        "height": 684,
        "primaryFields": [
          "source",
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "When you create a new bank account, you must specify a Customer object on which to create it."
        ]
      },
      {
        "id": "api-section-customer_update_bank_account",
        "title": "Update a bank account",
        "height": 700,
        "primaryFields": [
          "account_holder_name",
          "account_holder_type",
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Updates the account_holder_name, account_holder_type, and metadata of a bank account belonging to a customer. Other bank account details are not editable, by design."
        ]
      },
      {
        "id": "api-section-customer_retrieve_bank_account",
        "title": "Retrieve a bank account",
        "height": 569.375,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-customer_list_bank_accounts",
        "title": "List all bank accounts",
        "height": 714.875,
        "primaryFields": [
          "ending_before",
          "limit",
          "starting_after"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional bank accounts.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-customer_delete_bank_account",
        "title": "Delete a bank account",
        "height": 386.5,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "You can delete bank accounts from a Customer.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-customer_verify_bank_account",
        "title": "Verify a bank account",
        "height": 622.9375,
        "primaryFields": [
          "amounts"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Verify a specified bank account for a given customer."
        ]
      }
    ]
  },
  "cash-balance": {
    "overviewHeight": 277,
    "objectHeight": 805,
    "primaryFields": [
      "object",
      "available",
      "customer",
      "customer_account",
      "livemode",
      "settings"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-cash_balance",
        "title": "Cash Balance",
        "height": 277,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "A customer’s Cash balance represents real funds. Customers can add funds to their cash balance by sending a bank transfer. These funds can be used for payment and can eventually be paid out to your bank account."
        ]
      },
      {
        "id": "api-section-cash_balance_object",
        "title": "The Cash balance object",
        "height": 805,
        "primaryFields": [
          "object",
          "available",
          "customer",
          "customer_account",
          "livemode",
          "settings"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-update_cash_balance",
        "title": "Update a cash balance's settings",
        "height": 490,
        "primaryFields": [
          "settings"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Changes the settings on a customer’s cash balance."
        ]
      },
      {
        "id": "api-section-retrieve_cash_balance",
        "title": "Retrieve a cash balance",
        "height": 504.625,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a customer’s cash balance.",
          "No parameters."
        ]
      }
    ]
  },
  "cash-balance-transactions": {
    "overviewHeight": 389,
    "objectHeight": 2821,
    "primaryFields": [
      "id",
      "object",
      "adjusted_for_overdraft",
      "applied_to_payment",
      "created",
      "currency",
      "customer",
      "customer_account",
      "ending_balance",
      "funded",
      "livemode",
      "net_amount",
      "refunded_from_payment",
      "transferred_to_balance",
      "type",
      "unapplied_from_payment"
    ],
    "moreFields": [],
    "sections": [
      {
        "id": "api-section-cash_balance",
        "title": "Cash Balance Transaction",
        "height": 389,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Customers with certain payments enabled have a cash balance, representing funds that were paid by the customer to a merchant, but have not yet been allocated to a payment. Cash Balance Transactions represent when funds are moved into or out of this balance. This includes funding by the customer, allocation to payments, and refunds to the customer."
        ]
      },
      {
        "id": "api-section-customer_cash_balance_transaction_object",
        "title": "The Cash Balance Transaction object",
        "height": 2821,
        "primaryFields": [
          "id",
          "object",
          "adjusted_for_overdraft",
          "applied_to_payment",
          "created",
          "currency",
          "customer",
          "customer_account",
          "ending_balance",
          "funded",
          "livemode",
          "net_amount",
          "refunded_from_payment",
          "transferred_to_balance",
          "type",
          "unapplied_from_payment"
        ],
        "moreFields": [],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_customer_cash_balance_transaction",
        "title": "Create or retrieve funding instructions for a customer cash balance",
        "height": 918,
        "primaryFields": [
          "bank_transfer",
          "currency",
          "funding_type"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new funding instructions will be created. If funding instructions have already been created for a given customer, the same funding instructions will be retrieved. In other words, we will return the same funding instructions each time."
        ]
      },
      {
        "id": "api-section-retrieve_cash_balance_transaction",
        "title": "Retrieve a cash balance transaction",
        "height": 677.5,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves a specific cash balance transaction, which updated the customer’s cash balance.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_cash_balance_transactions",
        "title": "List cash balance transactions",
        "height": 823,
        "primaryFields": [
          "ending_before",
          "limit",
          "starting_after"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Returns a list of transactions that modified the customer’s cash balance.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-fund_cash_balance",
        "title": "Fund a test mode cash balanceTest helper",
        "height": 713.90625,
        "primaryFields": [
          "amount",
          "currency"
        ],
        "moreFields": [
          "reference"
        ],
        "summaryParagraphs": [
          "Create an incoming testmode bank transfer"
        ]
      }
    ]
  },
  "cards": {
    "overviewHeight": 445,
    "objectHeight": 2686,
    "primaryFields": [
      "id",
      "address_city",
      "address_country",
      "address_line1",
      "address_line2",
      "address_state",
      "address_zip",
      "address_zip_check",
      "brand",
      "country",
      "customer",
      "cvc_check",
      "exp_month",
      "exp_year",
      "fingerprint",
      "funding",
      "last4",
      "metadata",
      "name"
    ],
    "moreFields": [
      "object",
      "account",
      "address_line1_check",
      "allow_redisplay",
      "available_payout_methods",
      "currency",
      "dynamic_last4",
      "regulated_status",
      "tokenization_method",
      "wallet"
    ],
    "sections": [
      {
        "id": "api-section-cards",
        "title": "Cards",
        "height": 445,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "You can store multiple cards on a customer in order to charge the customer later. You can also store multiple debit cards on a recipient in order to transfer to those cards later.",
          "Related guide: Card payments with Sources"
        ]
      },
      {
        "id": "api-section-card_object",
        "title": "The Card object",
        "height": 2686,
        "primaryFields": [
          "id",
          "address_city",
          "address_country",
          "address_line1",
          "address_line2",
          "address_state",
          "address_zip",
          "address_zip_check",
          "brand",
          "country",
          "customer",
          "cvc_check",
          "exp_month",
          "exp_year",
          "fingerprint",
          "funding",
          "last4",
          "metadata",
          "name"
        ],
        "moreFields": [
          "object",
          "account",
          "address_line1_check",
          "allow_redisplay",
          "available_payout_methods",
          "currency",
          "dynamic_last4",
          "regulated_status",
          "tokenization_method",
          "wallet"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_card",
        "title": "Create a card",
        "height": 786.625,
        "primaryFields": [
          "source",
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "When you create a new credit card, you must specify a customer or recipient on which to create it.",
          "If the card’s owner has no default card, then the new card will become the default. However, if the owner already has a default, then it will not change. To change the default, you should update the customer to have a new default_source."
        ]
      },
      {
        "id": "api-section-update_card",
        "title": "Update a card",
        "height": 1230,
        "primaryFields": [
          "address_city",
          "address_country",
          "address_line1",
          "address_line2",
          "address_state",
          "address_zip",
          "exp_month",
          "exp_year",
          "metadata",
          "name"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Updates a specified card for a given customer."
        ]
      },
      {
        "id": "api-section-retrieve_card",
        "title": "Retrieve a card",
        "height": 751.25,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-list_cards",
        "title": "List all cards",
        "height": 886,
        "primaryFields": [
          "ending_before",
          "limit",
          "starting_after"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "You can see a list of the cards belonging to a customer. Note that the 10 most recent sources are always available on the Customer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional cards.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-delete_card",
        "title": "Delete a card",
        "height": 603,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "You can delete cards from a customer. If you delete a card that is currently the default source, then the most recently added source will become the new default. If you delete a card that is the last remaining source on the customer, then the default_source attribute will become null.",
          "For recipients: if you delete the default card, then the most recently added card will become the new default. If you delete the last remaining card on a recipient, then the default_card attribute will become null.",
          "Note that for cards belonging to customers, you might want to prevent customers on paid subscriptions from deleting all cards on file, so that there is at least one default card for the next invoice payment attempt.",
          "No parameters."
        ]
      }
    ]
  },
  "sources": {
    "overviewHeight": 445.03125,
    "objectHeight": 2577.03125,
    "primaryFields": [
      "id",
      "amount",
      "currency",
      "customer",
      "metadata",
      "owner",
      "redirect",
      "statement_descriptor",
      "status",
      "type"
    ],
    "moreFields": [
      "object",
      "allow_redisplay",
      "client_secret",
      "code_verification",
      "created",
      "flow",
      "livemode",
      "receiver",
      "source_order",
      "usage"
    ],
    "sections": [
      {
        "id": "api-section-sources",
        "title": "SourcesDeprecated",
        "height": 445.03125,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Source objects allow you to accept a variety of payment methods. They represent a customer’s payment instrument, and can be used with the Stripe API just like a Card object: once chargeable, they can be charged, or can be attached to customers.",
          "Stripe doesn’t recommend using the deprecated Sources API. We recommend that you adopt the PaymentMethods API. This newer API provides access to our latest features and payment method types.",
          "Related guides: Sources API and Sources & Customers."
        ]
      },
      {
        "id": "api-section-source_object",
        "title": "The Source objectDeprecated",
        "height": 2577.03125,
        "primaryFields": [
          "id",
          "amount",
          "currency",
          "customer",
          "metadata",
          "owner",
          "redirect",
          "statement_descriptor",
          "status",
          "type"
        ],
        "moreFields": [
          "object",
          "allow_redisplay",
          "client_secret",
          "code_verification",
          "created",
          "flow",
          "livemode",
          "receiver",
          "source_order",
          "usage"
        ],
        "summaryParagraphs": []
      },
      {
        "id": "api-section-create_source",
        "title": "Create a source",
        "height": 1689,
        "primaryFields": [
          "type",
          "amount",
          "currency",
          "metadata",
          "owner",
          "redirect",
          "statement_descriptor"
        ],
        "moreFields": [
          "flow",
          "mandate",
          "receiver",
          "source_order",
          "token",
          "usage"
        ],
        "summaryParagraphs": [
          "Creates a new source object."
        ]
      },
      {
        "id": "api-section-update_source",
        "title": "Update a source",
        "height": 1039,
        "primaryFields": [
          "amount",
          "metadata",
          "owner"
        ],
        "moreFields": [
          "mandate",
          "source_order"
        ],
        "summaryParagraphs": [
          "Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.",
          "This request accepts the metadata and owner as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our payment method guides for more detail."
        ]
      },
      {
        "id": "api-section-retrieve_source",
        "title": "Retrieve a source",
        "height": 886,
        "primaryFields": [
          "client_secret"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.",
          "No parameters."
        ]
      },
      {
        "id": "api-section-attach_source",
        "title": "Attach a source",
        "height": 886,
        "primaryFields": [
          "source",
          "metadata"
        ],
        "moreFields": [],
        "summaryParagraphs": [
          "Attaches a Source object to a Customer. The source must be in a chargeable or pending state."
        ]
      },
      {
        "id": "api-section-detach_source",
        "title": "Detach a source",
        "height": 886,
        "primaryFields": [],
        "moreFields": [],
        "summaryParagraphs": [
          "Detaches a Source object from a Customer. The status of a source is changed to consumed when it is detached and it can no longer be used to create a charge.",
          "No parameters."
        ]
      }
    ]
  }
};

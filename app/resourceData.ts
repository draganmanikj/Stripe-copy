export type ResourceCategory = "core" | "payments";

export type ResourceDefinition = {
  id: string;
  name: string;
  category: ResourceCategory;
  apiPath: string;
  operations: string[];
  version?: "v2";
};

const resource = (
  category: ResourceCategory,
  id: string,
  name: string,
  apiPath: string,
  operations: string[],
  version?: "v2",
): ResourceDefinition => ({ category, id, name, apiPath, operations, version });

export const resourceDefinitions: ResourceDefinition[] = [
  resource("core", "accounts-v2", "Accounts", "/v2/core/accounts", ["The Account object", "Create an account", "Update an account", "Retrieve an account", "List accounts", "Close an account", "Account event types"], "v2"),
  resource("core", "account-links-v2", "Account Links", "/v2/core/account_links", ["The Account Link object", "Create an account link"], "v2"),
  resource("core", "account-tokens-v2", "Account Tokens", "/v2/core/account_tokens", ["The Account Token object", "Create an account token", "Retrieve an account token"], "v2"),
  resource("core", "balance", "Balance", "/v1/balance", ["The Balance object", "Retrieve balance"]),
  resource("core", "balance-transactions", "Balance Transactions", "/v1/balance_transactions", ["The Balance Transaction object", "Retrieve a balance transaction", "List all balance transactions"]),
  resource("core", "charges", "Charges", "/v1/charges", ["The Charge object", "Create a charge", "Update a charge", "Retrieve a charge", "List all charges", "Capture a charge", "Search charges"]),
  resource("core", "customers", "Customers", "/v1/customers", ["The Customer object", "Create a customer", "Update a customer", "Retrieve a customer", "List all customers", "Delete a customer", "Search customers"]),
  resource("core", "customer-session", "Customer Session", "/v1/customer_sessions", ["The Customer Session object", "Create a Customer Session"]),
  resource("core", "disputes", "Disputes", "/v1/disputes", ["The Dispute object", "Update a dispute", "Retrieve a dispute", "List all disputes", "Close a dispute"]),
  resource("core", "events-v1", "Events", "/v1/events", ["The Event object", "Retrieve an event", "List all events", "Types of events"]),
  resource("core", "events-v2", "Events", "/v2/core/events", ["The Event object", "Retrieve an Event", "List Events", "Ping an Event Destination", "Types of events"], "v2"),
  resource("core", "event-destinations-v2", "Event Destinations", "/v2/core/event_destinations", ["The Event Destination object", "Create an Event Destination", "Update an Event Destination", "Retrieve an Event Destination", "List Event Destinations", "Delete an Event Destination", "Disable an Event Destination", "Enable an Event Destination", "Event Destination event types"], "v2"),
  resource("core", "files", "Files", "/v1/files", ["The File object", "Create a file", "Retrieve a file", "List all files"]),
  resource("core", "file-links", "File Links", "/v1/file_links", ["The File Link object", "Create a file link", "Update a file link", "Retrieve a file link", "List all file links"]),
  resource("core", "mandates", "Mandates", "/v1/mandates", ["The Mandate object", "Retrieve a Mandate"]),
  resource("core", "payment-intents", "Payment Intents", "/v1/payment_intents", ["The PaymentIntent object", "Create a PaymentIntent", "Update a PaymentIntent", "Retrieve a PaymentIntent", "List all PaymentIntents", "List all PaymentIntent LineItems", "Cancel a PaymentIntent", "Capture a PaymentIntent", "Confirm a PaymentIntent", "Increment an authorization", "Reconcile a customer_balance PaymentIntent", "Search PaymentIntents", "Verify microdeposits on a PaymentIntent"]),
  resource("core", "persons-v2", "Persons", "/v2/core/persons", ["The Person object", "Create a person", "Update a person", "Retrieve a person", "List persons", "Delete a person", "Person event types"], "v2"),
  resource("core", "person-tokens-v2", "Person Tokens", "/v2/core/person_tokens", ["The Person Token object", "Create a person token", "Retrieve a person token"], "v2"),
  resource("core", "setup-intents", "Setup Intents", "/v1/setup_intents", ["The SetupIntent object", "Create a SetupIntent", "Update a SetupIntent", "Retrieve a SetupIntent", "List all SetupIntents", "Cancel a SetupIntent", "Confirm a SetupIntent", "Verify microdeposits on a SetupIntent"]),
  resource("core", "setup-attempts", "Setup Attempts", "/v1/setup_attempts", ["The SetupAttempt object", "List all SetupAttempts"]),
  resource("core", "stripe-balance-debit-agreement", "Stripe Balance Debit Agreement", "/v1/stripe_balance_debit_agreements", ["The StripeBalanceDebitAgreement object", "Create a StripeBalanceDebitAgreement", "Retrieve a StripeBalanceDebitAgreement", "Revoke a StripeBalanceDebitAgreement"]),
  resource("core", "payouts", "Payouts", "/v1/payouts", ["The Payout object", "Create a payout", "Update a payout", "Retrieve a payout", "List all payouts", "Cancel a payout", "Reverse a payout"]),
  resource("core", "refunds", "Refunds", "/v1/refunds", ["The Refund object", "Create a refund", "Update a refund", "Retrieve a refund", "List all refunds", "Cancel a refund"]),
  resource("core", "confirmation-token", "Confirmation Token", "/v1/confirmation_tokens", ["The Confirmation Token object", "Retrieve a ConfirmationToken", "Create a test Confirmation Token"]),
  resource("core", "tokens", "Tokens", "/v1/tokens", ["The Token object", "Create a bank account token", "Create a card token", "Create a CVC update token", "Create a person token", "Create a PII token", "Create an account token", "Retrieve a token"]),

  resource("payments", "payment-methods", "Payment Methods", "/v1/payment_methods", ["The PaymentMethod object", "Create a PaymentMethod", "Update a PaymentMethod", "Retrieve a PaymentMethod", "Retrieve a Customer's PaymentMethod", "List PaymentMethods", "List a Customer's PaymentMethods", "Attach a PaymentMethod to a Customer", "Detach a PaymentMethod from a Customer"]),
  resource("payments", "payment-method-configurations", "Payment Method Configurations", "/v1/payment_method_configurations", ["The Payment Method Configuration object", "Create a payment method configuration", "Update payment method configuration", "Retrieve payment method configuration", "List payment method configurations"]),
  resource("payments", "payment-method-domains", "Payment Method Domains", "/v1/payment_method_domains", ["The PaymentMethodDomain object", "Create a payment method domain", "Update a payment method domain", "Retrieve a payment method domain", "List payment method domains", "Validate an existing payment method domain"]),
  resource("payments", "bank-accounts", "Bank Accounts", "/v1/customer_bank_accounts", ["The Bank Account object", "Create a bank account", "Update a bank account", "Retrieve a bank account", "List all bank accounts", "Delete a bank account", "Verify a bank account"]),
  resource("payments", "cash-balance", "Cash Balance", "/v1/cash_balance", ["The Cash balance object", "Update a cash balance's settings", "Retrieve a cash balance"]),
  resource("payments", "cash-balance-transactions", "Cash Balance Transaction", "/v1/cash_balance_transactions", ["The Cash Balance Transaction object", "Create or retrieve funding instructions for a customer cash balance", "Retrieve a cash balance transaction", "List cash balance transactions", "Fund a test mode cash balance"]),
  resource("payments", "cards", "Cards", "/v1/cards", ["The Card object", "Create a card", "Update a card", "Retrieve a card", "List all cards", "Delete a card"]),
  resource("payments", "sources", "Sources", "/v1/sources", ["The Source object", "Create a source", "Update a source", "Retrieve a source", "Attach a source", "Detach a source"]),
];

export const resourcesByCategory = (category: ResourceCategory) =>
  resourceDefinitions.filter((item) => item.category === category);

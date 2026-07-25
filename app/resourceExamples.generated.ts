// Generated from the live public Stripe API reference.
// Run `node scripts/sync-stripe-resource-examples.mjs` to refresh it.

export const resourceRequestExamples: Record<
  string,
  Record<string, Record<string, string>>
> = {
  "accounts-v2": {
    "Create an account": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/accounts \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"contact_email\": \"furever@example.com\",\n    \"display_name\": \"Furever\",\n    \"identity\": {\n        \"country\": \"us\",\n        \"entity_type\": \"company\",\n        \"business_details\": {\n            \"registered_name\": \"Furever\"\n        }\n    },\n    \"configuration\": {\n        \"customer\": {\n            \"capabilities\": {\n                \"automatic_indirect_tax\": {\n                    \"requested\": true\n                }\n            }\n        },\n        \"merchant\": {\n            \"capabilities\": {\n                \"card_payments\": {\n                    \"requested\": true\n                }\n            }\n        }\n    },\n    \"defaults\": {\n        \"responsibilities\": {\n            \"fees_collector\": \"stripe\",\n            \"losses_collector\": \"stripe\"\n        }\n    },\n    \"dashboard\": \"full\",\n    \"include\": [\n        \"configuration.merchant\",\n        \"configuration.customer\",\n        \"identity\",\n        \"defaults\"\n    ]\n  }'",
      "Stripe CLI": "stripe v2 core accounts create  \\\n  --contact-email=\"furever@example.com\" \\\n  --display-name=Furever \\\n  --identity.country=us \\\n  --identity.entity-type=company \\\n  --identity.business-details.registered-name=Furever \\\n  --configuration.customer.capabilities.automatic-indirect-tax.requested=true \\\n  --configuration.merchant.capabilities.card-payments.requested=true \\\n  --defaults.responsibilities.fees-collector=stripe \\\n  --defaults.responsibilities.losses-collector=stripe \\\n  --dashboard=full \\\n  --include=\"configuration.merchant\" \\\n  --include=\"configuration.customer\" \\\n  --include=identity \\\n  --include=defaults",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount = client.v2.core.accounts.create({\n  contact_email: 'furever@example.com',\n  display_name: 'Furever',\n  identity: {\n    country: 'us',\n    entity_type: 'company',\n    business_details: {registered_name: 'Furever'},\n  },\n  configuration: {\n    customer: {capabilities: {automatic_indirect_tax: {requested: true}}},\n    merchant: {capabilities: {card_payments: {requested: true}}},\n  },\n  defaults: {\n    responsibilities: {\n      fees_collector: 'stripe',\n      losses_collector: 'stripe',\n    },\n  },\n  dashboard: 'full',\n  include: [\n    'configuration.merchant',\n    'configuration.customer',\n    'identity',\n    'defaults',\n  ],\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount = client.v2.core.accounts.create({\n  \"contact_email\": \"furever@example.com\",\n  \"display_name\": \"Furever\",\n  \"identity\": {\n    \"country\": \"us\",\n    \"entity_type\": \"company\",\n    \"business_details\": {\"registered_name\": \"Furever\"},\n  },\n  \"configuration\": {\n    \"customer\": {\"capabilities\": {\"automatic_indirect_tax\": {\"requested\": True}}},\n    \"merchant\": {\"capabilities\": {\"card_payments\": {\"requested\": True}}},\n  },\n  \"defaults\": {\n    \"responsibilities\": {\"fees_collector\": \"stripe\", \"losses_collector\": \"stripe\"},\n  },\n  \"dashboard\": \"full\",\n  \"include\": [\n    \"configuration.merchant\",\n    \"configuration.customer\",\n    \"identity\",\n    \"defaults\",\n  ],\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$account = $stripe->v2->core->accounts->create([\n  'contact_email' => 'furever@example.com',\n  'display_name' => 'Furever',\n  'identity' => [\n    'country' => 'us',\n    'entity_type' => 'company',\n    'business_details' => ['registered_name' => 'Furever'],\n  ],\n  'configuration' => [\n    'customer' => [\n      'capabilities' => ['automatic_indirect_tax' => ['requested' => true]],\n    ],\n    'merchant' => ['capabilities' => ['card_payments' => ['requested' => true]]],\n  ],\n  'defaults' => [\n    'responsibilities' => [\n      'fees_collector' => 'stripe',\n      'losses_collector' => 'stripe',\n    ],\n  ],\n  'dashboard' => 'full',\n  'include' => [\n    'configuration.merchant',\n    'configuration.customer',\n    'identity',\n    'defaults',\n  ],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountCreateParams params =\n  AccountCreateParams.builder()\n    .setContactEmail(\"furever@example.com\")\n    .setDisplayName(\"Furever\")\n    .setIdentity(\n      AccountCreateParams.Identity.builder()\n        .setCountry(\"us\")\n        .setEntityType(AccountCreateParams.Identity.EntityType.COMPANY)\n        .setBusinessDetails(\n          AccountCreateParams.Identity.BusinessDetails.builder()\n            .setRegisteredName(\"Furever\")\n            .build()\n        )\n        .build()\n    )\n    .setConfiguration(\n      AccountCreateParams.Configuration.builder()\n        .setCustomer(\n          AccountCreateParams.Configuration.Customer.builder()\n            .setCapabilities(\n              AccountCreateParams.Configuration.Customer.Capabilities.builder()\n                .setAutomaticIndirectTax(\n                  AccountCreateParams.Configuration.Customer.Capabilities.AutomaticIndirectTax.builder()\n                    .setRequested(true)\n                    .build()\n                )\n                .build()\n            )\n            .build()\n        )\n        .setMerchant(\n          AccountCreateParams.Configuration.Merchant.builder()\n            .setCapabilities(\n              AccountCreateParams.Configuration.Merchant.Capabilities.builder()\n                .setCardPayments(\n                  AccountCreateParams.Configuration.Merchant.Capabilities.CardPayments.builder()\n                    .setRequested(true)\n                    .build()\n                )\n                .build()\n            )\n            .build()\n        )\n        .build()\n    )\n    .setDefaults(\n      AccountCreateParams.Defaults.builder()\n        .setResponsibilities(\n          AccountCreateParams.Defaults.Responsibilities.builder()\n            .setFeesCollector(\n              AccountCreateParams.Defaults.Responsibilities.FeesCollector.STRIPE\n            )\n            .setLossesCollector(\n              AccountCreateParams.Defaults.Responsibilities.LossesCollector.STRIPE\n            )\n            .build()\n        )\n        .build()\n    )\n    .setDashboard(AccountCreateParams.Dashboard.FULL)\n    .addInclude(AccountCreateParams.Include.CONFIGURATION__MERCHANT)\n    .addInclude(AccountCreateParams.Include.CONFIGURATION__CUSTOMER)\n    .addInclude(AccountCreateParams.Include.IDENTITY)\n    .addInclude(AccountCreateParams.Include.DEFAULTS)\n    .build();\n\nAccount account = client.v2().core().accounts().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst account = await stripe.v2.core.accounts.create({\n  contact_email: 'furever@example.com',\n  display_name: 'Furever',\n  identity: {\n    country: 'us',\n    entity_type: 'company',\n    business_details: {\n      registered_name: 'Furever',\n    },\n  },\n  configuration: {\n    customer: {\n      capabilities: {\n        automatic_indirect_tax: {\n          requested: true,\n        },\n      },\n    },\n    merchant: {\n      capabilities: {\n        card_payments: {\n          requested: true,\n        },\n      },\n    },\n  },\n  defaults: {\n    responsibilities: {\n      fees_collector: 'stripe',\n      losses_collector: 'stripe',\n    },\n  },\n  dashboard: 'full',\n  include: [\n    'configuration.merchant',\n    'configuration.customer',\n    'identity',\n    'defaults',\n  ],\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountCreateParams{\n  ContactEmail: stripe.String(\"furever@example.com\"),\n  DisplayName: stripe.String(\"Furever\"),\n  Identity: &stripe.V2CoreAccountCreateIdentityParams{\n    Country: stripe.String(\"us\"),\n    EntityType: stripe.String(\"company\"),\n    BusinessDetails: &stripe.V2CoreAccountCreateIdentityBusinessDetailsParams{\n      RegisteredName: stripe.String(\"Furever\"),\n    },\n  },\n  Configuration: &stripe.V2CoreAccountCreateConfigurationParams{\n    Customer: &stripe.V2CoreAccountCreateConfigurationCustomerParams{\n      Capabilities: &stripe.V2CoreAccountCreateConfigurationCustomerCapabilitiesParams{\n        AutomaticIndirectTax: &stripe.V2CoreAccountCreateConfigurationCustomerCapabilitiesAutomaticIndirectTaxParams{\n          Requested: stripe.Bool(true),\n        },\n      },\n    },\n    Merchant: &stripe.V2CoreAccountCreateConfigurationMerchantParams{\n      Capabilities: &stripe.V2CoreAccountCreateConfigurationMerchantCapabilitiesParams{\n        CardPayments: &stripe.V2CoreAccountCreateConfigurationMerchantCapabilitiesCardPaymentsParams{\n          Requested: stripe.Bool(true),\n        },\n      },\n    },\n  },\n  Defaults: &stripe.V2CoreAccountCreateDefaultsParams{\n    Responsibilities: &stripe.V2CoreAccountCreateDefaultsResponsibilitiesParams{\n      FeesCollector: stripe.String(\"stripe\"),\n      LossesCollector: stripe.String(\"stripe\"),\n    },\n  },\n  Dashboard: stripe.String(\"full\"),\n  Include: []*string{\n    stripe.String(\"configuration.merchant\"),\n    stripe.String(\"configuration.customer\"),\n    stripe.String(\"identity\"),\n    stripe.String(\"defaults\"),\n  },\n}\nresult, err := sc.V2CoreAccounts.Create(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.AccountCreateOptions\n{\n    ContactEmail = \"furever@example.com\",\n    DisplayName = \"Furever\",\n    Identity = new Stripe.V2.Core.AccountCreateIdentityOptions\n    {\n        Country = \"us\",\n        EntityType = \"company\",\n        BusinessDetails = new Stripe.V2.Core.AccountCreateIdentityBusinessDetailsOptions\n        {\n            RegisteredName = \"Furever\",\n        },\n    },\n    Configuration = new Stripe.V2.Core.AccountCreateConfigurationOptions\n    {\n        Customer = new Stripe.V2.Core.AccountCreateConfigurationCustomerOptions\n        {\n            Capabilities = new Stripe.V2.Core.AccountCreateConfigurationCustomerCapabilitiesOptions\n            {\n                AutomaticIndirectTax = new Stripe.V2.Core.AccountCreateConfigurationCustomerCapabilitiesAutomaticIndirectTaxOptions\n                {\n                    Requested = true,\n                },\n            },\n        },\n        Merchant = new Stripe.V2.Core.AccountCreateConfigurationMerchantOptions\n        {\n            Capabilities = new Stripe.V2.Core.AccountCreateConfigurationMerchantCapabilitiesOptions\n            {\n                CardPayments = new Stripe.V2.Core.AccountCreateConfigurationMerchantCapabilitiesCardPaymentsOptions\n                {\n                    Requested = true,\n                },\n            },\n        },\n    },\n    Defaults = new Stripe.V2.Core.AccountCreateDefaultsOptions\n    {\n        Responsibilities = new Stripe.V2.Core.AccountCreateDefaultsResponsibilitiesOptions\n        {\n            FeesCollector = \"stripe\",\n            LossesCollector = \"stripe\",\n        },\n    },\n    Dashboard = \"full\",\n    Include = new List<string>\n    {\n        \"configuration.merchant\",\n        \"configuration.customer\",\n        \"identity\",\n        \"defaults\",\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts;\nStripe.V2.Core.Account account = service.Create(options);"
    },
    "Update an account": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}} \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"defaults\": {\n        \"profile\": {\n            \"business_url\": \"http://accessible.stripe.com\",\n            \"doing_business_as\": \"FurEver\",\n            \"product_description\": \"Saas pet grooming platform at furever.dev using Connect embedded components\"\n        }\n    },\n    \"identity\": {\n        \"business_details\": {\n            \"structure\": \"sole_proprietorship\",\n            \"id_numbers\": [\n                {\n                    \"type\": \"us_ein\",\n                    \"value\": \"000000000\"\n                }\n            ]\n        }\n    },\n    \"include\": [\n        \"defaults\",\n        \"identity\"\n    ]\n  }'",
      "Stripe CLI": "stripe v2 core accounts update {{ACCOUNT_ID}} \\\n  --defaults.profile.business-url=\"http://accessible.stripe.com\" \\\n  --defaults.profile.doing-business-as=FurEver \\\n  --defaults.profile.product-description=\"Saas pet grooming platform at furever.dev using Connect embedded components\" \\\n  --identity.business-details.structure=sole_proprietorship \\\n  --identity.business-details.id-numbers.type=us_ein \\\n  --identity.business-details.id-numbers.value=000000000 \\\n  --include=defaults \\\n  --include=identity",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount = client.v2.core.accounts.update(\n  '{{ACCOUNT_ID}}',\n  {\n    defaults: {\n      profile: {\n        business_url: 'http://accessible.stripe.com',\n        doing_business_as: 'FurEver',\n        product_description: 'Saas pet grooming platform at furever.dev using Connect embedded components',\n      },\n    },\n    identity: {\n      business_details: {\n        structure: 'sole_proprietorship',\n        id_numbers: [\n          {\n            type: 'us_ein',\n            value: '000000000',\n          },\n        ],\n      },\n    },\n    include: ['defaults', 'identity'],\n  },\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount = client.v2.core.accounts.update(\n  \"{{ACCOUNT_ID}}\",\n  {\n    \"defaults\": {\n      \"profile\": {\n        \"business_url\": \"http://accessible.stripe.com\",\n        \"doing_business_as\": \"FurEver\",\n        \"product_description\":\n        \"Saas pet grooming platform at furever.dev using Connect embedded components\",\n      },\n    },\n    \"identity\": {\n      \"business_details\": {\n        \"structure\": \"sole_proprietorship\",\n        \"id_numbers\": [{\"type\": \"us_ein\", \"value\": \"000000000\"}],\n      },\n    },\n    \"include\": [\"defaults\", \"identity\"],\n  },\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$account = $stripe->v2->core->accounts->update(\n  '{{ACCOUNT_ID}}',\n  [\n    'defaults' => [\n      'profile' => [\n        'business_url' => 'http://accessible.stripe.com',\n        'doing_business_as' => 'FurEver',\n        'product_description' => 'Saas pet grooming platform at furever.dev using Connect embedded components',\n      ],\n    ],\n    'identity' => [\n      'business_details' => [\n        'structure' => 'sole_proprietorship',\n        'id_numbers' => [\n          [\n            'type' => 'us_ein',\n            'value' => '000000000',\n          ],\n        ],\n      ],\n    ],\n    'include' => ['defaults', 'identity'],\n  ]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountUpdateParams params =\n  AccountUpdateParams.builder()\n    .setDefaults(\n      AccountUpdateParams.Defaults.builder()\n        .setProfile(\n          AccountUpdateParams.Defaults.Profile.builder()\n            .setBusinessUrl(\"http://accessible.stripe.com\")\n            .setDoingBusinessAs(\"FurEver\")\n            .setProductDescription(\n              \"Saas pet grooming platform at furever.dev using Connect embedded components\"\n            )\n            .build()\n        )\n        .build()\n    )\n    .setIdentity(\n      AccountUpdateParams.Identity.builder()\n        .setBusinessDetails(\n          AccountUpdateParams.Identity.BusinessDetails.builder()\n            .setStructure(\n              AccountUpdateParams.Identity.BusinessDetails.Structure.SOLE_PROPRIETORSHIP\n            )\n            .addIdNumber(\n              AccountUpdateParams.Identity.BusinessDetails.IdNumber.builder()\n                .setType(\n                  AccountUpdateParams.Identity.BusinessDetails.IdNumber.Type.US_EIN\n                )\n                .setValue(\"000000000\")\n                .build()\n            )\n            .build()\n        )\n        .build()\n    )\n    .addInclude(AccountUpdateParams.Include.DEFAULTS)\n    .addInclude(AccountUpdateParams.Include.IDENTITY)\n    .build();\n\nAccount account =\n  client.v2().core().accounts().update(\"{{ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst account = await stripe.v2.core.accounts.update(\n  '{{ACCOUNT_ID}}',\n  {\n    defaults: {\n      profile: {\n        business_url: 'http://accessible.stripe.com',\n        doing_business_as: 'FurEver',\n        product_description: 'Saas pet grooming platform at furever.dev using Connect embedded components',\n      },\n    },\n    identity: {\n      business_details: {\n        structure: 'sole_proprietorship',\n        id_numbers: [\n          {\n            type: 'us_ein',\n            value: '000000000',\n          },\n        ],\n      },\n    },\n    include: ['defaults', 'identity'],\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountUpdateParams{\n  Defaults: &stripe.V2CoreAccountUpdateDefaultsParams{\n    Profile: &stripe.V2CoreAccountUpdateDefaultsProfileParams{\n      BusinessURL: stripe.String(\"http://accessible.stripe.com\"),\n      DoingBusinessAs: stripe.String(\"FurEver\"),\n      ProductDescription: stripe.String(\"Saas pet grooming platform at furever.dev using Connect embedded components\"),\n    },\n  },\n  Identity: &stripe.V2CoreAccountUpdateIdentityParams{\n    BusinessDetails: &stripe.V2CoreAccountUpdateIdentityBusinessDetailsParams{\n      Structure: stripe.String(\"sole_proprietorship\"),\n      IDNumbers: []*stripe.V2CoreAccountUpdateIdentityBusinessDetailsIDNumberParams{\n        &stripe.V2CoreAccountUpdateIdentityBusinessDetailsIDNumberParams{\n          Type: stripe.String(\"us_ein\"),\n          Value: stripe.String(\"000000000\"),\n        },\n      },\n    },\n  },\n  Include: []*string{stripe.String(\"defaults\"), stripe.String(\"identity\")},\n}\nresult, err := sc.V2CoreAccounts.Update(\n  context.TODO(), \"{{ACCOUNT_ID}}\", params)",
      ".NET": "var options = new Stripe.V2.Core.AccountUpdateOptions\n{\n    Defaults = new Stripe.V2.Core.AccountUpdateDefaultsOptions\n    {\n        Profile = new Stripe.V2.Core.AccountUpdateDefaultsProfileOptions\n        {\n            BusinessUrl = \"http://accessible.stripe.com\",\n            DoingBusinessAs = \"FurEver\",\n            ProductDescription = \"Saas pet grooming platform at furever.dev using Connect embedded components\",\n        },\n    },\n    Identity = new Stripe.V2.Core.AccountUpdateIdentityOptions\n    {\n        BusinessDetails = new Stripe.V2.Core.AccountUpdateIdentityBusinessDetailsOptions\n        {\n            Structure = \"sole_proprietorship\",\n            IdNumbers = new List<Stripe.V2.Core.AccountUpdateIdentityBusinessDetailsIdNumberOptions>\n            {\n                new Stripe.V2.Core.AccountUpdateIdentityBusinessDetailsIdNumberOptions\n                {\n                    Type = \"us_ein\",\n                    Value = \"000000000\",\n                },\n            },\n        },\n    },\n    Include = new List<string> { \"defaults\", \"identity\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts;\nStripe.V2.Core.Account account = service.Update(\"{{ACCOUNT_ID}}\", options);"
    },
    "Retrieve an account": {
      "cURL": "curl -G https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}} \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  -d \"include[0]=defaults\" \\\n  -d \"include[1]=identity\" \\\n  -d \"include[2]=configuration.merchant\"",
      "Stripe CLI": "stripe v2 core accounts retrieve {{ACCOUNT_ID}} \\\n  --include=defaults \\\n  --include=identity \\\n  --include=\"configuration.merchant\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount = client.v2.core.accounts.retrieve(\n  '{{ACCOUNT_ID}}',\n  {include: ['defaults', 'identity', 'configuration.merchant']},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount = client.v2.core.accounts.retrieve(\n  \"{{ACCOUNT_ID}}\",\n  {\"include\": [\"defaults\", \"identity\", \"configuration.merchant\"]},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$account = $stripe->v2->core->accounts->retrieve(\n  '{{ACCOUNT_ID}}',\n  ['include' => ['defaults', 'identity', 'configuration.merchant']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountRetrieveParams params =\n  AccountRetrieveParams.builder()\n    .addInclude(AccountRetrieveParams.Include.DEFAULTS)\n    .addInclude(AccountRetrieveParams.Include.IDENTITY)\n    .addInclude(AccountRetrieveParams.Include.CONFIGURATION__MERCHANT)\n    .build();\n\nAccount account =\n  client.v2().core().accounts().retrieve(\"{{ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst account = await stripe.v2.core.accounts.retrieve(\n  '{{ACCOUNT_ID}}',\n  {\n    include: ['defaults', 'identity', 'configuration.merchant'],\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountRetrieveParams{\n  Include: []*string{\n    stripe.String(\"defaults\"),\n    stripe.String(\"identity\"),\n    stripe.String(\"configuration.merchant\"),\n  },\n}\nresult, err := sc.V2CoreAccounts.Retrieve(\n  context.TODO(), \"{{ACCOUNT_ID}}\", params)",
      ".NET": "var options = new Stripe.V2.Core.AccountGetOptions\n{\n    Include = new List<string> { \"defaults\", \"identity\", \"configuration.merchant\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts;\nStripe.V2.Core.Account account = service.Get(\"{{ACCOUNT_ID}}\", options);"
    },
    "List accounts": {
      "cURL": "curl -G https://api.stripe.com/v2/core/accounts \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  -d limit=2 \\\n  -d \"applied_configurations[0]=customer\"",
      "Stripe CLI": "stripe v2 core accounts list  \\\n  --limit=2 \\\n  --applied-configurations=customer",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccounts = client.v2.core.accounts.list({\n  limit: 2,\n  applied_configurations: ['customer'],\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccounts = client.v2.core.accounts.list({\n  \"limit\": 2,\n  \"applied_configurations\": [\"customer\"],\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accounts = $stripe->v2->core->accounts->all([\n  'limit' => 2,\n  'applied_configurations' => ['customer'],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountListParams params =\n  AccountListParams.builder()\n    .setLimit(2L)\n    .addAppliedConfiguration(AccountListParams.AppliedConfiguration.CUSTOMER)\n    .build();\n\nStripeCollection<Account> stripeCollection =\n  client.v2().core().accounts().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accounts = await stripe.v2.core.accounts.list({\n  limit: 2,\n  applied_configurations: ['customer'],\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountListParams{\n  AppliedConfigurations: []*string{stripe.String(\"customer\")},\n}\nparams.Limit = stripe.Int64(2)\nresult := sc.V2CoreAccounts.List(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.AccountListOptions\n{\n    Limit = 2,\n    AppliedConfigurations = new List<string> { \"customer\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts;\nStripe.V2.StripeList<Stripe.V2.Core.Account> accounts = service.List(options);"
    },
    "Close an account": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}}/close \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"applied_configurations\": [\n        \"merchant\"\n    ]\n  }'",
      "Stripe CLI": "stripe v2 core accounts close {{ACCOUNT_ID}} \\\n  --applied-configurations=merchant",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount = client.v2.core.accounts.close(\n  '{{ACCOUNT_ID}}',\n  {applied_configurations: ['merchant']},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount = client.v2.core.accounts.close(\n  \"{{ACCOUNT_ID}}\",\n  {\"applied_configurations\": [\"merchant\"]},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$account = $stripe->v2->core->accounts->close(\n  '{{ACCOUNT_ID}}',\n  ['applied_configurations' => ['merchant']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountCloseParams params =\n  AccountCloseParams.builder()\n    .addAppliedConfiguration(AccountCloseParams.AppliedConfiguration.MERCHANT)\n    .build();\n\nAccount account =\n  client.v2().core().accounts().close(\"{{ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst account = await stripe.v2.core.accounts.close(\n  '{{ACCOUNT_ID}}',\n  {\n    applied_configurations: ['merchant'],\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountCloseParams{\n  AppliedConfigurations: []*string{stripe.String(\"merchant\")},\n}\nresult, err := sc.V2CoreAccounts.Close(\n  context.TODO(), \"{{ACCOUNT_ID}}\", params)",
      ".NET": "var options = new Stripe.V2.Core.AccountCloseOptions\n{\n    AppliedConfigurations = new List<string> { \"merchant\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts;\nStripe.V2.Core.Account account = service.Close(\"{{ACCOUNT_ID}}\", options);"
    }
  },
  "account-links-v2": {
    "Create an account link": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/account_links \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"account\": \"{{ACCOUNT_ID}}\",\n    \"use_case\": {\n        \"type\": \"account_onboarding\",\n        \"account_onboarding\": {\n            \"configurations\": [\n                \"recipient\"\n            ],\n            \"return_url\": \"https://example.com/return\",\n            \"refresh_url\": \"https://example.com/reauth\"\n        }\n    }\n  }'",
      "Stripe CLI": "stripe v2 core account_links create  \\\n  --account={{ACCOUNT_ID}} \\\n  --use-case.type=account_onboarding \\\n  --use-case.account-onboarding.configurations=recipient \\\n  --use-case.account-onboarding.return-url=\"https://example.com/return\" \\\n  --use-case.account-onboarding.refresh-url=\"https://example.com/reauth\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_link = client.v2.core.account_links.create({\n  account: '{{ACCOUNT_ID}}',\n  use_case: {\n    type: 'account_onboarding',\n    account_onboarding: {\n      configurations: ['recipient'],\n      return_url: 'https://example.com/return',\n      refresh_url: 'https://example.com/reauth',\n    },\n  },\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_link = client.v2.core.account_links.create({\n  \"account\": \"{{ACCOUNT_ID}}\",\n  \"use_case\": {\n    \"type\": \"account_onboarding\",\n    \"account_onboarding\": {\n      \"configurations\": [\"recipient\"],\n      \"return_url\": \"https://example.com/return\",\n      \"refresh_url\": \"https://example.com/reauth\",\n    },\n  },\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountLink = $stripe->v2->core->accountLinks->create([\n  'account' => '{{ACCOUNT_ID}}',\n  'use_case' => [\n    'type' => 'account_onboarding',\n    'account_onboarding' => [\n      'configurations' => ['recipient'],\n      'return_url' => 'https://example.com/return',\n      'refresh_url' => 'https://example.com/reauth',\n    ],\n  ],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountLinkCreateParams params =\n  AccountLinkCreateParams.builder()\n    .setAccount(\"{{ACCOUNT_ID}}\")\n    .setUseCase(\n      AccountLinkCreateParams.UseCase.builder()\n        .setType(AccountLinkCreateParams.UseCase.Type.ACCOUNT_ONBOARDING)\n        .setAccountOnboarding(\n          AccountLinkCreateParams.UseCase.AccountOnboarding.builder()\n            .addConfiguration(\n              AccountLinkCreateParams.UseCase.AccountOnboarding.Configuration.RECIPIENT\n            )\n            .setReturnUrl(\"https://example.com/return\")\n            .setRefreshUrl(\"https://example.com/reauth\")\n            .build()\n        )\n        .build()\n    )\n    .build();\n\nAccountLink accountLink = client.v2().core().accountLinks().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountLink = await stripe.v2.core.accountLinks.create({\n  account: '{{ACCOUNT_ID}}',\n  use_case: {\n    type: 'account_onboarding',\n    account_onboarding: {\n      configurations: ['recipient'],\n      return_url: 'https://example.com/return',\n      refresh_url: 'https://example.com/reauth',\n    },\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountLinkCreateParams{\n  Account: stripe.String(\"{{ACCOUNT_ID}}\"),\n  UseCase: &stripe.V2CoreAccountLinkCreateUseCaseParams{\n    Type: stripe.String(\"account_onboarding\"),\n    AccountOnboarding: &stripe.V2CoreAccountLinkCreateUseCaseAccountOnboardingParams{\n      Configurations: []*string{stripe.String(\"recipient\")},\n      ReturnURL: stripe.String(\"https://example.com/return\"),\n      RefreshURL: stripe.String(\"https://example.com/reauth\"),\n    },\n  },\n}\nresult, err := sc.V2CoreAccountLinks.Create(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.AccountLinkCreateOptions\n{\n    Account = \"{{ACCOUNT_ID}}\",\n    UseCase = new Stripe.V2.Core.AccountLinkCreateUseCaseOptions\n    {\n        Type = \"account_onboarding\",\n        AccountOnboarding = new Stripe.V2.Core.AccountLinkCreateUseCaseAccountOnboardingOptions\n        {\n            Configurations = new List<string> { \"recipient\" },\n            ReturnUrl = \"https://example.com/return\",\n            RefreshUrl = \"https://example.com/reauth\",\n        },\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.AccountLinks;\nStripe.V2.Core.AccountLink accountLink = service.Create(options);"
    }
  },
  "account-tokens-v2": {
    "Create an account token": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/account_tokens \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"contact_email\": \"furever@example.com\",\n    \"display_name\": \"Furever\",\n    \"identity\": {\n        \"attestations\": {\n            \"terms_of_service\": {\n                \"account\": {\n                    \"shown_and_accepted\": true\n                }\n            }\n        },\n        \"entity_type\": \"company\",\n        \"business_details\": {\n            \"registered_name\": \"Furever\"\n        }\n    }\n  }'",
      "Stripe CLI": "stripe v2 core account_tokens create  \\\n  --contact-email=\"furever@example.com\" \\\n  --display-name=Furever \\\n  --identity.attestations.terms-of-service.account.shown-and-accepted=true \\\n  --identity.entity-type=company \\\n  --identity.business-details.registered-name=Furever",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_token = client.v2.core.account_tokens.create({\n  contact_email: 'furever@example.com',\n  display_name: 'Furever',\n  identity: {\n    attestations: {terms_of_service: {account: {shown_and_accepted: true}}},\n    entity_type: 'company',\n    business_details: {registered_name: 'Furever'},\n  },\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_token = client.v2.core.account_tokens.create({\n  \"contact_email\": \"furever@example.com\",\n  \"display_name\": \"Furever\",\n  \"identity\": {\n    \"attestations\": {\"terms_of_service\": {\"account\": {\"shown_and_accepted\": True}}},\n    \"entity_type\": \"company\",\n    \"business_details\": {\"registered_name\": \"Furever\"},\n  },\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountToken = $stripe->v2->core->accountTokens->create([\n  'contact_email' => 'furever@example.com',\n  'display_name' => 'Furever',\n  'identity' => [\n    'attestations' => [\n      'terms_of_service' => ['account' => ['shown_and_accepted' => true]],\n    ],\n    'entity_type' => 'company',\n    'business_details' => ['registered_name' => 'Furever'],\n  ],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountTokenCreateParams params =\n  AccountTokenCreateParams.builder()\n    .setContactEmail(\"furever@example.com\")\n    .setDisplayName(\"Furever\")\n    .setIdentity(\n      AccountTokenCreateParams.Identity.builder()\n        .setAttestations(\n          AccountTokenCreateParams.Identity.Attestations.builder()\n            .setTermsOfService(\n              AccountTokenCreateParams.Identity.Attestations.TermsOfService.builder()\n                .setAccount(\n                  AccountTokenCreateParams.Identity.Attestations.TermsOfService.Account.builder()\n                    .setShownAndAccepted(true)\n                    .build()\n                )\n                .build()\n            )\n            .build()\n        )\n        .setEntityType(AccountTokenCreateParams.Identity.EntityType.COMPANY)\n        .setBusinessDetails(\n          AccountTokenCreateParams.Identity.BusinessDetails.builder()\n            .setRegisteredName(\"Furever\")\n            .build()\n        )\n        .build()\n    )\n    .build();\n\nAccountToken accountToken = client.v2().core().accountTokens().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountToken = await stripe.v2.core.accountTokens.create({\n  contact_email: 'furever@example.com',\n  display_name: 'Furever',\n  identity: {\n    attestations: {\n      terms_of_service: {\n        account: {\n          shown_and_accepted: true,\n        },\n      },\n    },\n    entity_type: 'company',\n    business_details: {\n      registered_name: 'Furever',\n    },\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountTokenCreateParams{\n  ContactEmail: stripe.String(\"furever@example.com\"),\n  DisplayName: stripe.String(\"Furever\"),\n  Identity: &stripe.V2CoreAccountTokenCreateIdentityParams{\n    Attestations: &stripe.V2CoreAccountTokenCreateIdentityAttestationsParams{\n      TermsOfService: &stripe.V2CoreAccountTokenCreateIdentityAttestationsTermsOfServiceParams{\n        Account: &stripe.V2CoreAccountTokenCreateIdentityAttestationsTermsOfServiceAccountParams{\n          ShownAndAccepted: stripe.Bool(true),\n        },\n      },\n    },\n    EntityType: stripe.String(\"company\"),\n    BusinessDetails: &stripe.V2CoreAccountTokenCreateIdentityBusinessDetailsParams{\n      RegisteredName: stripe.String(\"Furever\"),\n    },\n  },\n}\nresult, err := sc.V2CoreAccountTokens.Create(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.AccountTokenCreateOptions\n{\n    ContactEmail = \"furever@example.com\",\n    DisplayName = \"Furever\",\n    Identity = new Stripe.V2.Core.AccountTokenCreateIdentityOptions\n    {\n        Attestations = new Stripe.V2.Core.AccountTokenCreateIdentityAttestationsOptions\n        {\n            TermsOfService = new Stripe.V2.Core.AccountTokenCreateIdentityAttestationsTermsOfServiceOptions\n            {\n                Account = new Stripe.V2.Core.AccountTokenCreateIdentityAttestationsTermsOfServiceAccountOptions\n                {\n                    ShownAndAccepted = true,\n                },\n            },\n        },\n        EntityType = \"company\",\n        BusinessDetails = new Stripe.V2.Core.AccountTokenCreateIdentityBusinessDetailsOptions\n        {\n            RegisteredName = \"Furever\",\n        },\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.AccountTokens;\nStripe.V2.Core.AccountToken accountToken = service.Create(options);"
    },
    "Retrieve an account token": {
      "cURL": "curl https://api.stripe.com/v2/core/account_tokens/accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core account_tokens retrieve accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_token = client.v2.core.account_tokens.retrieve('accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_token = client.v2.core.account_tokens.retrieve(\n  \"accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountToken = $stripe->v2->core->accountTokens->retrieve(\n  'accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountToken accountToken =\n  client.v2().core().accountTokens().retrieve(\n    \"accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountToken = await stripe.v2.core.accountTokens.retrieve(\n  'accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountTokenRetrieveParams{}\nresult, err := sc.V2CoreAccountTokens.Retrieve(\n  context.TODO(), \"accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.AccountTokens;\nStripe.V2.Core.AccountToken accountToken = service.Get(\n    \"accttok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\");"
    }
  },
  "balance": {
    "Retrieve balance": {
      "cURL": "curl https://api.stripe.com/v1/balance \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe balance retrieve",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nbalance = client.v1.balance.retrieve()",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nbalance = client.v1.balance.retrieve()",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$balance = $stripe->balance->retrieve([]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nBalanceRetrieveParams params = BalanceRetrieveParams.builder().build();\n\nBalance balance = client.v1().balance().retrieve(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst balance = await stripe.balance.retrieve();",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.BalanceRetrieveParams{}\nresult, err := sc.V1Balance.Retrieve(context.TODO(), params)",
      ".NET": "var options = new BalanceGetOptions();\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Balance;\nBalance balance = service.Get(options);"
    }
  },
  "balance-transactions": {
    "Retrieve a balance transaction": {
      "cURL": "curl https://api.stripe.com/v1/balance_transactions/{{BALANCE_TRANSACTION_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe balance_transactions retrieve {{BALANCE_TRANSACTION_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nbalance_transaction = client.v1.balance_transactions.retrieve('{{BALANCE_TRANSACTION_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nbalance_transaction = client.v1.balance_transactions.retrieve(\n  \"{{BALANCE_TRANSACTION_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$balanceTransaction = $stripe->balanceTransactions->retrieve(\n  '{{BALANCE_TRANSACTION_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nBalanceTransactionRetrieveParams params =\n  BalanceTransactionRetrieveParams.builder().build();\n\nBalanceTransaction balanceTransaction =\n  client.v1().balanceTransactions().retrieve(\"{{BALANCE_TRANSACTION_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst balanceTransaction = await stripe.balanceTransactions.retrieve(\n  '{{BALANCE_TRANSACTION_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.BalanceTransactionRetrieveParams{}\nresult, err := sc.V1BalanceTransactions.Retrieve(\n  context.TODO(), \"{{BALANCE_TRANSACTION_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.BalanceTransactions;\nBalanceTransaction balanceTransaction = service.Get(\"{{BALANCE_TRANSACTION_ID}}\");"
    },
    "List all balance transactions": {
      "cURL": "curl -G https://api.stripe.com/v1/balance_transactions \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe balance_transactions list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nbalance_transactions = client.v1.balance_transactions.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nbalance_transactions = client.v1.balance_transactions.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$balanceTransactions = $stripe->balanceTransactions->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nBalanceTransactionListParams params =\n  BalanceTransactionListParams.builder().setLimit(3L).build();\n\nStripeCollection<BalanceTransaction> stripeCollection =\n  client.v1().balanceTransactions().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst balanceTransactions = await stripe.balanceTransactions.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.BalanceTransactionListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1BalanceTransactions.List(context.TODO(), params)",
      ".NET": "var options = new BalanceTransactionListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.BalanceTransactions;\nStripeList<BalanceTransaction> balanceTransactions = service.List(options);"
    }
  },
  "charges": {
    "Create a charge": {
      "cURL": "curl https://api.stripe.com/v1/charges \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d amount=1099 \\\n  -d currency=usd \\\n  -d source=tok_visa",
      "Stripe CLI": "stripe charges create  \\\n  --amount=1099 \\\n  --currency=usd \\\n  --source=tok_visa",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncharge = client.v1.charges.create({\n  amount: 1099,\n  currency: 'usd',\n  source: 'tok_visa',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncharge = client.v1.charges.create({\n  \"amount\": 1099,\n  \"currency\": \"usd\",\n  \"source\": \"tok_visa\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charge = $stripe->charges->create([\n  'amount' => 1099,\n  'currency' => 'usd',\n  'source' => 'tok_visa',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nChargeCreateParams params =\n  ChargeCreateParams.builder()\n    .setAmount(1099L)\n    .setCurrency(\"usd\")\n    .setSource(\"tok_visa\")\n    .build();\n\nCharge charge = client.v1().charges().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charge = await stripe.charges.create({\n  amount: 1099,\n  currency: 'usd',\n  source: 'tok_visa',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.ChargeCreateParams{\n  Amount: stripe.Int64(1099),\n  Currency: stripe.String(stripe.CurrencyUSD),\n  Source: &stripe.PaymentSourceSourceParams{Token: stripe.String(\"tok_visa\")},\n}\nresult, err := sc.V1Charges.Create(context.TODO(), params)",
      ".NET": "var options = new ChargeCreateOptions\n{\n    Amount = 1099,\n    Currency = \"usd\",\n    Source = \"tok_visa\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Charges;\nCharge charge = service.Create(options);"
    },
    "Update a charge": {
      "cURL": "curl https://api.stripe.com/v1/charges/{{CHARGE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[shipping]=express\"",
      "Stripe CLI": "stripe charges update {{CHARGE_ID}} \\\n  -d \"metadata[shipping]\"=express",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncharge = client.v1.charges.update(\n  '{{CHARGE_ID}}',\n  {metadata: {shipping: 'express'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncharge = client.v1.charges.update(\n  \"{{CHARGE_ID}}\",\n  {\"metadata\": {\"shipping\": \"express\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charge = $stripe->charges->update(\n  '{{CHARGE_ID}}',\n  ['metadata' => ['shipping' => 'express']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nChargeUpdateParams params =\n  ChargeUpdateParams.builder().putMetadata(\"shipping\", \"express\").build();\n\nCharge charge = client.v1().charges().update(\"{{CHARGE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charge = await stripe.charges.update(\n  '{{CHARGE_ID}}',\n  {\n    metadata: {\n      shipping: 'express',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.ChargeUpdateParams{}\nparams.AddMetadata(\"shipping\", \"express\")\nresult, err := sc.V1Charges.Update(\n  context.TODO(), \"{{CHARGE_ID}}\", params)",
      ".NET": "var options = new ChargeUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"shipping\", \"express\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Charges;\nCharge charge = service.Update(\"{{CHARGE_ID}}\", options);"
    },
    "Retrieve a charge": {
      "cURL": "curl https://api.stripe.com/v1/charges/{{CHARGE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe charges retrieve {{CHARGE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncharge = client.v1.charges.retrieve('{{CHARGE_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncharge = client.v1.charges.retrieve(\"{{CHARGE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charge = $stripe->charges->retrieve('{{CHARGE_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nChargeRetrieveParams params = ChargeRetrieveParams.builder().build();\n\nCharge charge =\n  client.v1().charges().retrieve(\"{{CHARGE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charge = await stripe.charges.retrieve('{{CHARGE_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.ChargeRetrieveParams{}\nresult, err := sc.V1Charges.Retrieve(\n  context.TODO(), \"{{CHARGE_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Charges;\nCharge charge = service.Get(\"{{CHARGE_ID}}\");"
    },
    "List all charges": {
      "cURL": "curl -G https://api.stripe.com/v1/charges \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe charges list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncharges = client.v1.charges.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncharges = client.v1.charges.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charges = $stripe->charges->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nChargeListParams params = ChargeListParams.builder().setLimit(3L).build();\n\nStripeCollection<Charge> stripeCollection = client.v1().charges().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charges = await stripe.charges.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.ChargeListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1Charges.List(context.TODO(), params)",
      ".NET": "var options = new ChargeListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Charges;\nStripeList<Charge> charges = service.List(options);"
    },
    "Capture a charge": {
      "cURL": "curl -X POST https://api.stripe.com/v1/charges/{{CHARGE_ID}}/capture \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe charges capture {{CHARGE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncharge = client.v1.charges.capture('{{CHARGE_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncharge = client.v1.charges.capture(\"{{CHARGE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charge = $stripe->charges->capture('{{CHARGE_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nChargeCaptureParams params = ChargeCaptureParams.builder().build();\n\nCharge charge = client.v1().charges().capture(\"{{CHARGE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charge = await stripe.charges.capture('{{CHARGE_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.ChargeCaptureParams{}\nresult, err := sc.V1Charges.Capture(\n  context.TODO(), \"{{CHARGE_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Charges;\nCharge charge = service.Capture(\"{{CHARGE_ID}}\");"
    },
    "Search charges": {
      "cURL": "curl -G https://api.stripe.com/v1/charges/search \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  --data-urlencode \"query=amount>999 AND metadata['order_id']:'6735'\"",
      "Stripe CLI": "stripe charges search  \\\n  --query=\"amount>999 AND metadata['order_id']:'6735'\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncharges = client.v1.charges.search({\n  query: 'amount>999 AND metadata[\\'order_id\\']:\\'6735\\'',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncharges = client.v1.charges.search({\n  \"query\": \"amount>999 AND metadata['order_id']:'6735'\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charges = $stripe->charges->search([\n  'query' => 'amount>999 AND metadata[\\'order_id\\']:\\'6735\\'',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nChargeSearchParams params =\n  ChargeSearchParams.builder()\n    .setQuery(\"amount>999 AND metadata['order_id']:'6735'\")\n    .build();\n\nStripeSearchResult<Charge> stripeSearchResult = client.v1().charges().search(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charges = await stripe.charges.search({\n  query: 'amount>999 AND metadata[\\'order_id\\']:\\'6735\\'',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.ChargeSearchParams{\n  SearchParams: stripe.SearchParams{\n    Query: \"amount>999 AND metadata['order_id']:'6735'\",\n  },\n}\nresult := sc.V1Charges.Search(context.TODO(), params)",
      ".NET": "var options = new ChargeSearchOptions\n{\n    Query = \"amount>999 AND metadata['order_id']:'6735'\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Charges;\nStripeSearchResult<Charge> charges = service.Search(options);"
    }
  },
  "customers": {
    "Create a customer": {
      "cURL": "curl https://api.stripe.com/v1/customers \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"name=Jenny Rosen\" \\\n  --data-urlencode \"email=jennyrosen@example.com\"",
      "Stripe CLI": "stripe customers create  \\\n  --name=\"Jenny Rosen\" \\\n  --email=\"jennyrosen@example.com\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer = client.v1.customers.create({\n  name: 'Jenny Rosen',\n  email: 'jennyrosen@example.com',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer = client.v1.customers.create({\n  \"name\": \"Jenny Rosen\",\n  \"email\": \"jennyrosen@example.com\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customer = $stripe->customers->create([\n  'name' => 'Jenny Rosen',\n  'email' => 'jennyrosen@example.com',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerCreateParams params =\n  CustomerCreateParams.builder()\n    .setName(\"Jenny Rosen\")\n    .setEmail(\"jennyrosen@example.com\")\n    .build();\n\nCustomer customer = client.v1().customers().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customer = await stripe.customers.create({\n  name: 'Jenny Rosen',\n  email: 'jennyrosen@example.com',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerCreateParams{\n  Name: stripe.String(\"Jenny Rosen\"),\n  Email: stripe.String(\"jennyrosen@example.com\"),\n}\nresult, err := sc.V1Customers.Create(context.TODO(), params)",
      ".NET": "var options = new CustomerCreateOptions\n{\n    Name = \"Jenny Rosen\",\n    Email = \"jennyrosen@example.com\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers;\nCustomer customer = service.Create(options);"
    },
    "Update a customer": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe customers update {{CUSTOMER_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer = client.v1.customers.update(\n  '{{CUSTOMER_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer = client.v1.customers.update(\n  \"{{CUSTOMER_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customer = $stripe->customers->update(\n  '{{CUSTOMER_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerUpdateParams params =\n  CustomerUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nCustomer customer = client.v1().customers().update(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customer = await stripe.customers.update(\n  '{{CUSTOMER_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1Customers.Update(context.TODO(), \"{{CUSTOMER_ID}}\", params)",
      ".NET": "var options = new CustomerUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers;\nCustomer customer = service.Update(\"{{CUSTOMER_ID}}\", options);"
    },
    "Retrieve a customer": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe customers retrieve {{CUSTOMER_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer = client.v1.customers.retrieve('{{CUSTOMER_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer = client.v1.customers.retrieve(\"{{CUSTOMER_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customer = $stripe->customers->retrieve('{{CUSTOMER_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerRetrieveParams params = CustomerRetrieveParams.builder().build();\n\nCustomer customer = client.v1().customers().retrieve(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customer = await stripe.customers.retrieve('{{CUSTOMER_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerRetrieveParams{}\nresult, err := sc.V1Customers.Retrieve(context.TODO(), \"{{CUSTOMER_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers;\nCustomer customer = service.Get(\"{{CUSTOMER_ID}}\");"
    },
    "List all customers": {
      "cURL": "curl -G https://api.stripe.com/v1/customers \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe customers list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomers = client.v1.customers.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomers = client.v1.customers.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customers = $stripe->customers->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerListParams params = CustomerListParams.builder().setLimit(3L).build();\n\nStripeCollection<Customer> stripeCollection = client.v1().customers().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customers = await stripe.customers.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1Customers.List(context.TODO(), params)",
      ".NET": "var options = new CustomerListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers;\nStripeList<Customer> customers = service.List(options);"
    },
    "Delete a customer": {
      "cURL": "curl -X DELETE https://api.stripe.com/v1/customers/{{CUSTOMER_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe customers delete {{CUSTOMER_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ndeleted = client.v1.customers.delete('{{CUSTOMER_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ndeleted = client.v1.customers.delete(\"{{CUSTOMER_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$deleted = $stripe->customers->delete('{{CUSTOMER_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomer customer = client.v1().customers().delete(\"{{CUSTOMER_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst deleted = await stripe.customers.del('{{CUSTOMER_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerDeleteParams{}\nresult, err := sc.V1Customers.Delete(context.TODO(), \"{{CUSTOMER_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers;\nCustomer deleted = service.Delete(\"{{CUSTOMER_ID}}\");"
    },
    "Search customers": {
      "cURL": "curl -G https://api.stripe.com/v1/customers/search \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  --data-urlencode \"query=name:'Jane Doe' AND metadata['foo']:'bar'\"",
      "Stripe CLI": "stripe customers search  \\\n  --query=\"name:'Jane Doe' AND metadata['foo']:'bar'\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomers = client.v1.customers.search({\n  query: 'name:\\'Jane Doe\\' AND metadata[\\'foo\\']:\\'bar\\'',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomers = client.v1.customers.search({\n  \"query\": \"name:'Jane Doe' AND metadata['foo']:'bar'\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customers = $stripe->customers->search([\n  'query' => 'name:\\'Jane Doe\\' AND metadata[\\'foo\\']:\\'bar\\'',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerSearchParams params =\n  CustomerSearchParams.builder()\n    .setQuery(\"name:'Jane Doe' AND metadata['foo']:'bar'\")\n    .build();\n\nStripeSearchResult<Customer> stripeSearchResult =\n  client.v1().customers().search(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customers = await stripe.customers.search({\n  query: 'name:\\'Jane Doe\\' AND metadata[\\'foo\\']:\\'bar\\'',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerSearchParams{\n  SearchParams: stripe.SearchParams{\n    Query: \"name:'Jane Doe' AND metadata['foo']:'bar'\",\n  },\n}\nresult := sc.V1Customers.Search(context.TODO(), params)",
      ".NET": "var options = new CustomerSearchOptions\n{\n    Query = \"name:'Jane Doe' AND metadata['foo']:'bar'\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers;\nStripeSearchResult<Customer> customers = service.Search(options);"
    }
  },
  "customer-session": {
    "Create a Customer Session": {
      "cURL": "curl https://api.stripe.com/v1/customer_sessions \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d customer={{CUSTOMER_ID}} \\\n  -d \"components[pricing_table][enabled]=true\"",
      "Stripe CLI": "stripe customer_sessions create  \\\n  --customer={{CUSTOMER_ID}} \\\n  -d \"components[pricing_table][enabled]\"=true",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer_session = client.v1.customer_sessions.create({\n  customer: '{{CUSTOMER_ID}}',\n  components: {pricing_table: {enabled: true}},\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer_session = client.v1.customer_sessions.create({\n  \"customer\": \"{{CUSTOMER_ID}}\",\n  \"components\": {\"pricing_table\": {\"enabled\": True}},\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customerSession = $stripe->customerSessions->create([\n  'customer' => '{{CUSTOMER_ID}}',\n  'components' => ['pricing_table' => ['enabled' => true]],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerSessionCreateParams params =\n  CustomerSessionCreateParams.builder()\n    .setCustomer(\"{{CUSTOMER_ID}}\")\n    .setComponents(\n      CustomerSessionCreateParams.Components.builder()\n        .setPricingTable(\n          CustomerSessionCreateParams.Components.PricingTable.builder()\n            .setEnabled(true)\n            .build()\n        )\n        .build()\n    )\n    .build();\n\nCustomerSession customerSession = client.v1().customerSessions().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSession = await stripe.customerSessions.create({\n  customer: '{{CUSTOMER_ID}}',\n  components: {\n    pricing_table: {\n      enabled: true,\n    },\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerSessionCreateParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n  Components: &stripe.CustomerSessionCreateComponentsParams{\n    PricingTable: &stripe.CustomerSessionCreateComponentsPricingTableParams{\n      Enabled: stripe.Bool(true),\n    },\n  },\n}\nresult, err := sc.V1CustomerSessions.Create(context.TODO(), params)",
      ".NET": "var options = new CustomerSessionCreateOptions\n{\n    Customer = \"{{CUSTOMER_ID}}\",\n    Components = new CustomerSessionComponentsOptions\n    {\n        PricingTable = new CustomerSessionComponentsPricingTableOptions\n        {\n            Enabled = true,\n        },\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.CustomerSessions;\nCustomerSession customerSession = service.Create(options);"
    }
  },
  "disputes": {
    "Update a dispute": {
      "cURL": "curl https://api.stripe.com/v1/disputes/{{DISPUTE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe disputes update {{DISPUTE_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ndispute = client.v1.disputes.update(\n  '{{DISPUTE_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ndispute = client.v1.disputes.update(\n  \"{{DISPUTE_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$dispute = $stripe->disputes->update(\n  '{{DISPUTE_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nDisputeUpdateParams params =\n  DisputeUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nDispute dispute =\n  client.v1().disputes().update(\"{{DISPUTE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst dispute = await stripe.disputes.update(\n  '{{DISPUTE_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.DisputeUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1Disputes.Update(\n  context.TODO(), \"{{DISPUTE_ID}}\", params)",
      ".NET": "var options = new DisputeUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Disputes;\nDispute dispute = service.Update(\"{{DISPUTE_ID}}\", options);"
    },
    "Retrieve a dispute": {
      "cURL": "curl https://api.stripe.com/v1/disputes/{{DISPUTE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe disputes retrieve {{DISPUTE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ndispute = client.v1.disputes.retrieve('{{DISPUTE_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ndispute = client.v1.disputes.retrieve(\"{{DISPUTE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$dispute = $stripe->disputes->retrieve('{{DISPUTE_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nDisputeRetrieveParams params = DisputeRetrieveParams.builder().build();\n\nDispute dispute =\n  client.v1().disputes().retrieve(\"{{DISPUTE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst dispute = await stripe.disputes.retrieve('{{DISPUTE_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.DisputeRetrieveParams{}\nresult, err := sc.V1Disputes.Retrieve(\n  context.TODO(), \"{{DISPUTE_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Disputes;\nDispute dispute = service.Get(\"{{DISPUTE_ID}}\");"
    },
    "List all disputes": {
      "cURL": "curl -G https://api.stripe.com/v1/disputes \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe disputes list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ndisputes = client.v1.disputes.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ndisputes = client.v1.disputes.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$disputes = $stripe->disputes->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nDisputeListParams params = DisputeListParams.builder().setLimit(3L).build();\n\nStripeCollection<Dispute> stripeCollection = client.v1().disputes().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst disputes = await stripe.disputes.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.DisputeListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1Disputes.List(context.TODO(), params)",
      ".NET": "var options = new DisputeListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Disputes;\nStripeList<Dispute> disputes = service.List(options);"
    },
    "Close a dispute": {
      "cURL": "curl -X POST https://api.stripe.com/v1/disputes/{{DISPUTE_ID}}/close \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe disputes close {{DISPUTE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ndispute = client.v1.disputes.close('{{DISPUTE_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ndispute = client.v1.disputes.close(\"{{DISPUTE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$dispute = $stripe->disputes->close('{{DISPUTE_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nDisputeCloseParams params = DisputeCloseParams.builder().build();\n\nDispute dispute =\n  client.v1().disputes().close(\"{{DISPUTE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst dispute = await stripe.disputes.close('{{DISPUTE_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.DisputeCloseParams{}\nresult, err := sc.V1Disputes.Close(\n  context.TODO(), \"{{DISPUTE_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Disputes;\nDispute dispute = service.Close(\"{{DISPUTE_ID}}\");"
    }
  },
  "events-v1": {
    "Retrieve an event": {
      "cURL": "curl https://api.stripe.com/v1/events/{{EVENT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe events retrieve {{EVENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent = client.v1.events.retrieve('{{EVENT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent = client.v1.events.retrieve(\"{{EVENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$event = $stripe->events->retrieve('{{EVENT_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEventRetrieveParams params = EventRetrieveParams.builder().build();\n\nEvent event = client.v1().events().retrieve(\"{{EVENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst event = await stripe.events.retrieve('{{EVENT_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.EventRetrieveParams{}\nresult, err := sc.V1Events.Retrieve(\n  context.TODO(), \"{{EVENT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Events;\nEvent result = service.Get(\"{{EVENT_ID}}\");"
    },
    "List all events": {
      "cURL": "curl -G https://api.stripe.com/v1/events \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe events list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevents = client.v1.events.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevents = client.v1.events.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$events = $stripe->events->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEventListParams params = EventListParams.builder().setLimit(3L).build();\n\nStripeCollection<Event> stripeCollection = client.v1().events().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst events = await stripe.events.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.EventListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1Events.List(context.TODO(), params)",
      ".NET": "var options = new EventListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Events;\nStripeList<Event> events = service.List(options);"
    }
  },
  "events-v2": {
    "Retrieve an Event": {
      "cURL": "curl https://api.stripe.com/v2/core/events/evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core events retrieve evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent = client.v2.core.events.retrieve('evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent = client.v2.core.events.retrieve(\n  \"evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$event = $stripe->v2->core->events->retrieve(\n  'evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEvent event =\n  client.v2().core().events().retrieve(\n    \"evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst event = await stripe.v2.core.events.retrieve(\n  'evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventRetrieveParams{}\nresult, err := sc.V2CoreEvents.Retrieve(\n  context.TODO(), \"evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Events;\nStripe.V2.Core.Event result = service.Get(\n    \"evt_test_65RCjj4EqW1sabcjs2Z16RCMoNQdSQkOWvfL6L5uU2K40u\");"
    },
    "List Events": {
      "cURL": "curl -G https://api.stripe.com/v2/core/events \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  -d object_id=mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc",
      "Stripe CLI": "stripe v2 core events list  \\\n  --object-id=mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevents = client.v2.core.events.list({\n  object_id: 'mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevents = client.v2.core.events.list({\n  \"object_id\": \"mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$events = $stripe->v2->core->events->all([\n  'object_id' => 'mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nEventListParams params =\n  EventListParams.builder()\n    .setObjectId(\"mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc\")\n    .build();\nStripeCollection<Event> events = client.v2().core().events().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst events = await stripe.v2.core.events.list({\n  object_id: 'mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventListParams{\n  ObjectID: stripe.String(\"mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc\"),\n}\nresult := sc.V2CoreEvents.List(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.EventListOptions\n{\n    ObjectId = \"mtr_test_61RCjiqdTDC91zgip41IqPCzPnxqqSVc\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Events;\nStripe.V2.StripeList<Stripe.V2.Core.Event> events = service.List(options);"
    },
    "Ping an Event Destination": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/event_destinations/evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92/ping \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core event_destinations ping evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent = client.v2.core.event_destinations.ping('evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent = client.v2.core.event_destinations.ping(\n  \"evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$event = $stripe->v2->core->eventDestinations->ping(\n  'evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEvent event =\n  client.v2().core().eventDestinations().ping(\n    \"evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst event = await stripe.v2.core.eventDestinations.ping(\n  'evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventDestinationPingParams{}\nresult, err := sc.V2CoreEventDestinations.Ping(\n  context.TODO(), \"evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.EventDestinations;\nStripe.V2.Core.Event result = service.Ping(\n    \"evt_test_65RM8sQH2oXnebF5Rpc16RJyfa2xSQLHJJh1sxm7H0KI92\");"
    }
  },
  "event-destinations-v2": {
    "Create an Event Destination": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/event_destinations \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"name\": \"My Event Destination\",\n    \"description\": \"This is my event destination, I like it a lot\",\n    \"enabled_events\": [\n        \"v1.billing.meter.error_report_triggered\"\n    ],\n    \"type\": \"webhook_endpoint\",\n    \"webhook_endpoint\": {\n        \"url\": \"https://example.com/my/webhook/endpoint\"\n    },\n    \"event_payload\": \"thin\",\n    \"include\": [\n        \"webhook_endpoint.url\"\n    ]\n  }'",
      "Stripe CLI": "stripe v2 core event_destinations create  \\\n  --name=\"My Event Destination\" \\\n  --description=\"This is my event destination, I like it a lot\" \\\n  --enabled-events=\"v1.billing.meter.error_report_triggered\" \\\n  --type=webhook_endpoint \\\n  --webhook-endpoint.url=\"https://example.com/my/webhook/endpoint\" \\\n  --event-payload=thin \\\n  --include=\"webhook_endpoint.url\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.create({\n  name: 'My Event Destination',\n  description: 'This is my event destination, I like it a lot',\n  enabled_events: ['v1.billing.meter.error_report_triggered'],\n  type: 'webhook_endpoint',\n  webhook_endpoint: {url: 'https://example.com/my/webhook/endpoint'},\n  event_payload: 'thin',\n  include: ['webhook_endpoint.url'],\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.create({\n  \"name\": \"My Event Destination\",\n  \"description\": \"This is my event destination, I like it a lot\",\n  \"enabled_events\": [\"v1.billing.meter.error_report_triggered\"],\n  \"type\": \"webhook_endpoint\",\n  \"webhook_endpoint\": {\"url\": \"https://example.com/my/webhook/endpoint\"},\n  \"event_payload\": \"thin\",\n  \"include\": [\"webhook_endpoint.url\"],\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$eventDestination = $stripe->v2->core->eventDestinations->create([\n  'name' => 'My Event Destination',\n  'description' => 'This is my event destination, I like it a lot',\n  'enabled_events' => ['v1.billing.meter.error_report_triggered'],\n  'type' => 'webhook_endpoint',\n  'webhook_endpoint' => ['url' => 'https://example.com/my/webhook/endpoint'],\n  'event_payload' => 'thin',\n  'include' => ['webhook_endpoint.url'],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEventDestinationCreateParams params =\n  EventDestinationCreateParams.builder()\n    .setName(\"My Event Destination\")\n    .setDescription(\"This is my event destination, I like it a lot\")\n    .addEnabledEvent(\"v1.billing.meter.error_report_triggered\")\n    .setType(EventDestinationCreateParams.Type.WEBHOOK_ENDPOINT)\n    .setWebhookEndpoint(\n      EventDestinationCreateParams.WebhookEndpoint.builder()\n        .setUrl(\"https://example.com/my/webhook/endpoint\")\n        .build()\n    )\n    .setEventPayload(EventDestinationCreateParams.EventPayload.THIN)\n    .addInclude(EventDestinationCreateParams.Include.WEBHOOK_ENDPOINT__URL)\n    .build();\n\nEventDestination eventDestination =\n  client.v2().core().eventDestinations().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst eventDestination = await stripe.v2.core.eventDestinations.create({\n  name: 'My Event Destination',\n  description: 'This is my event destination, I like it a lot',\n  enabled_events: ['v1.billing.meter.error_report_triggered'],\n  type: 'webhook_endpoint',\n  webhook_endpoint: {\n    url: 'https://example.com/my/webhook/endpoint',\n  },\n  event_payload: 'thin',\n  include: ['webhook_endpoint.url'],\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventDestinationCreateParams{\n  Name: stripe.String(\"My Event Destination\"),\n  Description: stripe.String(\"This is my event destination, I like it a lot\"),\n  EnabledEvents: []*string{stripe.String(\"v1.billing.meter.error_report_triggered\")},\n  Type: stripe.String(\"webhook_endpoint\"),\n  WebhookEndpoint: &stripe.V2CoreEventDestinationCreateWebhookEndpointParams{\n    URL: stripe.String(\"https://example.com/my/webhook/endpoint\"),\n  },\n  EventPayload: stripe.String(\"thin\"),\n  Include: []*string{stripe.String(\"webhook_endpoint.url\")},\n}\nresult, err := sc.V2CoreEventDestinations.Create(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.EventDestinationCreateOptions\n{\n    Name = \"My Event Destination\",\n    Description = \"This is my event destination, I like it a lot\",\n    EnabledEvents = new List<string> { \"v1.billing.meter.error_report_triggered\" },\n    Type = \"webhook_endpoint\",\n    WebhookEndpoint = new Stripe.V2.Core.EventDestinationCreateWebhookEndpointOptions\n    {\n        Url = \"https://example.com/my/webhook/endpoint\",\n    },\n    EventPayload = \"thin\",\n    Include = new List<string> { \"webhook_endpoint.url\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.EventDestinations;\nStripe.V2.Core.EventDestination eventDestination = service.Create(options);"
    },
    "Update an Event Destination": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/event_destinations/ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6 \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"description\": \"A better description\",\n    \"enabled_events\": [\n        \"v1.billing.meter.error_report_triggered\",\n        \"v1.billing.meter.no_meter_found\"\n    ],\n    \"include\": [\n        \"webhook_endpoint.url\"\n    ]\n  }'",
      "Stripe CLI": "stripe v2 core event_destinations update ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6 \\\n  --description=\"A better description\" \\\n  --enabled-events=\"v1.billing.meter.error_report_triggered\" \\\n  --enabled-events=\"v1.billing.meter.no_meter_found\" \\\n  --include=\"webhook_endpoint.url\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.update(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  {\n    description: 'A better description',\n    enabled_events: [\n      'v1.billing.meter.error_report_triggered',\n      'v1.billing.meter.no_meter_found',\n    ],\n    include: ['webhook_endpoint.url'],\n  },\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.update(\n  \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n  {\n    \"description\": \"A better description\",\n    \"enabled_events\": [\n      \"v1.billing.meter.error_report_triggered\",\n      \"v1.billing.meter.no_meter_found\",\n    ],\n    \"include\": [\"webhook_endpoint.url\"],\n  },\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$eventDestination = $stripe->v2->core->eventDestinations->update(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  [\n    'description' => 'A better description',\n    'enabled_events' => [\n      'v1.billing.meter.error_report_triggered',\n      'v1.billing.meter.no_meter_found',\n    ],\n    'include' => ['webhook_endpoint.url'],\n  ]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEventDestinationUpdateParams params =\n  EventDestinationUpdateParams.builder()\n    .setDescription(\"A better description\")\n    .addEnabledEvent(\"v1.billing.meter.error_report_triggered\")\n    .addEnabledEvent(\"v1.billing.meter.no_meter_found\")\n    .addInclude(EventDestinationUpdateParams.Include.WEBHOOK_ENDPOINT__URL)\n    .build();\n\nEventDestination eventDestination =\n  client.v2().core().eventDestinations().update(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst eventDestination = await stripe.v2.core.eventDestinations.update(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  {\n    description: 'A better description',\n    enabled_events: [\n      'v1.billing.meter.error_report_triggered',\n      'v1.billing.meter.no_meter_found',\n    ],\n    include: ['webhook_endpoint.url'],\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventDestinationUpdateParams{\n  Description: stripe.String(\"A better description\"),\n  EnabledEvents: []*string{\n    stripe.String(\"v1.billing.meter.error_report_triggered\"),\n    stripe.String(\"v1.billing.meter.no_meter_found\"),\n  },\n  Include: []*string{stripe.String(\"webhook_endpoint.url\")},\n}\nresult, err := sc.V2CoreEventDestinations.Update(\n  context.TODO(), \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\", params)",
      ".NET": "var options = new Stripe.V2.Core.EventDestinationUpdateOptions\n{\n    Description = \"A better description\",\n    EnabledEvents = new List<string>\n    {\n        \"v1.billing.meter.error_report_triggered\",\n        \"v1.billing.meter.no_meter_found\",\n    },\n    Include = new List<string> { \"webhook_endpoint.url\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.EventDestinations;\nStripe.V2.Core.EventDestination eventDestination = service.Update(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n    options);"
    },
    "Retrieve an Event Destination": {
      "cURL": "curl -G https://api.stripe.com/v2/core/event_destinations/ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6 \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  -d \"include[0]=webhook_endpoint.url\"",
      "Stripe CLI": "stripe v2 core event_destinations retrieve ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6 \\\n  --include=\"webhook_endpoint.url\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.retrieve(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  {include: ['webhook_endpoint.url']},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.retrieve(\n  \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n  {\"include\": [\"webhook_endpoint.url\"]},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$eventDestination = $stripe->v2->core->eventDestinations->retrieve(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  ['include' => ['webhook_endpoint.url']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEventDestinationRetrieveParams params =\n  EventDestinationRetrieveParams.builder()\n    .addInclude(EventDestinationRetrieveParams.Include.WEBHOOK_ENDPOINT__URL)\n    .build();\n\nEventDestination eventDestination =\n  client.v2().core().eventDestinations().retrieve(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst eventDestination = await stripe.v2.core.eventDestinations.retrieve(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  {\n    include: ['webhook_endpoint.url'],\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventDestinationRetrieveParams{\n  Include: []*string{stripe.String(\"webhook_endpoint.url\")},\n}\nresult, err := sc.V2CoreEventDestinations.Retrieve(\n  context.TODO(), \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\", params)",
      ".NET": "var options = new Stripe.V2.Core.EventDestinationGetOptions\n{\n    Include = new List<string> { \"webhook_endpoint.url\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.EventDestinations;\nStripe.V2.Core.EventDestination eventDestination = service.Get(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n    options);"
    },
    "List Event Destinations": {
      "cURL": "curl -G https://api.stripe.com/v2/core/event_destinations \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  -d \"include[0]=webhook_endpoint.url\"",
      "Stripe CLI": "stripe v2 core event_destinations list  \\\n  --include=\"webhook_endpoint.url\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destinations = client.v2.core.event_destinations.list({\n  include: ['webhook_endpoint.url'],\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destinations = client.v2.core.event_destinations.list({\n  \"include\": [\"webhook_endpoint.url\"],\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$eventDestinations = $stripe->v2->core->eventDestinations->all([\n  'include' => ['webhook_endpoint.url'],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEventDestinationListParams params =\n  EventDestinationListParams.builder()\n    .addInclude(EventDestinationListParams.Include.WEBHOOK_ENDPOINT__URL)\n    .build();\n\nStripeCollection<EventDestination> stripeCollection =\n  client.v2().core().eventDestinations().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst eventDestinations = await stripe.v2.core.eventDestinations.list({\n  include: ['webhook_endpoint.url'],\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventDestinationListParams{\n  Include: []*string{stripe.String(\"webhook_endpoint.url\")},\n}\nresult := sc.V2CoreEventDestinations.List(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.EventDestinationListOptions\n{\n    Include = new List<string> { \"webhook_endpoint.url\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.EventDestinations;\nStripe.V2.StripeList<Stripe.V2.Core.EventDestination> eventDestinations = service\n    .List(options);"
    },
    "Delete an Event Destination": {
      "cURL": "curl -X DELETE https://api.stripe.com/v2/core/event_destinations/ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6 \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core event_destinations delete ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ndeleted = client.v2.core.event_destinations.delete('ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ndeleted = client.v2.core.event_destinations.delete(\n  \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$deleted = $stripe->v2->core->eventDestinations->delete(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nDeletedObject deletedObject =\n  client.v2().core().eventDestinations().delete(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst deleted = await stripe.v2.core.eventDestinations.del(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventDestinationDeleteParams{}\nresult, err := sc.V2CoreEventDestinations.Delete(\n  context.TODO(), \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.EventDestinations;\nStripe.V2.DeletedObject deleted = service.Delete(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\");"
    },
    "Disable an Event Destination": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/event_destinations/ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6/disable \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core event_destinations disable ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.disable('ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.disable(\n  \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$eventDestination = $stripe->v2->core->eventDestinations->disable(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEventDestination eventDestination =\n  client.v2().core().eventDestinations().disable(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst eventDestination = await stripe.v2.core.eventDestinations.disable(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventDestinationDisableParams{}\nresult, err := sc.V2CoreEventDestinations.Disable(\n  context.TODO(), \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.EventDestinations;\nStripe.V2.Core.EventDestination eventDestination = service.Disable(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\");"
    },
    "Enable an Event Destination": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/event_destinations/ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6/enable \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core event_destinations enable ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.enable('ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nevent_destination = client.v2.core.event_destinations.enable(\n  \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$eventDestination = $stripe->v2->core->eventDestinations->enable(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nEventDestination eventDestination =\n  client.v2().core().eventDestinations().enable(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst eventDestination = await stripe.v2.core.eventDestinations.enable(\n  'ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreEventDestinationEnableParams{}\nresult, err := sc.V2CoreEventDestinations.Enable(\n  context.TODO(), \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.EventDestinations;\nStripe.V2.Core.EventDestination eventDestination = service.Enable(\n    \"ed_test_61RM8ltWcTW4mbsxf16RJyfa2xSQLHJJh1sxm7H0KVT6\");"
    }
  },
  "files": {
    "Create a file": {
      "cURL": "curl https://files.stripe.com/v1/files \\\n  -u <<YOUR_SECRET_KEY>> \\\n  -F purpose=dispute_evidence \\\n  -F file=\"@/path/to/a/file.jpg\"",
      "Stripe CLI": "stripe files create  \\\n  --purpose=dispute_evidence \\\n  --file=\"@/path/to/a/file.png\"",
      "Ruby": "Stripe.api_key = \"<<YOUR_SECRET_KEY>>\"\nfile = File.new(\"@/path/to/a/file.jpg\")\n\nStripe::File.create(\n  {\n    purpose: \"dispute_evidence\",\n    file: file\n  }\n)",
      "Python": "stripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nwith open(\"@/path/to/a/file.jpg\", \"rb\") as fp:\n  stripe.File.create(\n    purpose=\"dispute_evidence\",\n    file=fp\n  )",
      "PHP": "$fp = fopen('@/path/to/a/file.jpg', 'r');\n\n$stripe->files->create([\n  'purpose' => 'dispute_evidence',\n  'file' => $fp\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFileCreateParams params =\n  FileCreateParams.builder()\n    .setFile(new java.io.File(\"@/path/to/a/file.jpg\"))\n    .setPurpose(FileCreateParams.Purpose.DISPUTE_EVIDENCE)\n    .build();\n\nFile upload = File.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fp = fs.readFileSync('@/path/to/a/file.jpg');\nconst upload = await stripe.files.create({\n  file: {\n    data: fp,\n    name: 'file.jpg',\n    type: 'application.octet-stream',\n  },\n  purpose: 'dispute_evidence',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nfp, _ := os.Open(\"/path/to/a/file.jpg\")\nparams := &stripe.FileParams{\n\tFileReader: fp,\n\tPurpose:    stripe.String(string(stripe.FilePurposeDisputeEvidence)),\n\tFilename:   stripe.String(\"file.jpg\"),\n}\nupload, _ := file.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar filename = \"@/path/to/a/file.png\";\nusing (FileStream stream = System.IO.File.Open(filename, FileMode.Open))\n{\n  var options = new FileCreateOptions\n  {\n    File = stream,\n      Purpose = FilePurpose.DisputeEvidence\n  };\n  var service = new FileService();\n  var file = service.Create(options);\n}"
    },
    "Retrieve a file": {
      "cURL": "curl https://api.stripe.com/v1/files/{{FILE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe files retrieve {{FILE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nfile = client.v1.files.retrieve('{{FILE_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nfile = client.v1.files.retrieve(\"{{FILE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$file = $stripe->files->retrieve('{{FILE_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFile file = File.retrieve(\"{{FILE_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst file = await stripe.files.retrieve('{{FILE_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.FileRetrieveParams{}\nresult, err := sc.V1Files.Retrieve(\n  context.TODO(), \"{{FILE_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Files;\nFile file = service.Get(\"{{FILE_ID}}\");"
    },
    "List all files": {
      "cURL": "curl -G https://api.stripe.com/v1/files \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe files list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nfiles = client.v1.files.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nfiles = client.v1.files.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$files = $stripe->files->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFileListParams params = FileListParams.builder().setLimit(3L).build();\n\nFileCollection files = FileCollection.list();",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst files = await stripe.files.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.FileListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1Files.List(context.TODO(), params)",
      ".NET": "var options = new FileListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Files;\nStripeList<File> files = service.List(options);"
    }
  },
  "file-links": {
    "Create a file link": {
      "cURL": "curl https://api.stripe.com/v1/file_links \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d file={{FILE_ID}}",
      "Stripe CLI": "stripe file_links create  \\\n  --file={{FILE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nfile_link = client.v1.file_links.create({file: '{{FILE_ID}}'})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nfile_link = client.v1.file_links.create({\"file\": \"{{FILE_ID}}\"})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fileLink = $stripe->fileLinks->create(['file' => '{{FILE_ID}}']);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nFileLinkCreateParams params =\n  FileLinkCreateParams.builder().setFile(\"{{FILE_ID}}\").build();\n\nFileLink fileLink = client.v1().fileLinks().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fileLink = await stripe.fileLinks.create({\n  file: '{{FILE_ID}}',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.FileLinkCreateParams{\n  File: stripe.String(\"{{FILE_ID}}\"),\n}\nresult, err := sc.V1FileLinks.Create(context.TODO(), params)",
      ".NET": "var options = new FileLinkCreateOptions { File = \"{{FILE_ID}}\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.FileLinks;\nFileLink fileLink = service.Create(options);"
    },
    "Update a file link": {
      "cURL": "curl https://api.stripe.com/v1/file_links/{{FILE_LINK_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe file_links update {{FILE_LINK_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nfile_link = client.v1.file_links.update(\n  '{{FILE_LINK_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nfile_link = client.v1.file_links.update(\n  \"{{FILE_LINK_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fileLink = $stripe->fileLinks->update(\n  '{{FILE_LINK_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nFileLinkUpdateParams params =\n  FileLinkUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nFileLink fileLink =\n  client.v1().fileLinks().update(\"{{FILE_LINK_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fileLink = await stripe.fileLinks.update(\n  '{{FILE_LINK_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.FileLinkUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1FileLinks.Update(\n  context.TODO(), \"{{FILE_LINK_ID}}\", params)",
      ".NET": "var options = new FileLinkUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.FileLinks;\nFileLink fileLink = service.Update(\"{{FILE_LINK_ID}}\", options);"
    },
    "Retrieve a file link": {
      "cURL": "curl https://api.stripe.com/v1/file_links/{{FILE_LINK_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe file_links retrieve {{FILE_LINK_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nfile_link = client.v1.file_links.retrieve('{{FILE_LINK_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nfile_link = client.v1.file_links.retrieve(\"{{FILE_LINK_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fileLink = $stripe->fileLinks->retrieve('{{FILE_LINK_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nFileLinkRetrieveParams params = FileLinkRetrieveParams.builder().build();\n\nFileLink fileLink =\n  client.v1().fileLinks().retrieve(\"{{FILE_LINK_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fileLink = await stripe.fileLinks.retrieve('{{FILE_LINK_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.FileLinkRetrieveParams{}\nresult, err := sc.V1FileLinks.Retrieve(\n  context.TODO(), \"{{FILE_LINK_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.FileLinks;\nFileLink fileLink = service.Get(\"{{FILE_LINK_ID}}\");"
    },
    "List all file links": {
      "cURL": "curl -G https://api.stripe.com/v1/file_links \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe file_links list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nfile_links = client.v1.file_links.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nfile_links = client.v1.file_links.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fileLinks = $stripe->fileLinks->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nFileLinkListParams params = FileLinkListParams.builder().setLimit(3L).build();\n\nStripeCollection<FileLink> stripeCollection = client.v1().fileLinks().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fileLinks = await stripe.fileLinks.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.FileLinkListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1FileLinks.List(context.TODO(), params)",
      ".NET": "var options = new FileLinkListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.FileLinks;\nStripeList<FileLink> fileLinks = service.List(options);"
    }
  },
  "mandates": {
    "Retrieve a Mandate": {
      "cURL": "curl https://api.stripe.com/v1/mandates/{{MANDATE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe mandates retrieve {{MANDATE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nmandate = client.v1.mandates.retrieve('{{MANDATE_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nmandate = client.v1.mandates.retrieve(\"{{MANDATE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$mandate = $stripe->mandates->retrieve('{{MANDATE_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nMandateRetrieveParams params = MandateRetrieveParams.builder().build();\n\nMandate mandate =\n  client.v1().mandates().retrieve(\"{{MANDATE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst mandate = await stripe.mandates.retrieve('{{MANDATE_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.MandateRetrieveParams{}\nresult, err := sc.V1Mandates.Retrieve(\n  context.TODO(), \"{{MANDATE_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Mandates;\nMandate mandate = service.Get(\"{{MANDATE_ID}}\");"
    }
  },
  "payment-intents": {
    "Create a PaymentIntent": {
      "cURL": "curl https://api.stripe.com/v1/payment_intents \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d amount=2000 \\\n  -d currency=usd \\\n  -d \"automatic_payment_methods[enabled]=true\"",
      "Stripe CLI": "stripe payment_intents create  \\\n  --amount=2000 \\\n  --currency=usd \\\n  -d \"automatic_payment_methods[enabled]\"=true",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.create({\n  amount: 2000,\n  currency: 'usd',\n  automatic_payment_methods: {enabled: true},\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.create({\n  \"amount\": 2000,\n  \"currency\": \"usd\",\n  \"automatic_payment_methods\": {\"enabled\": True},\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->create([\n  'amount' => 2000,\n  'currency' => 'usd',\n  'automatic_payment_methods' => ['enabled' => true],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentCreateParams params =\n  PaymentIntentCreateParams.builder()\n    .setAmount(2000L)\n    .setCurrency(\"usd\")\n    .setAutomaticPaymentMethods(\n      PaymentIntentCreateParams.AutomaticPaymentMethods.builder()\n        .setEnabled(true)\n        .build()\n    )\n    .build();\n\nPaymentIntent paymentIntent = client.v1().paymentIntents().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.create({\n  amount: 2000,\n  currency: 'usd',\n  automatic_payment_methods: {\n    enabled: true,\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentCreateParams{\n  Amount: stripe.Int64(2000),\n  Currency: stripe.String(stripe.CurrencyUSD),\n  AutomaticPaymentMethods: &stripe.PaymentIntentCreateAutomaticPaymentMethodsParams{\n    Enabled: stripe.Bool(true),\n  },\n}\nresult, err := sc.V1PaymentIntents.Create(context.TODO(), params)",
      ".NET": "var options = new PaymentIntentCreateOptions\n{\n    Amount = 2000,\n    Currency = \"usd\",\n    AutomaticPaymentMethods = new PaymentIntentAutomaticPaymentMethodsOptions\n    {\n        Enabled = true,\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.Create(options);"
    },
    "Update a PaymentIntent": {
      "cURL": "curl https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe payment_intents update {{PAYMENT_INTENT_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.update(\n  '{{PAYMENT_INTENT_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.update(\n  \"{{PAYMENT_INTENT_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->update(\n  '{{PAYMENT_INTENT_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentUpdateParams params =\n  PaymentIntentUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nPaymentIntent paymentIntent =\n  client.v1().paymentIntents().update(\"{{PAYMENT_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.update(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1PaymentIntents.Update(\n  context.TODO(), \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "var options = new PaymentIntentUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.Update(\"{{PAYMENT_INTENT_ID}}\", options);"
    },
    "Retrieve a PaymentIntent": {
      "cURL": "curl https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_intents retrieve {{PAYMENT_INTENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.retrieve('{{PAYMENT_INTENT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.retrieve(\"{{PAYMENT_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->retrieve(\n  '{{PAYMENT_INTENT_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentRetrieveParams params = PaymentIntentRetrieveParams.builder().build();\n\nPaymentIntent paymentIntent =\n  client.v1().paymentIntents().retrieve(\"{{PAYMENT_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.retrieve(\n  '{{PAYMENT_INTENT_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentRetrieveParams{}\nresult, err := sc.V1PaymentIntents.Retrieve(\n  context.TODO(), \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.Get(\"{{PAYMENT_INTENT_ID}}\");"
    },
    "List all PaymentIntents": {
      "cURL": "curl -G https://api.stripe.com/v1/payment_intents \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe payment_intents list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intents = client.v1.payment_intents.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intents = client.v1.payment_intents.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntents = $stripe->paymentIntents->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentListParams params =\n  PaymentIntentListParams.builder().setLimit(3L).build();\n\nStripeCollection<PaymentIntent> stripeCollection =\n  client.v1().paymentIntents().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntents = await stripe.paymentIntents.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1PaymentIntents.List(context.TODO(), params)",
      ".NET": "var options = new PaymentIntentListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nStripeList<PaymentIntent> paymentIntents = service.List(options);"
    },
    "List all PaymentIntent LineItems": {
      "cURL": "curl https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}}/amount_details_line_items \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_intent_amount_details_line_items list {{PAYMENT_INTENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent_amount_details_line_items = client.v1.payment_intents.amount_details_line_items.list('{{PAYMENT_INTENT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent_amount_details_line_items = client \\\n  .v1 \\\n  .payment_intents \\\n  .amount_details_line_items \\\n  .list(\"{{PAYMENT_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntentAmountDetailsLineItems = $stripe->paymentIntents->allAmountDetailsLineItems(\n  '{{PAYMENT_INTENT_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentAmountDetailsLineItemListParams params =\n  PaymentIntentAmountDetailsLineItemListParams.builder().build();\n\nStripeCollection<PaymentIntentAmountDetailsLineItem> stripeCollection =\n  client.v1().paymentIntents().amountDetailsLineItems().list(\n    \"{{PAYMENT_INTENT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntentAmountDetailsLineItems = await stripe\n  .paymentIntents\n  .listAmountDetailsLineItems('{{PAYMENT_INTENT_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentAmountDetailsLineItemListParams{\n  Intent: stripe.String(\"{{PAYMENT_INTENT_ID}}\"),\n}\nresult := sc.V1PaymentIntentAmountDetailsLineItems.List(context.TODO(), params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents.AmountDetailsLineItems;\nStripeList<PaymentIntentAmountDetailsLineItem> paymentIntentAmountDetailsLineItems = service\n    .List(\"{{PAYMENT_INTENT_ID}}\");"
    },
    "Cancel a PaymentIntent": {
      "cURL": "curl -X POST https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}}/cancel \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_intents cancel {{PAYMENT_INTENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.cancel('{{PAYMENT_INTENT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.cancel(\"{{PAYMENT_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->cancel('{{PAYMENT_INTENT_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentCancelParams params = PaymentIntentCancelParams.builder().build();\n\nPaymentIntent paymentIntent =\n  client.v1().paymentIntents().cancel(\"{{PAYMENT_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.cancel(\n  '{{PAYMENT_INTENT_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentCancelParams{}\nresult, err := sc.V1PaymentIntents.Cancel(\n  context.TODO(), \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.Cancel(\"{{PAYMENT_INTENT_ID}}\");"
    },
    "Capture a PaymentIntent": {
      "cURL": "curl -X POST https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}}/capture \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_intents capture {{PAYMENT_INTENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.capture('{{PAYMENT_INTENT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.capture(\"{{PAYMENT_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->capture('{{PAYMENT_INTENT_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentCaptureParams params = PaymentIntentCaptureParams.builder().build();\n\nPaymentIntent paymentIntent =\n  client.v1().paymentIntents().capture(\"{{PAYMENT_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.capture(\n  '{{PAYMENT_INTENT_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentCaptureParams{}\nresult, err := sc.V1PaymentIntents.Capture(\n  context.TODO(), \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.Capture(\"{{PAYMENT_INTENT_ID}}\");"
    },
    "Confirm a PaymentIntent": {
      "cURL": "curl https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}}/confirm \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d payment_method=pm_card_visa \\\n  --data-urlencode \"return_url=https://www.example.com\"",
      "Stripe CLI": "stripe payment_intents confirm {{PAYMENT_INTENT_ID}} \\\n  --payment-method=pm_card_visa \\\n  --return-url=\"https://www.example.com\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.confirm(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    payment_method: 'pm_card_visa',\n    return_url: 'https://www.example.com',\n  },\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.confirm(\n  \"{{PAYMENT_INTENT_ID}}\",\n  {\"payment_method\": \"pm_card_visa\", \"return_url\": \"https://www.example.com\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->confirm(\n  '{{PAYMENT_INTENT_ID}}',\n  [\n    'payment_method' => 'pm_card_visa',\n    'return_url' => 'https://www.example.com',\n  ]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentConfirmParams params =\n  PaymentIntentConfirmParams.builder()\n    .setPaymentMethod(\"pm_card_visa\")\n    .setReturnUrl(\"https://www.example.com\")\n    .build();\n\nPaymentIntent paymentIntent =\n  client.v1().paymentIntents().confirm(\"{{PAYMENT_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.confirm(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    payment_method: 'pm_card_visa',\n    return_url: 'https://www.example.com',\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentConfirmParams{\n  PaymentMethod: stripe.String(\"pm_card_visa\"),\n  ReturnURL: stripe.String(\"https://www.example.com\"),\n}\nresult, err := sc.V1PaymentIntents.Confirm(\n  context.TODO(), \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "var options = new PaymentIntentConfirmOptions\n{\n    PaymentMethod = \"pm_card_visa\",\n    ReturnUrl = \"https://www.example.com\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.Confirm(\n    \"{{PAYMENT_INTENT_ID}}\",\n    options);"
    },
    "Increment an authorization": {
      "cURL": "curl https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}}/increment_authorization \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d amount=2099",
      "Stripe CLI": "stripe payment_intents increment_authorization {{PAYMENT_INTENT_ID}} \\\n  --amount=2099",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.increment_authorization(\n  '{{PAYMENT_INTENT_ID}}',\n  {amount: 2099},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.increment_authorization(\n  \"{{PAYMENT_INTENT_ID}}\",\n  {\"amount\": 2099},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->incrementAuthorization(\n  '{{PAYMENT_INTENT_ID}}',\n  ['amount' => 2099]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentIncrementAuthorizationParams params =\n  PaymentIntentIncrementAuthorizationParams.builder().setAmount(2099L).build();\n\nPaymentIntent paymentIntent =\n  client.v1().paymentIntents().incrementAuthorization(\n    \"{{PAYMENT_INTENT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.incrementAuthorization(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    amount: 2099,\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentIncrementAuthorizationParams{\n  Amount: stripe.Int64(2099),\n}\nresult, err := sc.V1PaymentIntents.IncrementAuthorization(\n  context.TODO(), \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "var options = new PaymentIntentIncrementAuthorizationOptions { Amount = 2099 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.IncrementAuthorization(\n    \"{{PAYMENT_INTENT_ID}}\",\n    options);"
    },
    "Reconcile a customer_balance PaymentIntent": {
      "cURL": "curl -X POST https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}}/apply_customer_balance \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_intents apply_customer_balance {{PAYMENT_INTENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.apply_customer_balance('{{PAYMENT_INTENT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.apply_customer_balance(\n  \"{{PAYMENT_INTENT_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->applyCustomerBalance(\n  '{{PAYMENT_INTENT_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentApplyCustomerBalanceParams params =\n  PaymentIntentApplyCustomerBalanceParams.builder().build();\n\nPaymentIntent paymentIntent =\n  client.v1().paymentIntents().applyCustomerBalance(\n    \"{{PAYMENT_INTENT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.applyCustomerBalance(\n  '{{PAYMENT_INTENT_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentApplyCustomerBalanceParams{}\nresult, err := sc.V1PaymentIntents.ApplyCustomerBalance(\n  context.TODO(), \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.ApplyCustomerBalance(\n    \"{{PAYMENT_INTENT_ID}}\");"
    },
    "Search PaymentIntents": {
      "cURL": "curl -G https://api.stripe.com/v1/payment_intents/search \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"query=amount>1000\"",
      "Stripe CLI": "stripe payment_intents search  \\\n  --query=\"amount>1000\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intents = client.v1.payment_intents.search({query: 'amount>1000'})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intents = client.v1.payment_intents.search({\"query\": \"amount>1000\"})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntents = $stripe->paymentIntents->search(['query' => 'amount>1000']);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentSearchParams params =\n  PaymentIntentSearchParams.builder().setQuery(\"amount>1000\").build();\n\nStripeSearchResult<PaymentIntent> stripeSearchResult =\n  client.v1().paymentIntents().search(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntents = await stripe.paymentIntents.search({\n  query: 'amount>1000',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentSearchParams{\n  SearchParams: stripe.SearchParams{Query: \"amount>1000\"},\n}\nresult := sc.V1PaymentIntents.Search(context.TODO(), params)",
      ".NET": "var options = new PaymentIntentSearchOptions { Query = \"amount>1000\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nStripeSearchResult<PaymentIntent> paymentIntents = service.Search(options);"
    },
    "Verify microdeposits on a PaymentIntent": {
      "cURL": "curl https://api.stripe.com/v1/payment_intents/{{PAYMENT_INTENT_ID}}/verify_microdeposits \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"amounts[]=32\" \\\n  -d \"amounts[]=45\"",
      "Stripe CLI": "stripe payment_intents verify_microdeposits {{PAYMENT_INTENT_ID}} \\\n  -d \"amounts[0]\"=32 \\\n  -d \"amounts[1]\"=45",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.verify_microdeposits(\n  '{{PAYMENT_INTENT_ID}}',\n  {amounts: [32, 45]},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_intent = client.v1.payment_intents.verify_microdeposits(\n  \"{{PAYMENT_INTENT_ID}}\",\n  {\"amounts\": [32, 45]},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->verifyMicrodeposits(\n  '{{PAYMENT_INTENT_ID}}',\n  ['amounts' => [32, 45]]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentIntentVerifyMicrodepositsParams params =\n  PaymentIntentVerifyMicrodepositsParams.builder()\n    .addAmount(32L)\n    .addAmount(45L)\n    .build();\n\nPaymentIntent paymentIntent =\n  client.v1().paymentIntents().verifyMicrodeposits(\n    \"{{PAYMENT_INTENT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.verifyMicrodeposits(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    amounts: [32, 45],\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentIntentVerifyMicrodepositsParams{\n  Amounts: []*int64{stripe.Int64(32), stripe.Int64(45)},\n}\nresult, err := sc.V1PaymentIntents.VerifyMicrodeposits(\n  context.TODO(), \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "var options = new PaymentIntentVerifyMicrodepositsOptions\n{\n    Amounts = new List<long?> { 32, 45 },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentIntents;\nPaymentIntent paymentIntent = service.VerifyMicrodeposits(\n    \"{{PAYMENT_INTENT_ID}}\",\n    options);"
    }
  },
  "persons-v2": {
    "Create a person": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}}/persons \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"given_name\": \"Jenny\",\n    \"surname\": \"Rosen\",\n    \"email\": \"jenny.rosen@example.com\",\n    \"address\": {\n        \"line1\": \"27 Fredrick Ave\",\n        \"city\": \"Brothers\",\n        \"postal_code\": \"97712\",\n        \"state\": \"OR\",\n        \"country\": \"us\"\n    },\n    \"id_numbers\": [\n        {\n            \"type\": \"us_ssn_last_4\",\n            \"value\": \"0000\"\n        }\n    ],\n    \"relationship\": {\n        \"owner\": true,\n        \"percent_ownership\": \"0.8\",\n        \"representative\": true,\n        \"title\": \"CEO\"\n    }\n  }'",
      "Stripe CLI": "stripe v2 core account_persons create {{ACCOUNT_ID}} \\\n  --given-name=Jenny \\\n  --surname=Rosen \\\n  --email=\"jenny.rosen@example.com\" \\\n  --address.line1=\"27 Fredrick Ave\" \\\n  --address.city=Brothers \\\n  --address.postal-code=97712 \\\n  --address.state=OR \\\n  --address.country=us \\\n  --id-numbers.type=us_ssn_last_4 \\\n  --id-numbers.value=0000 \\\n  --relationship.owner=true \\\n  --relationship.percent-ownership=\"0.8\" \\\n  --relationship.representative=true \\\n  --relationship.title=CEO",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person = client.v2.core.accounts.persons.create(\n  '{{ACCOUNT_ID}}',\n  {\n    given_name: 'Jenny',\n    surname: 'Rosen',\n    email: 'jenny.rosen@example.com',\n    address: {\n      line1: '27 Fredrick Ave',\n      city: 'Brothers',\n      postal_code: '97712',\n      state: 'OR',\n      country: 'us',\n    },\n    id_numbers: [\n      {\n        type: 'us_ssn_last_4',\n        value: '0000',\n      },\n    ],\n    relationship: {\n      owner: true,\n      percent_ownership: '0.8',\n      representative: true,\n      title: 'CEO',\n    },\n  },\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person = client.v2.core.accounts.persons.create(\n  \"{{ACCOUNT_ID}}\",\n  {\n    \"given_name\": \"Jenny\",\n    \"surname\": \"Rosen\",\n    \"email\": \"jenny.rosen@example.com\",\n    \"address\": {\n      \"line1\": \"27 Fredrick Ave\",\n      \"city\": \"Brothers\",\n      \"postal_code\": \"97712\",\n      \"state\": \"OR\",\n      \"country\": \"us\",\n    },\n    \"id_numbers\": [{\"type\": \"us_ssn_last_4\", \"value\": \"0000\"}],\n    \"relationship\": {\n      \"owner\": True,\n      \"percent_ownership\": Decimal(\"0.8\"),\n      \"representative\": True,\n      \"title\": \"CEO\",\n    },\n  },\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountPerson = $stripe->v2->core->accounts->persons->create(\n  '{{ACCOUNT_ID}}',\n  [\n    'given_name' => 'Jenny',\n    'surname' => 'Rosen',\n    'email' => 'jenny.rosen@example.com',\n    'address' => [\n      'line1' => '27 Fredrick Ave',\n      'city' => 'Brothers',\n      'postal_code' => '97712',\n      'state' => 'OR',\n      'country' => 'us',\n    ],\n    'id_numbers' => [\n      [\n        'type' => 'us_ssn_last_4',\n        'value' => '0000',\n      ],\n    ],\n    'relationship' => [\n      'owner' => true,\n      'percent_ownership' => '0.8',\n      'representative' => true,\n      'title' => 'CEO',\n    ],\n  ]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPersonCreateParams params =\n  PersonCreateParams.builder()\n    .setGivenName(\"Jenny\")\n    .setSurname(\"Rosen\")\n    .setEmail(\"jenny.rosen@example.com\")\n    .setAddress(\n      PersonCreateParams.Address.builder()\n        .setLine1(\"27 Fredrick Ave\")\n        .setCity(\"Brothers\")\n        .setPostalCode(\"97712\")\n        .setState(\"OR\")\n        .setCountry(\"us\")\n        .build()\n    )\n    .addIdNumber(\n      PersonCreateParams.IdNumber.builder()\n        .setType(PersonCreateParams.IdNumber.Type.US_SSN_LAST_4)\n        .setValue(\"0000\")\n        .build()\n    )\n    .setRelationship(\n      PersonCreateParams.Relationship.builder()\n        .setOwner(true)\n        .setPercentOwnership(new BigDecimal(\"0.8\"))\n        .setRepresentative(true)\n        .setTitle(\"CEO\")\n        .build()\n    )\n    .build();\n\nAccountPerson accountPerson =\n  client.v2().core().accounts().persons().create(\"{{ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountPerson = await stripe.v2.core.accounts.persons.create(\n  '{{ACCOUNT_ID}}',\n  {\n    given_name: 'Jenny',\n    surname: 'Rosen',\n    email: 'jenny.rosen@example.com',\n    address: {\n      line1: '27 Fredrick Ave',\n      city: 'Brothers',\n      postal_code: '97712',\n      state: 'OR',\n      country: 'us',\n    },\n    id_numbers: [\n      {\n        type: 'us_ssn_last_4',\n        value: '0000',\n      },\n    ],\n    relationship: {\n      owner: true,\n      percent_ownership: Decimal.from('0.8'),\n      representative: true,\n      title: 'CEO',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountsPersonCreateParams{\n  GivenName: stripe.String(\"Jenny\"),\n  Surname: stripe.String(\"Rosen\"),\n  Email: stripe.String(\"jenny.rosen@example.com\"),\n  Address: &stripe.V2CoreAccountsPersonCreateAddressParams{\n    Line1: stripe.String(\"27 Fredrick Ave\"),\n    City: stripe.String(\"Brothers\"),\n    PostalCode: stripe.String(\"97712\"),\n    State: stripe.String(\"OR\"),\n    Country: stripe.String(\"us\"),\n  },\n  IDNumbers: []*stripe.V2CoreAccountsPersonCreateIDNumberParams{\n    &stripe.V2CoreAccountsPersonCreateIDNumberParams{\n      Type: stripe.String(\"us_ssn_last_4\"),\n      Value: stripe.String(\"0000\"),\n    },\n  },\n  Relationship: &stripe.PersonRelationshipParams{\n    Owner: stripe.Bool(true),\n    PercentOwnership: stripe.Float64(0.8),\n    Representative: stripe.Bool(true),\n    Title: stripe.String(\"CEO\"),\n  },\n  AccountID: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult, err := sc.V2CoreAccountsPersons.Create(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.Accounts.PersonCreateOptions\n{\n    GivenName = \"Jenny\",\n    Surname = \"Rosen\",\n    Email = \"jenny.rosen@example.com\",\n    Address = new AddressJapanOptions\n    {\n        Line1 = \"27 Fredrick Ave\",\n        City = \"Brothers\",\n        PostalCode = \"97712\",\n        State = \"OR\",\n        Country = \"us\",\n    },\n    IdNumbers = new List<Stripe.V2.Core.Accounts.PersonCreateIdNumberOptions>\n    {\n        new Stripe.V2.Core.Accounts.PersonCreateIdNumberOptions\n        {\n            Type = \"us_ssn_last_4\",\n            Value = \"0000\",\n        },\n    },\n    Relationship = new Stripe.V2.Core.Accounts.PersonCreateRelationshipOptions\n    {\n        Owner = true,\n        PercentOwnership = 0.8M,\n        Representative = true,\n        Title = \"CEO\",\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts.Persons;\nStripe.V2.Core.AccountPerson accountPerson = service.Create(\n    \"{{ACCOUNT_ID}}\",\n    options);"
    },
    "Update a person": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}}/persons/person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"date_of_birth\": {\n        \"day\": 28,\n        \"month\": 1,\n        \"year\": 2000\n    }\n  }'",
      "Stripe CLI": "stripe v2 core account_persons update {{ACCOUNT_ID}} person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY \\\n  --date-of-birth.day=28 \\\n  --date-of-birth.month=1 \\\n  --date-of-birth.year=2000",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person = client.v2.core.accounts.persons.update(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n  {\n    date_of_birth: {\n      day: 28,\n      month: 1,\n      year: 2000,\n    },\n  },\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person = client.v2.core.accounts.persons.update(\n  \"{{ACCOUNT_ID}}\",\n  \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\",\n  {\"date_of_birth\": {\"day\": 28, \"month\": 1, \"year\": 2000}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountPerson = $stripe->v2->core->accounts->persons->update(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n  [\n    'date_of_birth' => [\n      'day' => 28,\n      'month' => 1,\n      'year' => 2000,\n    ],\n  ]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPersonUpdateParams params =\n  PersonUpdateParams.builder()\n    .setDateOfBirth(\n      PersonUpdateParams.DateOfBirth.builder()\n        .setDay(28L)\n        .setMonth(1L)\n        .setYear(2000L)\n        .build()\n    )\n    .build();\n\nAccountPerson accountPerson =\n  client.v2().core().accounts().persons().update(\n    \"{{ACCOUNT_ID}}\",\n    \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountPerson = await stripe.v2.core.accounts.persons.update(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n  {\n    date_of_birth: {\n      day: 28,\n      month: 1,\n      year: 2000,\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountsPersonUpdateParams{\n  DateOfBirth: &stripe.V2CoreAccountsPersonUpdateDateOfBirthParams{\n    Day: stripe.Int64(28),\n    Month: stripe.Int64(1),\n    Year: stripe.Int64(2000),\n  },\n  AccountID: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult, err := sc.V2CoreAccountsPersons.Update(\n  context.TODO(), \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\", params)",
      ".NET": "var options = new Stripe.V2.Core.Accounts.PersonUpdateOptions\n{\n    DateOfBirth = new Stripe.V2.Core.Accounts.PersonUpdateDateOfBirthOptions\n    {\n        Day = 28,\n        Month = 1,\n        Year = 2000,\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts.Persons;\nStripe.V2.Core.AccountPerson accountPerson = service.Update(\n    \"{{ACCOUNT_ID}}\",\n    \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\",\n    options);"
    },
    "Retrieve a person": {
      "cURL": "curl https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}}/persons/person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core account_persons retrieve {{ACCOUNT_ID}} person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person = client.v2.core.accounts.persons.retrieve(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person = client.v2.core.accounts.persons.retrieve(\n  \"{{ACCOUNT_ID}}\",\n  \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountPerson = $stripe->v2->core->accounts->persons->retrieve(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountPerson accountPerson =\n  client.v2().core().accounts().persons().retrieve(\n    \"{{ACCOUNT_ID}}\",\n    \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountPerson = await stripe.v2.core.accounts.persons.retrieve(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountsPersonRetrieveParams{\n  AccountID: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult, err := sc.V2CoreAccountsPersons.Retrieve(\n  context.TODO(), \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts.Persons;\nStripe.V2.Core.AccountPerson accountPerson = service.Get(\n    \"{{ACCOUNT_ID}}\",\n    \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\");"
    },
    "List persons": {
      "cURL": "curl https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}}/persons \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core account_persons list {{ACCOUNT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_people = client.v2.core.accounts.persons.list('{{ACCOUNT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_persons = client.v2.core.accounts.persons.list(\"{{ACCOUNT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountPersons = $stripe->v2->core->accounts->persons->all(\n  '{{ACCOUNT_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPersonListParams params = PersonListParams.builder().build();\n\nStripeCollection<AccountPerson> stripeCollection =\n  client.v2().core().accounts().persons().list(\"{{ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountPersons = await stripe.v2.core.accounts.persons.list(\n  '{{ACCOUNT_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountsPersonListParams{\n  AccountID: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult := sc.V2CoreAccountsPersons.List(context.TODO(), params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts.Persons;\nStripe.V2.StripeList<Stripe.V2.Core.AccountPerson> accountPersons = service.List(\n    \"{{ACCOUNT_ID}}\");"
    },
    "Delete a person": {
      "cURL": "curl -X DELETE https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}}/persons/person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core account_persons delete {{ACCOUNT_ID}} person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ndeleted = client.v2.core.accounts.persons.delete(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ndeleted = client.v2.core.accounts.persons.delete(\n  \"{{ACCOUNT_ID}}\",\n  \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$deleted = $stripe->v2->core->accounts->persons->delete(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nDeletedObject deletedObject =\n  client.v2().core().accounts().persons().delete(\n    \"{{ACCOUNT_ID}}\",\n    \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst deleted = await stripe.v2.core.accounts.persons.del(\n  '{{ACCOUNT_ID}}',\n  'person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountsPersonDeleteParams{\n  AccountID: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult, err := sc.V2CoreAccountsPersons.Delete(\n  context.TODO(), \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts.Persons;\nStripe.V2.DeletedObject deleted = service.Delete(\n    \"{{ACCOUNT_ID}}\",\n    \"person_test_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\");"
    }
  },
  "person-tokens-v2": {
    "Create a person token": {
      "cURL": "curl -X POST https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}}/person_tokens \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\" \\\n  --json '{\n    \"given_name\": \"Jenny\",\n    \"surname\": \"Rosen\",\n    \"email\": \"jenny.rosen@example.com\",\n    \"address\": {\n        \"line1\": \"27 Fredrick Ave\",\n        \"city\": \"Brothers\",\n        \"postal_code\": \"97712\",\n        \"state\": \"OR\",\n        \"country\": \"US\"\n    },\n    \"id_numbers\": [\n        {\n            \"type\": \"us_ssn_last_4\",\n            \"value\": \"0000\"\n        }\n    ],\n    \"relationship\": {\n        \"owner\": true,\n        \"percent_ownership\": \"0.8\",\n        \"representative\": true,\n        \"title\": \"CEO\"\n    }\n  }'",
      "Stripe CLI": "stripe v2 core account_person_tokens create {{ACCOUNT_ID}} \\\n  --given-name=Jenny \\\n  --surname=Rosen \\\n  --email=\"jenny.rosen@example.com\" \\\n  --address.line1=\"27 Fredrick Ave\" \\\n  --address.city=Brothers \\\n  --address.postal-code=97712 \\\n  --address.state=OR \\\n  --address.country=US \\\n  --id-numbers.type=us_ssn_last_4 \\\n  --id-numbers.value=0000 \\\n  --relationship.owner=true \\\n  --relationship.percent-ownership=\"0.8\" \\\n  --relationship.representative=true \\\n  --relationship.title=CEO",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person_token = client.v2.core.accounts.person_tokens.create(\n  '{{ACCOUNT_ID}}',\n  {\n    given_name: 'Jenny',\n    surname: 'Rosen',\n    email: 'jenny.rosen@example.com',\n    address: {\n      line1: '27 Fredrick Ave',\n      city: 'Brothers',\n      postal_code: '97712',\n      state: 'OR',\n      country: 'US',\n    },\n    id_numbers: [\n      {\n        type: 'us_ssn_last_4',\n        value: '0000',\n      },\n    ],\n    relationship: {\n      owner: true,\n      percent_ownership: '0.8',\n      representative: true,\n      title: 'CEO',\n    },\n  },\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person_token = client.v2.core.accounts.person_tokens.create(\n  \"{{ACCOUNT_ID}}\",\n  {\n    \"given_name\": \"Jenny\",\n    \"surname\": \"Rosen\",\n    \"email\": \"jenny.rosen@example.com\",\n    \"address\": {\n      \"line1\": \"27 Fredrick Ave\",\n      \"city\": \"Brothers\",\n      \"postal_code\": \"97712\",\n      \"state\": \"OR\",\n      \"country\": \"US\",\n    },\n    \"id_numbers\": [{\"type\": \"us_ssn_last_4\", \"value\": \"0000\"}],\n    \"relationship\": {\n      \"owner\": True,\n      \"percent_ownership\": Decimal(\"0.8\"),\n      \"representative\": True,\n      \"title\": \"CEO\",\n    },\n  },\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountPersonToken = $stripe->v2->core->accounts->personTokens->create(\n  '{{ACCOUNT_ID}}',\n  [\n    'given_name' => 'Jenny',\n    'surname' => 'Rosen',\n    'email' => 'jenny.rosen@example.com',\n    'address' => [\n      'line1' => '27 Fredrick Ave',\n      'city' => 'Brothers',\n      'postal_code' => '97712',\n      'state' => 'OR',\n      'country' => 'US',\n    ],\n    'id_numbers' => [\n      [\n        'type' => 'us_ssn_last_4',\n        'value' => '0000',\n      ],\n    ],\n    'relationship' => [\n      'owner' => true,\n      'percent_ownership' => '0.8',\n      'representative' => true,\n      'title' => 'CEO',\n    ],\n  ]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPersonTokenCreateParams params =\n  PersonTokenCreateParams.builder()\n    .setGivenName(\"Jenny\")\n    .setSurname(\"Rosen\")\n    .setEmail(\"jenny.rosen@example.com\")\n    .setAddress(\n      PersonTokenCreateParams.Address.builder()\n        .setLine1(\"27 Fredrick Ave\")\n        .setCity(\"Brothers\")\n        .setPostalCode(\"97712\")\n        .setState(\"OR\")\n        .setCountry(\"US\")\n        .build()\n    )\n    .addIdNumber(\n      PersonTokenCreateParams.IdNumber.builder()\n        .setType(PersonTokenCreateParams.IdNumber.Type.US_SSN_LAST_4)\n        .setValue(\"0000\")\n        .build()\n    )\n    .setRelationship(\n      PersonTokenCreateParams.Relationship.builder()\n        .setOwner(true)\n        .setPercentOwnership(new BigDecimal(\"0.8\"))\n        .setRepresentative(true)\n        .setTitle(\"CEO\")\n        .build()\n    )\n    .build();\n\nAccountPersonToken accountPersonToken =\n  client.v2().core().accounts().personTokens().create(\n    \"{{ACCOUNT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountPersonToken = await stripe.v2.core.accounts.personTokens.create(\n  '{{ACCOUNT_ID}}',\n  {\n    given_name: 'Jenny',\n    surname: 'Rosen',\n    email: 'jenny.rosen@example.com',\n    address: {\n      line1: '27 Fredrick Ave',\n      city: 'Brothers',\n      postal_code: '97712',\n      state: 'OR',\n      country: 'US',\n    },\n    id_numbers: [\n      {\n        type: 'us_ssn_last_4',\n        value: '0000',\n      },\n    ],\n    relationship: {\n      owner: true,\n      percent_ownership: Decimal.from('0.8'),\n      representative: true,\n      title: 'CEO',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountsPersonTokenCreateParams{\n  GivenName: stripe.String(\"Jenny\"),\n  Surname: stripe.String(\"Rosen\"),\n  Email: stripe.String(\"jenny.rosen@example.com\"),\n  Address: &stripe.V2CoreAccountsPersonTokenCreateAddressParams{\n    Line1: stripe.String(\"27 Fredrick Ave\"),\n    City: stripe.String(\"Brothers\"),\n    PostalCode: stripe.String(\"97712\"),\n    State: stripe.String(\"OR\"),\n    Country: stripe.String(\"US\"),\n  },\n  IDNumbers: []*stripe.V2CoreAccountsPersonTokenCreateIDNumberParams{\n    &stripe.V2CoreAccountsPersonTokenCreateIDNumberParams{\n      Type: stripe.String(\"us_ssn_last_4\"),\n      Value: stripe.String(\"0000\"),\n    },\n  },\n  Relationship: &stripe.V2CoreAccountsPersonTokenCreateRelationshipParams{\n    Owner: stripe.Bool(true),\n    PercentOwnership: stripe.Float64(0.8),\n    Representative: stripe.Bool(true),\n    Title: stripe.String(\"CEO\"),\n  },\n  AccountID: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult, err := sc.V2CoreAccountsPersonTokens.Create(context.TODO(), params)",
      ".NET": "var options = new Stripe.V2.Core.Accounts.PersonTokenCreateOptions\n{\n    GivenName = \"Jenny\",\n    Surname = \"Rosen\",\n    Email = \"jenny.rosen@example.com\",\n    Address = new AddressJapanOptions\n    {\n        Line1 = \"27 Fredrick Ave\",\n        City = \"Brothers\",\n        PostalCode = \"97712\",\n        State = \"OR\",\n        Country = \"US\",\n    },\n    IdNumbers = new List<Stripe.V2.Core.Accounts.PersonTokenCreateIdNumberOptions>\n    {\n        new Stripe.V2.Core.Accounts.PersonTokenCreateIdNumberOptions\n        {\n            Type = \"us_ssn_last_4\",\n            Value = \"0000\",\n        },\n    },\n    Relationship = new Stripe.V2.Core.Accounts.PersonTokenCreateRelationshipOptions\n    {\n        Owner = true,\n        PercentOwnership = 0.8M,\n        Representative = true,\n        Title = \"CEO\",\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts.PersonTokens;\nStripe.V2.Core.AccountPersonToken accountPersonToken = service.Create(\n    \"{{ACCOUNT_ID}}\",\n    options);"
    },
    "Retrieve a person token": {
      "cURL": "curl https://api.stripe.com/v2/core/accounts/{{ACCOUNT_ID}}/person_tokens/perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY \\\n  -H \"Authorization: Bearer <<YOUR_SECRET_KEY>>\" \\\n  -H \"Stripe-Version: 2026-06-24.dahlia\"",
      "Stripe CLI": "stripe v2 core account_person_tokens retrieve {{ACCOUNT_ID}} perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person_token = client.v2.core.accounts.person_tokens.retrieve(\n  '{{ACCOUNT_ID}}',\n  'perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\naccount_person_token = client.v2.core.accounts.person_tokens.retrieve(\n  \"{{ACCOUNT_ID}}\",\n  \"perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$accountPersonToken = $stripe->v2->core->accounts->personTokens->retrieve(\n  '{{ACCOUNT_ID}}',\n  'perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nAccountPersonToken accountPersonToken =\n  client.v2().core().accounts().personTokens().retrieve(\n    \"{{ACCOUNT_ID}}\",\n    \"perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\"\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst accountPersonToken = await stripe.v2.core.accounts.personTokens.retrieve(\n  '{{ACCOUNT_ID}}',\n  'perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.V2CoreAccountsPersonTokenRetrieveParams{\n  AccountID: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult, err := sc.V2CoreAccountsPersonTokens.Retrieve(\n  context.TODO(), \"perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V2.Core.Accounts.PersonTokens;\nStripe.V2.Core.AccountPersonToken accountPersonToken = service.Get(\n    \"{{ACCOUNT_ID}}\",\n    \"perstok_61RS0CgWt1xBt8M1Q16RS0Cg0WSQO5ZXUVpZxZ9tAIbY\");"
    }
  },
  "setup-intents": {
    "Create a SetupIntent": {
      "cURL": "curl https://api.stripe.com/v1/setup_intents \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"automatic_payment_methods[enabled]=true\"",
      "Stripe CLI": "stripe setup_intents create  \\\n  -d \"automatic_payment_methods[enabled]\"=true",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.create({\n  automatic_payment_methods: {enabled: true},\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.create({\n  \"automatic_payment_methods\": {\"enabled\": True},\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->create([\n  'automatic_payment_methods' => ['enabled' => true],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSetupIntentCreateParams params =\n  SetupIntentCreateParams.builder()\n    .setAutomaticPaymentMethods(\n      SetupIntentCreateParams.AutomaticPaymentMethods.builder()\n        .setEnabled(true)\n        .build()\n    )\n    .build();\n\nSetupIntent setupIntent = client.v1().setupIntents().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.create({\n  automatic_payment_methods: {\n    enabled: true,\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SetupIntentCreateParams{\n  AutomaticPaymentMethods: &stripe.SetupIntentCreateAutomaticPaymentMethodsParams{\n    Enabled: stripe.Bool(true),\n  },\n}\nresult, err := sc.V1SetupIntents.Create(context.TODO(), params)",
      ".NET": "var options = new SetupIntentCreateOptions\n{\n    AutomaticPaymentMethods = new SetupIntentAutomaticPaymentMethodsOptions\n    {\n        Enabled = true,\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.SetupIntents;\nSetupIntent setupIntent = service.Create(options);"
    },
    "Update a SetupIntent": {
      "cURL": "curl https://api.stripe.com/v1/setup_intents/{{SETUP_INTENT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe setup_intents update {{SETUP_INTENT_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.update(\n  '{{SETUP_INTENT_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.update(\n  \"{{SETUP_INTENT_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->update(\n  '{{SETUP_INTENT_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSetupIntentUpdateParams params =\n  SetupIntentUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nSetupIntent setupIntent =\n  client.v1().setupIntents().update(\"{{SETUP_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.update(\n  '{{SETUP_INTENT_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SetupIntentUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1SetupIntents.Update(\n  context.TODO(), \"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "var options = new SetupIntentUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.SetupIntents;\nSetupIntent setupIntent = service.Update(\"{{SETUP_INTENT_ID}}\", options);"
    },
    "Retrieve a SetupIntent": {
      "cURL": "curl https://api.stripe.com/v1/setup_intents/{{SETUP_INTENT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe setup_intents retrieve {{SETUP_INTENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.retrieve('{{SETUP_INTENT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.retrieve(\"{{SETUP_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->retrieve('{{SETUP_INTENT_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSetupIntentRetrieveParams params = SetupIntentRetrieveParams.builder().build();\n\nSetupIntent setupIntent =\n  client.v1().setupIntents().retrieve(\"{{SETUP_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.retrieve(\n  '{{SETUP_INTENT_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SetupIntentRetrieveParams{}\nresult, err := sc.V1SetupIntents.Retrieve(\n  context.TODO(), \"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.SetupIntents;\nSetupIntent setupIntent = service.Get(\"{{SETUP_INTENT_ID}}\");"
    },
    "List all SetupIntents": {
      "cURL": "curl -G https://api.stripe.com/v1/setup_intents \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe setup_intents list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intents = client.v1.setup_intents.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intents = client.v1.setup_intents.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntents = $stripe->setupIntents->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSetupIntentListParams params = SetupIntentListParams.builder().setLimit(3L).build();\n\nStripeCollection<SetupIntent> stripeCollection =\n  client.v1().setupIntents().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntents = await stripe.setupIntents.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SetupIntentListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1SetupIntents.List(context.TODO(), params)",
      ".NET": "var options = new SetupIntentListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.SetupIntents;\nStripeList<SetupIntent> setupIntents = service.List(options);"
    },
    "Cancel a SetupIntent": {
      "cURL": "curl -X POST https://api.stripe.com/v1/setup_intents/{{SETUP_INTENT_ID}}/cancel \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe setup_intents cancel {{SETUP_INTENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.cancel('{{SETUP_INTENT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.cancel(\"{{SETUP_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->cancel('{{SETUP_INTENT_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSetupIntentCancelParams params = SetupIntentCancelParams.builder().build();\n\nSetupIntent setupIntent =\n  client.v1().setupIntents().cancel(\"{{SETUP_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.cancel(\n  '{{SETUP_INTENT_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SetupIntentCancelParams{}\nresult, err := sc.V1SetupIntents.Cancel(\n  context.TODO(), \"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.SetupIntents;\nSetupIntent setupIntent = service.Cancel(\"{{SETUP_INTENT_ID}}\");"
    },
    "Confirm a SetupIntent": {
      "cURL": "curl https://api.stripe.com/v1/setup_intents/{{SETUP_INTENT_ID}}/confirm \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d payment_method=pm_card_visa",
      "Stripe CLI": "stripe setup_intents confirm {{SETUP_INTENT_ID}} \\\n  --payment-method=pm_card_visa",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.confirm(\n  '{{SETUP_INTENT_ID}}',\n  {payment_method: 'pm_card_visa'},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.confirm(\n  \"{{SETUP_INTENT_ID}}\",\n  {\"payment_method\": \"pm_card_visa\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->confirm(\n  '{{SETUP_INTENT_ID}}',\n  ['payment_method' => 'pm_card_visa']\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSetupIntentConfirmParams params =\n  SetupIntentConfirmParams.builder().setPaymentMethod(\"pm_card_visa\").build();\n\nSetupIntent setupIntent =\n  client.v1().setupIntents().confirm(\"{{SETUP_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.confirm(\n  '{{SETUP_INTENT_ID}}',\n  {\n    payment_method: 'pm_card_visa',\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SetupIntentConfirmParams{\n  PaymentMethod: stripe.String(\"pm_card_visa\"),\n}\nresult, err := sc.V1SetupIntents.Confirm(\n  context.TODO(), \"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "var options = new SetupIntentConfirmOptions { PaymentMethod = \"pm_card_visa\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.SetupIntents;\nSetupIntent setupIntent = service.Confirm(\"{{SETUP_INTENT_ID}}\", options);"
    },
    "Verify microdeposits on a SetupIntent": {
      "cURL": "curl https://api.stripe.com/v1/setup_intents/{{SETUP_INTENT_ID}}/verify_microdeposits \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"amounts[]=32\" \\\n  -d \"amounts[]=45\"",
      "Stripe CLI": "stripe setup_intents verify_microdeposits {{SETUP_INTENT_ID}} \\\n  -d \"amounts[0]\"=32 \\\n  -d \"amounts[1]\"=45",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.verify_microdeposits(\n  '{{SETUP_INTENT_ID}}',\n  {amounts: [32, 45]},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_intent = client.v1.setup_intents.verify_microdeposits(\n  \"{{SETUP_INTENT_ID}}\",\n  {\"amounts\": [32, 45]},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->verifyMicrodeposits(\n  '{{SETUP_INTENT_ID}}',\n  ['amounts' => [32, 45]]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSetupIntentVerifyMicrodepositsParams params =\n  SetupIntentVerifyMicrodepositsParams.builder()\n    .addAmount(32L)\n    .addAmount(45L)\n    .build();\n\nSetupIntent setupIntent =\n  client.v1().setupIntents().verifyMicrodeposits(\n    \"{{SETUP_INTENT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.verifyMicrodeposits(\n  '{{SETUP_INTENT_ID}}',\n  {\n    amounts: [32, 45],\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SetupIntentVerifyMicrodepositsParams{\n  Amounts: []*int64{stripe.Int64(32), stripe.Int64(45)},\n}\nresult, err := sc.V1SetupIntents.VerifyMicrodeposits(\n  context.TODO(), \"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "var options = new SetupIntentVerifyMicrodepositsOptions\n{\n    Amounts = new List<long?> { 32, 45 },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.SetupIntents;\nSetupIntent setupIntent = service.VerifyMicrodeposits(\n    \"{{SETUP_INTENT_ID}}\",\n    options);"
    }
  },
  "setup-attempts": {
    "List all SetupAttempts": {
      "cURL": "curl -G https://api.stripe.com/v1/setup_attempts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3 \\\n  -d setup_intent={{SETUP_INTENT_ID}}",
      "Stripe CLI": "stripe setup_attempts list  \\\n  --limit=3 \\\n  --setup-intent={{SETUP_INTENT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_attempts = client.v1.setup_attempts.list({\n  limit: 3,\n  setup_intent: '{{SETUP_INTENT_ID}}',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsetup_attempts = client.v1.setup_attempts.list({\n  \"limit\": 3,\n  \"setup_intent\": \"{{SETUP_INTENT_ID}}\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupAttempts = $stripe->setupAttempts->all([\n  'limit' => 3,\n  'setup_intent' => '{{SETUP_INTENT_ID}}',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSetupAttemptListParams params =\n  SetupAttemptListParams.builder()\n    .setLimit(3L)\n    .setSetupIntent(\"{{SETUP_INTENT_ID}}\")\n    .build();\n\nStripeCollection<SetupAttempt> stripeCollection =\n  client.v1().setupAttempts().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupAttempts = await stripe.setupAttempts.list({\n  limit: 3,\n  setup_intent: '{{SETUP_INTENT_ID}}',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SetupAttemptListParams{\n  SetupIntent: stripe.String(\"{{SETUP_INTENT_ID}}\"),\n}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1SetupAttempts.List(context.TODO(), params)",
      ".NET": "var options = new SetupAttemptListOptions\n{\n    Limit = 3,\n    SetupIntent = \"{{SETUP_INTENT_ID}}\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.SetupAttempts;\nStripeList<SetupAttempt> setupAttempts = service.List(options);"
    }
  },
  "stripe-balance-debit-agreement": {
    "Create a StripeBalanceDebitAgreement": {
      "cURL": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\"",
      "Stripe CLI": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\"",
      "Ruby": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\"",
      "Python": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\"",
      "PHP": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\"",
      "Java": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\"",
      "Node.js": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\"",
      "Go": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\"",
      ".NET": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d financial_account={{FINANCIAL_ACCOUNT_ID}} \\\n  -d seller_network_business_profile=snbp_1Na5YT2eZvKYlo2Ctn7SPPuz \\\n  -d \"single_use[amount]=1000\" \\\n  -d \"single_use[currency]=usd\""
    },
    "Retrieve a StripeBalanceDebitAgreement": {
      "cURL": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Ruby": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Python": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "PHP": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Java": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Node.js": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Go": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      ".NET": "curl https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy \\\n  -u \"<<YOUR_SECRET_KEY>>\""
    },
    "Revoke a StripeBalanceDebitAgreement": {
      "cURL": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Ruby": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Python": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "PHP": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Java": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Node.js": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Go": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      ".NET": "curl -X POST https://api.stripe.com/v1/stripe_balance_debit_agreements/sbda_1Na5YT2eZvKYlo2Ctn7SPPuy/revoke \\\n  -u \"<<YOUR_SECRET_KEY>>\""
    }
  },
  "payouts": {
    "Create a payout": {
      "cURL": "curl https://api.stripe.com/v1/payouts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d amount=1100 \\\n  -d currency=usd",
      "Stripe CLI": "stripe payouts create  \\\n  --amount=1100 \\\n  --currency=usd",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.create({\n  amount: 1100,\n  currency: 'usd',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.create({\"amount\": 1100, \"currency\": \"usd\"})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->create([\n  'amount' => 1100,\n  'currency' => 'usd',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPayoutCreateParams params =\n  PayoutCreateParams.builder().setAmount(1100L).setCurrency(\"usd\").build();\n\nPayout payout = client.v1().payouts().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.create({\n  amount: 1100,\n  currency: 'usd',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PayoutCreateParams{\n  Amount: stripe.Int64(1100),\n  Currency: stripe.String(stripe.CurrencyUSD),\n}\nresult, err := sc.V1Payouts.Create(context.TODO(), params)",
      ".NET": "var options = new PayoutCreateOptions { Amount = 1100, Currency = \"usd\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Payouts;\nPayout payout = service.Create(options);"
    },
    "Update a payout": {
      "cURL": "curl https://api.stripe.com/v1/payouts/{{PAYOUT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe payouts update {{PAYOUT_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.update(\n  '{{PAYOUT_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.update(\n  \"{{PAYOUT_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->update(\n  '{{PAYOUT_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPayoutUpdateParams params =\n  PayoutUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nPayout payout = client.v1().payouts().update(\"{{PAYOUT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.update(\n  '{{PAYOUT_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PayoutUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1Payouts.Update(\n  context.TODO(), \"{{PAYOUT_ID}}\", params)",
      ".NET": "var options = new PayoutUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Payouts;\nPayout payout = service.Update(\"{{PAYOUT_ID}}\", options);"
    },
    "Retrieve a payout": {
      "cURL": "curl https://api.stripe.com/v1/payouts/{{PAYOUT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payouts retrieve {{PAYOUT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.retrieve('{{PAYOUT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.retrieve(\"{{PAYOUT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->retrieve('{{PAYOUT_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPayoutRetrieveParams params = PayoutRetrieveParams.builder().build();\n\nPayout payout =\n  client.v1().payouts().retrieve(\"{{PAYOUT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.retrieve('{{PAYOUT_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PayoutRetrieveParams{}\nresult, err := sc.V1Payouts.Retrieve(\n  context.TODO(), \"{{PAYOUT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Payouts;\nPayout payout = service.Get(\"{{PAYOUT_ID}}\");"
    },
    "List all payouts": {
      "cURL": "curl -G https://api.stripe.com/v1/payouts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe payouts list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayouts = client.v1.payouts.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayouts = client.v1.payouts.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payouts = $stripe->payouts->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPayoutListParams params = PayoutListParams.builder().setLimit(3L).build();\n\nStripeCollection<Payout> stripeCollection = client.v1().payouts().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payouts = await stripe.payouts.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PayoutListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1Payouts.List(context.TODO(), params)",
      ".NET": "var options = new PayoutListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Payouts;\nStripeList<Payout> payouts = service.List(options);"
    },
    "Cancel a payout": {
      "cURL": "curl -X POST https://api.stripe.com/v1/payouts/{{PAYOUT_ID}}/cancel \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payouts cancel {{PAYOUT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.cancel('{{PAYOUT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.cancel(\"{{PAYOUT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->cancel('{{PAYOUT_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPayoutCancelParams params = PayoutCancelParams.builder().build();\n\nPayout payout = client.v1().payouts().cancel(\"{{PAYOUT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.cancel('{{PAYOUT_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PayoutCancelParams{}\nresult, err := sc.V1Payouts.Cancel(\n  context.TODO(), \"{{PAYOUT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Payouts;\nPayout payout = service.Cancel(\"{{PAYOUT_ID}}\");"
    },
    "Reverse a payout": {
      "cURL": "curl -X POST https://api.stripe.com/v1/payouts/{{PAYOUT_ID}}/reverse \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payouts reverse {{PAYOUT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.reverse('{{PAYOUT_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayout = client.v1.payouts.reverse(\"{{PAYOUT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->reverse('{{PAYOUT_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPayoutReverseParams params = PayoutReverseParams.builder().build();\n\nPayout payout = client.v1().payouts().reverse(\"{{PAYOUT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.reverse('{{PAYOUT_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PayoutReverseParams{}\nresult, err := sc.V1Payouts.Reverse(\n  context.TODO(), \"{{PAYOUT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Payouts;\nPayout payout = service.Reverse(\"{{PAYOUT_ID}}\");"
    }
  },
  "refunds": {
    "Create a refund": {
      "cURL": "curl https://api.stripe.com/v1/refunds \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d charge={{CHARGE_ID}}",
      "Stripe CLI": "stripe refunds create  \\\n  --charge={{CHARGE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nrefund = client.v1.refunds.create({charge: '{{CHARGE_ID}}'})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nrefund = client.v1.refunds.create({\"charge\": \"{{CHARGE_ID}}\"})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refund = $stripe->refunds->create(['charge' => '{{CHARGE_ID}}']);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nRefundCreateParams params =\n  RefundCreateParams.builder().setCharge(\"{{CHARGE_ID}}\").build();\n\nRefund refund = client.v1().refunds().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refund = await stripe.refunds.create({\n  charge: '{{CHARGE_ID}}',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.RefundCreateParams{\n  Charge: stripe.String(\"{{CHARGE_ID}}\"),\n}\nresult, err := sc.V1Refunds.Create(context.TODO(), params)",
      ".NET": "var options = new RefundCreateOptions { Charge = \"{{CHARGE_ID}}\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Refunds;\nRefund refund = service.Create(options);"
    },
    "Update a refund": {
      "cURL": "curl https://api.stripe.com/v1/refunds/{{REFUND_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe refunds update {{REFUND_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nrefund = client.v1.refunds.update(\n  '{{REFUND_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nrefund = client.v1.refunds.update(\n  \"{{REFUND_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refund = $stripe->refunds->update(\n  '{{REFUND_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nRefundUpdateParams params =\n  RefundUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nRefund refund = client.v1().refunds().update(\"{{REFUND_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refund = await stripe.refunds.update(\n  '{{REFUND_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.RefundUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1Refunds.Update(\n  context.TODO(), \"{{REFUND_ID}}\", params)",
      ".NET": "var options = new RefundUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Refunds;\nRefund refund = service.Update(\"{{REFUND_ID}}\", options);"
    },
    "Retrieve a refund": {
      "cURL": "curl https://api.stripe.com/v1/refunds/{{REFUND_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe refunds retrieve {{REFUND_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nrefund = client.v1.refunds.retrieve('{{REFUND_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nrefund = client.v1.refunds.retrieve(\"{{REFUND_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refund = $stripe->refunds->retrieve('{{REFUND_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nRefundRetrieveParams params = RefundRetrieveParams.builder().build();\n\nRefund refund =\n  client.v1().refunds().retrieve(\"{{REFUND_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refund = await stripe.refunds.retrieve('{{REFUND_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.RefundRetrieveParams{}\nresult, err := sc.V1Refunds.Retrieve(\n  context.TODO(), \"{{REFUND_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Refunds;\nRefund refund = service.Get(\"{{REFUND_ID}}\");"
    },
    "List all refunds": {
      "cURL": "curl -G https://api.stripe.com/v1/refunds \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe refunds list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nrefunds = client.v1.refunds.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nrefunds = client.v1.refunds.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refunds = $stripe->refunds->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nRefundListParams params = RefundListParams.builder().setLimit(3L).build();\n\nStripeCollection<Refund> stripeCollection = client.v1().refunds().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refunds = await stripe.refunds.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.RefundListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1Refunds.List(context.TODO(), params)",
      ".NET": "var options = new RefundListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Refunds;\nStripeList<Refund> refunds = service.List(options);"
    },
    "Cancel a refund": {
      "cURL": "curl -X POST https://api.stripe.com/v1/refunds/{{REFUND_ID}}/cancel \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe refunds cancel {{REFUND_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nrefund = client.v1.refunds.cancel('{{REFUND_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nrefund = client.v1.refunds.cancel(\"{{REFUND_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refund = $stripe->refunds->cancel('{{REFUND_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nRefundCancelParams params = RefundCancelParams.builder().build();\n\nRefund refund = client.v1().refunds().cancel(\"{{REFUND_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refund = await stripe.refunds.cancel('{{REFUND_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.RefundCancelParams{}\nresult, err := sc.V1Refunds.Cancel(\n  context.TODO(), \"{{REFUND_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Refunds;\nRefund refund = service.Cancel(\"{{REFUND_ID}}\");"
    }
  },
  "confirmation-token": {
    "Retrieve a ConfirmationToken": {
      "cURL": "curl https://api.stripe.com/v1/confirmation_tokens/ctoken_1NnQUf2eZvKYlo2CIObdtbnb \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe confirmation_tokens retrieve ctoken_1NnQUf2eZvKYlo2CIObdtbnb",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nconfirmation_token = client.v1.confirmation_tokens.retrieve('ctoken_1NnQUf2eZvKYlo2CIObdtbnb')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nconfirmation_token = client.v1.confirmation_tokens.retrieve(\n  \"ctoken_1NnQUf2eZvKYlo2CIObdtbnb\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$confirmationToken = $stripe->confirmationTokens->retrieve(\n  'ctoken_1NnQUf2eZvKYlo2CIObdtbnb',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nConfirmationTokenRetrieveParams params =\n  ConfirmationTokenRetrieveParams.builder().build();\n\nConfirmationToken confirmationToken =\n  client.v1().confirmationTokens().retrieve(\n    \"ctoken_1NnQUf2eZvKYlo2CIObdtbnb\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst confirmationToken = await stripe.confirmationTokens.retrieve(\n  'ctoken_1NnQUf2eZvKYlo2CIObdtbnb'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.ConfirmationTokenRetrieveParams{}\nresult, err := sc.V1ConfirmationTokens.Retrieve(\n  context.TODO(), \"ctoken_1NnQUf2eZvKYlo2CIObdtbnb\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.ConfirmationTokens;\nConfirmationToken confirmationToken = service.Get(\"ctoken_1NnQUf2eZvKYlo2CIObdtbnb\");"
    },
    "Create a test Confirmation Token": {
      "cURL": "curl https://api.stripe.com/v1/test_helpers/confirmation_tokens \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d payment_method=pm_card_visa",
      "Stripe CLI": "stripe test_helpers confirmation_tokens create  \\\n  --payment-method=pm_card_visa",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nconfirmation_token = client.v1.test_helpers.confirmation_tokens.create({\n  payment_method: 'pm_card_visa',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nconfirmation_token = client.v1.test_helpers.confirmation_tokens.create({\n  \"payment_method\": \"pm_card_visa\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$confirmationToken = $stripe->testHelpers->confirmationTokens->create([\n  'payment_method' => 'pm_card_visa',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nConfirmationTokenCreateParams params =\n  ConfirmationTokenCreateParams.builder().setPaymentMethod(\"pm_card_visa\").build();\n\nConfirmationToken confirmationToken =\n  client.v1().testHelpers().confirmationTokens().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst confirmationToken = await stripe.testHelpers.confirmationTokens.create({\n  payment_method: 'pm_card_visa',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TestHelpersConfirmationTokenCreateParams{\n  PaymentMethod: stripe.String(\"pm_card_visa\"),\n}\nresult, err := sc.V1TestHelpersConfirmationTokens.Create(context.TODO(), params)",
      ".NET": "var options = new Stripe.TestHelpers.ConfirmationTokenCreateOptions\n{\n    PaymentMethod = \"pm_card_visa\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.TestHelpers.ConfirmationTokens;\nConfirmationToken confirmationToken = service.Create(options);"
    }
  },
  "tokens": {
    "Create a bank account token": {
      "cURL": "curl https://api.stripe.com/v1/tokens \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"bank_account[country]=US\" \\\n  -d \"bank_account[currency]=usd\" \\\n  -d \"bank_account[account_holder_name]=Jenny Rosen\" \\\n  -d \"bank_account[account_holder_type]=individual\" \\\n  -d \"bank_account[routing_number]=110000000\" \\\n  -d \"bank_account[account_number]=000123456789\"",
      "Stripe CLI": "stripe tokens create  \\\n  -d \"bank_account[country]\"=US \\\n  -d \"bank_account[currency]\"=usd \\\n  -d \"bank_account[account_holder_name]\"=\"Jenny Rosen\" \\\n  -d \"bank_account[account_holder_type]\"=individual \\\n  -d \"bank_account[routing_number]\"=110000000 \\\n  -d \"bank_account[account_number]\"=000123456789",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\n  bank_account: {\n    country: 'US',\n    currency: 'usd',\n    account_holder_name: 'Jenny Rosen',\n    account_holder_type: 'individual',\n    routing_number: '110000000',\n    account_number: '000123456789',\n  },\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\n  \"bank_account\": {\n    \"country\": \"US\",\n    \"currency\": \"usd\",\n    \"account_holder_name\": \"Jenny Rosen\",\n    \"account_holder_type\": \"individual\",\n    \"routing_number\": \"110000000\",\n    \"account_number\": \"000123456789\",\n  },\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create([\n  'bank_account' => [\n    'country' => 'US',\n    'currency' => 'usd',\n    'account_holder_name' => 'Jenny Rosen',\n    'account_holder_type' => 'individual',\n    'routing_number' => '110000000',\n    'account_number' => '000123456789',\n  ],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setBankAccount(\n      TokenCreateParams.BankAccount.builder()\n        .setCountry(\"US\")\n        .setCurrency(\"usd\")\n        .setAccountHolderName(\"Jenny Rosen\")\n        .setAccountHolderType(\n          TokenCreateParams.BankAccount.AccountHolderType.INDIVIDUAL\n        )\n        .setRoutingNumber(\"110000000\")\n        .setAccountNumber(\"000123456789\")\n        .build()\n    )\n    .build();\n\nToken token = client.v1().tokens().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  bank_account: {\n    country: 'US',\n    currency: 'usd',\n    account_holder_name: 'Jenny Rosen',\n    account_holder_type: 'individual',\n    routing_number: '110000000',\n    account_number: '000123456789',\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TokenCreateParams{\n  BankAccount: &stripe.BankAccountParams{\n    Country: stripe.String(\"US\"),\n    Currency: stripe.String(stripe.CurrencyUSD),\n    AccountHolderName: stripe.String(\"Jenny Rosen\"),\n    AccountHolderType: stripe.String(\"individual\"),\n    RoutingNumber: stripe.String(\"110000000\"),\n    AccountNumber: stripe.String(\"000123456789\"),\n  },\n}\nresult, err := sc.V1Tokens.Create(context.TODO(), params)",
      ".NET": "var options = new TokenCreateOptions\n{\n    BankAccount = new TokenBankAccountOptions\n    {\n        Country = \"US\",\n        Currency = \"usd\",\n        AccountHolderName = \"Jenny Rosen\",\n        AccountHolderType = \"individual\",\n        RoutingNumber = \"110000000\",\n        AccountNumber = \"000123456789\",\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Tokens;\nToken token = service.Create(options);"
    },
    "Create a card token": {
      "cURL": "curl https://api.stripe.com/v1/tokens \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"card[number]=4242424242424242\" \\\n  -d \"card[exp_month]=5\" \\\n  -d \"card[exp_year]=2026\" \\\n  -d \"card[cvc]=314\"",
      "Stripe CLI": "stripe tokens create  \\\n  -d \"card[number]\"=4242424242424242 \\\n  -d \"card[exp_month]\"=5 \\\n  -d \"card[exp_year]\"=2026 \\\n  -d \"card[cvc]\"=314",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\n  card: {\n    number: '4242424242424242',\n    exp_month: '5',\n    exp_year: '2026',\n    cvc: '314',\n  },\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\n  \"card\": {\n    \"number\": \"4242424242424242\",\n    \"exp_month\": \"5\",\n    \"exp_year\": \"2026\",\n    \"cvc\": \"314\",\n  },\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create([\n  'card' => [\n    'number' => '4242424242424242',\n    'exp_month' => '5',\n    'exp_year' => '2026',\n    'cvc' => '314',\n  ],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setCard(\n      TokenCreateParams.Card.builder()\n        .setNumber(\"4242424242424242\")\n        .setExpMonth(\"5\")\n        .setExpYear(\"2026\")\n        .setCvc(\"314\")\n        .build()\n    )\n    .build();\n\nToken token = client.v1().tokens().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  card: {\n    number: '4242424242424242',\n    exp_month: '5',\n    exp_year: '2026',\n    cvc: '314',\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TokenCreateParams{\n  Card: &stripe.CardParams{\n    Number: stripe.String(\"4242424242424242\"),\n    ExpMonth: stripe.String(\"5\"),\n    ExpYear: stripe.String(\"2026\"),\n    CVC: stripe.String(\"314\"),\n  },\n}\nresult, err := sc.V1Tokens.Create(context.TODO(), params)",
      ".NET": "var options = new TokenCreateOptions\n{\n    Card = new TokenCardOptions\n    {\n        Number = \"4242424242424242\",\n        ExpMonth = \"5\",\n        ExpYear = \"2026\",\n        Cvc = \"314\",\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Tokens;\nToken token = service.Create(options);"
    },
    "Create a CVC update token": {
      "cURL": "curl https://api.stripe.com/v1/tokens \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"cvc_update[cvc]=123\"",
      "Stripe CLI": "stripe tokens create  \\\n  -d \"cvc_update[cvc]\"=123",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({cvc_update: {cvc: '123'}})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\"cvc_update\": {\"cvc\": \"123\"}})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create(['cvc_update' => ['cvc' => '123']]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setCvcUpdate(TokenCreateParams.CvcUpdate.builder().setCvc(\"123\").build())\n    .build();\n\nToken token = client.v1().tokens().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  cvc_update: {\n    cvc: '123',\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TokenCreateParams{\n  CVCUpdate: &stripe.TokenCreateCVCUpdateParams{CVC: stripe.String(\"123\")},\n}\nresult, err := sc.V1Tokens.Create(context.TODO(), params)",
      ".NET": "var options = new TokenCreateOptions\n{\n    CvcUpdate = new TokenCvcUpdateOptions { Cvc = \"123\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Tokens;\nToken token = service.Create(options);"
    },
    "Create a person token": {
      "cURL": "curl https://api.stripe.com/v1/tokens \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"person[first_name]=Jane\" \\\n  -d \"person[last_name]=Doe\" \\\n  -d \"person[relationship][owner]=true\"",
      "Stripe CLI": "stripe tokens create  \\\n  -d \"person[first_name]\"=Jane \\\n  -d \"person[last_name]\"=Doe \\\n  -d \"person[relationship][owner]\"=true",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\n  person: {\n    first_name: 'Jane',\n    last_name: 'Doe',\n    relationship: {owner: true},\n  },\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\n  \"person\": {\n    \"first_name\": \"Jane\",\n    \"last_name\": \"Doe\",\n    \"relationship\": {\"owner\": True},\n  },\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create([\n  'person' => [\n    'first_name' => 'Jane',\n    'last_name' => 'Doe',\n    'relationship' => ['owner' => true],\n  ],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setPerson(\n      TokenCreateParams.Person.builder()\n        .setFirstName(\"Jane\")\n        .setLastName(\"Doe\")\n        .setRelationship(\n          TokenCreateParams.Person.Relationship.builder().setOwner(true).build()\n        )\n        .build()\n    )\n    .build();\n\nToken token = client.v1().tokens().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  person: {\n    first_name: 'Jane',\n    last_name: 'Doe',\n    relationship: {\n      owner: true,\n    },\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TokenCreateParams{\n  Person: &stripe.PersonParams{\n    FirstName: stripe.String(\"Jane\"),\n    LastName: stripe.String(\"Doe\"),\n    Relationship: &stripe.PersonRelationshipParams{Owner: stripe.Bool(true)},\n  },\n}\nresult, err := sc.V1Tokens.Create(context.TODO(), params)",
      ".NET": "var options = new TokenCreateOptions\n{\n    Person = new TokenPersonOptions\n    {\n        FirstName = \"Jane\",\n        LastName = \"Doe\",\n        Relationship = new TokenPersonRelationshipOptions { Owner = true },\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Tokens;\nToken token = service.Create(options);"
    },
    "Create a PII token": {
      "cURL": "curl https://api.stripe.com/v1/tokens \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"pii[id_number]=000000000\"",
      "Stripe CLI": "stripe tokens create  \\\n  -d \"pii[id_number]\"=000000000",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({pii: {id_number: '000000000'}})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\"pii\": {\"id_number\": \"000000000\"}})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create(['pii' => ['id_number' => '000000000']]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setPii(TokenCreateParams.Pii.builder().setIdNumber(\"000000000\").build())\n    .build();\n\nToken token = client.v1().tokens().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  pii: {\n    id_number: '000000000',\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TokenCreateParams{\n  PII: &stripe.TokenCreatePIIParams{IDNumber: stripe.String(\"000000000\")},\n}\nresult, err := sc.V1Tokens.Create(context.TODO(), params)",
      ".NET": "var options = new TokenCreateOptions\n{\n    Pii = new TokenPiiOptions { IdNumber = \"000000000\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Tokens;\nToken token = service.Create(options);"
    },
    "Create an account token": {
      "cURL": "curl https://api.stripe.com/v1/tokens \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"account[business_type]=individual\" \\\n  -d \"account[individual][first_name]=Jane\" \\\n  -d \"account[individual][last_name]=Doe\" \\\n  -d \"account[tos_shown_and_accepted]=true\"",
      "Stripe CLI": "stripe tokens create  \\\n  -d \"account[business_type]\"=individual \\\n  -d \"account[individual][first_name]\"=Jane \\\n  -d \"account[individual][last_name]\"=Doe \\\n  -d \"account[tos_shown_and_accepted]\"=true",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\n  account: {\n    business_type: 'individual',\n    individual: {\n      first_name: 'Jane',\n      last_name: 'Doe',\n    },\n    tos_shown_and_accepted: true,\n  },\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.create({\n  \"account\": {\n    \"business_type\": \"individual\",\n    \"individual\": {\"first_name\": \"Jane\", \"last_name\": \"Doe\"},\n    \"tos_shown_and_accepted\": True,\n  },\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create([\n  'account' => [\n    'business_type' => 'individual',\n    'individual' => [\n      'first_name' => 'Jane',\n      'last_name' => 'Doe',\n    ],\n    'tos_shown_and_accepted' => true,\n  ],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setAccount(\n      TokenCreateParams.Account.builder()\n        .setBusinessType(TokenCreateParams.Account.BusinessType.INDIVIDUAL)\n        .setIndividual(\n          TokenCreateParams.Account.Individual.builder()\n            .setFirstName(\"Jane\")\n            .setLastName(\"Doe\")\n            .build()\n        )\n        .setTosShownAndAccepted(true)\n        .build()\n    )\n    .build();\n\nToken token = client.v1().tokens().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  account: {\n    business_type: 'individual',\n    individual: {\n      first_name: 'Jane',\n      last_name: 'Doe',\n    },\n    tos_shown_and_accepted: true,\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TokenCreateParams{\n  Account: &stripe.TokenCreateAccountParams{\n    BusinessType: stripe.String(\"individual\"),\n    Individual: &stripe.PersonParams{\n      FirstName: stripe.String(\"Jane\"),\n      LastName: stripe.String(\"Doe\"),\n    },\n    TOSShownAndAccepted: stripe.Bool(true),\n  },\n}\nresult, err := sc.V1Tokens.Create(context.TODO(), params)",
      ".NET": "var options = new TokenCreateOptions\n{\n    Account = new TokenAccountOptions\n    {\n        BusinessType = \"individual\",\n        Individual = new TokenAccountIndividualOptions\n        {\n            FirstName = \"Jane\",\n            LastName = \"Doe\",\n        },\n        TosShownAndAccepted = true,\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Tokens;\nToken token = service.Create(options);"
    },
    "Retrieve a token": {
      "cURL": "curl https://api.stripe.com/v1/tokens/{{TOKEN_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe tokens retrieve {{TOKEN_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.retrieve('{{TOKEN_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ntoken = client.v1.tokens.retrieve(\"{{TOKEN_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->retrieve('{{TOKEN_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nTokenRetrieveParams params = TokenRetrieveParams.builder().build();\n\nToken token = client.v1().tokens().retrieve(\"{{TOKEN_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.retrieve('{{TOKEN_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TokenRetrieveParams{}\nresult, err := sc.V1Tokens.Retrieve(\n  context.TODO(), \"{{TOKEN_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Tokens;\nToken token = service.Get(\"{{TOKEN_ID}}\");"
    }
  },
  "payment-methods": {
    "Create a PaymentMethod": {
      "cURL": "curl https://api.stripe.com/v1/payment_methods \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d type=us_bank_account \\\n  -d \"us_bank_account[account_holder_type]=individual\" \\\n  -d \"us_bank_account[account_number]=000123456789\" \\\n  -d \"us_bank_account[routing_number]=110000000\" \\\n  -d \"billing_details[name]=John Doe\"",
      "Stripe CLI": "stripe payment_methods create  \\\n  --type=us_bank_account \\\n  -d \"us_bank_account[account_holder_type]\"=individual \\\n  -d \"us_bank_account[account_number]\"=000123456789 \\\n  -d \"us_bank_account[routing_number]\"=110000000 \\\n  -d \"billing_details[name]\"=\"John Doe\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.create({\n  type: 'us_bank_account',\n  us_bank_account: {\n    account_holder_type: 'individual',\n    account_number: '000123456789',\n    routing_number: '110000000',\n  },\n  billing_details: {name: 'John Doe'},\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.create({\n  \"type\": \"us_bank_account\",\n  \"us_bank_account\": {\n    \"account_holder_type\": \"individual\",\n    \"account_number\": \"000123456789\",\n    \"routing_number\": \"110000000\",\n  },\n  \"billing_details\": {\"name\": \"John Doe\"},\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->create([\n  'type' => 'us_bank_account',\n  'us_bank_account' => [\n    'account_holder_type' => 'individual',\n    'account_number' => '000123456789',\n    'routing_number' => '110000000',\n  ],\n  'billing_details' => ['name' => 'John Doe'],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodCreateParams params =\n  PaymentMethodCreateParams.builder()\n    .setType(PaymentMethodCreateParams.Type.US_BANK_ACCOUNT)\n    .setUsBankAccount(\n      PaymentMethodCreateParams.UsBankAccount.builder()\n        .setAccountHolderType(\n          PaymentMethodCreateParams.UsBankAccount.AccountHolderType.INDIVIDUAL\n        )\n        .setAccountNumber(\"000123456789\")\n        .setRoutingNumber(\"110000000\")\n        .build()\n    )\n    .setBillingDetails(\n      PaymentMethodCreateParams.BillingDetails.builder().setName(\"John Doe\").build()\n    )\n    .build();\n\nPaymentMethod paymentMethod = client.v1().paymentMethods().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.create({\n  type: 'us_bank_account',\n  us_bank_account: {\n    account_holder_type: 'individual',\n    account_number: '000123456789',\n    routing_number: '110000000',\n  },\n  billing_details: {\n    name: 'John Doe',\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodCreateParams{\n  Type: stripe.String(stripe.PaymentMethodTypeUSBankAccount),\n  USBankAccount: &stripe.PaymentMethodCreateUSBankAccountParams{\n    AccountHolderType: stripe.String(stripe.PaymentMethodUSBankAccountAccountHolderTypeIndividual),\n    AccountNumber: stripe.String(\"000123456789\"),\n    RoutingNumber: stripe.String(\"110000000\"),\n  },\n  BillingDetails: &stripe.PaymentMethodCreateBillingDetailsParams{\n    Name: stripe.String(\"John Doe\"),\n  },\n}\nresult, err := sc.V1PaymentMethods.Create(context.TODO(), params)",
      ".NET": "var options = new PaymentMethodCreateOptions\n{\n    Type = \"us_bank_account\",\n    UsBankAccount = new PaymentMethodUsBankAccountOptions\n    {\n        AccountHolderType = \"individual\",\n        AccountNumber = \"000123456789\",\n        RoutingNumber = \"110000000\",\n    },\n    BillingDetails = new PaymentMethodBillingDetailsOptions { Name = \"John Doe\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethods;\nPaymentMethod paymentMethod = service.Create(options);"
    },
    "Update a PaymentMethod": {
      "cURL": "curl https://api.stripe.com/v1/payment_methods/{{PAYMENT_METHOD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe payment_methods update {{PAYMENT_METHOD_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.update(\n  '{{PAYMENT_METHOD_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.update(\n  \"{{PAYMENT_METHOD_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->update(\n  '{{PAYMENT_METHOD_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodUpdateParams params =\n  PaymentMethodUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nPaymentMethod paymentMethod =\n  client.v1().paymentMethods().update(\"{{PAYMENT_METHOD_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.update(\n  '{{PAYMENT_METHOD_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1PaymentMethods.Update(\n  context.TODO(), \"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "var options = new PaymentMethodUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethods;\nPaymentMethod paymentMethod = service.Update(\"{{PAYMENT_METHOD_ID}}\", options);"
    },
    "Retrieve a PaymentMethod": {
      "cURL": "curl https://api.stripe.com/v1/payment_methods/{{PAYMENT_METHOD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_methods retrieve {{PAYMENT_METHOD_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.retrieve('{{PAYMENT_METHOD_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.retrieve(\"{{PAYMENT_METHOD_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->retrieve(\n  '{{PAYMENT_METHOD_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodRetrieveParams params = PaymentMethodRetrieveParams.builder().build();\n\nPaymentMethod paymentMethod =\n  client.v1().paymentMethods().retrieve(\"{{PAYMENT_METHOD_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.retrieve(\n  '{{PAYMENT_METHOD_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodRetrieveParams{}\nresult, err := sc.V1PaymentMethods.Retrieve(\n  context.TODO(), \"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethods;\nPaymentMethod paymentMethod = service.Get(\"{{PAYMENT_METHOD_ID}}\");"
    },
    "Retrieve a Customer's PaymentMethod": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/payment_methods/{{PAYMENT_METHOD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe customers retrieve_payment_method {{CUSTOMER_ID}} {{PAYMENT_METHOD_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.customers.payment_methods.retrieve(\n  '{{CUSTOMER_ID}}',\n  '{{PAYMENT_METHOD_ID}}',\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.customers.payment_methods.retrieve(\n  \"{{CUSTOMER_ID}}\",\n  \"{{PAYMENT_METHOD_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->customers->retrievePaymentMethod(\n  '{{CUSTOMER_ID}}',\n  '{{PAYMENT_METHOD_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerPaymentMethodRetrieveParams params =\n  CustomerPaymentMethodRetrieveParams.builder().build();\n\nPaymentMethod paymentMethod =\n  client.v1().customers().paymentMethods().retrieve(\n    \"{{CUSTOMER_ID}}\",\n    \"{{PAYMENT_METHOD_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.customers.retrievePaymentMethod(\n  '{{CUSTOMER_ID}}',\n  '{{PAYMENT_METHOD_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerRetrievePaymentMethodParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1Customers.RetrievePaymentMethod(\n  context.TODO(), \"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.PaymentMethods;\nPaymentMethod paymentMethod = service.Get(\n    \"{{CUSTOMER_ID}}\",\n    \"{{PAYMENT_METHOD_ID}}\");"
    },
    "List PaymentMethods": {
      "cURL": "curl -G https://api.stripe.com/v1/payment_methods \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d type=card \\\n  -d limit=3 \\\n  -d customer={{CUSTOMER_ID}}",
      "Stripe CLI": "stripe payment_methods list  \\\n  --type=card \\\n  --limit=3 \\\n  --customer={{CUSTOMER_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_methods = client.v1.payment_methods.list({\n  type: 'card',\n  limit: 3,\n  customer: '{{CUSTOMER_ID}}',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_methods = client.v1.payment_methods.list({\n  \"type\": \"card\",\n  \"limit\": 3,\n  \"customer\": \"{{CUSTOMER_ID}}\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethods = $stripe->paymentMethods->all([\n  'type' => 'card',\n  'limit' => 3,\n  'customer' => '{{CUSTOMER_ID}}',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodListParams params =\n  PaymentMethodListParams.builder()\n    .setType(PaymentMethodListParams.Type.CARD)\n    .setLimit(3L)\n    .setCustomer(\"{{CUSTOMER_ID}}\")\n    .build();\n\nStripeCollection<PaymentMethod> stripeCollection =\n  client.v1().paymentMethods().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethods = await stripe.paymentMethods.list({\n  type: 'card',\n  limit: 3,\n  customer: '{{CUSTOMER_ID}}',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodListParams{\n  Type: stripe.String(stripe.PaymentMethodTypeCard),\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1PaymentMethods.List(context.TODO(), params)",
      ".NET": "var options = new PaymentMethodListOptions\n{\n    Type = \"card\",\n    Limit = 3,\n    Customer = \"{{CUSTOMER_ID}}\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethods;\nStripeList<PaymentMethod> paymentMethods = service.List(options);"
    },
    "List a Customer's PaymentMethods": {
      "cURL": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/payment_methods \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe customers list_payment_methods {{CUSTOMER_ID}} \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_methods = client.v1.customers.payment_methods.list(\n  '{{CUSTOMER_ID}}',\n  {limit: 3},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_methods = client.v1.customers.payment_methods.list(\n  \"{{CUSTOMER_ID}}\",\n  {\"limit\": 3},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethods = $stripe->customers->allPaymentMethods(\n  '{{CUSTOMER_ID}}',\n  ['limit' => 3]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerPaymentMethodListParams params =\n  CustomerPaymentMethodListParams.builder().setLimit(3L).build();\n\nStripeCollection<PaymentMethod> stripeCollection =\n  client.v1().customers().paymentMethods().list(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethods = await stripe.customers.listPaymentMethods(\n  '{{CUSTOMER_ID}}',\n  {\n    limit: 3,\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerListPaymentMethodsParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1Customers.ListPaymentMethods(context.TODO(), params)",
      ".NET": "var options = new CustomerPaymentMethodListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.PaymentMethods;\nStripeList<PaymentMethod> paymentMethods = service.List(\n    \"{{CUSTOMER_ID}}\",\n    options);"
    },
    "Attach a PaymentMethod to a Customer": {
      "cURL": "curl https://api.stripe.com/v1/payment_methods/{{PAYMENT_METHOD_ID}}/attach \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d customer={{CUSTOMER_ID}}",
      "Stripe CLI": "stripe payment_methods attach {{PAYMENT_METHOD_ID}} \\\n  --customer={{CUSTOMER_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.attach(\n  '{{PAYMENT_METHOD_ID}}',\n  {customer: '{{CUSTOMER_ID}}'},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.attach(\n  \"{{PAYMENT_METHOD_ID}}\",\n  {\"customer\": \"{{CUSTOMER_ID}}\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->attach(\n  '{{PAYMENT_METHOD_ID}}',\n  ['customer' => '{{CUSTOMER_ID}}']\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodAttachParams params =\n  PaymentMethodAttachParams.builder().setCustomer(\"{{CUSTOMER_ID}}\").build();\n\nPaymentMethod paymentMethod =\n  client.v1().paymentMethods().attach(\"{{PAYMENT_METHOD_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.attach(\n  '{{PAYMENT_METHOD_ID}}',\n  {\n    customer: '{{CUSTOMER_ID}}',\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodAttachParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1PaymentMethods.Attach(\n  context.TODO(), \"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "var options = new PaymentMethodAttachOptions { Customer = \"{{CUSTOMER_ID}}\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethods;\nPaymentMethod paymentMethod = service.Attach(\"{{PAYMENT_METHOD_ID}}\", options);"
    },
    "Detach a PaymentMethod from a Customer": {
      "cURL": "curl -X POST https://api.stripe.com/v1/payment_methods/{{PAYMENT_METHOD_ID}}/detach \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_methods detach {{PAYMENT_METHOD_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.detach('{{PAYMENT_METHOD_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method = client.v1.payment_methods.detach(\"{{PAYMENT_METHOD_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->detach('{{PAYMENT_METHOD_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodDetachParams params = PaymentMethodDetachParams.builder().build();\n\nPaymentMethod paymentMethod =\n  client.v1().paymentMethods().detach(\"{{PAYMENT_METHOD_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.detach(\n  '{{PAYMENT_METHOD_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodDetachParams{}\nresult, err := sc.V1PaymentMethods.Detach(\n  context.TODO(), \"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethods;\nPaymentMethod paymentMethod = service.Detach(\"{{PAYMENT_METHOD_ID}}\");"
    }
  },
  "payment-method-configurations": {
    "Create a payment method configuration": {
      "cURL": "curl https://api.stripe.com/v1/payment_method_configurations \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"name=Buy Now Pay Laters\"",
      "Stripe CLI": "stripe payment_method_configurations create  \\\n  --name=\"Buy Now Pay Laters\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_configuration = client.v1.payment_method_configurations.create({\n  name: 'Buy Now Pay Laters',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_configuration = client.v1.payment_method_configurations.create({\n  \"name\": \"Buy Now Pay Laters\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodConfiguration = $stripe->paymentMethodConfigurations->create([\n  'name' => 'Buy Now Pay Laters',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodConfigurationCreateParams params =\n  PaymentMethodConfigurationCreateParams.builder()\n    .setName(\"Buy Now Pay Laters\")\n    .build();\n\nPaymentMethodConfiguration paymentMethodConfiguration =\n  client.v1().paymentMethodConfigurations().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodConfiguration = await stripe.paymentMethodConfigurations.create({\n  name: 'Buy Now Pay Laters',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodConfigurationCreateParams{\n  Name: stripe.String(\"Buy Now Pay Laters\"),\n}\nresult, err := sc.V1PaymentMethodConfigurations.Create(context.TODO(), params)",
      ".NET": "var options = new PaymentMethodConfigurationCreateOptions\n{\n    Name = \"Buy Now Pay Laters\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodConfigurations;\nPaymentMethodConfiguration paymentMethodConfiguration = service.Create(options);"
    },
    "Update payment method configuration": {
      "cURL": "curl https://api.stripe.com/v1/payment_method_configurations/pmc_abcdef \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"acss_debit[display_preference][preference]=on\"",
      "Stripe CLI": "stripe payment_method_configurations update pmc_abcdef \\\n  -d \"acss_debit[display_preference][preference]\"=on",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_configuration = client.v1.payment_method_configurations.update(\n  'pmc_abcdef',\n  {acss_debit: {display_preference: {preference: 'on'}}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_configuration = client.v1.payment_method_configurations.update(\n  \"pmc_abcdef\",\n  {\"acss_debit\": {\"display_preference\": {\"preference\": \"on\"}}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodConfiguration = $stripe->paymentMethodConfigurations->update(\n  'pmc_abcdef',\n  ['acss_debit' => ['display_preference' => ['preference' => 'on']]]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodConfigurationUpdateParams params =\n  PaymentMethodConfigurationUpdateParams.builder()\n    .setAcssDebit(\n      PaymentMethodConfigurationUpdateParams.AcssDebit.builder()\n        .setDisplayPreference(\n          PaymentMethodConfigurationUpdateParams.AcssDebit.DisplayPreference.builder()\n            .setPreference(\n              PaymentMethodConfigurationUpdateParams.AcssDebit.DisplayPreference.Preference.ON\n            )\n            .build()\n        )\n        .build()\n    )\n    .build();\n\nPaymentMethodConfiguration paymentMethodConfiguration =\n  client.v1().paymentMethodConfigurations().update(\"pmc_abcdef\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodConfiguration = await stripe.paymentMethodConfigurations.update(\n  'pmc_abcdef',\n  {\n    acss_debit: {\n      display_preference: {\n        preference: 'on',\n      },\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodConfigurationUpdateParams{\n  ACSSDebit: &stripe.PaymentMethodConfigurationUpdateACSSDebitParams{\n    DisplayPreference: &stripe.PaymentMethodConfigurationUpdateACSSDebitDisplayPreferenceParams{\n      Preference: stripe.String(stripe.PaymentMethodConfigurationACSSDebitDisplayPreferencePreferenceOn),\n    },\n  },\n}\nresult, err := sc.V1PaymentMethodConfigurations.Update(\n  context.TODO(), \"pmc_abcdef\", params)",
      ".NET": "var options = new PaymentMethodConfigurationUpdateOptions\n{\n    AcssDebit = new PaymentMethodConfigurationAcssDebitOptions\n    {\n        DisplayPreference = new PaymentMethodConfigurationAcssDebitDisplayPreferenceOptions\n        {\n            Preference = \"on\",\n        },\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodConfigurations;\nPaymentMethodConfiguration paymentMethodConfiguration = service.Update(\n    \"pmc_abcdef\",\n    options);"
    },
    "Retrieve payment method configuration": {
      "cURL": "curl https://api.stripe.com/v1/payment_method_configurations/pmc_abcdef \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_method_configurations retrieve pmc_abcdef",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_configuration = client.v1.payment_method_configurations.retrieve('pmc_abcdef')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_configuration = client.v1.payment_method_configurations.retrieve(\n  \"pmc_abcdef\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodConfiguration = $stripe->paymentMethodConfigurations->retrieve(\n  'pmc_abcdef',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodConfigurationRetrieveParams params =\n  PaymentMethodConfigurationRetrieveParams.builder().build();\n\nPaymentMethodConfiguration paymentMethodConfiguration =\n  client.v1().paymentMethodConfigurations().retrieve(\"pmc_abcdef\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodConfiguration = await stripe.paymentMethodConfigurations.retrieve(\n  'pmc_abcdef'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodConfigurationRetrieveParams{}\nresult, err := sc.V1PaymentMethodConfigurations.Retrieve(\n  context.TODO(), \"pmc_abcdef\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodConfigurations;\nPaymentMethodConfiguration paymentMethodConfiguration = service.Get(\"pmc_abcdef\");"
    },
    "List payment method configurations": {
      "cURL": "curl https://api.stripe.com/v1/payment_method_configurations \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_method_configurations list",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_configurations = client.v1.payment_method_configurations.list()",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_configurations = client.v1.payment_method_configurations.list()",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodConfigurations = $stripe->paymentMethodConfigurations->all([]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodConfigurationListParams params =\n  PaymentMethodConfigurationListParams.builder().build();\n\nStripeCollection<PaymentMethodConfiguration> stripeCollection =\n  client.v1().paymentMethodConfigurations().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodConfigurations = await stripe.paymentMethodConfigurations.list();",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodConfigurationListParams{}\nresult := sc.V1PaymentMethodConfigurations.List(context.TODO(), params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodConfigurations;\nStripeList<PaymentMethodConfiguration> paymentMethodConfigurations = service.List();"
    }
  },
  "payment-method-domains": {
    "Create a payment method domain": {
      "cURL": "curl https://api.stripe.com/v1/payment_method_domains \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"domain_name=example.com\"",
      "Stripe CLI": "stripe payment_method_domains create  \\\n  --domain-name=\"example.com\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domain = client.v1.payment_method_domains.create({\n  domain_name: 'example.com',\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domain = client.v1.payment_method_domains.create({\n  \"domain_name\": \"example.com\",\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomain = $stripe->paymentMethodDomains->create([\n  'domain_name' => 'example.com',\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodDomainCreateParams params =\n  PaymentMethodDomainCreateParams.builder().setDomainName(\"example.com\").build();\n\nPaymentMethodDomain paymentMethodDomain =\n  client.v1().paymentMethodDomains().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomain = await stripe.paymentMethodDomains.create({\n  domain_name: 'example.com',\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodDomainCreateParams{\n  DomainName: stripe.String(\"example.com\"),\n}\nresult, err := sc.V1PaymentMethodDomains.Create(context.TODO(), params)",
      ".NET": "var options = new PaymentMethodDomainCreateOptions { DomainName = \"example.com\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodDomains;\nPaymentMethodDomain paymentMethodDomain = service.Create(options);"
    },
    "Update a payment method domain": {
      "cURL": "curl https://api.stripe.com/v1/payment_method_domains/pmd_1Nnrer2eZvKYlo2Cips79tWl \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d enabled=false",
      "Stripe CLI": "stripe payment_method_domains update pmd_1Nnrer2eZvKYlo2Cips79tWl \\\n  --enabled=false",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domain = client.v1.payment_method_domains.update(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  {enabled: false},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domain = client.v1.payment_method_domains.update(\n  \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n  {\"enabled\": False},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomain = $stripe->paymentMethodDomains->update(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  ['enabled' => false]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodDomainUpdateParams params =\n  PaymentMethodDomainUpdateParams.builder().setEnabled(false).build();\n\nPaymentMethodDomain paymentMethodDomain =\n  client.v1().paymentMethodDomains().update(\"pmd_1Nnrer2eZvKYlo2Cips79tWl\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomain = await stripe.paymentMethodDomains.update(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  {\n    enabled: false,\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodDomainUpdateParams{Enabled: stripe.Bool(false)}\nresult, err := sc.V1PaymentMethodDomains.Update(\n  context.TODO(), \"pmd_1Nnrer2eZvKYlo2Cips79tWl\", params)",
      ".NET": "var options = new PaymentMethodDomainUpdateOptions { Enabled = false };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodDomains;\nPaymentMethodDomain paymentMethodDomain = service.Update(\n    \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n    options);"
    },
    "Retrieve a payment method domain": {
      "cURL": "curl https://api.stripe.com/v1/payment_method_domains/pmd_1Nnrer2eZvKYlo2Cips79tWl \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_method_domains retrieve pmd_1Nnrer2eZvKYlo2Cips79tWl",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domain = client.v1.payment_method_domains.retrieve('pmd_1Nnrer2eZvKYlo2Cips79tWl')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domain = client.v1.payment_method_domains.retrieve(\n  \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomain = $stripe->paymentMethodDomains->retrieve(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodDomainRetrieveParams params =\n  PaymentMethodDomainRetrieveParams.builder().build();\n\nPaymentMethodDomain paymentMethodDomain =\n  client.v1().paymentMethodDomains().retrieve(\n    \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomain = await stripe.paymentMethodDomains.retrieve(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodDomainRetrieveParams{}\nresult, err := sc.V1PaymentMethodDomains.Retrieve(\n  context.TODO(), \"pmd_1Nnrer2eZvKYlo2Cips79tWl\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodDomains;\nPaymentMethodDomain paymentMethodDomain = service.Get(\n    \"pmd_1Nnrer2eZvKYlo2Cips79tWl\");"
    },
    "List payment method domains": {
      "cURL": "curl -G https://api.stripe.com/v1/payment_method_domains \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe payment_method_domains list  \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domains = client.v1.payment_method_domains.list({limit: 3})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domains = client.v1.payment_method_domains.list({\"limit\": 3})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomains = $stripe->paymentMethodDomains->all(['limit' => 3]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodDomainListParams params =\n  PaymentMethodDomainListParams.builder().setLimit(3L).build();\n\nStripeCollection<PaymentMethodDomain> stripeCollection =\n  client.v1().paymentMethodDomains().list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomains = await stripe.paymentMethodDomains.list({\n  limit: 3,\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodDomainListParams{}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1PaymentMethodDomains.List(context.TODO(), params)",
      ".NET": "var options = new PaymentMethodDomainListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodDomains;\nStripeList<PaymentMethodDomain> paymentMethodDomains = service.List(options);"
    },
    "Validate an existing payment method domain": {
      "cURL": "curl -X POST https://api.stripe.com/v1/payment_method_domains/pmd_1Nnrer2eZvKYlo2Cips79tWl/validate \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe payment_method_domains validate pmd_1Nnrer2eZvKYlo2Cips79tWl",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domain = client.v1.payment_method_domains.validate('pmd_1Nnrer2eZvKYlo2Cips79tWl')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_method_domain = client.v1.payment_method_domains.validate(\n  \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomain = $stripe->paymentMethodDomains->validate(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nPaymentMethodDomainValidateParams params =\n  PaymentMethodDomainValidateParams.builder().build();\n\nPaymentMethodDomain paymentMethodDomain =\n  client.v1().paymentMethodDomains().validate(\n    \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomain = await stripe.paymentMethodDomains.validate(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentMethodDomainValidateParams{}\nresult, err := sc.V1PaymentMethodDomains.Validate(\n  context.TODO(), \"pmd_1Nnrer2eZvKYlo2Cips79tWl\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.PaymentMethodDomains;\nPaymentMethodDomain paymentMethodDomain = service.Validate(\n    \"pmd_1Nnrer2eZvKYlo2Cips79tWl\");"
    }
  },
  "bank-accounts": {
    "Create a bank account": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/sources \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d source=btok_1MvoS32eZvKYlo2CDhGTErAe",
      "Stripe CLI": "stripe payment_sources create {{CUSTOMER_ID}} \\\n  --source=btok_1MvoS32eZvKYlo2CDhGTErAe",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nresult = client.v1.customers.payment_sources.create(\n  '{{CUSTOMER_ID}}',\n  {source: 'btok_1MvoS32eZvKYlo2CDhGTErAe'},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_source = client.v1.customers.payment_sources.create(\n  \"{{CUSTOMER_ID}}\",\n  {\"source\": \"btok_1MvoS32eZvKYlo2CDhGTErAe\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->createSource(\n  '{{CUSTOMER_ID}}',\n  ['source' => 'btok_1MvoS32eZvKYlo2CDhGTErAe']\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerPaymentSourceCreateParams params =\n  CustomerPaymentSourceCreateParams.builder()\n    .setSource(\"btok_1MvoS32eZvKYlo2CDhGTErAe\")\n    .build();\n\nPaymentSource paymentSource =\n  client.v1().customers().paymentSources().create(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.createSource(\n  '{{CUSTOMER_ID}}',\n  {\n    source: 'btok_1MvoS32eZvKYlo2CDhGTErAe',\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentSourceCreateParams{\n  Source: stripe.String(\"btok_1MvoS32eZvKYlo2CDhGTErAe\"),\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1PaymentSources.Create(context.TODO(), params)",
      ".NET": "var options = new CustomerPaymentSourceCreateOptions\n{\n    Source = \"btok_1MvoS32eZvKYlo2CDhGTErAe\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.PaymentSources;\nIPaymentSource iPaymentSource = service.Create(\"{{CUSTOMER_ID}}\", options);"
    },
    "Update a bank account": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/sources/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe bank_accounts update {{CUSTOMER_ID}} {{BANK_ACCOUNT_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nresult = client.v1.customers.payment_sources.update(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_source = client.v1.customers.payment_sources.update(\n  \"{{CUSTOMER_ID}}\",\n  \"{{BANK_ACCOUNT_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->updateSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerPaymentSourceUpdateParams params =\n  CustomerPaymentSourceUpdateParams.builder()\n    .putMetadata(\"order_id\", \"6735\")\n    .build();\n\nPaymentSource paymentSource =\n  client.v1().customers().paymentSources().update(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.updateSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CardUpdateParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1Cards.Update(\n  context.TODO(), \"{{BANK_ACCOUNT_ID}}\", params)",
      ".NET": "var options = new CustomerPaymentSourceUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.PaymentSources;\nIPaymentSource iPaymentSource = service.Update(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\",\n    options);"
    },
    "Retrieve a bank account": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Ruby": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Python": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "PHP": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Java": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Node.js": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Go": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      ".NET": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\""
    },
    "List all bank accounts": {
      "cURL": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Ruby": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Python": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "PHP": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Java": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Node.js": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Go": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      ".NET": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/bank_accounts \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3"
    },
    "Delete a bank account": {
      "cURL": "curl -X DELETE https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/sources/{{BANK_ACCOUNT_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe bank_accounts delete {{CUSTOMER_ID}} {{BANK_ACCOUNT_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nresult = client.v1.sources.detach(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_source = client.v1.sources.detach(\n  \"{{CUSTOMER_ID}}\",\n  \"{{BANK_ACCOUNT_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSourceDetachParams params = SourceDetachParams.builder().build();\n\nPaymentSource paymentSource =\n  client.v1().sources().detach(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CardDeleteParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nresult, err := sc.V1Cards.Delete(\n  context.TODO(), \"{{BANK_ACCOUNT_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Sources;\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\");"
    },
    "Verify a bank account": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/sources/{{BANK_ACCOUNT_ID}}/verify \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"amounts[]=32\" \\\n  -d \"amounts[]=45\"",
      "Stripe CLI": "stripe bank_accounts verify {{CUSTOMER_ID}} {{BANK_ACCOUNT_ID}} \\\n  -d \"amounts[0]\"=32 \\\n  -d \"amounts[1]\"=45",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nbank_account = client.v1.customers.payment_sources.verify(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  {amounts: [32, 45]},\n)",
      "Python": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/sources/{{BANK_ACCOUNT_ID}}/verify \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"amounts[]=32\" \\\n  -d \"amounts[]=45\"",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->verifySource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  ['amounts' => [32, 45]]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerPaymentSourceVerifyParams params =\n  CustomerPaymentSourceVerifyParams.builder().addAmount(32L).addAmount(45L).build();\n\nBankAccount bankAccount =\n  client.v1().customers().paymentSources().verify(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst bankAccount = await stripe.customers.verifySource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  {\n    amounts: [32, 45],\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentSourceVerifyParams{\n  Amounts: []*int64{stripe.Int64(32), stripe.Int64(45)},\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1PaymentSources.Verify(\n  context.TODO(), \"{{BANK_ACCOUNT_ID}}\", params)",
      ".NET": "var options = new CustomerPaymentSourceVerifyOptions\n{\n    Amounts = new List<long?> { 32, 45 },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.PaymentSources;\nBankAccount bankAccount = service.Verify(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\",\n    options);"
    }
  },
  "cash-balance": {
    "Update a cash balance's settings": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cash_balance \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"settings[reconciliation_mode]=manual\"",
      "Stripe CLI": "stripe cash_balances update {{CUSTOMER_ID}} \\\n  -d \"settings[reconciliation_mode]\"=manual",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncash_balance = client.v1.customers.cash_balance.update(\n  '{{CUSTOMER_ID}}',\n  {settings: {reconciliation_mode: 'manual'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncash_balance = client.v1.customers.cash_balance.update(\n  \"{{CUSTOMER_ID}}\",\n  {\"settings\": {\"reconciliation_mode\": \"manual\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$cashBalance = $stripe->customers->updateCashBalance(\n  '{{CUSTOMER_ID}}',\n  ['settings' => ['reconciliation_mode' => 'manual']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerCashBalanceUpdateParams params =\n  CustomerCashBalanceUpdateParams.builder()\n    .setSettings(\n      CustomerCashBalanceUpdateParams.Settings.builder()\n        .setReconciliationMode(\n          CustomerCashBalanceUpdateParams.Settings.ReconciliationMode.MANUAL\n        )\n        .build()\n    )\n    .build();\n\nCashBalance cashBalance =\n  client.v1().customers().cashBalance().update(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst cashBalance = await stripe.customers.updateCashBalance(\n  '{{CUSTOMER_ID}}',\n  {\n    settings: {\n      reconciliation_mode: 'manual',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CashBalanceUpdateParams{\n  Settings: &stripe.CashBalanceUpdateSettingsParams{\n    ReconciliationMode: stripe.String(stripe.CashBalanceSettingsReconciliationModeManual),\n  },\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1CashBalances.Update(context.TODO(), params)",
      ".NET": "var options = new CustomerCashBalanceUpdateOptions\n{\n    Settings = new CustomerCashBalanceSettingsOptions\n    {\n        ReconciliationMode = \"manual\",\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.CashBalance;\nCashBalance cashBalance = service.Update(\"{{CUSTOMER_ID}}\", options);"
    },
    "Retrieve a cash balance": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cash_balance \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe cash_balances retrieve {{CUSTOMER_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncash_balance = client.v1.customers.cash_balance.retrieve('{{CUSTOMER_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncash_balance = client.v1.customers.cash_balance.retrieve(\"{{CUSTOMER_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$cashBalance = $stripe->customers->retrieveCashBalance('{{CUSTOMER_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerCashBalanceRetrieveParams params =\n  CustomerCashBalanceRetrieveParams.builder().build();\n\nCashBalance cashBalance =\n  client.v1().customers().cashBalance().retrieve(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst cashBalance = await stripe.customers.retrieveCashBalance('{{CUSTOMER_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CashBalanceRetrieveParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1CashBalances.Retrieve(context.TODO(), params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.CashBalance;\nCashBalance cashBalance = service.Get(\"{{CUSTOMER_ID}}\");"
    }
  },
  "cash-balance-transactions": {
    "Create or retrieve funding instructions for a customer cash balance": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/funding_instructions \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d funding_type=bank_transfer \\\n  -d currency=eur \\\n  -d \"bank_transfer[type]=eu_bank_transfer\" \\\n  -d \"bank_transfer[eu_bank_transfer][country]=DE\"",
      "Stripe CLI": "stripe customers create_funding_instructions {{CUSTOMER_ID}} \\\n  --funding-type=bank_transfer \\\n  --currency=eur \\\n  -d \"bank_transfer[type]\"=eu_bank_transfer \\\n  -d \"bank_transfer[eu_bank_transfer][country]\"=DE",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nfunding_instructions = client.v1.customers.funding_instructions.create(\n  '{{CUSTOMER_ID}}',\n  {\n    funding_type: 'bank_transfer',\n    currency: 'eur',\n    bank_transfer: {\n      type: 'eu_bank_transfer',\n      eu_bank_transfer: {country: 'DE'},\n    },\n  },\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nfunding_instructions = client.v1.customers.funding_instructions.create(\n  \"{{CUSTOMER_ID}}\",\n  {\n    \"funding_type\": \"bank_transfer\",\n    \"currency\": \"eur\",\n    \"bank_transfer\": {\n      \"type\": \"eu_bank_transfer\",\n      \"eu_bank_transfer\": {\"country\": \"DE\"},\n    },\n  },\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fundingInstructions = $stripe->customers->createFundingInstructions(\n  '{{CUSTOMER_ID}}',\n  [\n    'funding_type' => 'bank_transfer',\n    'currency' => 'eur',\n    'bank_transfer' => [\n      'type' => 'eu_bank_transfer',\n      'eu_bank_transfer' => ['country' => 'DE'],\n    ],\n  ]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerFundingInstructionsCreateParams params =\n  CustomerFundingInstructionsCreateParams.builder()\n    .setFundingType(\n      CustomerFundingInstructionsCreateParams.FundingType.BANK_TRANSFER\n    )\n    .setCurrency(\"eur\")\n    .setBankTransfer(\n      CustomerFundingInstructionsCreateParams.BankTransfer.builder()\n        .setType(\n          CustomerFundingInstructionsCreateParams.BankTransfer.Type.EU_BANK_TRANSFER\n        )\n        .setEuBankTransfer(\n          CustomerFundingInstructionsCreateParams.BankTransfer.EuBankTransfer.builder()\n            .setCountry(\"DE\")\n            .build()\n        )\n        .build()\n    )\n    .build();\n\nFundingInstructions fundingInstructions =\n  client.v1().customers().fundingInstructions().create(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fundingInstructions = await stripe.customers.createFundingInstructions(\n  '{{CUSTOMER_ID}}',\n  {\n    funding_type: 'bank_transfer',\n    currency: 'eur',\n    bank_transfer: {\n      type: 'eu_bank_transfer',\n      eu_bank_transfer: {\n        country: 'DE',\n      },\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerCreateFundingInstructionsParams{\n  FundingType: stripe.String(\"bank_transfer\"),\n  Currency: stripe.String(stripe.CurrencyEUR),\n  BankTransfer: &stripe.CustomerCreateFundingInstructionsBankTransferParams{\n    Type: stripe.String(\"eu_bank_transfer\"),\n    EUBankTransfer: &stripe.CustomerCreateFundingInstructionsBankTransferEUBankTransferParams{\n      Country: stripe.String(\"DE\"),\n    },\n  },\n}\nresult, err := sc.V1Customers.CreateFundingInstructions(\n  context.TODO(), \"{{CUSTOMER_ID}}\", params)",
      ".NET": "var options = new CustomerFundingInstructionsCreateOptions\n{\n    FundingType = \"bank_transfer\",\n    Currency = \"eur\",\n    BankTransfer = new CustomerFundingInstructionsBankTransferOptions\n    {\n        Type = \"eu_bank_transfer\",\n        EuBankTransfer = new CustomerFundingInstructionsBankTransferEuBankTransferOptions\n        {\n            Country = \"DE\",\n        },\n    },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.FundingInstructions;\nFundingInstructions fundingInstructions = service.Create(\n    \"{{CUSTOMER_ID}}\",\n    options);"
    },
    "Retrieve a cash balance transaction": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cash_balance_transactions/ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe customer_cash_balance_transactions retrieve {{CUSTOMER_ID}} ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer_cash_balance_transaction = client.v1.customers.cash_balance_transactions.retrieve(\n  '{{CUSTOMER_ID}}',\n  'ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF',\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer_cash_balance_transaction = client \\\n  .v1 \\\n  .customers \\\n  .cash_balance_transactions \\\n  .retrieve(\n  \"{{CUSTOMER_ID}}\",\n  \"ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customerCashBalanceTransaction = $stripe->customers->retrieveCashBalanceTransaction(\n  '{{CUSTOMER_ID}}',\n  'ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerCashBalanceTransactionRetrieveParams params =\n  CustomerCashBalanceTransactionRetrieveParams.builder().build();\n\nCustomerCashBalanceTransaction customerCashBalanceTransaction =\n  client.v1().customers().cashBalanceTransactions().retrieve(\n    \"{{CUSTOMER_ID}}\",\n    \"ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerCashBalanceTransaction = await stripe\n  .customers\n  .retrieveCashBalanceTransaction(\n  '{{CUSTOMER_ID}}',\n  'ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerCashBalanceTransactionRetrieveParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1CustomerCashBalanceTransactions.Retrieve(\n  context.TODO(), \"ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.CashBalanceTransactions;\nCustomerCashBalanceTransaction customerCashBalanceTransaction = service.Get(\n    \"{{CUSTOMER_ID}}\",\n    \"ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF\");"
    },
    "List cash balance transactions": {
      "cURL": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cash_balance_transactions \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "stripe customer_cash_balance_transactions list {{CUSTOMER_ID}} \\\n  --limit=3",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer_cash_balance_transactions = client.v1.customers.cash_balance_transactions.list(\n  '{{CUSTOMER_ID}}',\n  {limit: 3},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer_cash_balance_transactions = client \\\n  .v1 \\\n  .customers \\\n  .cash_balance_transactions \\\n  .list(\n  \"{{CUSTOMER_ID}}\",\n  {\"limit\": 3},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customerCashBalanceTransactions = $stripe->customers->allCashBalanceTransactions(\n  '{{CUSTOMER_ID}}',\n  ['limit' => 3]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerCashBalanceTransactionListParams params =\n  CustomerCashBalanceTransactionListParams.builder().setLimit(3L).build();\n\nStripeCollection<CustomerCashBalanceTransaction> stripeCollection =\n  client.v1().customers().cashBalanceTransactions().list(\n    \"{{CUSTOMER_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerCashBalanceTransactions = await stripe\n  .customers\n  .listCashBalanceTransactions(\n  '{{CUSTOMER_ID}}',\n  {\n    limit: 3,\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CustomerCashBalanceTransactionListParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nparams.Limit = stripe.Int64(3)\nresult := sc.V1CustomerCashBalanceTransactions.List(context.TODO(), params)",
      ".NET": "var options = new CustomerCashBalanceTransactionListOptions { Limit = 3 };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.CashBalanceTransactions;\nStripeList<CustomerCashBalanceTransaction> customerCashBalanceTransactions = service\n    .List(\"{{CUSTOMER_ID}}\", options);"
    },
    "Fund a test mode cash balance": {
      "cURL": "curl https://api.stripe.com/v1/test_helpers/customers/{{CUSTOMER_ID}}/fund_cash_balance \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d amount=5000 \\\n  -d currency=eur",
      "Stripe CLI": "stripe test_helpers customers fund_cash_balance {{CUSTOMER_ID}} \\\n  --amount=5000 \\\n  --currency=eur",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer_cash_balance_transaction = client.v1.test_helpers.customers.fund_cash_balance(\n  '{{CUSTOMER_ID}}',\n  {\n    amount: 5000,\n    currency: 'eur',\n  },\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\ncustomer_cash_balance_transaction = client \\\n  .v1 \\\n  .test_helpers \\\n  .customers \\\n  .fund_cash_balance(\n  \"{{CUSTOMER_ID}}\",\n  {\"amount\": 5000, \"currency\": \"eur\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customerCashBalanceTransaction = $stripe->testHelpers->customers->fundCashBalance(\n  '{{CUSTOMER_ID}}',\n  [\n    'amount' => 5000,\n    'currency' => 'eur',\n  ]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerFundCashBalanceParams params =\n  CustomerFundCashBalanceParams.builder()\n    .setAmount(5000L)\n    .setCurrency(\"eur\")\n    .build();\n\nCustomerCashBalanceTransaction customerCashBalanceTransaction =\n  client.v1().testHelpers().customers().fundCashBalance(\n    \"{{CUSTOMER_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerCashBalanceTransaction = await stripe\n  .testHelpers\n  .customers\n  .fundCashBalance(\n  '{{CUSTOMER_ID}}',\n  {\n    amount: 5000,\n    currency: 'eur',\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.TestHelpersCustomerFundCashBalanceParams{\n  Amount: stripe.Int64(5000),\n  Currency: stripe.String(stripe.CurrencyEUR),\n}\nresult, err := sc.V1TestHelpersCustomers.FundCashBalance(\n  context.TODO(), \"{{CUSTOMER_ID}}\", params)",
      ".NET": "var options = new Stripe.TestHelpers.CustomerFundCashBalanceOptions\n{\n    Amount = 5000,\n    Currency = \"eur\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.TestHelpers.Customers;\nCustomerCashBalanceTransaction customerCashBalanceTransaction = service\n    .FundCashBalance(\"{{CUSTOMER_ID}}\", options);"
    }
  },
  "cards": {
    "Create a card": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/sources \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d source=tok_visa",
      "Stripe CLI": "stripe payment_sources create {{CUSTOMER_ID}} \\\n  --source=tok_visa",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nresult = client.v1.customers.payment_sources.create(\n  '{{CUSTOMER_ID}}',\n  {source: 'tok_visa'},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_source = client.v1.customers.payment_sources.create(\n  \"{{CUSTOMER_ID}}\",\n  {\"source\": \"tok_visa\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->createSource(\n  '{{CUSTOMER_ID}}',\n  ['source' => 'tok_visa']\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerPaymentSourceCreateParams params =\n  CustomerPaymentSourceCreateParams.builder().setSource(\"tok_visa\").build();\n\nPaymentSource paymentSource =\n  client.v1().customers().paymentSources().create(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.createSource(\n  '{{CUSTOMER_ID}}',\n  {\n    source: 'tok_visa',\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentSourceCreateParams{\n  Source: stripe.String(\"tok_visa\"),\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1PaymentSources.Create(context.TODO(), params)",
      ".NET": "var options = new CustomerPaymentSourceCreateOptions { Source = \"tok_visa\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.PaymentSources;\nIPaymentSource iPaymentSource = service.Create(\"{{CUSTOMER_ID}}\", options);"
    },
    "Update a card": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{ACCOUNT_ID}}/sources/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"name=Jenny Rosen\"",
      "Stripe CLI": "stripe bank_accounts update {{ACCOUNT_ID}} {{CARD_ID}} \\\n  --name=\"Jenny Rosen\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nresult = client.v1.customers.payment_sources.update(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  {name: 'Jenny Rosen'},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_source = client.v1.customers.payment_sources.update(\n  \"{{ACCOUNT_ID}}\",\n  \"{{CARD_ID}}\",\n  {\"name\": \"Jenny Rosen\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->updateSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  ['name' => 'Jenny Rosen']\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerPaymentSourceUpdateParams params =\n  CustomerPaymentSourceUpdateParams.builder().setName(\"Jenny Rosen\").build();\n\nPaymentSource paymentSource =\n  client.v1().customers().paymentSources().update(\n    \"{{ACCOUNT_ID}}\",\n    \"{{CARD_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.updateSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  {\n    name: 'Jenny Rosen',\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CardUpdateParams{\n  Name: stripe.String(\"Jenny Rosen\"),\n  Customer: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult, err := sc.V1Cards.Update(\n  context.TODO(), \"{{CARD_ID}}\", params)",
      ".NET": "var options = new CustomerPaymentSourceUpdateOptions { Name = \"Jenny Rosen\" };\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.PaymentSources;\nIPaymentSource iPaymentSource = service.Update(\n    \"{{ACCOUNT_ID}}\",\n    \"{{CARD_ID}}\",\n    options);"
    },
    "Retrieve a card": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Ruby": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Python": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "PHP": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Java": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Node.js": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Go": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      ".NET": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\""
    },
    "List all cards": {
      "cURL": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Stripe CLI": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Ruby": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Python": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "PHP": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Java": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Node.js": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      "Go": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3",
      ".NET": "curl -G https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/cards \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d limit=3"
    },
    "Delete a card": {
      "cURL": "curl -X DELETE https://api.stripe.com/v1/customers/{{ACCOUNT_ID}}/sources/{{CARD_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe bank_accounts delete {{ACCOUNT_ID}} {{CARD_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nresult = client.v1.sources.detach(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_source = client.v1.sources.detach(\n  \"{{ACCOUNT_ID}}\",\n  \"{{CARD_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSourceDetachParams params = SourceDetachParams.builder().build();\n\nPaymentSource paymentSource =\n  client.v1().sources().detach(\n    \"{{ACCOUNT_ID}}\",\n    \"{{CARD_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CardDeleteParams{Customer: stripe.String(\"{{ACCOUNT_ID}}\")}\nresult, err := sc.V1Cards.Delete(\n  context.TODO(), \"{{CARD_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Sources;\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{ACCOUNT_ID}}\",\n    \"{{CARD_ID}}\");"
    }
  },
  "sources": {
    "Create a source": {
      "cURL": "curl https://api.stripe.com/v1/sources \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d type=ach_credit_transfer \\\n  -d currency=usd \\\n  --data-urlencode \"owner[email]=jenny.rosen@example.com\"",
      "Stripe CLI": "stripe sources create  \\\n  --type=ach_credit_transfer \\\n  --currency=usd \\\n  -d \"owner[email]\"=\"jenny.rosen@example.com\"",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsource = client.v1.sources.create({\n  type: 'ach_credit_transfer',\n  currency: 'usd',\n  owner: {email: 'jenny.rosen@example.com'},\n})",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsource = client.v1.sources.create({\n  \"type\": \"ach_credit_transfer\",\n  \"currency\": \"usd\",\n  \"owner\": {\"email\": \"jenny.rosen@example.com\"},\n})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$source = $stripe->sources->create([\n  'type' => 'ach_credit_transfer',\n  'currency' => 'usd',\n  'owner' => ['email' => 'jenny.rosen@example.com'],\n]);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSourceCreateParams params =\n  SourceCreateParams.builder()\n    .setType(\"ach_credit_transfer\")\n    .setCurrency(\"usd\")\n    .setOwner(\n      SourceCreateParams.Owner.builder().setEmail(\"jenny.rosen@example.com\").build()\n    )\n    .build();\n\nSource source = client.v1().sources().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst source = await stripe.sources.create({\n  type: 'ach_credit_transfer',\n  currency: 'usd',\n  owner: {\n    email: 'jenny.rosen@example.com',\n  },\n});",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SourceCreateParams{\n  Type: stripe.String(\"ach_credit_transfer\"),\n  Currency: stripe.String(stripe.CurrencyUSD),\n  Owner: &stripe.SourceCreateOwnerParams{\n    Email: stripe.String(\"jenny.rosen@example.com\"),\n  },\n}\nresult, err := sc.V1Sources.Create(context.TODO(), params)",
      ".NET": "var options = new SourceCreateOptions\n{\n    Type = \"ach_credit_transfer\",\n    Currency = \"usd\",\n    Owner = new SourceOwnerOptions { Email = \"jenny.rosen@example.com\" },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Sources;\nSource source = service.Create(options);"
    },
    "Update a source": {
      "cURL": "curl https://api.stripe.com/v1/sources/{{SOURCE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d \"metadata[order_id]=6735\"",
      "Stripe CLI": "stripe sources update {{SOURCE_ID}} \\\n  -d \"metadata[order_id]\"=6735",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsource = client.v1.sources.update(\n  '{{SOURCE_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsource = client.v1.sources.update(\n  \"{{SOURCE_ID}}\",\n  {\"metadata\": {\"order_id\": \"6735\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$source = $stripe->sources->update(\n  '{{SOURCE_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSourceUpdateParams params =\n  SourceUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nSource source = client.v1().sources().update(\"{{SOURCE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst source = await stripe.sources.update(\n  '{{SOURCE_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SourceUpdateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1Sources.Update(\n  context.TODO(), \"{{SOURCE_ID}}\", params)",
      ".NET": "var options = new SourceUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Sources;\nSource source = service.Update(\"{{SOURCE_ID}}\", options);"
    },
    "Retrieve a source": {
      "cURL": "curl https://api.stripe.com/v1/sources/{{SOURCE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe sources retrieve {{SOURCE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nsource = client.v1.sources.retrieve('{{SOURCE_ID}}')",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\nsource = client.v1.sources.retrieve(\"{{SOURCE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$source = $stripe->sources->retrieve('{{SOURCE_ID}}', []);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSourceRetrieveParams params = SourceRetrieveParams.builder().build();\n\nSource source =\n  client.v1().sources().retrieve(\"{{SOURCE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst source = await stripe.sources.retrieve('{{SOURCE_ID}}');",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.SourceRetrieveParams{}\nresult, err := sc.V1Sources.Retrieve(\n  context.TODO(), \"{{SOURCE_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Sources;\nSource source = service.Get(\"{{SOURCE_ID}}\");"
    },
    "Attach a source": {
      "cURL": "curl https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/sources \\\n  -u \"<<YOUR_SECRET_KEY>>\" \\\n  -d source={{SOURCE_ID}}",
      "Stripe CLI": "stripe payment_sources create {{CUSTOMER_ID}} \\\n  --source={{SOURCE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nresult = client.v1.customers.payment_sources.create(\n  '{{CUSTOMER_ID}}',\n  {source: '{{SOURCE_ID}}'},\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_source = client.v1.customers.payment_sources.create(\n  \"{{CUSTOMER_ID}}\",\n  {\"source\": \"{{SOURCE_ID}}\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->createSource(\n  '{{CUSTOMER_ID}}',\n  ['source' => '{{SOURCE_ID}}']\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nCustomerPaymentSourceCreateParams params =\n  CustomerPaymentSourceCreateParams.builder()\n    .setSource(\"{{SOURCE_ID}}\")\n    .build();\n\nPaymentSource paymentSource =\n  client.v1().customers().paymentSources().create(\"{{CUSTOMER_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.createSource(\n  '{{CUSTOMER_ID}}',\n  {\n    source: '{{SOURCE_ID}}',\n  }\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.PaymentSourceCreateParams{\n  Source: stripe.String(\"{{SOURCE_ID}}\"),\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := sc.V1PaymentSources.Create(context.TODO(), params)",
      ".NET": "var options = new CustomerPaymentSourceCreateOptions\n{\n    Source = \"{{SOURCE_ID}}\",\n};\nvar client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Customers.PaymentSources;\nIPaymentSource iPaymentSource = service.Create(\"{{CUSTOMER_ID}}\", options);"
    },
    "Detach a source": {
      "cURL": "curl -X DELETE https://api.stripe.com/v1/customers/{{CUSTOMER_ID}}/sources/{{SOURCE_ID}} \\\n  -u \"<<YOUR_SECRET_KEY>>\"",
      "Stripe CLI": "stripe bank_accounts delete {{CUSTOMER_ID}} {{SOURCE_ID}}",
      "Ruby": "client = Stripe::StripeClient.new(\"<<YOUR_SECRET_KEY>>\")\n\nresult = client.v1.sources.detach(\n  '{{CUSTOMER_ID}}',\n  '{{SOURCE_ID}}',\n)",
      "Python": "client = StripeClient(\"<<YOUR_SECRET_KEY>>\")\n\npayment_source = client.v1.sources.detach(\n  \"{{CUSTOMER_ID}}\",\n  \"{{SOURCE_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{SOURCE_ID}}',\n  []\n);",
      "Java": "StripeClient client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\n\nSourceDetachParams params = SourceDetachParams.builder().build();\n\nPaymentSource paymentSource =\n  client.v1().sources().detach(\n    \"{{CUSTOMER_ID}}\",\n    \"{{SOURCE_ID}}\",\n    params\n  );",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{SOURCE_ID}}'\n);",
      "Go": "sc := stripe.NewClient(\"<<YOUR_SECRET_KEY>>\")\nparams := &stripe.CardDeleteParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nresult, err := sc.V1Cards.Delete(\n  context.TODO(), \"{{SOURCE_ID}}\", params)",
      ".NET": "var client = new StripeClient(\"<<YOUR_SECRET_KEY>>\");\nvar service = client.V1.Sources;\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{CUSTOMER_ID}}\",\n    \"{{SOURCE_ID}}\");"
    }
  }
};

export const resourceGlobalRequestExamples: Record<
  string,
  Record<string, Record<string, string>>
> = {
  "accounts-v2": {
    "Create an account": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Update an account": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Retrieve an account": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "List accounts": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Close an account": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    }
  },
  "account-links-v2": {
    "Create an account link": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    }
  },
  "account-tokens-v2": {
    "Create an account token": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Retrieve an account token": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    }
  },
  "balance": {
    "Retrieve balance": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nbalance = Stripe::Balance.retrieve()",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nbalance = stripe.Balance.retrieve()",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$balance = $stripe->balance->retrieve([]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nBalance balance = Balance.retrieve();",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst balance = await stripe.balance.retrieve();",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.BalanceParams{}\nresult, err := balance.Get(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new BalanceGetOptions();\nvar service = new BalanceService();\nBalance balance = service.Get(options);"
    }
  },
  "balance-transactions": {
    "Retrieve a balance transaction": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nbalance_transaction = Stripe::BalanceTransaction.retrieve('{{BALANCE_TRANSACTION_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nbalance_transaction = stripe.BalanceTransaction.retrieve(\n  \"{{BALANCE_TRANSACTION_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$balanceTransaction = $stripe->balanceTransactions->retrieve(\n  '{{BALANCE_TRANSACTION_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nBalanceTransaction balanceTransaction =\n  BalanceTransaction.retrieve(\"{{BALANCE_TRANSACTION_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst balanceTransaction = await stripe.balanceTransactions.retrieve(\n  '{{BALANCE_TRANSACTION_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.BalanceTransactionParams{}\nresult, err := balancetransaction.Get(\"{{BALANCE_TRANSACTION_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new BalanceTransactionService();\nBalanceTransaction balanceTransaction = service.Get(\"{{BALANCE_TRANSACTION_ID}}\");"
    },
    "List all balance transactions": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nbalance_transactions = Stripe::BalanceTransaction.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nbalance_transactions = stripe.BalanceTransaction.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$balanceTransactions = $stripe->balanceTransactions->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nBalanceTransactionListParams params =\n  BalanceTransactionListParams.builder().setLimit(3L).build();\n\nBalanceTransactionCollection balanceTransactions = BalanceTransaction.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst balanceTransactions = await stripe.balanceTransactions.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.BalanceTransactionListParams{}\nparams.Limit = stripe.Int64(3)\nresult := balancetransaction.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new BalanceTransactionListOptions { Limit = 3 };\nvar service = new BalanceTransactionService();\nStripeList<BalanceTransaction> balanceTransactions = service.List(options);"
    }
  },
  "charges": {
    "Create a charge": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncharge = Stripe::Charge.create({\n  amount: 1099,\n  currency: 'usd',\n  source: 'tok_visa',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncharge = stripe.Charge.create(\n  amount=1099,\n  currency=\"usd\",\n  source=\"tok_visa\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charge = $stripe->charges->create([\n  'amount' => 1099,\n  'currency' => 'usd',\n  'source' => 'tok_visa',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nChargeCreateParams params =\n  ChargeCreateParams.builder()\n    .setAmount(1099L)\n    .setCurrency(\"usd\")\n    .setSource(\"tok_visa\")\n    .build();\n\nCharge charge = Charge.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charge = await stripe.charges.create({\n  amount: 1099,\n  currency: 'usd',\n  source: 'tok_visa',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.ChargeParams{\n  Amount: stripe.Int64(1099),\n  Currency: stripe.String(stripe.CurrencyUSD),\n  Source: &stripe.PaymentSourceSourceParams{Token: stripe.String(\"tok_visa\")},\n}\nresult, err := charge.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new ChargeCreateOptions\n{\n    Amount = 1099,\n    Currency = \"usd\",\n    Source = \"tok_visa\",\n};\nvar service = new ChargeService();\nCharge charge = service.Create(options);"
    },
    "Update a charge": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncharge = Stripe::Charge.update(\n  '{{CHARGE_ID}}',\n  {metadata: {shipping: 'express'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncharge = stripe.Charge.modify(\n  \"{{CHARGE_ID}}\",\n  metadata={\"shipping\": \"express\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charge = $stripe->charges->update(\n  '{{CHARGE_ID}}',\n  ['metadata' => ['shipping' => 'express']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCharge resource = Charge.retrieve(\"{{CHARGE_ID}}\");\n\nChargeUpdateParams params =\n  ChargeUpdateParams.builder().putMetadata(\"shipping\", \"express\").build();\n\nCharge charge = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charge = await stripe.charges.update(\n  '{{CHARGE_ID}}',\n  {\n    metadata: {\n      shipping: 'express',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.ChargeParams{}\nparams.AddMetadata(\"shipping\", \"express\")\nresult, err := charge.Update(\"{{CHARGE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new ChargeUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"shipping\", \"express\" } },\n};\nvar service = new ChargeService();\nCharge charge = service.Update(\"{{CHARGE_ID}}\", options);"
    },
    "Retrieve a charge": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncharge = Stripe::Charge.retrieve('{{CHARGE_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncharge = stripe.Charge.retrieve(\"{{CHARGE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charge = $stripe->charges->retrieve('{{CHARGE_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCharge charge = Charge.retrieve(\"{{CHARGE_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charge = await stripe.charges.retrieve('{{CHARGE_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.ChargeParams{}\nresult, err := charge.Get(\"{{CHARGE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new ChargeService();\nCharge charge = service.Get(\"{{CHARGE_ID}}\");"
    },
    "List all charges": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncharges = Stripe::Charge.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncharges = stripe.Charge.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charges = $stripe->charges->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nChargeListParams params = ChargeListParams.builder().setLimit(3L).build();\n\nChargeCollection charges = Charge.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charges = await stripe.charges.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.ChargeListParams{}\nparams.Limit = stripe.Int64(3)\nresult := charge.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new ChargeListOptions { Limit = 3 };\nvar service = new ChargeService();\nStripeList<Charge> charges = service.List(options);"
    },
    "Capture a charge": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncharge = Stripe::Charge.capture('{{CHARGE_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncharge = stripe.Charge.capture(\"{{CHARGE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charge = $stripe->charges->capture('{{CHARGE_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCharge resource = Charge.retrieve(\"{{CHARGE_ID}}\");\n\nChargeCaptureParams params = ChargeCaptureParams.builder().build();\n\nCharge charge = resource.capture(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charge = await stripe.charges.capture('{{CHARGE_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.ChargeCaptureParams{}\nresult, err := charge.Capture(\"{{CHARGE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new ChargeService();\nCharge charge = service.Capture(\"{{CHARGE_ID}}\");"
    },
    "Search charges": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncharges = Stripe::Charge.search({\n  query: 'amount>999 AND metadata[\\'order_id\\']:\\'6735\\'',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncharges = stripe.Charge.search(query=\"amount>999 AND metadata['order_id']:'6735'\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$charges = $stripe->charges->search([\n  'query' => 'amount>999 AND metadata[\\'order_id\\']:\\'6735\\'',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nChargeSearchParams params =\n  ChargeSearchParams.builder()\n    .setQuery(\"amount>999 AND metadata['order_id']:'6735'\")\n    .build();\n\nChargeSearchResult charges = Charge.search(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst charges = await stripe.charges.search({\n  query: 'amount>999 AND metadata[\\'order_id\\']:\\'6735\\'',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.ChargeSearchParams{\n  SearchParams: stripe.SearchParams{\n    Query: \"amount>999 AND metadata['order_id']:'6735'\",\n  },\n}\nresult := charge.Search(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new ChargeSearchOptions\n{\n    Query = \"amount>999 AND metadata['order_id']:'6735'\",\n};\nvar service = new ChargeService();\nStripeSearchResult<Charge> charges = service.Search(options);"
    }
  },
  "customers": {
    "Create a customer": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomer = Stripe::Customer.create({\n  name: 'Jenny Rosen',\n  email: 'jennyrosen@example.com',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomer = stripe.Customer.create(\n  name=\"Jenny Rosen\",\n  email=\"jennyrosen@example.com\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customer = $stripe->customers->create([\n  'name' => 'Jenny Rosen',\n  'email' => 'jennyrosen@example.com',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomerCreateParams params =\n  CustomerCreateParams.builder()\n    .setName(\"Jenny Rosen\")\n    .setEmail(\"jennyrosen@example.com\")\n    .build();\n\nCustomer customer = Customer.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customer = await stripe.customers.create({\n  name: 'Jenny Rosen',\n  email: 'jennyrosen@example.com',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerParams{\n  Name: stripe.String(\"Jenny Rosen\"),\n  Email: stripe.String(\"jennyrosen@example.com\"),\n}\nresult, err := customer.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerCreateOptions\n{\n    Name = \"Jenny Rosen\",\n    Email = \"jennyrosen@example.com\",\n};\nvar service = new CustomerService();\nCustomer customer = service.Create(options);"
    },
    "Update a customer": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomer = Stripe::Customer.update(\n  '{{CUSTOMER_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomer = stripe.Customer.modify(\n  \"{{CUSTOMER_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customer = $stripe->customers->update(\n  '{{CUSTOMER_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer resource = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nCustomerUpdateParams params =\n  CustomerUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nCustomer customer = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customer = await stripe.customers.update(\n  '{{CUSTOMER_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := customer.Update(\"{{CUSTOMER_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new CustomerService();\nCustomer customer = service.Update(\"{{CUSTOMER_ID}}\", options);"
    },
    "Retrieve a customer": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomer = Stripe::Customer.retrieve('{{CUSTOMER_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomer = stripe.Customer.retrieve(\"{{CUSTOMER_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customer = $stripe->customers->retrieve('{{CUSTOMER_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer customer = Customer.retrieve(\"{{CUSTOMER_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customer = await stripe.customers.retrieve('{{CUSTOMER_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerParams{}\nresult, err := customer.Get(\"{{CUSTOMER_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new CustomerService();\nCustomer customer = service.Get(\"{{CUSTOMER_ID}}\");"
    },
    "List all customers": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomers = Stripe::Customer.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomers = stripe.Customer.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customers = $stripe->customers->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomerListParams params = CustomerListParams.builder().setLimit(3L).build();\n\nCustomerCollection customers = Customer.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customers = await stripe.customers.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerListParams{}\nparams.Limit = stripe.Int64(3)\nresult := customer.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerListOptions { Limit = 3 };\nvar service = new CustomerService();\nStripeList<Customer> customers = service.List(options);"
    },
    "Delete a customer": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ndeleted = Stripe::Customer.delete('{{CUSTOMER_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ndeleted = stripe.Customer.delete(\"{{CUSTOMER_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$deleted = $stripe->customers->delete('{{CUSTOMER_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer resource = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nCustomer customer = resource.delete();",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst deleted = await stripe.customers.del('{{CUSTOMER_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerParams{}\nresult, err := customer.Del(\"{{CUSTOMER_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new CustomerService();\nCustomer deleted = service.Delete(\"{{CUSTOMER_ID}}\");"
    },
    "Search customers": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomers = Stripe::Customer.search({\n  query: 'name:\\'Jane Doe\\' AND metadata[\\'foo\\']:\\'bar\\'',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomers = stripe.Customer.search(query=\"name:'Jane Doe' AND metadata['foo']:'bar'\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customers = $stripe->customers->search([\n  'query' => 'name:\\'Jane Doe\\' AND metadata[\\'foo\\']:\\'bar\\'',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomerSearchParams params =\n  CustomerSearchParams.builder()\n    .setQuery(\"name:'Jane Doe' AND metadata['foo']:'bar'\")\n    .build();\n\nCustomerSearchResult customers = Customer.search(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customers = await stripe.customers.search({\n  query: 'name:\\'Jane Doe\\' AND metadata[\\'foo\\']:\\'bar\\'',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerSearchParams{\n  SearchParams: stripe.SearchParams{\n    Query: \"name:'Jane Doe' AND metadata['foo']:'bar'\",\n  },\n}\nresult := customer.Search(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerSearchOptions\n{\n    Query = \"name:'Jane Doe' AND metadata['foo']:'bar'\",\n};\nvar service = new CustomerService();\nStripeSearchResult<Customer> customers = service.Search(options);"
    }
  },
  "customer-session": {
    "Create a Customer Session": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomer_session = Stripe::CustomerSession.create({\n  customer: '{{CUSTOMER_ID}}',\n  components: {pricing_table: {enabled: true}},\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomer_session = stripe.CustomerSession.create(\n  customer=\"{{CUSTOMER_ID}}\",\n  components={\"pricing_table\": {\"enabled\": True}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customerSession = $stripe->customerSessions->create([\n  'customer' => '{{CUSTOMER_ID}}',\n  'components' => ['pricing_table' => ['enabled' => true]],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomerSessionCreateParams params =\n  CustomerSessionCreateParams.builder()\n    .setCustomer(\"{{CUSTOMER_ID}}\")\n    .setComponents(\n      CustomerSessionCreateParams.Components.builder()\n        .setPricingTable(\n          CustomerSessionCreateParams.Components.PricingTable.builder()\n            .setEnabled(true)\n            .build()\n        )\n        .build()\n    )\n    .build();\n\nCustomerSession customerSession = CustomerSession.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSession = await stripe.customerSessions.create({\n  customer: '{{CUSTOMER_ID}}',\n  components: {\n    pricing_table: {\n      enabled: true,\n    },\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerSessionParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n  Components: &stripe.CustomerSessionComponentsParams{\n    PricingTable: &stripe.CustomerSessionComponentsPricingTableParams{\n      Enabled: stripe.Bool(true),\n    },\n  },\n}\nresult, err := customersession.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerSessionCreateOptions\n{\n    Customer = \"{{CUSTOMER_ID}}\",\n    Components = new CustomerSessionComponentsOptions\n    {\n        PricingTable = new CustomerSessionComponentsPricingTableOptions\n        {\n            Enabled = true,\n        },\n    },\n};\nvar service = new CustomerSessionService();\nCustomerSession customerSession = service.Create(options);"
    }
  },
  "disputes": {
    "Update a dispute": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ndispute = Stripe::Dispute.update(\n  '{{DISPUTE_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ndispute = stripe.Dispute.modify(\n  \"{{DISPUTE_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$dispute = $stripe->disputes->update(\n  '{{DISPUTE_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nDispute resource = Dispute.retrieve(\"{{DISPUTE_ID}}\");\n\nDisputeUpdateParams params =\n  DisputeUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nDispute dispute = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst dispute = await stripe.disputes.update(\n  '{{DISPUTE_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.DisputeParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := dispute.Update(\"{{DISPUTE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new DisputeUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new DisputeService();\nDispute dispute = service.Update(\"{{DISPUTE_ID}}\", options);"
    },
    "Retrieve a dispute": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ndispute = Stripe::Dispute.retrieve('{{DISPUTE_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ndispute = stripe.Dispute.retrieve(\"{{DISPUTE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$dispute = $stripe->disputes->retrieve('{{DISPUTE_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nDispute dispute = Dispute.retrieve(\"{{DISPUTE_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst dispute = await stripe.disputes.retrieve('{{DISPUTE_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.DisputeParams{}\nresult, err := dispute.Get(\"{{DISPUTE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new DisputeService();\nDispute dispute = service.Get(\"{{DISPUTE_ID}}\");"
    },
    "List all disputes": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ndisputes = Stripe::Dispute.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ndisputes = stripe.Dispute.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$disputes = $stripe->disputes->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nDisputeListParams params = DisputeListParams.builder().setLimit(3L).build();\n\nDisputeCollection disputes = Dispute.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst disputes = await stripe.disputes.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.DisputeListParams{}\nparams.Limit = stripe.Int64(3)\nresult := dispute.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new DisputeListOptions { Limit = 3 };\nvar service = new DisputeService();\nStripeList<Dispute> disputes = service.List(options);"
    },
    "Close a dispute": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ndispute = Stripe::Dispute.close('{{DISPUTE_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ndispute = stripe.Dispute.close(\"{{DISPUTE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$dispute = $stripe->disputes->close('{{DISPUTE_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nDispute resource = Dispute.retrieve(\"{{DISPUTE_ID}}\");\n\nDisputeCloseParams params = DisputeCloseParams.builder().build();\n\nDispute dispute = resource.close(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst dispute = await stripe.disputes.close('{{DISPUTE_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.DisputeParams{}\nresult, err := dispute.Close(\"{{DISPUTE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new DisputeService();\nDispute dispute = service.Close(\"{{DISPUTE_ID}}\");"
    }
  },
  "events-v1": {
    "Retrieve an event": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nevent = Stripe::Event.retrieve('{{EVENT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nevent = stripe.Event.retrieve(\"{{EVENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$event = $stripe->events->retrieve('{{EVENT_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nEvent event = Event.retrieve(\"{{EVENT_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst event = await stripe.events.retrieve('{{EVENT_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.EventParams{}\nresult, err := event.Get(\"{{EVENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new EventService();\nEvent result = service.Get(\"{{EVENT_ID}}\");"
    },
    "List all events": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nevents = Stripe::Event.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nevents = stripe.Event.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$events = $stripe->events->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nEventListParams params = EventListParams.builder().setLimit(3L).build();\n\nEventCollection events = Event.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst events = await stripe.events.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.EventListParams{}\nparams.Limit = stripe.Int64(3)\nresult := event.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new EventListOptions { Limit = 3 };\nvar service = new EventService();\nStripeList<Event> events = service.List(options);"
    }
  },
  "events-v2": {
    "Retrieve an Event": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "List Events": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Ping an Event Destination": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    }
  },
  "event-destinations-v2": {
    "Create an Event Destination": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Update an Event Destination": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Retrieve an Event Destination": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "List Event Destinations": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Delete an Event Destination": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Disable an Event Destination": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Enable an Event Destination": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    }
  },
  "files": {
    "Create a file": {
      "Ruby": "Stripe.api_key = \"<<YOUR_SECRET_KEY>>\"\nfile = File.new(\"@/path/to/a/file.jpg\")\n\nStripe::File.create(\n  {\n    purpose: \"dispute_evidence\",\n    file: file\n  }\n)",
      "Python": "stripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nwith open(\"@/path/to/a/file.jpg\", \"rb\") as fp:\n  stripe.File.create(\n    purpose=\"dispute_evidence\",\n    file=fp\n  )",
      "PHP": "$fp = fopen('@/path/to/a/file.jpg', 'r');\n\n$stripe->files->create([\n  'purpose' => 'dispute_evidence',\n  'file' => $fp\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFileCreateParams params =\n  FileCreateParams.builder()\n    .setFile(new java.io.File(\"@/path/to/a/file.jpg\"))\n    .setPurpose(FileCreateParams.Purpose.DISPUTE_EVIDENCE)\n    .build();\n\nFile upload = File.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fp = fs.readFileSync('@/path/to/a/file.jpg');\nconst upload = await stripe.files.create({\n  file: {\n    data: fp,\n    name: 'file.jpg',\n    type: 'application.octet-stream',\n  },\n  purpose: 'dispute_evidence',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nfp, _ := os.Open(\"/path/to/a/file.jpg\")\nparams := &stripe.FileParams{\n\tFileReader: fp,\n\tPurpose:    stripe.String(string(stripe.FilePurposeDisputeEvidence)),\n\tFilename:   stripe.String(\"file.jpg\"),\n}\nupload, _ := file.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar filename = \"@/path/to/a/file.png\";\nusing (FileStream stream = System.IO.File.Open(filename, FileMode.Open))\n{\n  var options = new FileCreateOptions\n  {\n    File = stream,\n      Purpose = FilePurpose.DisputeEvidence\n  };\n  var service = new FileService();\n  var file = service.Create(options);\n}"
    },
    "Retrieve a file": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nfile = Stripe::File.retrieve('{{FILE_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nfile = stripe.File.retrieve(\"{{FILE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$file = $stripe->files->retrieve('{{FILE_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFile file = File.retrieve(\"{{FILE_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst file = await stripe.files.retrieve('{{FILE_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.FileParams{}\nresult, err := file.Get(\"{{FILE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new FileService();\nFile file = service.Get(\"{{FILE_ID}}\");"
    },
    "List all files": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nfiles = Stripe::File.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nfiles = stripe.File.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$files = $stripe->files->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFileListParams params = FileListParams.builder().setLimit(3L).build();\n\nFileCollection files = FileCollection.list();",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst files = await stripe.files.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.FileListParams{}\nparams.Limit = stripe.Int64(3)\nresult := file.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new FileListOptions { Limit = 3 };\nvar service = new FileService();\nStripeList<File> files = service.List(options);"
    }
  },
  "file-links": {
    "Create a file link": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nfile_link = Stripe::FileLink.create({file: '{{FILE_ID}}'})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nfile_link = stripe.FileLink.create(file=\"{{FILE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fileLink = $stripe->fileLinks->create(['file' => '{{FILE_ID}}']);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFileLinkCreateParams params =\n  FileLinkCreateParams.builder().setFile(\"{{FILE_ID}}\").build();\n\nFileLink fileLink = FileLink.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fileLink = await stripe.fileLinks.create({\n  file: '{{FILE_ID}}',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.FileLinkParams{\n  File: stripe.String(\"{{FILE_ID}}\"),\n}\nresult, err := filelink.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new FileLinkCreateOptions { File = \"{{FILE_ID}}\" };\nvar service = new FileLinkService();\nFileLink fileLink = service.Create(options);"
    },
    "Update a file link": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nfile_link = Stripe::FileLink.update(\n  '{{FILE_LINK_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nfile_link = stripe.FileLink.modify(\n  \"{{FILE_LINK_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fileLink = $stripe->fileLinks->update(\n  '{{FILE_LINK_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFileLink resource = FileLink.retrieve(\"{{FILE_LINK_ID}}\");\n\nFileLinkUpdateParams params =\n  FileLinkUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nFileLink fileLink = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fileLink = await stripe.fileLinks.update(\n  '{{FILE_LINK_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.FileLinkParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := filelink.Update(\"{{FILE_LINK_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new FileLinkUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new FileLinkService();\nFileLink fileLink = service.Update(\"{{FILE_LINK_ID}}\", options);"
    },
    "Retrieve a file link": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nfile_link = Stripe::FileLink.retrieve('{{FILE_LINK_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nfile_link = stripe.FileLink.retrieve(\"{{FILE_LINK_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fileLink = $stripe->fileLinks->retrieve('{{FILE_LINK_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFileLink fileLink = FileLink.retrieve(\"{{FILE_LINK_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fileLink = await stripe.fileLinks.retrieve('{{FILE_LINK_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.FileLinkParams{}\nresult, err := filelink.Get(\"{{FILE_LINK_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new FileLinkService();\nFileLink fileLink = service.Get(\"{{FILE_LINK_ID}}\");"
    },
    "List all file links": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nfile_links = Stripe::FileLink.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nfile_links = stripe.FileLink.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fileLinks = $stripe->fileLinks->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nFileLinkListParams params = FileLinkListParams.builder().setLimit(3L).build();\n\nFileLinkCollection fileLinks = FileLink.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fileLinks = await stripe.fileLinks.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.FileLinkListParams{}\nparams.Limit = stripe.Int64(3)\nresult := filelink.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new FileLinkListOptions { Limit = 3 };\nvar service = new FileLinkService();\nStripeList<FileLink> fileLinks = service.List(options);"
    }
  },
  "mandates": {
    "Retrieve a Mandate": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nmandate = Stripe::Mandate.retrieve('{{MANDATE_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nmandate = stripe.Mandate.retrieve(\"{{MANDATE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$mandate = $stripe->mandates->retrieve('{{MANDATE_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nMandate mandate = Mandate.retrieve(\"{{MANDATE_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst mandate = await stripe.mandates.retrieve('{{MANDATE_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.MandateParams{}\nresult, err := mandate.Get(\"{{MANDATE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new MandateService();\nMandate mandate = service.Get(\"{{MANDATE_ID}}\");"
    }
  },
  "payment-intents": {
    "Create a PaymentIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.create({\n  amount: 2000,\n  currency: 'usd',\n  automatic_payment_methods: {enabled: true},\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.create(\n  amount=2000,\n  currency=\"usd\",\n  automatic_payment_methods={\"enabled\": True},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->create([\n  'amount' => 2000,\n  'currency' => 'usd',\n  'automatic_payment_methods' => ['enabled' => true],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntentCreateParams params =\n  PaymentIntentCreateParams.builder()\n    .setAmount(2000L)\n    .setCurrency(\"usd\")\n    .setAutomaticPaymentMethods(\n      PaymentIntentCreateParams.AutomaticPaymentMethods.builder()\n        .setEnabled(true)\n        .build()\n    )\n    .build();\n\nPaymentIntent paymentIntent = PaymentIntent.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.create({\n  amount: 2000,\n  currency: 'usd',\n  automatic_payment_methods: {\n    enabled: true,\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentParams{\n  Amount: stripe.Int64(2000),\n  Currency: stripe.String(stripe.CurrencyUSD),\n  AutomaticPaymentMethods: &stripe.PaymentIntentAutomaticPaymentMethodsParams{\n    Enabled: stripe.Bool(true),\n  },\n}\nresult, err := paymentintent.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentIntentCreateOptions\n{\n    Amount = 2000,\n    Currency = \"usd\",\n    AutomaticPaymentMethods = new PaymentIntentAutomaticPaymentMethodsOptions\n    {\n        Enabled = true,\n    },\n};\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.Create(options);"
    },
    "Update a PaymentIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.update(\n  '{{PAYMENT_INTENT_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.modify(\n  \"{{PAYMENT_INTENT_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->update(\n  '{{PAYMENT_INTENT_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntent resource = PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\");\n\nPaymentIntentUpdateParams params =\n  PaymentIntentUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nPaymentIntent paymentIntent = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.update(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := paymentintent.Update(\"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentIntentUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.Update(\"{{PAYMENT_INTENT_ID}}\", options);"
    },
    "Retrieve a PaymentIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.retrieve('{{PAYMENT_INTENT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->retrieve(\n  '{{PAYMENT_INTENT_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntent paymentIntent = PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.retrieve(\n  '{{PAYMENT_INTENT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentParams{}\nresult, err := paymentintent.Get(\"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.Get(\"{{PAYMENT_INTENT_ID}}\");"
    },
    "List all PaymentIntents": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intents = Stripe::PaymentIntent.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intents = stripe.PaymentIntent.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntents = $stripe->paymentIntents->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntentListParams params =\n  PaymentIntentListParams.builder().setLimit(3L).build();\n\nPaymentIntentCollection paymentIntents = PaymentIntent.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntents = await stripe.paymentIntents.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentListParams{}\nparams.Limit = stripe.Int64(3)\nresult := paymentintent.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentIntentListOptions { Limit = 3 };\nvar service = new PaymentIntentService();\nStripeList<PaymentIntent> paymentIntents = service.List(options);"
    },
    "List all PaymentIntent LineItems": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent_amount_details_line_items = Stripe::PaymentIntent.list_amount_details_line_items('{{PAYMENT_INTENT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent_amount_details_line_items = stripe.PaymentIntent.list_amount_details_line_items(\n  \"{{PAYMENT_INTENT_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntentAmountDetailsLineItems = $stripe->paymentIntents->allAmountDetailsLineItems(\n  '{{PAYMENT_INTENT_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntentAmountDetailsLineItemListParams params =\n  PaymentIntentAmountDetailsLineItemListParams.builder().build();\n\nPaymentIntentAmountDetailsLineItemCollection paymentIntentAmountDetailsLineItems =\n  PaymentIntentAmountDetailsLineItem.list(\"{{PAYMENT_INTENT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntentAmountDetailsLineItems = await stripe\n  .paymentIntents\n  .listAmountDetailsLineItems('{{PAYMENT_INTENT_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentAmountDetailsLineItemListParams{\n  Intent: stripe.String(\"{{PAYMENT_INTENT_ID}}\"),\n}\nresult := paymentintentamountdetailslineitem.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentIntentAmountDetailsLineItemService();\nStripeList<PaymentIntentAmountDetailsLineItem> paymentIntentAmountDetailsLineItems = service\n    .List(\"{{PAYMENT_INTENT_ID}}\");"
    },
    "Cancel a PaymentIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.cancel('{{PAYMENT_INTENT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.cancel(\"{{PAYMENT_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->cancel('{{PAYMENT_INTENT_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntent resource = PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\");\n\nPaymentIntentCancelParams params = PaymentIntentCancelParams.builder().build();\n\nPaymentIntent paymentIntent = resource.cancel(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.cancel(\n  '{{PAYMENT_INTENT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentCancelParams{}\nresult, err := paymentintent.Cancel(\"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.Cancel(\"{{PAYMENT_INTENT_ID}}\");"
    },
    "Capture a PaymentIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.capture('{{PAYMENT_INTENT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.capture(\"{{PAYMENT_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->capture('{{PAYMENT_INTENT_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntent resource = PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\");\n\nPaymentIntentCaptureParams params = PaymentIntentCaptureParams.builder().build();\n\nPaymentIntent paymentIntent = resource.capture(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.capture(\n  '{{PAYMENT_INTENT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentCaptureParams{}\nresult, err := paymentintent.Capture(\"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.Capture(\"{{PAYMENT_INTENT_ID}}\");"
    },
    "Confirm a PaymentIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.confirm(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    payment_method: 'pm_card_visa',\n    return_url: 'https://www.example.com',\n  },\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.confirm(\n  \"{{PAYMENT_INTENT_ID}}\",\n  payment_method=\"pm_card_visa\",\n  return_url=\"https://www.example.com\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->confirm(\n  '{{PAYMENT_INTENT_ID}}',\n  [\n    'payment_method' => 'pm_card_visa',\n    'return_url' => 'https://www.example.com',\n  ]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntent resource = PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\");\n\nPaymentIntentConfirmParams params =\n  PaymentIntentConfirmParams.builder()\n    .setPaymentMethod(\"pm_card_visa\")\n    .setReturnUrl(\"https://www.example.com\")\n    .build();\n\nPaymentIntent paymentIntent = resource.confirm(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.confirm(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    payment_method: 'pm_card_visa',\n    return_url: 'https://www.example.com',\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentConfirmParams{\n  PaymentMethod: stripe.String(\"pm_card_visa\"),\n  ReturnURL: stripe.String(\"https://www.example.com\"),\n}\nresult, err := paymentintent.Confirm(\"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentIntentConfirmOptions\n{\n    PaymentMethod = \"pm_card_visa\",\n    ReturnUrl = \"https://www.example.com\",\n};\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.Confirm(\n    \"{{PAYMENT_INTENT_ID}}\",\n    options);"
    },
    "Increment an authorization": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.increment_authorization(\n  '{{PAYMENT_INTENT_ID}}',\n  {amount: 2099},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.increment_authorization(\n  \"{{PAYMENT_INTENT_ID}}\",\n  amount=2099,\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->incrementAuthorization(\n  '{{PAYMENT_INTENT_ID}}',\n  ['amount' => 2099]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntent resource = PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\");\n\nPaymentIntentIncrementAuthorizationParams params =\n  PaymentIntentIncrementAuthorizationParams.builder().setAmount(2099L).build();\n\nPaymentIntent paymentIntent = resource.incrementAuthorization(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.incrementAuthorization(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    amount: 2099,\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentIncrementAuthorizationParams{\n  Amount: stripe.Int64(2099),\n}\nresult, err := paymentintent.IncrementAuthorization(\n  \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentIntentIncrementAuthorizationOptions { Amount = 2099 };\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.IncrementAuthorization(\n    \"{{PAYMENT_INTENT_ID}}\",\n    options);"
    },
    "Reconcile a customer_balance PaymentIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.apply_customer_balance('{{PAYMENT_INTENT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.apply_customer_balance(\n  \"{{PAYMENT_INTENT_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->applyCustomerBalance(\n  '{{PAYMENT_INTENT_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntent resource = PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\");\n\nPaymentIntentApplyCustomerBalanceParams params =\n  PaymentIntentApplyCustomerBalanceParams.builder().build();\n\nPaymentIntent paymentIntent = resource.applyCustomerBalance(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.applyCustomerBalance(\n  '{{PAYMENT_INTENT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentApplyCustomerBalanceParams{}\nresult, err := paymentintent.ApplyCustomerBalance(\n  \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.ApplyCustomerBalance(\n    \"{{PAYMENT_INTENT_ID}}\");"
    },
    "Search PaymentIntents": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intents = Stripe::PaymentIntent.search({query: 'amount>1000'})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intents = stripe.PaymentIntent.search(query=\"amount>1000\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntents = $stripe->paymentIntents->search(['query' => 'amount>1000']);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntentSearchParams params =\n  PaymentIntentSearchParams.builder().setQuery(\"amount>1000\").build();\n\nPaymentIntentSearchResult paymentIntents = PaymentIntent.search(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntents = await stripe.paymentIntents.search({\n  query: 'amount>1000',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentSearchParams{\n  SearchParams: stripe.SearchParams{Query: \"amount>1000\"},\n}\nresult := paymentintent.Search(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentIntentSearchOptions { Query = \"amount>1000\" };\nvar service = new PaymentIntentService();\nStripeSearchResult<PaymentIntent> paymentIntents = service.Search(options);"
    },
    "Verify microdeposits on a PaymentIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_intent = Stripe::PaymentIntent.verify_microdeposits(\n  '{{PAYMENT_INTENT_ID}}',\n  {amounts: [32, 45]},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_intent = stripe.PaymentIntent.verify_microdeposits(\n  \"{{PAYMENT_INTENT_ID}}\",\n  amounts=[32, 45],\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentIntent = $stripe->paymentIntents->verifyMicrodeposits(\n  '{{PAYMENT_INTENT_ID}}',\n  ['amounts' => [32, 45]]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentIntent resource = PaymentIntent.retrieve(\"{{PAYMENT_INTENT_ID}}\");\n\nPaymentIntentVerifyMicrodepositsParams params =\n  PaymentIntentVerifyMicrodepositsParams.builder()\n    .addAmount(32L)\n    .addAmount(45L)\n    .build();\n\nPaymentIntent paymentIntent = resource.verifyMicrodeposits(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentIntent = await stripe.paymentIntents.verifyMicrodeposits(\n  '{{PAYMENT_INTENT_ID}}',\n  {\n    amounts: [32, 45],\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentIntentVerifyMicrodepositsParams{\n  Amounts: []*int64{stripe.Int64(32), stripe.Int64(45)},\n}\nresult, err := paymentintent.VerifyMicrodeposits(\n  \"{{PAYMENT_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentIntentVerifyMicrodepositsOptions\n{\n    Amounts = new List<long?> { 32, 45 },\n};\nvar service = new PaymentIntentService();\nPaymentIntent paymentIntent = service.VerifyMicrodeposits(\n    \"{{PAYMENT_INTENT_ID}}\",\n    options);"
    }
  },
  "persons-v2": {
    "Create a person": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Update a person": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Retrieve a person": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "List persons": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Delete a person": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    }
  },
  "person-tokens-v2": {
    "Create a person token": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Retrieve a person token": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    }
  },
  "setup-intents": {
    "Create a SetupIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsetup_intent = Stripe::SetupIntent.create({\n  automatic_payment_methods: {enabled: true},\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsetup_intent = stripe.SetupIntent.create(automatic_payment_methods={\"enabled\": True})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->create([\n  'automatic_payment_methods' => ['enabled' => true],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSetupIntentCreateParams params =\n  SetupIntentCreateParams.builder()\n    .setAutomaticPaymentMethods(\n      SetupIntentCreateParams.AutomaticPaymentMethods.builder()\n        .setEnabled(true)\n        .build()\n    )\n    .build();\n\nSetupIntent setupIntent = SetupIntent.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.create({\n  automatic_payment_methods: {\n    enabled: true,\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SetupIntentParams{\n  AutomaticPaymentMethods: &stripe.SetupIntentAutomaticPaymentMethodsParams{\n    Enabled: stripe.Bool(true),\n  },\n}\nresult, err := setupintent.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new SetupIntentCreateOptions\n{\n    AutomaticPaymentMethods = new SetupIntentAutomaticPaymentMethodsOptions\n    {\n        Enabled = true,\n    },\n};\nvar service = new SetupIntentService();\nSetupIntent setupIntent = service.Create(options);"
    },
    "Update a SetupIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsetup_intent = Stripe::SetupIntent.update(\n  '{{SETUP_INTENT_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsetup_intent = stripe.SetupIntent.modify(\n  \"{{SETUP_INTENT_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->update(\n  '{{SETUP_INTENT_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSetupIntent resource = SetupIntent.retrieve(\"{{SETUP_INTENT_ID}}\");\n\nSetupIntentUpdateParams params =\n  SetupIntentUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nSetupIntent setupIntent = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.update(\n  '{{SETUP_INTENT_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SetupIntentParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := setupintent.Update(\"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new SetupIntentUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new SetupIntentService();\nSetupIntent setupIntent = service.Update(\"{{SETUP_INTENT_ID}}\", options);"
    },
    "Retrieve a SetupIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsetup_intent = Stripe::SetupIntent.retrieve('{{SETUP_INTENT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsetup_intent = stripe.SetupIntent.retrieve(\"{{SETUP_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->retrieve('{{SETUP_INTENT_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSetupIntent setupIntent = SetupIntent.retrieve(\"{{SETUP_INTENT_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.retrieve(\n  '{{SETUP_INTENT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SetupIntentParams{}\nresult, err := setupintent.Get(\"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SetupIntentService();\nSetupIntent setupIntent = service.Get(\"{{SETUP_INTENT_ID}}\");"
    },
    "List all SetupIntents": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsetup_intents = Stripe::SetupIntent.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsetup_intents = stripe.SetupIntent.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntents = $stripe->setupIntents->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSetupIntentListParams params = SetupIntentListParams.builder().setLimit(3L).build();\n\nSetupIntentCollection setupIntents = SetupIntent.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntents = await stripe.setupIntents.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SetupIntentListParams{}\nparams.Limit = stripe.Int64(3)\nresult := setupintent.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new SetupIntentListOptions { Limit = 3 };\nvar service = new SetupIntentService();\nStripeList<SetupIntent> setupIntents = service.List(options);"
    },
    "Cancel a SetupIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsetup_intent = Stripe::SetupIntent.cancel('{{SETUP_INTENT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsetup_intent = stripe.SetupIntent.cancel(\"{{SETUP_INTENT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->cancel('{{SETUP_INTENT_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSetupIntent resource = SetupIntent.retrieve(\"{{SETUP_INTENT_ID}}\");\n\nSetupIntentCancelParams params = SetupIntentCancelParams.builder().build();\n\nSetupIntent setupIntent = resource.cancel(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.cancel(\n  '{{SETUP_INTENT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SetupIntentCancelParams{}\nresult, err := setupintent.Cancel(\"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SetupIntentService();\nSetupIntent setupIntent = service.Cancel(\"{{SETUP_INTENT_ID}}\");"
    },
    "Confirm a SetupIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsetup_intent = Stripe::SetupIntent.confirm(\n  '{{SETUP_INTENT_ID}}',\n  {payment_method: 'pm_card_visa'},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsetup_intent = stripe.SetupIntent.confirm(\n  \"{{SETUP_INTENT_ID}}\",\n  payment_method=\"pm_card_visa\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->confirm(\n  '{{SETUP_INTENT_ID}}',\n  ['payment_method' => 'pm_card_visa']\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSetupIntent resource = SetupIntent.retrieve(\"{{SETUP_INTENT_ID}}\");\n\nSetupIntentConfirmParams params =\n  SetupIntentConfirmParams.builder().setPaymentMethod(\"pm_card_visa\").build();\n\nSetupIntent setupIntent = resource.confirm(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.confirm(\n  '{{SETUP_INTENT_ID}}',\n  {\n    payment_method: 'pm_card_visa',\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SetupIntentConfirmParams{\n  PaymentMethod: stripe.String(\"pm_card_visa\"),\n}\nresult, err := setupintent.Confirm(\"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new SetupIntentConfirmOptions { PaymentMethod = \"pm_card_visa\" };\nvar service = new SetupIntentService();\nSetupIntent setupIntent = service.Confirm(\"{{SETUP_INTENT_ID}}\", options);"
    },
    "Verify microdeposits on a SetupIntent": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsetup_intent = Stripe::SetupIntent.verify_microdeposits(\n  '{{SETUP_INTENT_ID}}',\n  {amounts: [32, 45]},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsetup_intent = stripe.SetupIntent.verify_microdeposits(\n  \"{{SETUP_INTENT_ID}}\",\n  amounts=[32, 45],\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupIntent = $stripe->setupIntents->verifyMicrodeposits(\n  '{{SETUP_INTENT_ID}}',\n  ['amounts' => [32, 45]]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSetupIntent resource = SetupIntent.retrieve(\"{{SETUP_INTENT_ID}}\");\n\nSetupIntentVerifyMicrodepositsParams params =\n  SetupIntentVerifyMicrodepositsParams.builder()\n    .addAmount(32L)\n    .addAmount(45L)\n    .build();\n\nSetupIntent setupIntent = resource.verifyMicrodeposits(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupIntent = await stripe.setupIntents.verifyMicrodeposits(\n  '{{SETUP_INTENT_ID}}',\n  {\n    amounts: [32, 45],\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SetupIntentVerifyMicrodepositsParams{\n  Amounts: []*int64{stripe.Int64(32), stripe.Int64(45)},\n}\nresult, err := setupintent.VerifyMicrodeposits(\n  \"{{SETUP_INTENT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new SetupIntentVerifyMicrodepositsOptions\n{\n    Amounts = new List<long?> { 32, 45 },\n};\nvar service = new SetupIntentService();\nSetupIntent setupIntent = service.VerifyMicrodeposits(\n    \"{{SETUP_INTENT_ID}}\",\n    options);"
    }
  },
  "setup-attempts": {
    "List all SetupAttempts": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsetup_attempts = Stripe::SetupAttempt.list({\n  limit: 3,\n  setup_intent: '{{SETUP_INTENT_ID}}',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsetup_attempts = stripe.SetupAttempt.list(\n  limit=3,\n  setup_intent=\"{{SETUP_INTENT_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$setupAttempts = $stripe->setupAttempts->all([\n  'limit' => 3,\n  'setup_intent' => '{{SETUP_INTENT_ID}}',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSetupAttemptListParams params =\n  SetupAttemptListParams.builder()\n    .setLimit(3L)\n    .setSetupIntent(\"{{SETUP_INTENT_ID}}\")\n    .build();\n\nSetupAttemptCollection setupAttempts = SetupAttempt.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst setupAttempts = await stripe.setupAttempts.list({\n  limit: 3,\n  setup_intent: '{{SETUP_INTENT_ID}}',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SetupAttemptListParams{\n  SetupIntent: stripe.String(\"{{SETUP_INTENT_ID}}\"),\n}\nparams.Limit = stripe.Int64(3)\nresult := setupattempt.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new SetupAttemptListOptions\n{\n    Limit = 3,\n    SetupIntent = \"{{SETUP_INTENT_ID}}\",\n};\nvar service = new SetupAttemptService();\nStripeList<SetupAttempt> setupAttempts = service.List(options);"
    }
  },
  "stripe-balance-debit-agreement": {
    "Create a StripeBalanceDebitAgreement": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Retrieve a StripeBalanceDebitAgreement": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    },
    "Revoke a StripeBalanceDebitAgreement": {
      "Ruby": "",
      "Python": "",
      "PHP": "",
      "Java": "",
      "Node.js": "",
      "Go": "",
      ".NET": ""
    }
  },
  "payouts": {
    "Create a payout": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayout = Stripe::Payout.create({\n  amount: 1100,\n  currency: 'usd',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayout = stripe.Payout.create(\n  amount=1100,\n  currency=\"usd\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->create([\n  'amount' => 1100,\n  'currency' => 'usd',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPayoutCreateParams params =\n  PayoutCreateParams.builder().setAmount(1100L).setCurrency(\"usd\").build();\n\nPayout payout = Payout.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.create({\n  amount: 1100,\n  currency: 'usd',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PayoutParams{\n  Amount: stripe.Int64(1100),\n  Currency: stripe.String(stripe.CurrencyUSD),\n}\nresult, err := payout.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PayoutCreateOptions { Amount = 1100, Currency = \"usd\" };\nvar service = new PayoutService();\nPayout payout = service.Create(options);"
    },
    "Update a payout": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayout = Stripe::Payout.update(\n  '{{PAYOUT_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayout = stripe.Payout.modify(\n  \"{{PAYOUT_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->update(\n  '{{PAYOUT_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPayout resource = Payout.retrieve(\"{{PAYOUT_ID}}\");\n\nPayoutUpdateParams params =\n  PayoutUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nPayout payout = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.update(\n  '{{PAYOUT_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PayoutParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := payout.Update(\"{{PAYOUT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PayoutUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new PayoutService();\nPayout payout = service.Update(\"{{PAYOUT_ID}}\", options);"
    },
    "Retrieve a payout": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayout = Stripe::Payout.retrieve('{{PAYOUT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayout = stripe.Payout.retrieve(\"{{PAYOUT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->retrieve('{{PAYOUT_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPayout payout = Payout.retrieve(\"{{PAYOUT_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.retrieve('{{PAYOUT_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PayoutParams{}\nresult, err := payout.Get(\"{{PAYOUT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PayoutService();\nPayout payout = service.Get(\"{{PAYOUT_ID}}\");"
    },
    "List all payouts": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayouts = Stripe::Payout.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayouts = stripe.Payout.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payouts = $stripe->payouts->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPayoutListParams params = PayoutListParams.builder().setLimit(3L).build();\n\nPayoutCollection payouts = Payout.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payouts = await stripe.payouts.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PayoutListParams{}\nparams.Limit = stripe.Int64(3)\nresult := payout.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PayoutListOptions { Limit = 3 };\nvar service = new PayoutService();\nStripeList<Payout> payouts = service.List(options);"
    },
    "Cancel a payout": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayout = Stripe::Payout.cancel('{{PAYOUT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayout = stripe.Payout.cancel(\"{{PAYOUT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->cancel('{{PAYOUT_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPayout resource = Payout.retrieve(\"{{PAYOUT_ID}}\");\n\nPayoutCancelParams params = PayoutCancelParams.builder().build();\n\nPayout payout = resource.cancel(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.cancel('{{PAYOUT_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PayoutParams{}\nresult, err := payout.Cancel(\"{{PAYOUT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PayoutService();\nPayout payout = service.Cancel(\"{{PAYOUT_ID}}\");"
    },
    "Reverse a payout": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayout = Stripe::Payout.reverse('{{PAYOUT_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayout = stripe.Payout.reverse(\"{{PAYOUT_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$payout = $stripe->payouts->reverse('{{PAYOUT_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPayout resource = Payout.retrieve(\"{{PAYOUT_ID}}\");\n\nPayoutReverseParams params = PayoutReverseParams.builder().build();\n\nPayout payout = resource.reverse(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst payout = await stripe.payouts.reverse('{{PAYOUT_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PayoutReverseParams{}\nresult, err := payout.Reverse(\"{{PAYOUT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PayoutService();\nPayout payout = service.Reverse(\"{{PAYOUT_ID}}\");"
    }
  },
  "refunds": {
    "Create a refund": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nrefund = Stripe::Refund.create({charge: '{{CHARGE_ID}}'})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nrefund = stripe.Refund.create(charge=\"{{CHARGE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refund = $stripe->refunds->create(['charge' => '{{CHARGE_ID}}']);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nRefundCreateParams params =\n  RefundCreateParams.builder().setCharge(\"{{CHARGE_ID}}\").build();\n\nRefund refund = Refund.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refund = await stripe.refunds.create({\n  charge: '{{CHARGE_ID}}',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.RefundParams{Charge: stripe.String(\"{{CHARGE_ID}}\")}\nresult, err := refund.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new RefundCreateOptions { Charge = \"{{CHARGE_ID}}\" };\nvar service = new RefundService();\nRefund refund = service.Create(options);"
    },
    "Update a refund": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nrefund = Stripe::Refund.update(\n  '{{REFUND_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nrefund = stripe.Refund.modify(\n  \"{{REFUND_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refund = $stripe->refunds->update(\n  '{{REFUND_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nRefund resource = Refund.retrieve(\"{{REFUND_ID}}\");\n\nRefundUpdateParams params =\n  RefundUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nRefund refund = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refund = await stripe.refunds.update(\n  '{{REFUND_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.RefundParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := refund.Update(\"{{REFUND_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new RefundUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new RefundService();\nRefund refund = service.Update(\"{{REFUND_ID}}\", options);"
    },
    "Retrieve a refund": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nrefund = Stripe::Refund.retrieve('{{REFUND_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nrefund = stripe.Refund.retrieve(\"{{REFUND_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refund = $stripe->refunds->retrieve('{{REFUND_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nRefund refund = Refund.retrieve(\"{{REFUND_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refund = await stripe.refunds.retrieve('{{REFUND_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.RefundParams{}\nresult, err := refund.Get(\"{{REFUND_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new RefundService();\nRefund refund = service.Get(\"{{REFUND_ID}}\");"
    },
    "List all refunds": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nrefunds = Stripe::Refund.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nrefunds = stripe.Refund.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refunds = $stripe->refunds->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nRefundListParams params = RefundListParams.builder().setLimit(3L).build();\n\nRefundCollection refunds = Refund.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refunds = await stripe.refunds.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.RefundListParams{}\nparams.Limit = stripe.Int64(3)\nresult := refund.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new RefundListOptions { Limit = 3 };\nvar service = new RefundService();\nStripeList<Refund> refunds = service.List(options);"
    },
    "Cancel a refund": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nrefund = Stripe::Refund.cancel('{{REFUND_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nrefund = stripe.Refund.cancel(\"{{REFUND_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$refund = $stripe->refunds->cancel('{{REFUND_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nRefund resource = Refund.retrieve(\"{{REFUND_ID}}\");\n\nRefundCancelParams params = RefundCancelParams.builder().build();\n\nRefund refund = resource.cancel(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst refund = await stripe.refunds.cancel('{{REFUND_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.RefundCancelParams{}\nresult, err := refund.Cancel(\"{{REFUND_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new RefundService();\nRefund refund = service.Cancel(\"{{REFUND_ID}}\");"
    }
  },
  "confirmation-token": {
    "Retrieve a ConfirmationToken": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nconfirmation_token = Stripe::ConfirmationToken.retrieve('ctoken_1NnQUf2eZvKYlo2CIObdtbnb')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nconfirmation_token = stripe.ConfirmationToken.retrieve(\n  \"ctoken_1NnQUf2eZvKYlo2CIObdtbnb\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$confirmationToken = $stripe->confirmationTokens->retrieve(\n  'ctoken_1NnQUf2eZvKYlo2CIObdtbnb',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nConfirmationToken confirmationToken =\n  ConfirmationToken.retrieve(\"ctoken_1NnQUf2eZvKYlo2CIObdtbnb\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst confirmationToken = await stripe.confirmationTokens.retrieve(\n  'ctoken_1NnQUf2eZvKYlo2CIObdtbnb'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.ConfirmationTokenParams{}\nresult, err := confirmationtoken.Get(\"ctoken_1NnQUf2eZvKYlo2CIObdtbnb\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new ConfirmationTokenService();\nConfirmationToken confirmationToken = service.Get(\"ctoken_1NnQUf2eZvKYlo2CIObdtbnb\");"
    },
    "Create a test Confirmation Token": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nconfirmation_token = Stripe::ConfirmationToken::TestHelpers.create({\n  payment_method: 'pm_card_visa',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nconfirmation_token = stripe.ConfirmationToken.TestHelpers.create(\n  payment_method=\"pm_card_visa\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$confirmationToken = $stripe->testHelpers->confirmationTokens->create([\n  'payment_method' => 'pm_card_visa',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nConfirmationTokenCreateParams params =\n  ConfirmationTokenCreateParams.builder().setPaymentMethod(\"pm_card_visa\").build();\n\nConfirmationToken confirmationToken = ConfirmationToken.TestHelpers.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst confirmationToken = await stripe.testHelpers.confirmationTokens.create({\n  payment_method: 'pm_card_visa',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TestHelpersConfirmationTokenParams{\n  PaymentMethod: stripe.String(\"pm_card_visa\"),\n}\nresult, err := confirmationtoken.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new Stripe.TestHelpers.ConfirmationTokenCreateOptions\n{\n    PaymentMethod = \"pm_card_visa\",\n};\nvar service = new Stripe.TestHelpers.ConfirmationTokenService();\nConfirmationToken confirmationToken = service.Create(options);"
    }
  },
  "tokens": {
    "Create a bank account token": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ntoken = Stripe::Token.create({\n  bank_account: {\n    country: 'US',\n    currency: 'usd',\n    account_holder_name: 'Jenny Rosen',\n    account_holder_type: 'individual',\n    routing_number: '110000000',\n    account_number: '000123456789',\n  },\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ntoken = stripe.Token.create(\n  bank_account={\n    \"country\": \"US\",\n    \"currency\": \"usd\",\n    \"account_holder_name\": \"Jenny Rosen\",\n    \"account_holder_type\": \"individual\",\n    \"routing_number\": \"110000000\",\n    \"account_number\": \"000123456789\",\n  },\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create([\n  'bank_account' => [\n    'country' => 'US',\n    'currency' => 'usd',\n    'account_holder_name' => 'Jenny Rosen',\n    'account_holder_type' => 'individual',\n    'routing_number' => '110000000',\n    'account_number' => '000123456789',\n  ],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setBankAccount(\n      TokenCreateParams.BankAccount.builder()\n        .setCountry(\"US\")\n        .setCurrency(\"usd\")\n        .setAccountHolderName(\"Jenny Rosen\")\n        .setAccountHolderType(\n          TokenCreateParams.BankAccount.AccountHolderType.INDIVIDUAL\n        )\n        .setRoutingNumber(\"110000000\")\n        .setAccountNumber(\"000123456789\")\n        .build()\n    )\n    .build();\n\nToken token = Token.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  bank_account: {\n    country: 'US',\n    currency: 'usd',\n    account_holder_name: 'Jenny Rosen',\n    account_holder_type: 'individual',\n    routing_number: '110000000',\n    account_number: '000123456789',\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TokenParams{\n  BankAccount: &stripe.BankAccountParams{\n    Country: stripe.String(\"US\"),\n    Currency: stripe.String(stripe.CurrencyUSD),\n    AccountHolderName: stripe.String(\"Jenny Rosen\"),\n    AccountHolderType: stripe.String(\"individual\"),\n    RoutingNumber: stripe.String(\"110000000\"),\n    AccountNumber: stripe.String(\"000123456789\"),\n  },\n}\nresult, err := token.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new TokenCreateOptions\n{\n    BankAccount = new TokenBankAccountOptions\n    {\n        Country = \"US\",\n        Currency = \"usd\",\n        AccountHolderName = \"Jenny Rosen\",\n        AccountHolderType = \"individual\",\n        RoutingNumber = \"110000000\",\n        AccountNumber = \"000123456789\",\n    },\n};\nvar service = new TokenService();\nToken token = service.Create(options);"
    },
    "Create a card token": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ntoken = Stripe::Token.create({\n  card: {\n    number: '4242424242424242',\n    exp_month: '5',\n    exp_year: '2026',\n    cvc: '314',\n  },\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ntoken = stripe.Token.create(\n  card={\n    \"number\": \"4242424242424242\",\n    \"exp_month\": \"5\",\n    \"exp_year\": \"2026\",\n    \"cvc\": \"314\",\n  },\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create([\n  'card' => [\n    'number' => '4242424242424242',\n    'exp_month' => '5',\n    'exp_year' => '2026',\n    'cvc' => '314',\n  ],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setCard(\n      TokenCreateParams.Card.builder()\n        .setNumber(\"4242424242424242\")\n        .setExpMonth(\"5\")\n        .setExpYear(\"2026\")\n        .setCvc(\"314\")\n        .build()\n    )\n    .build();\n\nToken token = Token.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  card: {\n    number: '4242424242424242',\n    exp_month: '5',\n    exp_year: '2026',\n    cvc: '314',\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TokenParams{\n  Card: &stripe.CardParams{\n    Number: stripe.String(\"4242424242424242\"),\n    ExpMonth: stripe.String(\"5\"),\n    ExpYear: stripe.String(\"2026\"),\n    CVC: stripe.String(\"314\"),\n  },\n}\nresult, err := token.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new TokenCreateOptions\n{\n    Card = new TokenCardOptions\n    {\n        Number = \"4242424242424242\",\n        ExpMonth = \"5\",\n        ExpYear = \"2026\",\n        Cvc = \"314\",\n    },\n};\nvar service = new TokenService();\nToken token = service.Create(options);"
    },
    "Create a CVC update token": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ntoken = Stripe::Token.create({cvc_update: {cvc: '123'}})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ntoken = stripe.Token.create(cvc_update={\"cvc\": \"123\"})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create(['cvc_update' => ['cvc' => '123']]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setCvcUpdate(TokenCreateParams.CvcUpdate.builder().setCvc(\"123\").build())\n    .build();\n\nToken token = Token.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  cvc_update: {\n    cvc: '123',\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TokenParams{\n  CVCUpdate: &stripe.TokenCVCUpdateParams{CVC: stripe.String(\"123\")},\n}\nresult, err := token.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new TokenCreateOptions\n{\n    CvcUpdate = new TokenCvcUpdateOptions { Cvc = \"123\" },\n};\nvar service = new TokenService();\nToken token = service.Create(options);"
    },
    "Create a person token": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ntoken = Stripe::Token.create({\n  person: {\n    first_name: 'Jane',\n    last_name: 'Doe',\n    relationship: {owner: true},\n  },\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ntoken = stripe.Token.create(\n  person={\"first_name\": \"Jane\", \"last_name\": \"Doe\", \"relationship\": {\"owner\": True}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create([\n  'person' => [\n    'first_name' => 'Jane',\n    'last_name' => 'Doe',\n    'relationship' => ['owner' => true],\n  ],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setPerson(\n      TokenCreateParams.Person.builder()\n        .setFirstName(\"Jane\")\n        .setLastName(\"Doe\")\n        .setRelationship(\n          TokenCreateParams.Person.Relationship.builder().setOwner(true).build()\n        )\n        .build()\n    )\n    .build();\n\nToken token = Token.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  person: {\n    first_name: 'Jane',\n    last_name: 'Doe',\n    relationship: {\n      owner: true,\n    },\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TokenParams{\n  Person: &stripe.PersonParams{\n    FirstName: stripe.String(\"Jane\"),\n    LastName: stripe.String(\"Doe\"),\n    Relationship: &stripe.PersonRelationshipParams{Owner: stripe.Bool(true)},\n  },\n}\nresult, err := token.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new TokenCreateOptions\n{\n    Person = new TokenPersonOptions\n    {\n        FirstName = \"Jane\",\n        LastName = \"Doe\",\n        Relationship = new TokenPersonRelationshipOptions { Owner = true },\n    },\n};\nvar service = new TokenService();\nToken token = service.Create(options);"
    },
    "Create a PII token": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ntoken = Stripe::Token.create({pii: {id_number: '000000000'}})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ntoken = stripe.Token.create(pii={\"id_number\": \"000000000\"})",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create(['pii' => ['id_number' => '000000000']]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setPii(TokenCreateParams.Pii.builder().setIdNumber(\"000000000\").build())\n    .build();\n\nToken token = Token.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  pii: {\n    id_number: '000000000',\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TokenParams{\n  PII: &stripe.TokenPIIParams{IDNumber: stripe.String(\"000000000\")},\n}\nresult, err := token.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new TokenCreateOptions\n{\n    Pii = new TokenPiiOptions { IdNumber = \"000000000\" },\n};\nvar service = new TokenService();\nToken token = service.Create(options);"
    },
    "Create an account token": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ntoken = Stripe::Token.create({\n  account: {\n    business_type: 'individual',\n    individual: {\n      first_name: 'Jane',\n      last_name: 'Doe',\n    },\n    tos_shown_and_accepted: true,\n  },\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ntoken = stripe.Token.create(\n  account={\n    \"business_type\": \"individual\",\n    \"individual\": {\"first_name\": \"Jane\", \"last_name\": \"Doe\"},\n    \"tos_shown_and_accepted\": True,\n  },\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->create([\n  'account' => [\n    'business_type' => 'individual',\n    'individual' => [\n      'first_name' => 'Jane',\n      'last_name' => 'Doe',\n    ],\n    'tos_shown_and_accepted' => true,\n  ],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nTokenCreateParams params =\n  TokenCreateParams.builder()\n    .setAccount(\n      TokenCreateParams.Account.builder()\n        .setBusinessType(TokenCreateParams.Account.BusinessType.INDIVIDUAL)\n        .setIndividual(\n          TokenCreateParams.Account.Individual.builder()\n            .setFirstName(\"Jane\")\n            .setLastName(\"Doe\")\n            .build()\n        )\n        .setTosShownAndAccepted(true)\n        .build()\n    )\n    .build();\n\nToken token = Token.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.create({\n  account: {\n    business_type: 'individual',\n    individual: {\n      first_name: 'Jane',\n      last_name: 'Doe',\n    },\n    tos_shown_and_accepted: true,\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TokenParams{\n  Account: &stripe.TokenAccountParams{\n    BusinessType: stripe.String(\"individual\"),\n    Individual: &stripe.PersonParams{\n      FirstName: stripe.String(\"Jane\"),\n      LastName: stripe.String(\"Doe\"),\n    },\n    TOSShownAndAccepted: stripe.Bool(true),\n  },\n}\nresult, err := token.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new TokenCreateOptions\n{\n    Account = new TokenAccountOptions\n    {\n        BusinessType = \"individual\",\n        Individual = new TokenAccountIndividualOptions\n        {\n            FirstName = \"Jane\",\n            LastName = \"Doe\",\n        },\n        TosShownAndAccepted = true,\n    },\n};\nvar service = new TokenService();\nToken token = service.Create(options);"
    },
    "Retrieve a token": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ntoken = Stripe::Token.retrieve('{{TOKEN_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ntoken = stripe.Token.retrieve(\"{{TOKEN_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$token = $stripe->tokens->retrieve('{{TOKEN_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nToken token = Token.retrieve(\"{{TOKEN_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst token = await stripe.tokens.retrieve('{{TOKEN_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TokenParams{}\nresult, err := token.Get(\"{{TOKEN_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new TokenService();\nToken token = service.Get(\"{{TOKEN_ID}}\");"
    }
  },
  "payment-methods": {
    "Create a PaymentMethod": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method = Stripe::PaymentMethod.create({\n  type: 'us_bank_account',\n  us_bank_account: {\n    account_holder_type: 'individual',\n    account_number: '000123456789',\n    routing_number: '110000000',\n  },\n  billing_details: {name: 'John Doe'},\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method = stripe.PaymentMethod.create(\n  type=\"us_bank_account\",\n  us_bank_account={\n    \"account_holder_type\": \"individual\",\n    \"account_number\": \"000123456789\",\n    \"routing_number\": \"110000000\",\n  },\n  billing_details={\"name\": \"John Doe\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->create([\n  'type' => 'us_bank_account',\n  'us_bank_account' => [\n    'account_holder_type' => 'individual',\n    'account_number' => '000123456789',\n    'routing_number' => '110000000',\n  ],\n  'billing_details' => ['name' => 'John Doe'],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodCreateParams params =\n  PaymentMethodCreateParams.builder()\n    .setType(PaymentMethodCreateParams.Type.US_BANK_ACCOUNT)\n    .setUsBankAccount(\n      PaymentMethodCreateParams.UsBankAccount.builder()\n        .setAccountHolderType(\n          PaymentMethodCreateParams.UsBankAccount.AccountHolderType.INDIVIDUAL\n        )\n        .setAccountNumber(\"000123456789\")\n        .setRoutingNumber(\"110000000\")\n        .build()\n    )\n    .setBillingDetails(\n      PaymentMethodCreateParams.BillingDetails.builder().setName(\"John Doe\").build()\n    )\n    .build();\n\nPaymentMethod paymentMethod = PaymentMethod.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.create({\n  type: 'us_bank_account',\n  us_bank_account: {\n    account_holder_type: 'individual',\n    account_number: '000123456789',\n    routing_number: '110000000',\n  },\n  billing_details: {\n    name: 'John Doe',\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodParams{\n  Type: stripe.String(stripe.PaymentMethodTypeUSBankAccount),\n  USBankAccount: &stripe.PaymentMethodUSBankAccountParams{\n    AccountHolderType: stripe.String(stripe.PaymentMethodUSBankAccountAccountHolderTypeIndividual),\n    AccountNumber: stripe.String(\"000123456789\"),\n    RoutingNumber: stripe.String(\"110000000\"),\n  },\n  BillingDetails: &stripe.PaymentMethodBillingDetailsParams{\n    Name: stripe.String(\"John Doe\"),\n  },\n}\nresult, err := paymentmethod.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodCreateOptions\n{\n    Type = \"us_bank_account\",\n    UsBankAccount = new PaymentMethodUsBankAccountOptions\n    {\n        AccountHolderType = \"individual\",\n        AccountNumber = \"000123456789\",\n        RoutingNumber = \"110000000\",\n    },\n    BillingDetails = new PaymentMethodBillingDetailsOptions { Name = \"John Doe\" },\n};\nvar service = new PaymentMethodService();\nPaymentMethod paymentMethod = service.Create(options);"
    },
    "Update a PaymentMethod": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method = Stripe::PaymentMethod.update(\n  '{{PAYMENT_METHOD_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method = stripe.PaymentMethod.modify(\n  \"{{PAYMENT_METHOD_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->update(\n  '{{PAYMENT_METHOD_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethod resource = PaymentMethod.retrieve(\"{{PAYMENT_METHOD_ID}}\");\n\nPaymentMethodUpdateParams params =\n  PaymentMethodUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nPaymentMethod paymentMethod = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.update(\n  '{{PAYMENT_METHOD_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := paymentmethod.Update(\"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new PaymentMethodService();\nPaymentMethod paymentMethod = service.Update(\"{{PAYMENT_METHOD_ID}}\", options);"
    },
    "Retrieve a PaymentMethod": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method = Stripe::PaymentMethod.retrieve('{{PAYMENT_METHOD_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method = stripe.PaymentMethod.retrieve(\"{{PAYMENT_METHOD_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->retrieve(\n  '{{PAYMENT_METHOD_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethod paymentMethod = PaymentMethod.retrieve(\"{{PAYMENT_METHOD_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.retrieve(\n  '{{PAYMENT_METHOD_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodParams{}\nresult, err := paymentmethod.Get(\"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentMethodService();\nPaymentMethod paymentMethod = service.Get(\"{{PAYMENT_METHOD_ID}}\");"
    },
    "Retrieve a Customer's PaymentMethod": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method = Stripe::Customer.retrieve_payment_method(\n  '{{CUSTOMER_ID}}',\n  '{{PAYMENT_METHOD_ID}}',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method = stripe.Customer.retrieve_payment_method(\n  \"{{CUSTOMER_ID}}\",\n  \"{{PAYMENT_METHOD_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->customers->retrievePaymentMethod(\n  '{{CUSTOMER_ID}}',\n  '{{PAYMENT_METHOD_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer resource =\n  Customer.retrieve(\"{{CUSTOMER_ID}}\", \"{{PAYMENT_METHOD_ID}}\");\n\nCustomerRetrievePaymentMethodParams params =\n  CustomerRetrievePaymentMethodParams.builder().build();\n\nPaymentMethod paymentMethod = resource.retrievePaymentMethod(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.customers.retrievePaymentMethod(\n  '{{CUSTOMER_ID}}',\n  '{{PAYMENT_METHOD_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerRetrievePaymentMethodParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := customer.RetrievePaymentMethod(\"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new CustomerPaymentMethodService();\nPaymentMethod paymentMethod = service.Get(\n    \"{{CUSTOMER_ID}}\",\n    \"{{PAYMENT_METHOD_ID}}\");"
    },
    "List PaymentMethods": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_methods = Stripe::PaymentMethod.list({\n  type: 'card',\n  limit: 3,\n  customer: '{{CUSTOMER_ID}}',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_methods = stripe.PaymentMethod.list(\n  type=\"card\",\n  limit=3,\n  customer=\"{{CUSTOMER_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethods = $stripe->paymentMethods->all([\n  'type' => 'card',\n  'limit' => 3,\n  'customer' => '{{CUSTOMER_ID}}',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodListParams params =\n  PaymentMethodListParams.builder()\n    .setType(PaymentMethodListParams.Type.CARD)\n    .setLimit(3L)\n    .setCustomer(\"{{CUSTOMER_ID}}\")\n    .build();\n\nPaymentMethodCollection paymentMethods = PaymentMethod.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethods = await stripe.paymentMethods.list({\n  type: 'card',\n  limit: 3,\n  customer: '{{CUSTOMER_ID}}',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodListParams{\n  Type: stripe.String(stripe.PaymentMethodTypeCard),\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nparams.Limit = stripe.Int64(3)\nresult := paymentmethod.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodListOptions\n{\n    Type = \"card\",\n    Limit = 3,\n    Customer = \"{{CUSTOMER_ID}}\",\n};\nvar service = new PaymentMethodService();\nStripeList<PaymentMethod> paymentMethods = service.List(options);"
    },
    "List a Customer's PaymentMethods": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_methods = Stripe::Customer.list_payment_methods(\n  '{{CUSTOMER_ID}}',\n  {limit: 3},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_methods = stripe.Customer.list_payment_methods(\n  \"{{CUSTOMER_ID}}\",\n  limit=3,\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethods = $stripe->customers->allPaymentMethods(\n  '{{CUSTOMER_ID}}',\n  ['limit' => 3]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer resource = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nCustomerListPaymentMethodsParams params =\n  CustomerListPaymentMethodsParams.builder().setLimit(3L).build();\n\nPaymentMethodCollection paymentMethods = resource.listPaymentMethods(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethods = await stripe.customers.listPaymentMethods(\n  '{{CUSTOMER_ID}}',\n  {\n    limit: 3,\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerListPaymentMethodsParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nparams.Limit = stripe.Int64(3)\nresult := customer.ListPaymentMethods(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerPaymentMethodListOptions { Limit = 3 };\nvar service = new CustomerPaymentMethodService();\nStripeList<PaymentMethod> paymentMethods = service.List(\n    \"{{CUSTOMER_ID}}\",\n    options);"
    },
    "Attach a PaymentMethod to a Customer": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method = Stripe::PaymentMethod.attach(\n  '{{PAYMENT_METHOD_ID}}',\n  {customer: '{{CUSTOMER_ID}}'},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method = stripe.PaymentMethod.attach(\n  \"{{PAYMENT_METHOD_ID}}\",\n  customer=\"{{CUSTOMER_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->attach(\n  '{{PAYMENT_METHOD_ID}}',\n  ['customer' => '{{CUSTOMER_ID}}']\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethod resource = PaymentMethod.retrieve(\"{{PAYMENT_METHOD_ID}}\");\n\nPaymentMethodAttachParams params =\n  PaymentMethodAttachParams.builder().setCustomer(\"{{CUSTOMER_ID}}\").build();\n\nPaymentMethod paymentMethod = resource.attach(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.attach(\n  '{{PAYMENT_METHOD_ID}}',\n  {\n    customer: '{{CUSTOMER_ID}}',\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodAttachParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := paymentmethod.Attach(\"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodAttachOptions { Customer = \"{{CUSTOMER_ID}}\" };\nvar service = new PaymentMethodService();\nPaymentMethod paymentMethod = service.Attach(\"{{PAYMENT_METHOD_ID}}\", options);"
    },
    "Detach a PaymentMethod from a Customer": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method = Stripe::PaymentMethod.detach('{{PAYMENT_METHOD_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method = stripe.PaymentMethod.detach(\"{{PAYMENT_METHOD_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethod = $stripe->paymentMethods->detach('{{PAYMENT_METHOD_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethod resource = PaymentMethod.retrieve(\"{{PAYMENT_METHOD_ID}}\");\n\nPaymentMethodDetachParams params = PaymentMethodDetachParams.builder().build();\n\nPaymentMethod paymentMethod = resource.detach(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethod = await stripe.paymentMethods.detach(\n  '{{PAYMENT_METHOD_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodDetachParams{}\nresult, err := paymentmethod.Detach(\"{{PAYMENT_METHOD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentMethodService();\nPaymentMethod paymentMethod = service.Detach(\"{{PAYMENT_METHOD_ID}}\");"
    }
  },
  "payment-method-configurations": {
    "Create a payment method configuration": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_configuration = Stripe::PaymentMethodConfiguration.create({\n  name: 'Buy Now Pay Laters',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_configuration = stripe.PaymentMethodConfiguration.create(\n  name=\"Buy Now Pay Laters\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodConfiguration = $stripe->paymentMethodConfigurations->create([\n  'name' => 'Buy Now Pay Laters',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodConfigurationCreateParams params =\n  PaymentMethodConfigurationCreateParams.builder()\n    .setName(\"Buy Now Pay Laters\")\n    .build();\n\nPaymentMethodConfiguration paymentMethodConfiguration =\n  PaymentMethodConfiguration.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodConfiguration = await stripe.paymentMethodConfigurations.create({\n  name: 'Buy Now Pay Laters',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodConfigurationParams{\n  Name: stripe.String(\"Buy Now Pay Laters\"),\n}\nresult, err := paymentmethodconfiguration.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodConfigurationCreateOptions\n{\n    Name = \"Buy Now Pay Laters\",\n};\nvar service = new PaymentMethodConfigurationService();\nPaymentMethodConfiguration paymentMethodConfiguration = service.Create(options);"
    },
    "Update payment method configuration": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_configuration = Stripe::PaymentMethodConfiguration.update(\n  'pmc_abcdef',\n  {acss_debit: {display_preference: {preference: 'on'}}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_configuration = stripe.PaymentMethodConfiguration.modify(\n  \"pmc_abcdef\",\n  acss_debit={\"display_preference\": {\"preference\": \"on\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodConfiguration = $stripe->paymentMethodConfigurations->update(\n  'pmc_abcdef',\n  ['acss_debit' => ['display_preference' => ['preference' => 'on']]]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodConfiguration resource =\n  PaymentMethodConfiguration.retrieve(\"pmc_abcdef\");\n\nPaymentMethodConfigurationUpdateParams params =\n  PaymentMethodConfigurationUpdateParams.builder()\n    .setAcssDebit(\n      PaymentMethodConfigurationUpdateParams.AcssDebit.builder()\n        .setDisplayPreference(\n          PaymentMethodConfigurationUpdateParams.AcssDebit.DisplayPreference.builder()\n            .setPreference(\n              PaymentMethodConfigurationUpdateParams.AcssDebit.DisplayPreference.Preference.ON\n            )\n            .build()\n        )\n        .build()\n    )\n    .build();\n\nPaymentMethodConfiguration paymentMethodConfiguration = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodConfiguration = await stripe.paymentMethodConfigurations.update(\n  'pmc_abcdef',\n  {\n    acss_debit: {\n      display_preference: {\n        preference: 'on',\n      },\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodConfigurationParams{\n  ACSSDebit: &stripe.PaymentMethodConfigurationACSSDebitParams{\n    DisplayPreference: &stripe.PaymentMethodConfigurationACSSDebitDisplayPreferenceParams{\n      Preference: stripe.String(stripe.PaymentMethodConfigurationACSSDebitDisplayPreferencePreferenceOn),\n    },\n  },\n}\nresult, err := paymentmethodconfiguration.Update(\"pmc_abcdef\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodConfigurationUpdateOptions\n{\n    AcssDebit = new PaymentMethodConfigurationAcssDebitOptions\n    {\n        DisplayPreference = new PaymentMethodConfigurationAcssDebitDisplayPreferenceOptions\n        {\n            Preference = \"on\",\n        },\n    },\n};\nvar service = new PaymentMethodConfigurationService();\nPaymentMethodConfiguration paymentMethodConfiguration = service.Update(\n    \"pmc_abcdef\",\n    options);"
    },
    "Retrieve payment method configuration": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_configuration = Stripe::PaymentMethodConfiguration.retrieve('pmc_abcdef')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_configuration = stripe.PaymentMethodConfiguration.retrieve(\n  \"pmc_abcdef\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodConfiguration = $stripe->paymentMethodConfigurations->retrieve(\n  'pmc_abcdef',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodConfiguration paymentMethodConfiguration =\n  PaymentMethodConfiguration.retrieve(\"pmc_abcdef\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodConfiguration = await stripe.paymentMethodConfigurations.retrieve(\n  'pmc_abcdef'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodConfigurationParams{}\nresult, err := paymentmethodconfiguration.Get(\"pmc_abcdef\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentMethodConfigurationService();\nPaymentMethodConfiguration paymentMethodConfiguration = service.Get(\"pmc_abcdef\");"
    },
    "List payment method configurations": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_configurations = Stripe::PaymentMethodConfiguration.list()",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_configurations = stripe.PaymentMethodConfiguration.list()",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodConfigurations = $stripe->paymentMethodConfigurations->all([]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodConfigurationListParams params =\n  PaymentMethodConfigurationListParams.builder().build();\n\nPaymentMethodConfigurationCollection paymentMethodConfigurations =\n  PaymentMethodConfiguration.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodConfigurations = await stripe.paymentMethodConfigurations.list();",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodConfigurationListParams{}\nresult := paymentmethodconfiguration.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentMethodConfigurationService();\nStripeList<PaymentMethodConfiguration> paymentMethodConfigurations = service.List();"
    }
  },
  "payment-method-domains": {
    "Create a payment method domain": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_domain = Stripe::PaymentMethodDomain.create({\n  domain_name: 'example.com',\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_domain = stripe.PaymentMethodDomain.create(domain_name=\"example.com\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomain = $stripe->paymentMethodDomains->create([\n  'domain_name' => 'example.com',\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodDomainCreateParams params =\n  PaymentMethodDomainCreateParams.builder().setDomainName(\"example.com\").build();\n\nPaymentMethodDomain paymentMethodDomain = PaymentMethodDomain.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomain = await stripe.paymentMethodDomains.create({\n  domain_name: 'example.com',\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodDomainParams{DomainName: stripe.String(\"example.com\")}\nresult, err := paymentmethoddomain.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodDomainCreateOptions { DomainName = \"example.com\" };\nvar service = new PaymentMethodDomainService();\nPaymentMethodDomain paymentMethodDomain = service.Create(options);"
    },
    "Update a payment method domain": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_domain = Stripe::PaymentMethodDomain.update(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  {enabled: false},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_domain = stripe.PaymentMethodDomain.modify(\n  \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n  enabled=False,\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomain = $stripe->paymentMethodDomains->update(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  ['enabled' => false]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodDomain resource =\n  PaymentMethodDomain.retrieve(\"pmd_1Nnrer2eZvKYlo2Cips79tWl\");\n\nPaymentMethodDomainUpdateParams params =\n  PaymentMethodDomainUpdateParams.builder().setEnabled(false).build();\n\nPaymentMethodDomain paymentMethodDomain = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomain = await stripe.paymentMethodDomains.update(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  {\n    enabled: false,\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodDomainParams{Enabled: stripe.Bool(false)}\nresult, err := paymentmethoddomain.Update(\"pmd_1Nnrer2eZvKYlo2Cips79tWl\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodDomainUpdateOptions { Enabled = false };\nvar service = new PaymentMethodDomainService();\nPaymentMethodDomain paymentMethodDomain = service.Update(\n    \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n    options);"
    },
    "Retrieve a payment method domain": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_domain = Stripe::PaymentMethodDomain.retrieve('pmd_1Nnrer2eZvKYlo2Cips79tWl')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_domain = stripe.PaymentMethodDomain.retrieve(\n  \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomain = $stripe->paymentMethodDomains->retrieve(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodDomain paymentMethodDomain =\n  PaymentMethodDomain.retrieve(\"pmd_1Nnrer2eZvKYlo2Cips79tWl\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomain = await stripe.paymentMethodDomains.retrieve(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodDomainParams{}\nresult, err := paymentmethoddomain.Get(\"pmd_1Nnrer2eZvKYlo2Cips79tWl\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentMethodDomainService();\nPaymentMethodDomain paymentMethodDomain = service.Get(\n    \"pmd_1Nnrer2eZvKYlo2Cips79tWl\");"
    },
    "List payment method domains": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_domains = Stripe::PaymentMethodDomain.list({limit: 3})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_domains = stripe.PaymentMethodDomain.list(limit=3)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomains = $stripe->paymentMethodDomains->all(['limit' => 3]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodDomainListParams params =\n  PaymentMethodDomainListParams.builder().setLimit(3L).build();\n\nPaymentMethodDomainCollection paymentMethodDomains =\n  PaymentMethodDomain.list(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomains = await stripe.paymentMethodDomains.list({\n  limit: 3,\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodDomainListParams{}\nparams.Limit = stripe.Int64(3)\nresult := paymentmethoddomain.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new PaymentMethodDomainListOptions { Limit = 3 };\nvar service = new PaymentMethodDomainService();\nStripeList<PaymentMethodDomain> paymentMethodDomains = service.List(options);"
    },
    "Validate an existing payment method domain": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_method_domain = Stripe::PaymentMethodDomain.validate('pmd_1Nnrer2eZvKYlo2Cips79tWl')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_method_domain = stripe.PaymentMethodDomain.validate(\n  \"pmd_1Nnrer2eZvKYlo2Cips79tWl\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentMethodDomain = $stripe->paymentMethodDomains->validate(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nPaymentMethodDomain resource =\n  PaymentMethodDomain.retrieve(\"pmd_1Nnrer2eZvKYlo2Cips79tWl\");\n\nPaymentMethodDomainValidateParams params =\n  PaymentMethodDomainValidateParams.builder().build();\n\nPaymentMethodDomain paymentMethodDomain = resource.validate(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst paymentMethodDomain = await stripe.paymentMethodDomains.validate(\n  'pmd_1Nnrer2eZvKYlo2Cips79tWl'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentMethodDomainValidateParams{}\nresult, err := paymentmethoddomain.Validate(\"pmd_1Nnrer2eZvKYlo2Cips79tWl\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new PaymentMethodDomainService();\nPaymentMethodDomain paymentMethodDomain = service.Validate(\n    \"pmd_1Nnrer2eZvKYlo2Cips79tWl\");"
    }
  },
  "bank-accounts": {
    "Create a bank account": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Customer.create_source(\n  '{{CUSTOMER_ID}}',\n  {source: 'btok_1MvoS32eZvKYlo2CDhGTErAe'},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.create_source(\n  \"{{CUSTOMER_ID}}\",\n  source=\"btok_1MvoS32eZvKYlo2CDhGTErAe\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->createSource(\n  '{{CUSTOMER_ID}}',\n  ['source' => 'btok_1MvoS32eZvKYlo2CDhGTErAe']\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer customer = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nPaymentSourceCollectionCreateParams params =\n  PaymentSourceCollectionCreateParams.builder()\n    .setSource(\"btok_1MvoS32eZvKYlo2CDhGTErAe\")\n    .build();\n\nPaymentSource paymentSource = customer.getSources().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.createSource(\n  '{{CUSTOMER_ID}}',\n  {\n    source: 'btok_1MvoS32eZvKYlo2CDhGTErAe',\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentSourceParams{\n  Source: stripe.String(\"btok_1MvoS32eZvKYlo2CDhGTErAe\"),\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := paymentsource.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerPaymentSourceCreateOptions\n{\n    Source = \"btok_1MvoS32eZvKYlo2CDhGTErAe\",\n};\nvar service = new CustomerPaymentSourceService();\nIPaymentSource iPaymentSource = service.Create(\"{{CUSTOMER_ID}}\", options);"
    },
    "Update a bank account": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Customer.update_source(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.modify_source(\n  \"{{CUSTOMER_ID}}\",\n  \"{{BANK_ACCOUNT_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->updateSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardUpdateParams params =\n  CardUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nTODO tODO = Card.update(\"{{CUSTOMER_ID}}\", \"{{BANK_ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.updateSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := card.Update(\"{{BANK_ACCOUNT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerPaymentSourceUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new CustomerPaymentSourceService();\nIPaymentSource iPaymentSource = service.Update(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\",\n    options);"
    },
    "Retrieve a bank account": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Source.detach(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.delete_source(\n  \"{{CUSTOMER_ID}}\",\n  \"{{BANK_ACCOUNT_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardDeleteParams params = CardDeleteParams.builder().build();\n\nPaymentSource paymentSource =\n  Card.delete(\"{{CUSTOMER_ID}}\", \"{{BANK_ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nresult, err := card.Del(\"{{BANK_ACCOUNT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SourceService();\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\");"
    },
    "List all bank accounts": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Source.detach(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.delete_source(\n  \"{{CUSTOMER_ID}}\",\n  \"{{BANK_ACCOUNT_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardDeleteParams params = CardDeleteParams.builder().build();\n\nPaymentSource paymentSource =\n  Card.delete(\"{{CUSTOMER_ID}}\", \"{{BANK_ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nresult, err := card.Del(\"{{BANK_ACCOUNT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SourceService();\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\");"
    },
    "Delete a bank account": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Source.detach(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.delete_source(\n  \"{{CUSTOMER_ID}}\",\n  \"{{BANK_ACCOUNT_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardDeleteParams params = CardDeleteParams.builder().build();\n\nPaymentSource paymentSource =\n  Card.delete(\"{{CUSTOMER_ID}}\", \"{{BANK_ACCOUNT_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nresult, err := card.Del(\"{{BANK_ACCOUNT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SourceService();\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\");"
    },
    "Verify a bank account": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nbank_account = Stripe::BankAccount.verify(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  {amounts: [32, 45]},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.create_source(\n  \"{{CUSTOMER_ID}}\",\n  source=\"btok_1MvoS32eZvKYlo2CDhGTErAe\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->verifySource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  ['amounts' => [32, 45]]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nBankAccount resource =\n  BankAccount.retrieve(\"{{CUSTOMER_ID}}\", \"{{BANK_ACCOUNT_ID}}\");\n\nBankAccountVerifyParams params =\n  BankAccountVerifyParams.builder().addAmount(32L).addAmount(45L).build();\n\nBankAccount bankAccount = resource.verify(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst bankAccount = await stripe.customers.verifySource(\n  '{{CUSTOMER_ID}}',\n  '{{BANK_ACCOUNT_ID}}',\n  {\n    amounts: [32, 45],\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentSourceVerifyParams{\n  Amounts: []*int64{stripe.Int64(32), stripe.Int64(45)},\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := paymentsource.Verify(\"{{BANK_ACCOUNT_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerPaymentSourceVerifyOptions\n{\n    Amounts = new List<long?> { 32, 45 },\n};\nvar service = new CustomerPaymentSourceService();\nBankAccount bankAccount = service.Verify(\n    \"{{CUSTOMER_ID}}\",\n    \"{{BANK_ACCOUNT_ID}}\",\n    options);"
    }
  },
  "cash-balance": {
    "Update a cash balance's settings": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncash_balance = Stripe::Customer.update_cash_balance(\n  '{{CUSTOMER_ID}}',\n  {settings: {reconciliation_mode: 'manual'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncash_balance = stripe.Customer.modify_cash_balance(\n  \"{{CUSTOMER_ID}}\",\n  settings={\"reconciliation_mode\": \"manual\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$cashBalance = $stripe->customers->updateCashBalance(\n  '{{CUSTOMER_ID}}',\n  ['settings' => ['reconciliation_mode' => 'manual']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCashBalance resource = CashBalance.retrieve(\"{{CUSTOMER_ID}}\");\n\nCashBalanceUpdateParams params =\n  CashBalanceUpdateParams.builder()\n    .setSettings(\n      CashBalanceUpdateParams.Settings.builder()\n        .setReconciliationMode(\n          CashBalanceUpdateParams.Settings.ReconciliationMode.MANUAL\n        )\n        .build()\n    )\n    .build();\n\nCashBalance cashBalance = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst cashBalance = await stripe.customers.updateCashBalance(\n  '{{CUSTOMER_ID}}',\n  {\n    settings: {\n      reconciliation_mode: 'manual',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CashBalanceParams{\n  Settings: &stripe.CashBalanceSettingsParams{\n    ReconciliationMode: stripe.String(stripe.CashBalanceSettingsReconciliationModeManual),\n  },\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := cashbalance.Update(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerCashBalanceUpdateOptions\n{\n    Settings = new CustomerCashBalanceSettingsOptions\n    {\n        ReconciliationMode = \"manual\",\n    },\n};\nvar service = new CustomerCashBalanceService();\nCashBalance cashBalance = service.Update(\"{{CUSTOMER_ID}}\", options);"
    },
    "Retrieve a cash balance": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncash_balance = Stripe::Customer.retrieve_cash_balance('{{CUSTOMER_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncash_balance = stripe.Customer.retrieve_cash_balance(\"{{CUSTOMER_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$cashBalance = $stripe->customers->retrieveCashBalance('{{CUSTOMER_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCashBalance cashBalance = CashBalance.retrieve(\"{{CUSTOMER_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst cashBalance = await stripe.customers.retrieveCashBalance('{{CUSTOMER_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CashBalanceParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nresult, err := cashbalance.Get(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new CustomerCashBalanceService();\nCashBalance cashBalance = service.Get(\"{{CUSTOMER_ID}}\");"
    }
  },
  "cash-balance-transactions": {
    "Create or retrieve funding instructions for a customer cash balance": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nfunding_instructions = Stripe::Customer.create_funding_instructions(\n  '{{CUSTOMER_ID}}',\n  {\n    funding_type: 'bank_transfer',\n    currency: 'eur',\n    bank_transfer: {\n      type: 'eu_bank_transfer',\n      eu_bank_transfer: {country: 'DE'},\n    },\n  },\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nfunding_instructions = stripe.Customer.create_funding_instructions(\n  \"{{CUSTOMER_ID}}\",\n  funding_type=\"bank_transfer\",\n  currency=\"eur\",\n  bank_transfer={\"type\": \"eu_bank_transfer\", \"eu_bank_transfer\": {\"country\": \"DE\"}},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$fundingInstructions = $stripe->customers->createFundingInstructions(\n  '{{CUSTOMER_ID}}',\n  [\n    'funding_type' => 'bank_transfer',\n    'currency' => 'eur',\n    'bank_transfer' => [\n      'type' => 'eu_bank_transfer',\n      'eu_bank_transfer' => ['country' => 'DE'],\n    ],\n  ]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer resource = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nCustomerCreateFundingInstructionsParams params =\n  CustomerCreateFundingInstructionsParams.builder()\n    .setFundingType(\n      CustomerCreateFundingInstructionsParams.FundingType.BANK_TRANSFER\n    )\n    .setCurrency(\"eur\")\n    .setBankTransfer(\n      CustomerCreateFundingInstructionsParams.BankTransfer.builder()\n        .setType(\n          CustomerCreateFundingInstructionsParams.BankTransfer.Type.EU_BANK_TRANSFER\n        )\n        .setEuBankTransfer(\n          CustomerCreateFundingInstructionsParams.BankTransfer.EuBankTransfer.builder()\n            .setCountry(\"DE\")\n            .build()\n        )\n        .build()\n    )\n    .build();\n\nFundingInstructions fundingInstructions = resource.createFundingInstructions(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst fundingInstructions = await stripe.customers.createFundingInstructions(\n  '{{CUSTOMER_ID}}',\n  {\n    funding_type: 'bank_transfer',\n    currency: 'eur',\n    bank_transfer: {\n      type: 'eu_bank_transfer',\n      eu_bank_transfer: {\n        country: 'DE',\n      },\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerCreateFundingInstructionsParams{\n  FundingType: stripe.String(\"bank_transfer\"),\n  Currency: stripe.String(stripe.CurrencyEUR),\n  BankTransfer: &stripe.CustomerCreateFundingInstructionsBankTransferParams{\n    Type: stripe.String(\"eu_bank_transfer\"),\n    EUBankTransfer: &stripe.CustomerCreateFundingInstructionsBankTransferEUBankTransferParams{\n      Country: stripe.String(\"DE\"),\n    },\n  },\n}\nresult, err := customer.CreateFundingInstructions(\"{{CUSTOMER_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerFundingInstructionsCreateOptions\n{\n    FundingType = \"bank_transfer\",\n    Currency = \"eur\",\n    BankTransfer = new CustomerFundingInstructionsBankTransferOptions\n    {\n        Type = \"eu_bank_transfer\",\n        EuBankTransfer = new CustomerFundingInstructionsBankTransferEuBankTransferOptions\n        {\n            Country = \"DE\",\n        },\n    },\n};\nvar service = new CustomerFundingInstructionsService();\nFundingInstructions fundingInstructions = service.Create(\n    \"{{CUSTOMER_ID}}\",\n    options);"
    },
    "Retrieve a cash balance transaction": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomer_cash_balance_transaction = Stripe::Customer.retrieve_cash_balance_transaction(\n  '{{CUSTOMER_ID}}',\n  'ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomer_cash_balance_transaction = stripe.Customer.retrieve_cash_balance_transaction(\n  \"{{CUSTOMER_ID}}\",\n  \"ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customerCashBalanceTransaction = $stripe->customers->retrieveCashBalanceTransaction(\n  '{{CUSTOMER_ID}}',\n  'ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer customer = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nCustomerCashBalanceTransaction customerCashBalanceTransaction =\n  customer.cashBalanceTransactions().retrieve(\"ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerCashBalanceTransaction = await stripe\n  .customers\n  .retrieveCashBalanceTransaction(\n  '{{CUSTOMER_ID}}',\n  'ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerCashBalanceTransactionParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := customercashbalancetransaction.Get(\n  \"ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new CustomerCashBalanceTransactionService();\nCustomerCashBalanceTransaction customerCashBalanceTransaction = service.Get(\n    \"{{CUSTOMER_ID}}\",\n    \"ccsbtxn_1Na16B2eZvKYlo2CUhyw3dsF\");"
    },
    "List cash balance transactions": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomer_cash_balance_transactions = Stripe::Customer.list_cash_balance_transactions(\n  '{{CUSTOMER_ID}}',\n  {limit: 3},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomer_cash_balance_transactions = stripe.Customer.list_cash_balance_transactions(\n  \"{{CUSTOMER_ID}}\",\n  limit=3,\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customerCashBalanceTransactions = $stripe->customers->allCashBalanceTransactions(\n  '{{CUSTOMER_ID}}',\n  ['limit' => 3]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer resource = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nCustomerCashBalanceTransactionsParams params =\n  CustomerCashBalanceTransactionsParams.builder().setLimit(3L).build();\n\nCustomerCashBalanceTransactionCollection customerCashBalanceTransactions =\n  resource.cashBalanceTransactions(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerCashBalanceTransactions = await stripe\n  .customers\n  .listCashBalanceTransactions(\n  '{{CUSTOMER_ID}}',\n  {\n    limit: 3,\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CustomerCashBalanceTransactionListParams{\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nparams.Limit = stripe.Int64(3)\nresult := customercashbalancetransaction.List(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerCashBalanceTransactionListOptions { Limit = 3 };\nvar service = new CustomerCashBalanceTransactionService();\nStripeList<CustomerCashBalanceTransaction> customerCashBalanceTransactions = service\n    .List(\"{{CUSTOMER_ID}}\", options);"
    },
    "Fund a test mode cash balance": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\ncustomer_cash_balance_transaction = Stripe::Customer::TestHelpers.fund_cash_balance(\n  '{{CUSTOMER_ID}}',\n  {\n    amount: 5000,\n    currency: 'eur',\n  },\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\ncustomer_cash_balance_transaction = stripe.Customer.TestHelpers.fund_cash_balance(\n  \"{{CUSTOMER_ID}}\",\n  amount=5000,\n  currency=\"eur\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$customerCashBalanceTransaction = $stripe->testHelpers->customers->fundCashBalance(\n  '{{CUSTOMER_ID}}',\n  [\n    'amount' => 5000,\n    'currency' => 'eur',\n  ]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer resource = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nCustomerFundCashBalanceParams params =\n  CustomerFundCashBalanceParams.builder()\n    .setAmount(5000L)\n    .setCurrency(\"eur\")\n    .build();\n\nCustomerCashBalanceTransaction customerCashBalanceTransaction =\n  resource.getTestHelpers().fundCashBalance(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerCashBalanceTransaction = await stripe\n  .testHelpers\n  .customers\n  .fundCashBalance(\n  '{{CUSTOMER_ID}}',\n  {\n    amount: 5000,\n    currency: 'eur',\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.TestHelpersCustomerFundCashBalanceParams{\n  Amount: stripe.Int64(5000),\n  Currency: stripe.String(stripe.CurrencyEUR),\n}\nresult, err := customer.FundCashBalance(\"{{CUSTOMER_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new Stripe.TestHelpers.CustomerFundCashBalanceOptions\n{\n    Amount = 5000,\n    Currency = \"eur\",\n};\nvar service = new Stripe.TestHelpers.CustomerService();\nCustomerCashBalanceTransaction customerCashBalanceTransaction = service\n    .FundCashBalance(\"{{CUSTOMER_ID}}\", options);"
    }
  },
  "cards": {
    "Create a card": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Customer.create_source(\n  '{{CUSTOMER_ID}}',\n  {source: 'tok_visa'},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.create_source(\n  \"{{CUSTOMER_ID}}\",\n  source=\"tok_visa\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->createSource(\n  '{{CUSTOMER_ID}}',\n  ['source' => 'tok_visa']\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer customer = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nPaymentSourceCollectionCreateParams params =\n  PaymentSourceCollectionCreateParams.builder().setSource(\"tok_visa\").build();\n\nPaymentSource paymentSource = customer.getSources().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.createSource(\n  '{{CUSTOMER_ID}}',\n  {\n    source: 'tok_visa',\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentSourceParams{\n  Source: stripe.String(\"tok_visa\"),\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := paymentsource.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerPaymentSourceCreateOptions { Source = \"tok_visa\" };\nvar service = new CustomerPaymentSourceService();\nIPaymentSource iPaymentSource = service.Create(\"{{CUSTOMER_ID}}\", options);"
    },
    "Update a card": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Customer.update_source(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  {name: 'Jenny Rosen'},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.modify_source(\n  \"{{ACCOUNT_ID}}\",\n  \"{{CARD_ID}}\",\n  name=\"Jenny Rosen\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->updateSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  ['name' => 'Jenny Rosen']\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardUpdateParams params = CardUpdateParams.builder().setName(\"Jenny Rosen\").build();\n\nTODO tODO =\n  Card.update(\"{{ACCOUNT_ID}}\", \"{{CARD_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.updateSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  {\n    name: 'Jenny Rosen',\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{\n  Name: stripe.String(\"Jenny Rosen\"),\n  Customer: stripe.String(\"{{ACCOUNT_ID}}\"),\n}\nresult, err := card.Update(\"{{CARD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerPaymentSourceUpdateOptions { Name = \"Jenny Rosen\" };\nvar service = new CustomerPaymentSourceService();\nIPaymentSource iPaymentSource = service.Update(\n    \"{{ACCOUNT_ID}}\",\n    \"{{CARD_ID}}\",\n    options);"
    },
    "Retrieve a card": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Source.detach(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.delete_source(\n  \"{{ACCOUNT_ID}}\",\n  \"{{CARD_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardDeleteParams params = CardDeleteParams.builder().build();\n\nPaymentSource paymentSource =\n  Card.delete(\"{{ACCOUNT_ID}}\", \"{{CARD_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{Customer: stripe.String(\"{{ACCOUNT_ID}}\")}\nresult, err := card.Del(\"{{CARD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SourceService();\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{ACCOUNT_ID}}\",\n    \"{{CARD_ID}}\");"
    },
    "List all cards": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Source.detach(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.delete_source(\n  \"{{ACCOUNT_ID}}\",\n  \"{{CARD_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardDeleteParams params = CardDeleteParams.builder().build();\n\nPaymentSource paymentSource =\n  Card.delete(\"{{ACCOUNT_ID}}\", \"{{CARD_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{Customer: stripe.String(\"{{ACCOUNT_ID}}\")}\nresult, err := card.Del(\"{{CARD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SourceService();\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{ACCOUNT_ID}}\",\n    \"{{CARD_ID}}\");"
    },
    "Delete a card": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Source.detach(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.delete_source(\n  \"{{ACCOUNT_ID}}\",\n  \"{{CARD_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardDeleteParams params = CardDeleteParams.builder().build();\n\nPaymentSource paymentSource =\n  Card.delete(\"{{ACCOUNT_ID}}\", \"{{CARD_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{ACCOUNT_ID}}',\n  '{{CARD_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{Customer: stripe.String(\"{{ACCOUNT_ID}}\")}\nresult, err := card.Del(\"{{CARD_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SourceService();\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{ACCOUNT_ID}}\",\n    \"{{CARD_ID}}\");"
    }
  },
  "sources": {
    "Create a source": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsource = Stripe::Source.create({\n  type: 'ach_credit_transfer',\n  currency: 'usd',\n  owner: {email: 'jenny.rosen@example.com'},\n})",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsource = stripe.Source.create(\n  type=\"ach_credit_transfer\",\n  currency=\"usd\",\n  owner={\"email\": \"jenny.rosen@example.com\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$source = $stripe->sources->create([\n  'type' => 'ach_credit_transfer',\n  'currency' => 'usd',\n  'owner' => ['email' => 'jenny.rosen@example.com'],\n]);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSourceCreateParams params =\n  SourceCreateParams.builder()\n    .setType(\"ach_credit_transfer\")\n    .setCurrency(\"usd\")\n    .setOwner(\n      SourceCreateParams.Owner.builder().setEmail(\"jenny.rosen@example.com\").build()\n    )\n    .build();\n\nSource source = Source.create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst source = await stripe.sources.create({\n  type: 'ach_credit_transfer',\n  currency: 'usd',\n  owner: {\n    email: 'jenny.rosen@example.com',\n  },\n});",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SourceParams{\n  Type: stripe.String(\"ach_credit_transfer\"),\n  Currency: stripe.String(stripe.CurrencyUSD),\n  Owner: &stripe.SourceOwnerParams{Email: stripe.String(\"jenny.rosen@example.com\")},\n}\nresult, err := source.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new SourceCreateOptions\n{\n    Type = \"ach_credit_transfer\",\n    Currency = \"usd\",\n    Owner = new SourceOwnerOptions { Email = \"jenny.rosen@example.com\" },\n};\nvar service = new SourceService();\nSource source = service.Create(options);"
    },
    "Update a source": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsource = Stripe::Source.update(\n  '{{SOURCE_ID}}',\n  {metadata: {order_id: '6735'}},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsource = stripe.Source.modify(\n  \"{{SOURCE_ID}}\",\n  metadata={\"order_id\": \"6735\"},\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$source = $stripe->sources->update(\n  '{{SOURCE_ID}}',\n  ['metadata' => ['order_id' => '6735']]\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSource resource = Source.retrieve(\"{{SOURCE_ID}}\");\n\nSourceUpdateParams params =\n  SourceUpdateParams.builder().putMetadata(\"order_id\", \"6735\").build();\n\nSource source = resource.update(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst source = await stripe.sources.update(\n  '{{SOURCE_ID}}',\n  {\n    metadata: {\n      order_id: '6735',\n    },\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SourceParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := source.Update(\"{{SOURCE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new SourceUpdateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar service = new SourceService();\nSource source = service.Update(\"{{SOURCE_ID}}\", options);"
    },
    "Retrieve a source": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\nsource = Stripe::Source.retrieve('{{SOURCE_ID}}')",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\nsource = stripe.Source.retrieve(\"{{SOURCE_ID}}\")",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$source = $stripe->sources->retrieve('{{SOURCE_ID}}', []);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nSource source = Source.retrieve(\"{{SOURCE_ID}}\");",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst source = await stripe.sources.retrieve('{{SOURCE_ID}}');",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.SourceParams{}\nresult, err := source.Get(\"{{SOURCE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SourceService();\nSource source = service.Get(\"{{SOURCE_ID}}\");"
    },
    "Attach a source": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Customer.create_source(\n  '{{CUSTOMER_ID}}',\n  {source: '{{SOURCE_ID}}'},\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.create_source(\n  \"{{CUSTOMER_ID}}\",\n  source=\"{{SOURCE_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->createSource(\n  '{{CUSTOMER_ID}}',\n  ['source' => '{{SOURCE_ID}}']\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCustomer customer = Customer.retrieve(\"{{CUSTOMER_ID}}\");\n\nPaymentSourceCollectionCreateParams params =\n  PaymentSourceCollectionCreateParams.builder()\n    .setSource(\"{{SOURCE_ID}}\")\n    .build();\n\nPaymentSource paymentSource = customer.getSources().create(params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.createSource(\n  '{{CUSTOMER_ID}}',\n  {\n    source: '{{SOURCE_ID}}',\n  }\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.PaymentSourceParams{\n  Source: stripe.String(\"{{SOURCE_ID}}\"),\n  Customer: stripe.String(\"{{CUSTOMER_ID}}\"),\n}\nresult, err := paymentsource.New(params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar options = new CustomerPaymentSourceCreateOptions\n{\n    Source = \"{{SOURCE_ID}}\",\n};\nvar service = new CustomerPaymentSourceService();\nIPaymentSource iPaymentSource = service.Create(\"{{CUSTOMER_ID}}\", options);"
    },
    "Detach a source": {
      "Ruby": "Stripe.api_key = '<<YOUR_SECRET_KEY>>'\n\npayment_source = Stripe::Source.detach(\n  '{{CUSTOMER_ID}}',\n  '{{SOURCE_ID}}',\n)",
      "Python": "import stripe\nstripe.api_key = \"<<YOUR_SECRET_KEY>>\"\n\npayment_source = stripe.Customer.delete_source(\n  \"{{CUSTOMER_ID}}\",\n  \"{{SOURCE_ID}}\",\n)",
      "PHP": "$stripe = new \\Stripe\\StripeClient('<<YOUR_SECRET_KEY>>');\n\n$paymentSource = $stripe->customers->deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{SOURCE_ID}}',\n  []\n);",
      "Java": "Stripe.apiKey = \"<<YOUR_SECRET_KEY>>\";\n\nCardDeleteParams params = CardDeleteParams.builder().build();\n\nPaymentSource paymentSource =\n  Card.delete(\"{{CUSTOMER_ID}}\", \"{{SOURCE_ID}}\", params);",
      "Node.js": "const stripe = require('stripe')('<<YOUR_SECRET_KEY>>');\n\nconst customerSource = await stripe.customers.deleteSource(\n  '{{CUSTOMER_ID}}',\n  '{{SOURCE_ID}}'\n);",
      "Go": "stripe.Key = \"<<YOUR_SECRET_KEY>>\"\n\nparams := &stripe.CardParams{Customer: stripe.String(\"{{CUSTOMER_ID}}\")}\nresult, err := card.Del(\"{{SOURCE_ID}}\", params)",
      ".NET": "StripeConfiguration.ApiKey = \"<<YOUR_SECRET_KEY>>\";\n\nvar service = new SourceService();\nIPaymentSource iPaymentSource = service.Detach(\n    \"{{CUSTOMER_ID}}\",\n    \"{{SOURCE_ID}}\");"
    }
  }
};

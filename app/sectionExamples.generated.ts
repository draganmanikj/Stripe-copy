// Generated from the live public Stripe API reference.

export type OfficialGeneralExample = {
  title: string;
  code: string;
};

export type OfficialGeneralSectionExamples = {
  byLanguage: Record<string, OfficialGeneralExample[]>;
  responses: OfficialGeneralExample[];
};

export const officialGeneralExamples: Record<string, OfficialGeneralSectionExamples> = {
  "introduction": {
    "byLanguage": {
      "cURL": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        }
      ],
      "Stripe CLI": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        }
      ],
      "Ruby": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        },
        {
          "title": "$gem install stripe",
          "code": "$\ngem install stripe\nSTRIPE-RUBY"
        }
      ],
      "Python": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        },
        {
          "title": "$pip install stripe",
          "code": "$\npip install stripe\nSTRIPE-PYTHON"
        }
      ],
      "PHP": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        },
        {
          "title": "$composer require stripe/stripe-php",
          "code": "$\ncomposer require stripe/stripe-php\nSTRIPE-PHP"
        }
      ],
      "Java": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        },
        {
          "title": "stripe-java",
          "code": "STRIPE-JAVA\nMAVEN\n<dependency>\n  <groupId>com.stripe</groupId>\n  <artifactId>stripe-java</artifactId>\n  <version>33.1.0</version>\n</dependency>\n\n\nGRADLE\ncompile \"com.stripe:stripe-java:33.1.0\""
        }
      ],
      "Node.js": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        },
        {
          "title": "$npm install --save stripe",
          "code": "$\nnpm install --save stripe\nSTRIPE-NODE"
        }
      ],
      "Go": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        },
        {
          "title": "$go get github.com/stripe/stripe-go/v86",
          "code": "$\ngo get github.com/stripe/stripe-go/v86\nSTRIPE-GO"
        }
      ],
      ".NET": [
        {
          "title": "Base URL",
          "code": "https://api.stripe.com"
        },
        {
          "title": "$dotnet add package Stripe.net",
          "code": "$\ndotnet add package Stripe.net\nSTRIPE-DOTNET"
        }
      ]
    },
    "responses": []
  },
  "authentication": {
    "byLanguage": {
      "cURL": [
        {
          "title": "Authenticated Request",
          "code": "curl https://api.stripe.com/v1/charges \\\n  -u __STRIPE_SAMPLE_TEST_KEY__:\n# The colon prevents curl from asking for a password."
        }
      ],
      "Stripe CLI": [
        {
          "title": "Authenticated Request",
          "code": "stripe login"
        }
      ],
      "Ruby": [
        {
          "title": "Initialize StripeClient",
          "code": "require 'stripe'\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = Stripe::StripeClient.new(\"__STRIPE_SAMPLE_TEST_KEY__\")"
        },
        {
          "title": "Per-Request API Key",
          "code": "charge = client.v1.charges.retrieve(\n  'ch_3P5pVZArEmbiH6tU1sgOWO6t',\n  {},\n  {\n    api_key: '__STRIPE_SAMPLE_TEST_KEY__'\n  }\n)\ncharge.capture() # Uses the same request specific API Key."
        }
      ],
      "Python": [
        {
          "title": "Initialize StripeClient",
          "code": "from stripe import StripeClient\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\")"
        },
        {
          "title": "Per-Request API Key",
          "code": "charge = client.v1.charges.retrieve(\n  \"ch_3Ln3e92eZvKYlo2C0eUfv7bi\",\n  options={\n    \"api_key\": \"__STRIPE_SAMPLE_TEST_KEY__\"\n  }\n)\ncharge.capture() # Uses the same request specific API Key."
        }
      ],
      "PHP": [
        {
          "title": "Initialize StripeClient",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\n$stripe = new \\Stripe\\StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");"
        },
        {
          "title": "Per-Request API Key",
          "code": "$ch = $stripe->charges->retrieve(\n  'ch_3Ln3fO2eZvKYlo2C1kqP3AMr',\n  [],\n  ['api_key' => '__STRIPE_SAMPLE_TEST_KEY__']\n);\n$ch->capture(); // Uses the same API Key."
        }
      ],
      "Java": [
        {
          "title": "Initialize StripeClient",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nStripeClient client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");"
        },
        {
          "title": "Per-Request API Key",
          "code": "RequestOptions requestOptions = RequestOptions.builder()\n  .setApiKey(\"__STRIPE_SAMPLE_TEST_KEY__\")\n  .build();\nCharge charge = client.v1().charges().retrieve(\n  \"ch_3Ln3ga2eZvKYlo2C11iwHdxy\",\n  requestOptions,\n);"
        }
      ],
      "Node.js": [
        {
          "title": "Initialize StripeClient",
          "code": "import Stripe from 'stripe';\n// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nconst stripeClient = new Stripe('__STRIPE_SAMPLE_TEST_KEY__');"
        },
        {
          "title": "Per-Request API Key",
          "code": "var charge = await stripeClient.charges.retrieve(\n  'ch_3LiiC52eZvKYlo2C1da66ZSQ',\n  {\n    apiKey: '__STRIPE_SAMPLE_TEST_KEY__'\n  }\n);"
        }
      ],
      "Go": [
        {
          "title": "Initialize StripeClient",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nsc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")"
        },
        {
          "title": "Per-Request API Key",
          "code": "sc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\nparams := &stripe.ChargeRetrieveParams{}\nch, err := sc.V1Charges.Retrieve(context.TODO(), \"ch_3Ln3j02eZvKYlo2C0d5IZWuG\", params)"
        }
      ],
      ".NET": [
        {
          "title": "Initialize StripeClient",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nvar client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");"
        },
        {
          "title": "Per-Request API Key",
          "code": "var options = new RequestOptions\n{\n  ApiKey = \"__STRIPE_SAMPLE_TEST_KEY__\"\n};\nCharge charge = client.V1.Charges.Get(\n  \"ch_3Ln3kB2eZvKYlo2C1YRBr0Ll\",\n  null,\n  options\n);"
        }
      ]
    },
    "responses": []
  },
  "errors": {
    "byLanguage": {
      "cURL": [],
      "Stripe CLI": [],
      "Ruby": [],
      "Python": [],
      "PHP": [],
      "Java": [],
      "Node.js": [],
      "Go": [],
      ".NET": []
    },
    "responses": []
  },
  "handling-errors": {
    "byLanguage": {
      "cURL": [
        {
          "title": "",
          "code": "# Select a client library to see examples of\n# handling different kinds of errors."
        }
      ],
      "Stripe CLI": [
        {
          "title": "",
          "code": "# Select a client library to see examples of\n# handling different kinds of errors."
        }
      ],
      "Ruby": [
        {
          "title": "",
          "code": "begin\n  # Use Stripe's library to make requests...\nrescue Stripe::CardError => e\n  # A declined card error\n  puts \"Status: #{e.http_status}\"\n  puts \"Type: #{e.error.type}\"\n  puts \"Code: #{e.error.code}\" if e.error.code\n  puts \"Decline code: #{e.error.decline_code}\" if e.error.decline_code\n  puts \"Param: #{e.error.param}\" if e.error.param\n  puts \"Message: #{e.error.message}\"\n  puts \"Request ID: #{e.request_id}\"\nrescue Stripe::RateLimitError => e\n  # Too many requests made to the API too quickly\n  puts \"Request ID: #{e.request_id}\"\nrescue Stripe::InvalidRequestError => e\n  # Invalid parameters were supplied to Stripe's API\n  puts \"Message: #{e.error.message}\"\n  puts \"Param: #{e.error.param}\" if e.error.param\n  puts \"Request ID: #{e.request_id}\"\nrescue Stripe::AuthenticationError => e\n  # Authentication with Stripe's API failed\n  puts \"Request ID: #{e.request_id}\"\nrescue Stripe::APIConnectionError => e\n  # Network communication with Stripe failed\n  puts \"Request ID: #{e.request_id}\"\nrescue Stripe::StripeError => e\n  # All other Stripe errors\n  puts \"Status: #{e.http_status}, Code: #{e.code}, Message: #{e.message}, Request ID: #{e.request_id}\"\nrescue => e\n  # Something else happened, completely unrelated to Stripe\nend"
        }
      ],
      "Python": [
        {
          "title": "",
          "code": "try:\n  # Use Stripe's library to make requests...\n  pass\nexcept stripe.error.CardError as e:\n  # A declined card error\n  print('Status: %s' % e.http_status)\n  print('Code: %s' % e.code)\n  if e.param:\n    print('Param: %s' % e.param)\n  print('Message: %s' % e.user_message)\n  print('Request ID: %s' % e.request_id)\nexcept stripe.error.RateLimitError as e:\n  # Too many requests made to the API too quickly\n  print('Request ID: %s' % e.request_id)\nexcept stripe.error.InvalidRequestError as e:\n  # Invalid parameters were supplied to Stripe's API\n  print('Message: %s' % e.user_message)\n  if e.param:\n    print('Param: %s' % e.param)\n  print('Request ID: %s' % e.request_id)\nexcept stripe.error.AuthenticationError as e:\n  # Authentication with Stripe's API failed\n  print('Request ID: %s' % e.request_id)\nexcept stripe.error.APIConnectionError as e:\n  # Network communication with Stripe failed\n  print('Request ID: %s' % e.request_id)\nexcept stripe.error.StripeError as e:\n  # All other Stripe errors\n  print('Status: %s' % e.http_status)\n  print('Code: %s' % e.code)\n  print('Message: %s' % e.user_message)\n  print('Request ID: %s' % e.request_id)\nexcept Exception as e:\n  # Something else happened, completely unrelated to Stripe\n  pass"
        }
      ],
      "PHP": [
        {
          "title": "",
          "code": "try {\n  // Use Stripe's library to make requests...\n} catch(\\Stripe\\Exception\\CardException $e) {\n  // A declined card error\n  echo 'Status: ' . $e->getHttpStatus() . '\\n';\n  echo 'Type: ' . $e->getError()->type . '\\n';\n  echo 'Code: ' . $e->getError()->code . '\\n';\n  if ($e->getError()->decline_code) {\n    echo 'Decline code: ' . $e->getError()->decline_code . '\\n';\n  }\n  if ($e->getError()->param) {\n    echo 'Param: ' . $e->getError()->param . '\\n';\n  }\n  echo 'Message: ' . $e->getError()->message . '\\n';\n  echo 'Request ID: ' . $e->getRequestId() . '\\n';\n} catch (\\Stripe\\Exception\\RateLimitException $e) {\n  // Too many requests made to the API too quickly\n  echo 'Request ID: ' . $e->getRequestId() . '\\n';\n} catch (\\Stripe\\Exception\\InvalidRequestException $e) {\n  // Invalid parameters were supplied to Stripe's API\n  echo 'Message: ' . $e->getError()->message . '\\n';\n  if ($e->getError()->param) {\n    echo 'Param: ' . $e->getError()->param . '\\n';\n  }\n  echo 'Request ID: ' . $e->getRequestId() . '\\n';\n} catch (\\Stripe\\Exception\\AuthenticationException $e) {\n  // Authentication with Stripe's API failed\n  echo 'Request ID: ' . $e->getRequestId() . '\\n';\n} catch (\\Stripe\\Exception\\ApiConnectionException $e) {\n  // Network communication with Stripe failed\n  echo 'Request ID: ' . $e->getRequestId() . '\\n';\n} catch (\\Stripe\\Exception\\ApiErrorException $e) {\n  // All other Stripe API errors\n  echo 'Status: ' . $e->getHttpStatus() . '\\n';\n  echo 'Code: ' . $e->getError()->code . '\\n';\n  echo 'Message: ' . $e->getError()->message . '\\n';\n  echo 'Request ID: ' . $e->getRequestId() . '\\n';\n} catch (Exception $e) {\n  // Something else happened, completely unrelated to Stripe\n}"
        }
      ],
      "Java": [
        {
          "title": "",
          "code": "try {\n  // Use Stripe's library to make requests...\n} catch (CardException e) {\n  // A declined card error\n  System.out.println(\"Status: \" + e.getStatusCode());\n  System.out.println(\"Code: \" + e.getCode());\n  if (e.getDeclineCode() != null) {\n    System.out.println(\"Decline code: \" + e.getDeclineCode());\n  }\n  if (e.getParam() != null) {\n    System.out.println(\"Param: \" + e.getParam());\n  }\n  System.out.println(\"Message: \" + e.getMessage());\n  System.out.println(\"Request ID: \" + e.getRequestId());\n} catch (RateLimitException e) {\n  // Too many requests made to the API too quickly\n  System.out.println(\"Request ID: \" + e.getRequestId());\n} catch (InvalidRequestException e) {\n  // Invalid parameters were supplied to Stripe's API\n  System.out.println(\"Message: \" + e.getMessage());\n  if (e.getParam() != null) {\n    System.out.println(\"Param: \" + e.getParam());\n  }\n  System.out.println(\"Request ID: \" + e.getRequestId());\n} catch (AuthenticationException e) {\n  // Authentication with Stripe's API failed\n  System.out.println(\"Request ID: \" + e.getRequestId());\n} catch (APIConnectionException e) {\n  // Network communication with Stripe failed\n  System.out.println(\"Request ID: \" + e.getRequestId());\n} catch (StripeException e) {\n  // All other Stripe errors\n  System.out.println(\"Status: \" + e.getStatusCode());\n  System.out.println(\"Code: \" + e.getCode());\n  System.out.println(\"Message: \" + e.getMessage());\n  System.out.println(\"Request ID: \" + e.getRequestId());\n} catch (Exception e) {\n  // Something else happened, completely unrelated to Stripe\n}"
        }
      ],
      "Node.js": [
        {
          "title": "",
          "code": "// Note: Node.js API does not throw exceptions, and instead prefers the\n// asynchronous style of error handling described below.\n//\n// An error from the Stripe API or an otherwise asynchronous error\n// will be available as the first argument of any Stripe method's callback:\n// E.g. stripe.customers.create({...}, function(err, result) {});\n//\n// Or in the form of a rejected promise.\n// E.g. stripe.customers.create({...}).then(\n//        function(result) {},\n//        function(err) {}\n//      );\nswitch (err.type) {\n  case 'StripeCardError':\n    // A declined card error\n    console.log('Status:', err.statusCode);\n    console.log('Code:', err.code);\n    if (err.decline_code) console.log('Decline code:', err.decline_code);\n    if (err.param) console.log('Param:', err.param);\n    console.log('Message:', err.message);\n    console.log('Request ID:', err.requestId);\n    break;\n  case 'StripeRateLimitError':\n    // Too many requests made to the API too quickly\n    console.log('Request ID:', err.requestId);\n    break;\n  case 'StripeInvalidRequestError':\n    // Invalid parameters were supplied to Stripe's API\n    console.log('Message:', err.message);\n    if (err.param) console.log('Param:', err.param);\n    console.log('Request ID:', err.requestId);\n    break;\n  case 'StripeAPIError':\n    // An error occurred internally with Stripe's API\n    console.log('Request ID:', err.requestId);\n    break;\n  case 'StripeConnectionError':\n    // Some kind of error occurred during the HTTPS communication\n    console.log('Request ID:', err.requestId);\n    break;\n  case 'StripeAuthenticationError':\n    // You probably used an incorrect API key\n    console.log('Request ID:', err.requestId);\n    break;\n  default:\n    if (err instanceof stripe.errors.StripeError) {\n      // All other Stripe errors\n      console.log('Status: ' + err.statusCode);\n      console.log('Code: ' + err.code);\n      console.log('Message: ' + err.message);\n      console.log('Request ID: ' + err.requestId);\n    } else {\n      // Handle any other types of unexpected errors\n      throw err;\n    }\n    break;\n}"
        }
      ],
      "Go": [
        {
          "title": "",
          "code": "_, err := // Go library call\nif err != nil {\n  // Try to safely cast a generic error to a stripe.Error so that we can get at\n  // some additional Stripe-specific information about what went wrong.\n  if stripeErr, ok := err.(*stripe.Error); ok {\n    // The Code field will contain a basic identifier for the failure.\n    switch stripeErr.Code {\n      case stripe.ErrorCodeCardDeclined:\n      case stripe.ErrorCodeExpiredCard:\n      case stripe.ErrorCodeIncorrectCVC:\n      case stripe.ErrorCodeIncorrectZip:\n      // etc.\n    }\n    // The Err field can be coerced to a more specific error type with a type\n    // assertion. This technique can be used to get more specialized\n    // information for certain errors.\n    if cardErr, ok := stripeErr.Err.(*stripe.CardError); ok {\n      fmt.Printf(\"Card was declined with code: %v\\n\", cardErr.DeclineCode)\n    } else {\n      // All other Stripe API errors\n      fmt.Printf(\"Status: %d, Code: %s, Message: %s, Request ID: %s\\n\",\n        stripeErr.HTTPStatusCode, stripeErr.Code, stripeErr.Msg, stripeErr.RequestID)\n    }\n  } else {\n    // Non-API error (for example, network timeout) — err is a plain Go error, not *stripe.Error\n    fmt.Printf(\"Other error occurred: %v\\n\", err.Error())\n  }\n}"
        }
      ],
      ".NET": [
        {
          "title": "",
          "code": "try {\n  // Use Stripe's library to make request\n} catch (StripeException e) {\n  switch (e.StripeError.Type)\n  {\n    case \"card_error\":\n      // A declined card error\n      Console.WriteLine(\"Status: \" + (int)e.HttpStatusCode);\n      Console.WriteLine(\"Code: \" + e.StripeError.Code);\n      if (e.StripeError.DeclineCode != null)\n        Console.WriteLine(\"Decline code: \" + e.StripeError.DeclineCode);\n      if (e.StripeError.Param != null)\n        Console.WriteLine(\"Param: \" + e.StripeError.Param);\n      Console.WriteLine(\"Message: \" + e.StripeError.Message);\n      Console.WriteLine(\"Request ID: \" + e.StripeError.RequestId);\n      break;\n    case \"api_connection_error\":\n      // Network communication with Stripe failed\n      break;\n    case \"api_error\":\n      // An error occurred internally with Stripe's API\n      break;\n    case \"authentication_error\":\n      // Authentication with Stripe's API failed\n      break;\n    case \"invalid_request_error\":\n      // Invalid parameters were supplied to Stripe's API\n      Console.WriteLine(\"Message: \" + e.StripeError.Message);\n      if (e.StripeError.Param != null)\n        Console.WriteLine(\"Param: \" + e.StripeError.Param);\n      break;\n    case \"rate_limit_error\":\n      // Too many requests made to the API too quickly\n      break;\n    case \"validation_error\":\n      break;\n    default:\n      // All other Stripe errors\n      Console.WriteLine(\"Status: \" + (int)e.HttpStatusCode);\n      Console.WriteLine(\"Code: \" + e.StripeError?.Code);\n      Console.WriteLine(\"Message: \" + e.StripeError?.Message);\n      Console.WriteLine(\"Type: \" + e.StripeError?.Type);\n      break;\n  }\n}"
        }
      ]
    },
    "responses": []
  },
  "expanding-responses": {
    "byLanguage": {
      "cURL": [
        {
          "title": "",
          "code": "curl https://api.stripe.com/v1/charges/ch_3LmzzQ2eZvKYlo2C0XjzUzJV \\\n  -u __STRIPE_SAMPLE_TEST_KEY__: \\\n  -d \"expand[]\"=customer \\\n  -d \"expand[]\"=\"payment_intent.customer\" \\\n  -G"
        }
      ],
      "Stripe CLI": [
        {
          "title": "",
          "code": "stripe charges retrieve ch_3Ln0gE2eZvKYlo2C053ToesO \\\n    --expand=customer \\\n    --expand=payment_intent.customer"
        }
      ],
      "Ruby": [
        {
          "title": "",
          "code": "require 'stripe'\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = Stripe::StripeClient.new(\"__STRIPE_SAMPLE_TEST_KEY__\")\nclient.v1.charges.retrieve(\n  id: 'ch_3Ln0gP2eZvKYlo2C1Dnjwdpu',\n  {expand: ['customer', 'payment_intent.customer']}\n)"
        }
      ],
      "Python": [
        {
          "title": "",
          "code": "from stripe import StripeClient\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncharge = client.v1.charges.retrieve(\n  'ch_3Ln0cK2eZvKYlo2C1QmvaARY',\n  {\"expand\": ['customer', 'payment_intent.customer']}\n)"
        }
      ],
      "PHP": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\n$stripe = new \\Stripe\\StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\n$stripe->charges->retrieve(\n  'ch_3Ln0WI2eZvKYlo2C1PO0FwVL',\n  ['expand' => ['customer', 'payment_intent.customer']]\n);"
        }
      ],
      "Java": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nStripeClient client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nChargeRetrieveParams params =\n  ChargeRetrieveParams.builder()\n    .addExpand(\"customer\")\n    .addExpand(\"payment_intent.customer\")\n    .build();\nCharge charge = client.v1().charges().retrieve(\"ch_3Ln0Z82eZvKYlo2C0Ldu2duz\", params);"
        }
      ],
      "Node.js": [
        {
          "title": "",
          "code": "import Stripe from 'stripe';\n// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nconst stripe = new Stripe('__STRIPE_SAMPLE_TEST_KEY__');\nstripe.charges.retrieve('ch_3Ln0H22eZvKYlo2C0tgkG5bn', {\n  expand: ['customer', 'payment_intent.customer'],\n});"
        }
      ],
      "Go": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nsc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\nparams := &stripe.ChargeRetrieveParams{}\nparams.AddExpand(\"customer\")\nparams.AddExpand(\"payment_intent.customer\")\nch, err := sc.V1Charges.Retrieve(context.TODO(), \"ch_3Ln0Ma2eZvKYlo2C1XyBAcDu\", params)"
        }
      ],
      ".NET": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nvar client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nvar options = new ChargeGetOptions();\noptions.AddExpand(\"customer\");\noptions.AddExpand(\"payment_intent.customer\");\nvar charge = client.V1.Charges.Get(\"ch_3Ln0Z72eZvKYlo2C0cMcdZfa\", options);"
        }
      ]
    },
    "responses": [
      {
        "title": "Response",
        "code": "{\n  \"id\": \"ch_3LmzzQ2eZvKYlo2C0XjzUzJV\",\n  \"object\": \"charge\",\n  \"customer\": {\n    \"id\": \"cu_14HOpH2eZvKYlo2CxXIM7Pb2\",\n    \"object\": \"customer\",\n    // ...\n  },\n  \"payment_intent\": {\n    \"id\": \"pi_3MtwBwLkdIwHu7ix28a3tqPa\",\n    \"object\": \"payment_intent\",\n    \"customer\": {\n      \"id\": \"cus_NffrFeUfNV2Hib\",\n      \"object\": \"customer\",\n      // ...\n    },\n    // ...\n  },\n  // ...\n}"
      }
    ]
  },
  "idempotent-requests": {
    "byLanguage": {
      "cURL": [
        {
          "title": "",
          "code": "curl https://api.stripe.com/v1/customers \\\n  -u __STRIPE_SAMPLE_TEST_KEY__: \\\n  -H \"Idempotency-Key: KG5LxwFBepaKHyUD\" \\\n  -d description=\"My First Test Customer (created for API docs at https://docs.stripe.com/api)\""
        }
      ],
      "Stripe CLI": [
        {
          "title": "",
          "code": "stripe customers create \\\n    --idempotency=TvqqU7glUbURMzQT \\\n    --description=\"My First Test Customer (created for API docs at https://docs.stripe.com/api)\" \\"
        }
      ],
      "Ruby": [
        {
          "title": "",
          "code": "require 'stripe'\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = Stripe::StripeClient.new(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncustomer = client.v1.customers.create({\n  description: 'My First Test Customer (created for API docs at https://docs.stripe.com/api)',\n}, {\n  idempotency_key: 'KG5LxwFBepaKHyUD',\n})"
        }
      ],
      "Python": [
        {
          "title": "",
          "code": "from stripe import StripeClient\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncustomer = client.v1.customers.create(\n  {\n  'description': 'My First Test Customer (created for API docs at https://docs.stripe.com/api)',\n  },\n  {\n    'idempotency_key': 'KG5LxwFBepaKHyUD',\n  }\n)"
        }
      ],
      "PHP": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\n$stripe = new \\Stripe\\StripeClient('__STRIPE_SAMPLE_TEST_KEY__');\n$customer = $stripe->customers->create([\n  'description' => 'My First Test Customer (created for API docs at https://docs.stripe.com/api)',\n], [\n  'idempotency_key' => 'KG5LxwFBepaKHyUD'\n]);"
        }
      ],
      "Java": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nStripeClient client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nCustomerCreateParams customerParams =\n  CustomerCreateParams.builder()\n    .setDescription(\"My First Test Customer (created for API docs at https://docs.stripe.com/api)\")\n    .build();\nRequestOptions options =\n  RequestOptions.builder()\n    .setIdempotencyKey(\"KG5LxwFBepaKHyUD\")\n    .build();\nCustomer customer = client.v1().customers().create(customerParams, options);"
        }
      ],
      "Node.js": [
        {
          "title": "",
          "code": "import Stripe from 'stripe';\n// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nconst stripe = new Stripe('__STRIPE_SAMPLE_TEST_KEY__');\nconst customer = await stripe.customers.create(\n  {\n    description: 'My First Test Customer (created for API docs at https://docs.stripe.com/api)',\n  },\n  {\n    idempotencyKey: 'KG5LxwFBepaKHyUD',\n  }\n);"
        }
      ],
      "Go": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nsc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\nparams := &stripe.CustomerCreateParams{\n  Description: stripe.String(\"My First Test Customer (created for API docs at https://docs.stripe.com/api)\"),\n}\nparams.SetIdempotencyKey(\"KG5LxwFBepaKHyUD\")\ncus, err := sc.V1Customers.Create(context.TODO(), params)"
        }
      ],
      ".NET": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nvar client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nvar options = new CustomerCreateOptions\n{\n  Description = \"My First Test Customer (created for API docs at https://docs.stripe.com/api)\",\n};\nvar requestOptions = new RequestOptions\n{\n  IdempotencyKey = \"KG5LxwFBepaKHyUD\",\n};\nvar customer = client.V1.Customers.Create(options, requestOptions);"
        }
      ]
    },
    "responses": []
  },
  "include-dependent-response-values": {
    "byLanguage": {
      "cURL": [
        {
          "title": "",
          "code": "curl -X POST https://api.stripe.com/v2/core/accounts \\\n  -H \"Authorization: Bearer __STRIPE_SAMPLE_TEST_KEY__\" \\\n  -H \"Stripe-Version: 2026-06-24.preview\" \\\n  --json '{\n    \"include\": [\n        \"identity\",\n        \"configuration.customer\"\n    ]\n  }'"
        }
      ],
      "Stripe CLI": [
        {
          "title": "",
          "code": "stripe v2 core accounts create  \\\n  --include=identity \\\n  --include=\"configuration.customer\""
        }
      ],
      "Ruby": [
        {
          "title": "",
          "code": "client = Stripe::StripeClient.new(\"__STRIPE_SAMPLE_TEST_KEY__\")\naccount = client.v2.core.accounts.create({\n  include: ['identity', 'configuration.customer'],\n})"
        }
      ],
      "Python": [
        {
          "title": "",
          "code": "client = StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\naccount = client.v2.core.accounts.create({\n  \"include\": [\"identity\", \"configuration.customer\"],\n})"
        }
      ],
      "PHP": [
        {
          "title": "",
          "code": "$stripe = new \\Stripe\\StripeClient('__STRIPE_SAMPLE_TEST_KEY__');\n$account = $stripe->v2->core->accounts->create([\n  'include' => ['identity', 'configuration.customer'],\n]);"
        }
      ],
      "Java": [
        {
          "title": "",
          "code": "StripeClient client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nAccountCreateParams params =\n  AccountCreateParams.builder()\n    .addInclude(AccountCreateParams.Include.IDENTITY)\n    .addInclude(AccountCreateParams.Include.CONFIGURATION__CUSTOMER)\n    .build();\nAccount account = client.v2().core().accounts().create(params);"
        }
      ],
      "Node.js": [
        {
          "title": "",
          "code": "const stripe = require('stripe')('__STRIPE_SAMPLE_TEST_KEY__');\nconst account = await stripe.v2.core.accounts.create({\n  include: ['identity', 'configuration.customer'],\n});"
        }
      ],
      "Go": [
        {
          "title": "",
          "code": "sc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\nparams := &stripe.V2CoreAccountCreateParams{\n  Include: []*string{\n    stripe.String(\"identity\"),\n    stripe.String(\"configuration.customer\"),\n  },\n}\nresult, err := sc.V2CoreAccounts.Create(context.TODO(), params)"
        }
      ],
      ".NET": [
        {
          "title": "",
          "code": "var options = new Stripe.V2.Core.AccountCreateOptions\n{\n    Include = new List<string> { \"identity\", \"configuration.customer\" },\n};\nvar client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nvar service = client.V2.Core.Accounts;\nStripe.V2.Core.Account account = service.Create(options);"
        }
      ]
    },
    "responses": [
      {
        "title": "Response",
        "code": "{\n  \"id\": \"acct_123\",\n  \"object\": \"v2.core.account\",\n  \"applied_configurations\": [\n    \"customer\",\n    \"merchant\"\n  ],\n  \"configuration\": {\n    \"customer\": {\n      \"automatic_indirect_tax\": {\n        ...\n      },\n      \"billing\": {\n        ...\n      },\n      \"capabilities\": {\n        ...\n      },\n      ...\n    },\n    \"merchant\": null,\n    \"recipient\": null\n  },\n  \"contact_email\": \"furever@example.com\",\n  \"created\": \"2025-06-09T21:16:03.000Z\",\n  \"dashboard\": \"full\",\n  \"defaults\": null,\n  \"display_name\": \"Furever\",\n  \"identity\": {\n    \"business_details\": {\n      \"doing_business_as\": \"FurEver\",\n      \"id_numbers\": [\n        {\n          \"type\": \"us_ein\"\n        }\n      ],\n      \"product_description\": \"Saas pet grooming platform at furever.dev using Connect embedded components\",\n      \"structure\": \"sole_proprietorship\",\n      \"url\": \"http://accessible.stripe.com\"\n    },\n    \"country\": \"US\"\n  },\n  \"livemode\": true,\n  \"metadata\": {},\n  \"requirements\": null\n}"
      }
    ]
  },
  "metadata": {
    "byLanguage": {
      "cURL": [
        {
          "title": "",
          "code": "curl https://api.stripe.com/v1/customers \\\n  -u \"__STRIPE_SAMPLE_TEST_KEY__:\" \\\n  -d \"metadata[order_id]=6735\""
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ],
      "Stripe CLI": [
        {
          "title": "",
          "code": "stripe customers create  \\\n  -d \"metadata[order_id]\"=6735"
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ],
      "Ruby": [
        {
          "title": "",
          "code": "client = Stripe::StripeClient.new(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncustomer = client.v1.customers.create({metadata: {order_id: '6735'}})"
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ],
      "Python": [
        {
          "title": "",
          "code": "client = StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncustomer = client.v1.customers.create({\"metadata\": {\"order_id\": \"6735\"}})"
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ],
      "PHP": [
        {
          "title": "",
          "code": "$stripe = new \\Stripe\\StripeClient('__STRIPE_SAMPLE_TEST_KEY__');\n$customer = $stripe->customers->create(['metadata' => ['order_id' => '6735']]);"
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ],
      "Java": [
        {
          "title": "",
          "code": "StripeClient client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nCustomerCreateParams params =\n  CustomerCreateParams.builder().putMetadata(\"order_id\", \"6735\").build();\nCustomer customer = client.v1().customers().create(params);"
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ],
      "Node.js": [
        {
          "title": "",
          "code": "const stripe = require('stripe')('__STRIPE_SAMPLE_TEST_KEY__');\nconst customer = await stripe.customers.create({\n  metadata: {\n    order_id: '6735',\n  },\n});"
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ],
      "Go": [
        {
          "title": "",
          "code": "sc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\nparams := &stripe.CustomerCreateParams{}\nparams.AddMetadata(\"order_id\", \"6735\")\nresult, err := sc.V1Customers.Create(context.TODO(), params)"
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ],
      ".NET": [
        {
          "title": "",
          "code": "var options = new CustomerCreateOptions\n{\n    Metadata = new Dictionary<string, string> { { \"order_id\", \"6735\" } },\n};\nvar client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nvar service = client.V1.Customers;\nCustomer customer = service.Create(options);"
        },
        {
          "title": "",
          "code": "{\n  \"id\": \"cus_123456789\",\n  \"object\": \"customer\",\n  \"address\": {\n    \"city\": \"city\",\n    \"country\": \"US\",\n    \"line1\": \"line 1\",\n    \"line2\": \"line 2\",\n    \"postal_code\": \"90210\",\n    \"state\": \"CA\"\n  },\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": null,\n  \"default_source\": null,\n  \"delinquent\": false,\n  \"description\": null,\n  \"discount\": null,\n  \"email\": null,\n  \"invoice_prefix\": \"C11F7E1\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": null,\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": null,\n  \"next_invoice_sequence\": 1,\n  \"phone\": null,\n  \"preferred_locales\": [],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\"\n}"
        }
      ]
    },
    "responses": []
  },
  "pagination": {
    "byLanguage": {
      "cURL": [],
      "Stripe CLI": [],
      "Ruby": [],
      "Python": [],
      "PHP": [],
      "Java": [],
      "Node.js": [],
      "Go": [],
      ".NET": []
    },
    "responses": [
      {
        "title": "Response",
        "code": "{\n  \"object\": \"list\",\n  \"url\": \"/v1/customers\",\n  \"has_more\": false,\n  \"data\": [\n    {\n      \"id\": \"cus_4QFJOjw2pOmAGJ\",\n      \"object\": \"customer\",\n      \"address\": null,\n      \"balance\": 0,\n      \"created\": 1405641735,\n      \"currency\": \"usd\",\n      \"default_source\": \"card_14HOpG2eZvKYlo2Cz4u5AJG5\",\n      \"delinquent\": false,\n      \"description\": \"New customer\",\n      \"discount\": null,\n      \"email\": null,\n      \"invoice_prefix\": \"7D11B54\",\n      \"invoice_settings\": {\n        \"custom_fields\": null,\n        \"default_payment_method\": null,\n        \"footer\": null,\n        \"rendering_options\": null\n      },\n      \"livemode\": false,\n      \"metadata\": {\n        \"order_id\": \"6735\"\n      },\n      \"name\": \"cus_4QFJOjw2pOmAGJ\",\n      \"next_invoice_sequence\": 25,\n      \"phone\": null,\n      \"preferred_locales\": [],\n      \"shipping\": null,\n      \"tax_exempt\": \"none\",\n      \"test_clock\": null\n    },\n  ]\n}"
      }
    ]
  },
  "search": {
    "byLanguage": {
      "cURL": [],
      "Stripe CLI": [],
      "Ruby": [],
      "Python": [],
      "PHP": [],
      "Java": [],
      "Node.js": [],
      "Go": [],
      ".NET": []
    },
    "responses": [
      {
        "title": "Response",
        "code": "{\n  \"object\": \"search_result\",\n  \"url\": \"/v1/customers/search\",\n  \"has_more\": false,\n  \"data\": [\n    {\n      \"id\": \"cus_4QFJOjw2pOmAGJ\",\n      \"object\": \"customer\",\n      \"address\": null,\n      \"balance\": 0,\n      \"created\": 1405641735,\n      \"currency\": \"usd\",\n      \"default_source\": \"card_14HOpG2eZvKYlo2Cz4u5AJG5\",\n      \"delinquent\": false,\n      \"description\": \"someone@example.com for Coderwall\",\n      \"discount\": null,\n      \"email\": null,\n      \"invoice_prefix\": \"7D11B54\",\n      \"invoice_settings\": {\n        \"custom_fields\": null,\n        \"default_payment_method\": null,\n        \"footer\": null,\n        \"rendering_options\": null\n      },\n      \"livemode\": false,\n      \"metadata\": {\n        \"foo\": \"bar\"\n      },\n      \"name\": \"fakename\",\n      \"next_invoice_sequence\": 25,\n      \"phone\": null,\n      \"preferred_locales\": [],\n      \"shipping\": null,\n      \"tax_exempt\": \"none\",\n      \"test_clock\": null\n    }\n  ]\n}"
      }
    ]
  },
  "auto-pagination": {
    "byLanguage": {
      "cURL": [
        {
          "title": "",
          "code": "# The auto-pagination feature is specific to Stripe's\n# libraries and cannot be used directly with curl."
        }
      ],
      "Stripe CLI": [
        {
          "title": "",
          "code": "# The auto-pagination feature is specific to Stripe's\n# libraries and cannot be used directly with the CLI."
        }
      ],
      "Ruby": [
        {
          "title": "",
          "code": "require 'stripe'\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = Stripe::StripeClient.new(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncustomers = client.v1.customers.list({limit: 3})\ncustomers.auto_paging_each do |customer|\n  # Do something with customer\nend"
        }
      ],
      "Python": [
        {
          "title": "",
          "code": "from stripe import StripeClient\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncustomers = client.v1.customers.list(params={'limit': 3})\nfor customer in customers.auto_paging_iter():\n  # Do something with customer"
        }
      ],
      "PHP": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\n$stripe = new \\Stripe\\StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\n$customers = $stripe->customers->all([\n  'limit' => 3,\n]);\nforeach ($customers->autoPagingIterator() as $customer) {\n  // Do something with $customer\n}"
        }
      ],
      "Java": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nStripeClient client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nCustomerListParams params =\n  CustomerListParams.builder()\n    .setLimit(3L)\n    .build();\nfor (Customer customer : client.v1().customers().list(params).autoPagingIterable()) {\n  // Do something with customer\n}"
        }
      ],
      "Node.js": [
        {
          "title": "",
          "code": "import Stripe from 'stripe';\n// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nconst stripe = new Stripe('__STRIPE_SAMPLE_TEST_KEY__');\n// In Node 10+:\nfor await (const customer of stripe.customers.list({limit: 3})) {\n  // Do something with customer\n}\n// In other environments:\nstripe.customers.list({limit: 3})\n  .autoPagingEach(function(customer) {\n    // Do something with customer\n  });"
        }
      ],
      "Go": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nsc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\nparams := &stripe.CustomerListParams{}\nparams.Filters.AddFilter(\"limit\", \"\", \"3\")\nfor c, _ := range sc.V1Customers.List(context.TODO(), params).All(context.TODO()) {\n  // Do something with customer\n}"
        }
      ],
      ".NET": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nvar client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nvar options = new CustomerListOptions {\n  Limit = 3\n};\n// Synchronously paginate\nforeach (var customer in client.V1.Customers.ListAutoPaging(options)) {\n  // Do something with customer\n}\n// Asynchronously paginate\nawait foreach (var customer in client.V1.Customers.ListAutoPagingAsync(options)) {\n  // Do something with customer\n}"
        }
      ]
    },
    "responses": []
  },
  "request-ids": {
    "byLanguage": {
      "cURL": [
        {
          "title": "",
          "code": "curl https://api.stripe.com/v1/customers \\\n  -u __STRIPE_SAMPLE_TEST_KEY__: \\\n  -D \"-\" \\\n  -X POST"
        }
      ],
      "Stripe CLI": [
        {
          "title": "",
          "code": "stripe customers create --show-headers"
        }
      ],
      "Ruby": [
        {
          "title": "",
          "code": "require 'stripe'\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = Stripe::StripeClient.new(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncustomer = client.v1.customers.create()\nputs customer.last_response.request_id"
        }
      ],
      "Python": [
        {
          "title": "",
          "code": "from stripe import StripeClient\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncustomer = client.v1.customers.create()\nprint(customer.last_response.request_id)"
        }
      ],
      "PHP": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\n$stripe = new \\Stripe\\StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\n$customer = $stripe->customers->create();\necho $customer->getLastResponse()->headers[\"Request-Id\"];"
        }
      ],
      "Java": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nStripeClient client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nCustomer customer = client.v1().customers().create(CustomerCreateParams.builder().build());\nSystem.out.println(customer.getLastResponse().requestId());"
        }
      ],
      "Node.js": [
        {
          "title": "",
          "code": "import Stripe from 'stripe';\n// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nconst stripe = new Stripe('__STRIPE_SAMPLE_TEST_KEY__');\nvar customer = await stripe.customers.create();\nconsole.log(customer.lastResponse.requestId);"
        }
      ],
      "Go": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nsc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\n// currently stripe-go only returns the request ID for an error.\nparams := &stripe.CustomerCreateParams{\n}\nparams.SetSource(\"tok_chargeDeclined\")\ncus, err := sc.V1Customers.Create(context.TODO(), params)\nif err != nil {\n  if stripeErr, ok := err.(*stripe.Error); ok {\n    fmt.Printf(\"Request ID : %v\\n\", stripeErr.RequestID)\n  }\n}"
        }
      ],
      ".NET": [
        {
          "title": "",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nvar client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nCustomer customer = client.V1.Customers.Create(null);\nConsole.WriteLine(customer.RequestId);"
        }
      ]
    },
    "responses": []
  },
  "connected-accounts": {
    "byLanguage": {
      "cURL": [
        {
          "title": "Per-Request Account",
          "code": "curl https://api.stripe.com/v1/charges/ch_3LmjFA2eZvKYlo2C09TLIsrw \\\n  -u __STRIPE_SAMPLE_TEST_KEY__: \\\n  -H \"Stripe-Account: acct_1032D82eZvKYlo2C\" \\\n  -G"
        }
      ],
      "Stripe CLI": [
        {
          "title": "Per-Request Account",
          "code": "stripe charges retrieve ch_3LmjIH2eZvKYlo2C067UssSm \\\n    --stripe-account acct_1032D82eZvKYlo2C"
        }
      ],
      "Ruby": [
        {
          "title": "Per-Request Account",
          "code": "require 'stripe'\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = Stripe::StripeClient.new(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncharge = client.v1.charges.retrieve(\n  'ch_3Lmjo22eZvKYlo2C1kuO4yZM',\n  {},\n  {\n    stripe_account: 'acct_1032D82eZvKYlo2C',\n  }\n)\ncharge.capture # Uses the same account."
        }
      ],
      "Python": [
        {
          "title": "Per-Request Account",
          "code": "from stripe import StripeClient\n# Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nclient = StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\ncharge = client.v1.charges.retrieve(\n  \"ch_3Lmjoz2eZvKYlo2C1rBER4Dk\",\n  options={\n    \"stripe_account\": \"acct_1032D82eZvKYlo2C\"\n  }\n)\ncharge.capture() # Uses the same account."
        }
      ],
      "PHP": [
        {
          "title": "Per-Request Account",
          "code": "$ch = $stripe->charges->retrieve(\n  'ch_3Lmjrl2eZvKYlo2C1bscjw8Z',\n  [],\n  ['stripe_account' => 'acct_1032D82eZvKYlo2C']\n);\n$ch->capture(); // Uses the same account."
        }
      ],
      "Java": [
        {
          "title": "Per-Request Account",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nStripeClient stripeClient = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nRequestOptions requestOptions = RequestOptions.builder()\n  .setStripeAccount(\"acct_1032D82eZvKYlo2C\")\n  .build();\nCharge charge = stripeClient.v1().charges().retrieve(\"ch_3LmjsM2eZvKYlo2C1CcKvJbn\", requestOptions);"
        }
      ],
      "Node.js": [
        {
          "title": "Per-Request Account",
          "code": "stripe.charges.retrieve('ch_3LmjSR2eZvKYlo2C1cPZxlbL', {\n  stripeAccount: 'acct_1032D82eZvKYlo2C'\n});"
        }
      ],
      "Go": [
        {
          "title": "Per-Request Account",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nsc := stripe.NewClient(\"__STRIPE_SAMPLE_TEST_KEY__\")\nparams := &stripe.ChargeRetrieveParams{}\nparams.SetStripeAccount(\"acct_1032D82eZvKYlo2C\")\nch, err := sc.V1Charges.Retrieve(context.TODO(), \"ch_3Lmjso2eZvKYlo2C0rTTv0MK\", params)"
        }
      ],
      ".NET": [
        {
          "title": "Per-Request Account",
          "code": "// Test mode key; don't put live keys in code. See https://docs.stripe.com/keys-best-practices.\nvar client = new StripeClient(\"__STRIPE_SAMPLE_TEST_KEY__\");\nvar options = new RequestOptions\n{\n  StripeAccount = \"acct_1032D82eZvKYlo2C\"\n};\nCharge charge = client.V1.Charges.Get(\n  \"ch_3Ln3kB2eZvKYlo2C1YRBr0Ll\",\n  null,\n  options\n);"
        }
      ]
    },
    "responses": []
  },
  "versioning": {
    "byLanguage": {
      "cURL": [],
      "Stripe CLI": [],
      "Ruby": [],
      "Python": [],
      "PHP": [],
      "Java": [],
      "Node.js": [],
      "Go": [],
      ".NET": []
    },
    "responses": []
  }
};

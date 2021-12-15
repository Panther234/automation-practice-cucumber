$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/SignPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn Page checks",
  "description": "",
  "id": "signin-page-checks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11668956500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 149848600,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "As a User I Should Navigate To SignIn Page Successfully",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Sanity"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I Click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can verify that \u0027AUTHENTICATION\u0027 message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1739471100,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iCanVerifyThatAUTHENTICATIONMessageIsDisplayed()"
});
formatter.result({
  "duration": 63606900,
  "status": "passed"
});
formatter.after({
  "duration": 255700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "As a user I can verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cUSERNAME\u003e\" in email address field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"\u003cPASSWORD\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Sign In\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Error message \"\u003cMESSAGE\u003e\" displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "USERNAME",
        "PASSWORD",
        "MESSAGE"
      ],
      "line": 19,
      "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 20,
      "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 21,
      "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 22,
      "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 23,
      "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5450797000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "As a user I can verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"123456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Sign In\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Error message \"An email address required.\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1492002000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "SignPageTestSteps.iEnterInEmailAddressField(String)"
});
formatter.result({
  "duration": 153518500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SignPageTestSteps.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 308842700,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1542676000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 24
    }
  ],
  "location": "SignPageTestSteps.iVerifyErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 94039300,
  "status": "passed"
});
formatter.after({
  "duration": 43400,
  "status": "passed"
});
formatter.before({
  "duration": 6995365900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "As a user I can verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter \"abcd@gmail.com\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Sign In\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Error message \"Password is required.\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2747726100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 9
    }
  ],
  "location": "SignPageTestSteps.iEnterInEmailAddressField(String)"
});
formatter.result({
  "duration": 221761800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "SignPageTestSteps.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 199239300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1037411900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 24
    }
  ],
  "location": "SignPageTestSteps.iVerifyErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 49324700,
  "status": "passed"
});
formatter.after({
  "duration": 78900,
  "status": "passed"
});
formatter.before({
  "duration": 5815747600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 48700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "As a user I can verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter \"adfdfgfg\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"123456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Sign In\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Error message \"Invalid email address.\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1564908800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 9
    }
  ],
  "location": "SignPageTestSteps.iEnterInEmailAddressField(String)"
});
formatter.result({
  "duration": 138062800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SignPageTestSteps.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 199974200,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1071207800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 24
    }
  ],
  "location": "SignPageTestSteps.iVerifyErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 69611800,
  "status": "passed"
});
formatter.after({
  "duration": 73600,
  "status": "passed"
});
formatter.before({
  "duration": 5986318000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 323100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "As a user I can verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-can-verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter \"abcd@gmail.com\" in email address field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"123456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Sign In\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Error message \"Authentication failed.\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1699648400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 9
    }
  ],
  "location": "SignPageTestSteps.iEnterInEmailAddressField(String)"
});
formatter.result({
  "duration": 258367800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SignPageTestSteps.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 186689600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1045656700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 24
    }
  ],
  "location": "SignPageTestSteps.iVerifyErrorMessageDisplayed(String)"
});
formatter.result({
  "duration": 71148300,
  "status": "passed"
});
formatter.after({
  "duration": 98200,
  "status": "passed"
});
formatter.before({
  "duration": 5801780300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 62900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "As a user I can verify that user should Login successfully with valid credentials",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-can-verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Smoke"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I Click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I Enter Email in email address field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Enter Password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on \u0027Sign In\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can Verify that Sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2151994100,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iEnterEmailInEmailAddressField()"
});
formatter.result({
  "duration": 223018500,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 194385300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1628664900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iCanVerifyThatSignOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 124233500,
  "status": "passed"
});
formatter.after({
  "duration": 34900,
  "status": "passed"
});
formatter.before({
  "duration": 6477503900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 98100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "As a user I can verify that user should Logout successfully",
  "description": "",
  "id": "signin-page-checks;as-a-user-i-can-verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I Click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I Enter Email in email address field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Enter Password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on \u0027Sign In\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on \u0027Sign Out\u0027 Link",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I can Verify that Sign in link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1896293600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iEnterEmailInEmailAddressField()"
});
formatter.result({
  "duration": 240510700,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 255231900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1521236000,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 1897960600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTestSteps.iCanVerifyThatSignInLinkIsDisplayed()"
});
formatter.result({
  "duration": 125859900,
  "status": "passed"
});
formatter.after({
  "duration": 76200,
  "status": "passed"
});
});
Feature: SignIn Page checks

  Background:
    Given I am on Homepage

  @Sanity @Regression
  Scenario: As a User I Should Navigate To SignIn Page Successfully
    When I Click on Sign In link
    Then I can verify that 'AUTHENTICATION' message is displayed

  @Sanity @Smoke @Regression
  Scenario Outline: As a user I can verify The Error Message With InValid Credentials
    When I Click on Sign In link
    And I enter "<USERNAME>" in email address field
    And I enter "<PASSWORD>" in password field
    And I click on 'Sign In' button
    Then I verify Error message "<MESSAGE>" displayed
    Examples:
      | USERNAME       | PASSWORD | MESSAGE                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  @Smoke @Regression
  Scenario:As a user I can verify that user should Login successfully with valid credentials
    When I Click on Sign In link
    And I Enter Email in email address field
    And I Enter Password in password field
    And I click on 'Sign In' button
    Then I can Verify that Sign out link is displayed

  @Regression
  Scenario:As a user I can verify that user should Logout successfully
    When I Click on Sign In link
    And I Enter Email in email address field
    And I Enter Password in password field
    And I click on 'Sign In' button
    And I click on 'Sign Out' Link
    Then I can Verify that Sign in link is displayed
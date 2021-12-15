Feature: Women Category Page check

  Background:
    Given I am on Homepage

  @Sanity @Regression
  Scenario: As a user I can verify user should navigate to women category page successfully
    When I click on 'Women' tab
    Then I can verify 'Women' text

  @Smoke @Regression
  Scenario Outline: As a user I can verify user should add product to the cart successfully
    When I click on 'Women' tab
    And I click on "<PRODUCT>"
    And I change the "<QTY>" in display quantity tab
    And I select "<SIZE>" from size list
    And I select "<COLOUR>" from available colour box
    And I click on 'Add to Cart' button
    And I can verify 'Message' displayed in popup
    Then I click 'close' button to close popup

    Examples:
      | PRODUCT                                | QTY | SIZE | COLOUR |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |

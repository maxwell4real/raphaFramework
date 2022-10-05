@addToBasket
Feature: Add Item to basket

  Scenario: Add Item to basket and proceed to checkout
    Given I navigate to PDP page
    And I scroll down to the buttom of the page
    And I choose product colour "1"
    And I select product size "40"
    And I add item to basket
    And I verify items added to basket on checkout page
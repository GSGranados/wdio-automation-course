Feature: Cucumber practice feature file

    This file is to enforce the core concepts on how to use cucumber as a BDD automation framework
    @cucumber-practice
    Rule: Everything should be done as a standard user
        # Background: I login into the platform
        #     Given I open the sauce demo page
        #     When I put my username
        #     * I put my password
        #     And I click on the login button
        #     Then I check for shopping cart icon
        #     But I should not be in the login page

        Scenario: <testID> adding a product to the shopping cart
            Given I add a product to the shopping cart
            Then I should see my product in the checkout page
            Examples:
                | testID       |
                | CUCUMBER-001 |

        Scenario: adding/removing a product from the shopping cart
            Given I add a product to the shopping cart
            And I remove it from the shopping cart
            Then I see the shopping cart icon goes back to zero
            But I should no longer see it in the checkout page








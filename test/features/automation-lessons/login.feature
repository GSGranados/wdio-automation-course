Feature: Login into Sauce Labs

    Login into sauce labs web platform with correct credentials
    # @login
    Scenario: Login with valid credentials

        Given I navigate to the sauce lab page
        When I enter the username
        * I enter the password
        And I click on the login button

Feature: AUTOMATION EXERCISE - User Account Management Flow

    This feature is to verify the correct functionality of the create account section
    Filling the required input fields

    @automation-exercise
    Scenario: <testID> Start Signup Process
        When I click on the signup button
        Then I validate the New User Sign up message is visible
        When I provide my username and email
            | Test Username |
        And I click on the Signup Button
        Then the ENTER ACCOUNT INFORMATION should be visible

        Examples:
            | testID           |
            | AUT-EXERCISE-001 |

    @automation-exercise
    Scenario: <testID> Complete the Registration Process
        Given I provide my personal information
            | Mr. | DummyPassword1 | 2-November-1996 |
        When I click on the signup for newsletter checkbox
        * I click on the receive offers checkbox
        * I fill the additional details
            | First Name | Last Name | Company | Address | Address2 | United States | State | City | zip | mobilePhoneNumber |
        And I click on the create account button
        Then I should see the account created success message

        Examples:
            | testID           |
            | AUT-EXERCISE-002 |

    @automation-exercise
    Scenario: <testID> Login and delete account process
        Given I click on the continue button
        Then I Validate the Logged in as username message is being visible
        And I click on the Logout button
        Then I Validate the Login to your account message is being visible
        When I provide my email and password
            | DummyPassword1 |
        And I click on the Login Button
        Then I Validate the Logged in as username message is being visible
        When I click on the Delete Account Button
        Then I Validate that ACCOUNT DELETED! message is being visible

        Examples:
            | testID           |
            | AUT-EXERCISE-003 |
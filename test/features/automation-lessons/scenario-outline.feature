Feature: All users login

    Test all users login capability
    @scenario-outline
    Rule: Every user should be tested - login into the platform

        Scenario Outline: Logging with all user roles
            Given I open the sauce demo page
            When I put my username: <username>
            * I put my password: <password>
            And I click on the login button

            Examples:
                | username                | password     |
                | standard_user           | secret_sauce |
                | problem_user            | secret_sauce |
                | performance_glitch_user | secret_sauce |
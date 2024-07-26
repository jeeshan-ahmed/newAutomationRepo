Feature: Test Login Functionality

  Scenario Outline: check login with valid credentials
    Given user is on the Home page
    When user navigates to Login page
    Then user login with <username> and <password>
    Then user will get a <message>

    Examples: 
      | username          | password | message                                                     |
      | alice@example.com | 10203040 | Sorry, this user has been locked out.                       |
      | 1@2.com           | f-o-o    | Provided credentials do not match any user in this service. |
      |                   |          | Username is required                                        |
      | bob@example.com   |          | Password is required                                        |
      | bob@example.com   | 10203040 | Products                                                    |

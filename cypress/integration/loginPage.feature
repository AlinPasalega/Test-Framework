@login-page
Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background: Navigate
      Given I open the application

    @success-login
    Scenario: Sucess Login      
      When A user enters the correct username "standard_user"
      Then the user enters the correct password "secret_sauce"
      When The user clicks on the "login button"
      Then the URL will contain the inventory subdirectory

    @blocked-login
    Scenario: Blocked Login
      When A user enters the locked out credentials "locked_out_user"
      Then the user enters the correct password "secret_sauce"
      When The user clicks on the "login button"
      Then I expect the error message to be visible and to contain the text "Epic sadface: Sorry, this user has been locked out."

    @incorrect-username
    Scenario: Incorrect Username Login
      When A user enters the correct username "standard_user"
      Then the user enters the incorrect password "test123"
      When The user clicks on the "login button"
      Then I expect the error message to be visible and to contain the text "Epic sadface: Username and password do not match any user in this service"

    @incorrect-password
    Scenario: Incorrect Password Login
      When A user enters the incorrect username "test-user"
      Then the user enters the correct password "secret_sauce"
      When The user clicks on the "login button"
      Then I expect the error message to be visible and to contain the text "Epic sadface: Username and password do not match any user in this service"

    @problem-user
    Scenario: Problem user Login
      When A user enters the problem username credentials "problem_user"
      Then the user enters the correct password "secret_sauce"
      When The user clicks on the "login button"
      Then I expect all the items to have the same image

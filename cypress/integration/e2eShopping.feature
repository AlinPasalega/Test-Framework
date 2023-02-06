@e2e-shopping
Feature: End-To-End Shopping

    Scenario: Shopping E2E
     Given I open the application
     When A user enters the correct username "standard_user"
     Then the user enters the correct password "secret_sauce"
     When The user clicks on the "login button"
     Then I expect the product page to be visible
     When I click on the 'backPackItem'
     Then I click on the 'tshirtItem'
     And I expect the 'removeBackPack' to be visible
     And I expect the 'removeTShirt' to be visible
     And I expect the 'shoppingCartBadge' to contain the text "2"
     When I click on the 'shoppingCart'
     Then I expect the shopping cart page to be visible
     And I expect the 'itemQuantity' to be visible
     And I expect the 'removeBackPack' to be visible
     And I expect the 'removeTShirt' to be visible
     When I click on the 'checkoutButton'
     Then I expect the 'firsNameField' to be visible
     And I expect the 'lastNameField' to be visible
     And I expect the 'postalCodeField' to be visible
     Then I proceed on filling all the necessary fields
     When I click on the 'continueButton'
     Then I expect the 'checkoutOverview' to be visible
     And I expect the 'checkoutSummary' to be visible
     And I expect the 'cartList' to be visible
     When I click on the 'finishButton'
     Then I expect the 'thankYouHeader' to contain the text 'THANK YOU FOR YOUR ORDER'
     And I expect the 'checkoutImage' to be visible
     And I expect the 'backHomeBtn' to be visible
     Then I click on the 'backHomeBtn'
     And I expect the product page to be visible
     And I expect the 'shoppingCartBadge' to not exist

    Scenario: Checkout withouth setting a first name
     Given I open the application
     When A user enters the correct username "standard_user"
     Then the user enters the correct password "secret_sauce"
     When The user clicks on the "login button"
     Then I expect the product page to be visible
     And I click on the 'tshirtItem'
     And I expect the 'removeTShirt' to be visible
     And I expect the 'shoppingCartBadge' to contain the text "1"
     When I click on the 'shoppingCart'
     Then I expect the shopping cart page to be visible
     And I expect the 'itemQuantity' to be visible
     And I expect the 'removeTShirt' to be visible
     When I click on the 'checkoutButton'
     Then I expect the 'firsNameField' to be visible
     And I expect the 'lastNameField' to be visible
     And I expect the 'postalCodeField' to be visible
     Then I proceed on adding a last name and postalcode
     When I click on the 'continueButton'
     Then I expect the 'errorMessage' to be visible
     And I expect the 'errorText' to contain the text 'Error: First Name is required'

    Scenario: Checkout withouth setting a last name
     Given I open the application
     When A user enters the correct username "standard_user"
     Then the user enters the correct password "secret_sauce"
     When The user clicks on the "login button"
     Then I expect the product page to be visible
     And I click on the 'tshirtItem'
     And I expect the 'removeTShirt' to be visible
     And I expect the 'shoppingCartBadge' to contain the text "1"
     When I click on the 'shoppingCart'
     Then I expect the shopping cart page to be visible
     And I expect the 'itemQuantity' to be visible
     And I expect the 'removeTShirt' to be visible
     When I click on the 'checkoutButton'
     Then I expect the 'firsNameField' to be visible
     And I expect the 'lastNameField' to be visible
     And I expect the 'postalCodeField' to be visible
     Then I proceed on adding a first name and postalcode
     When I click on the 'continueButton'
     Then I expect the 'errorMessage' to be visible
     And I expect the 'errorText' to contain the text 'Error: Last Name is required'

    Scenario: Checkout withouth setting a postal code
     Given I open the application
     When A user enters the correct username "standard_user"
     Then the user enters the correct password "secret_sauce"
     When The user clicks on the "login button"
     Then I expect the product page to be visible
     And I click on the 'tshirtItem'
     And I expect the 'removeTShirt' to be visible
     And I expect the 'shoppingCartBadge' to contain the text "1"
     When I click on the 'shoppingCart'
     Then I expect the shopping cart page to be visible
     And I expect the 'itemQuantity' to be visible
     And I expect the 'removeTShirt' to be visible
     When I click on the 'checkoutButton'
     Then I expect the 'firsNameField' to be visible
     And I expect the 'lastNameField' to be visible
     And I expect the 'postalCodeField' to be visible
     Then I proceed on adding a first name and last name
     When I click on the 'continueButton'
     Then I expect the 'errorMessage' to be visible
     And I expect the 'errorText' to contain the text 'Error: Postal Code is required'
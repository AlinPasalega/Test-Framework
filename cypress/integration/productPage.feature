@product-page
Feature: Product Page

    Background: Navigate
     Given I open the application
     When A user enters the correct username "standard_user"
     Then the user enters the correct password "secret_sauce"
     When The user clicks on the "login button"
     Then I expect the product page to be visible

    @add-remove-products
    Scenario: Adding and removing products from the shopping cart
     When I click on the 'backPackItem'
     Then I click on the 'tshirtItem'
     And I expect the 'removeBackPack' to be visible
     And I expect the 'removeTShirt' to be visible
     And I expect the 'shoppingCartBadge' to contain the text "2"
     When I click on the 'removeBackPack'
     Then I expect the 'shoppingCartBadge' to contain the text "1"

    @product-description
    Scenario: Check product description
     When I click on the item that contains the text 'Sauce Labs Onesie'
     And I expect the 'priceTag' to be visible
     And I expect the 'itemDetails' to be visible
     Then I click on the 'oneSieItem'
     And I expect the 'shoppingCartBadge' to contain the text "1"
     Then I click on the 'backToProductBtn'
     Then I expect the product page to be visible
     And I expect the 'shoppingCartBadge' to contain the text "1"

    @product-filtering    
    Scenario: Product Filtering
     And I expect the 'productFilter' to be visible
     When I select 'Price (high to low)' from the dropdown 'productFilter'
     Then the products should be sorted in ascending order by name
     And I click on the 'fleeceJacketItem'
     And I expect the 'shoppingCartBadge' to contain the text "1"
     And I expect the 'removeFleeceJacket' to be visible

    @add-remove-from-cart
    Scenario: Add a product to cart and remove it
     When I click on the 'backPackItem'
     Then I expect the 'removeBackPack' to be visible
     And I expect the 'shoppingCartBadge' to contain the text "1"
     When I click on the 'shoppingCart'
     Then I expect the shopping cart page to be visible
     And I expect the 'itemQuantity' to be visible
     When I click on the 'removeBackPack'
     Then I expect the 'shoppingCartBadge' to not exist
     And I expect the 'itemQuantity' to not exist
     When I click on the 'continueShoppingButton'
     Then I expect the product page to be visible
     And I expect the 'backPackItem' to be visible
     And I expect the 'shoppingCartBadge' to not exist

    @add-remove-several-products-from-cart
    Scenario: Adding several products and removing one product from the shopping cart
     When I click on the 'backPackItem'
     Then I click on the 'tshirtItem'
     And I expect the 'removeBackPack' to be visible
     And I expect the 'removeTShirt' to be visible
     And I expect the 'shoppingCartBadge' to contain the text "2"
     When I click on the 'shoppingCart'
     Then I expect the shopping cart page to be visible
     And I expect the 'itemQuantity' to be visible
     When I click on the 'removeTShirt'
     Then I expect the 'shoppingCartBadge' to contain the text "1"
     And I expect the 'removeTShirt' to not exist
     And I expect the 'removeBackPack' to be visible

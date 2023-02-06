
import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import { identifiers, verifyPage } from "../pageObjects/index";
import { page as loginPage } from "../pageObjects/loginPage";
import { page as productPage } from "../pageObjects/productPage";
import { page as myCartPage } from "../pageObjects/myCartPage";

Given("I open the application", () => {
    cy.visit("/");
});

// login steps
When('A user enters the correct username {string}', (username) => {
    cy.get(loginPage.selectors.userNameField).type(username)
})

Then('the user enters the correct password {string}', (password) => {
  cy.get(loginPage.selectors.passwordField).type(password)
})

When('The user clicks on the {string}', () => {
  cy.get(loginPage.selectors.loginButton).should('be.visible').click()
})

//page assertions
Then('I expect the product page to be visible', () => {
  verifyPage(productPage)
})

Then('I expect the shopping cart page to be visible', () => {
  verifyPage(myCartPage)
})

// general actions
Then('I click on the {string}', element => {
  cy.get(identifiers[element]).should('be.visible').click()
})

Then('I expect the {string} to not exist', element => {
  cy.get(identifiers[element]).should('not.exist')
})


Then('I expect the {string} to be visible', element => {
  cy.get(identifiers[element]).should('be.visible')
})

Then('I expect the {string} to contain the text {string}', (element, text) => {
  cy.get(identifiers[element]).should('be.visible')
  cy.get(identifiers[element]).should('contain', text)
})

Then('I click on the item that contains the text {string}', (text) => {
  cy.contains(text).should('be.visible').click()
})

Then('I select {string} from the dropdown {string}', (option, element) => {
  cy.get(identifiers[element]).select(option)
})
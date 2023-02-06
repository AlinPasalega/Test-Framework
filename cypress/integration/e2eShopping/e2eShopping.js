import {When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import { page as checkoutPage } from "../../pageObjects/checkoutPage";

import "../../commonSteps/generalStep";
import { generateRandomData } from "../../pageObjects/index";

Then('I proceed on filling all the necessary fields', () => {
    const data = generateRandomData()
    cy.get(checkoutPage.selectors.firsNameField).type(data.firstName)
    cy.get(checkoutPage.selectors.lastNameField).type(data.lastName)
    cy.get(checkoutPage.selectors.postalCodeField).type(data.postalCode)
})

Then('I proceed on adding a last name and postalcode', () => {
    const data = generateRandomData()
    cy.get(checkoutPage.selectors.lastNameField).type(data.lastName)
    cy.get(checkoutPage.selectors.postalCodeField).type(data.postalCode)
})

Then('I proceed on adding a first name and postalcode', () => {
    const data = generateRandomData()
    cy.get(checkoutPage.selectors.firsNameField).type(data.firstName)
    cy.get(checkoutPage.selectors.postalCodeField).type(data.postalCode)
})

Then('I proceed on adding a first name and last name', () => {
    const data = generateRandomData()
    cy.get(checkoutPage.selectors.firsNameField).type(data.firstName)
    cy.get(checkoutPage.selectors.lastNameField).type(data.lastName)
})
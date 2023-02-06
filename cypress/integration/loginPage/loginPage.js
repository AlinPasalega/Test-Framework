
import {When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import { page as loginPage } from "../../pageObjects/loginPage";
import { page as productPage } from "../../pageObjects/productPage";
import "../../commonSteps/generalStep";

  Then('the URL will contain the inventory subdirectory', () => {
    cy.url().should('contains', '/inventory.html')
  })

  When('A user enters the locked out credentials {string}', (lockedUsername) => {
    cy.get(loginPage.selectors.userNameField).type(lockedUsername)
  })

  Then('I expect the error message to be visible and to contain the text {string}', (errorMessage) => {
    cy.get(loginPage.selectors.errorMessage).should('be.visible').contains(errorMessage)
  })
  When('A user enters the problem user credentials {string}', (problemUsername) => {
    cy.get(loginPage.selectors.userNameField).type(problemUsername)
  })
  Then ('the user enters the incorrect password {string}', (incorrectPassword) => {
    cy.get(loginPage.selectors.passwordField).type(incorrectPassword)
  })

  When ('A user enters the incorrect username {string}', (incorrectUsername)=> {
    cy.get(loginPage.selectors.userNameField).type(incorrectUsername)
  })

  When ('A user enters the problem username credentials {string}', (problemUsername)=> {
    cy.get(loginPage.selectors.userNameField).type(problemUsername)
  })

  Then('I expect all the items to have the same image', () => {
    cy.get(productPage.selectors.itemThumbail)
  .first()
  .should('have.attr', 'src')
  .then(firstImageSrc => {
    cy.get(productPage.selectors.itemThumbail)
      .its('length')
      .then(length => {
        cy.get(productPage.selectors.itemThumbail).each((productImage, index) => {
          if (index !== 0) {
            cy.wrap(productImage)
              .should('have.attr', 'src', firstImageSrc)
          }
        })
      })
  })
  })
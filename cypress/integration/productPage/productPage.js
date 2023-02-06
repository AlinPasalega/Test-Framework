import {Then} from "@badeball/cypress-cucumber-preprocessor"
import { page as productPage } from "../../pageObjects/productPage"
import "../../commonSteps/generalStep";

  
  Then('the URL will contain the inventory subdirectory', () => {
    cy.url().should('contains', '/inventory.html')
  })

  Then('the products should be sorted in ascending order by name', () => {
    cy.get(productPage.selectors.inventoryItem).then(products => {
      let productNames = []
      products.each(product => {
        productNames.push(product.textContent)
      })
      expect(productNames).to.deep.equal(productNames.sort())
    })
  })
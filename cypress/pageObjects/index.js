import {selectors as loginPage } from './loginPage'
import {selectors as productPage} from './productPage'
import {selectors as myCartPage} from './myCartPage'
import { selectors as checkoutPage } from './checkoutPage';


const flatten = obj => {
    const flattened = {}
    Object.keys(obj).forEach(key => {
      const value = obj[key]
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
  
        Object.assign(flattened, flatten(value))
  
      } else {
        flattened[key] = value
      }
    })
    return flattened
  
  }
  
const identifiersByPage = {
    loginPage,
    productPage,
    myCartPage,
    checkoutPage
  }
  
export const identifiers = flatten(identifiersByPage)
  
export const verifyPage = page => {
const { url, elements } = page
  
    cy.location('pathname').should(
      pathname =>
        expect(
          Cypress.minimatch(pathname, url, { matchBase: true }),
          `Expected current path ${pathname} to glob match ${url}`
        ).to.be.true
    )
  
    elements.forEach(element => {
    cy.get(element).should('be.visible')
  
    })
  
}

export function generateRandomData() {
  const firstNames = [
    'John', 'Jane', 'James', 'Joan', 'Jack', 'Jill',
    'Jessica', 'Jordan', 'Julia', 'Jacob', 'Justin'
  ];
  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis',
    'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson'
  ];
  const postalCodes = [
    '12345', '23456', '34567', '45678', '56789', '67890',
    '78901', '89012', '90123', '01234', '54321'
  ];

  const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
  const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
  const randomPostalCodeIndex = Math.floor(Math.random() * postalCodes.length);
  
  return {
    firstName: firstNames[randomFirstNameIndex],
    lastName: lastNames[randomLastNameIndex],
    postalCode: postalCodes[randomPostalCodeIndex]
  };
}

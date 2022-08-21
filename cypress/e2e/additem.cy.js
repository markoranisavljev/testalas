/// <reference types ="Cypress" />

describe ('sauce demo tests', () => {
  
    it('add item to cart', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.url().should('include', 'login');
      cy.get('input[id="user-name"]').type('standard_user');
      cy.get('input[id="password"]').type('secret_sauce');
      cy.get('input[id="login-button"]').click();
      cy.url().should('not.include', 'login');
      cy.get('input[id="add-to-cart-sauce-labs-backpack"]').click();
    })
  
  })
  
  
/// <reference types ="Cypress" />

describe ('sauce demo tests', () => {

    it('login with valid credentials', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('input[id="user-name"]').type('standard_user');
      cy.get('input[id="password"]').type('secret_sauce');
      cy.get('input[id="login-button"]').click();
      cy.url().should('not.include', 'login');
    })
  
  })
  
  
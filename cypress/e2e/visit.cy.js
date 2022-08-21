/// <reference types ="Cypress" />

describe ('sauce demo tests', () => {

  it('visit home page', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('include', 'login');
  })

})


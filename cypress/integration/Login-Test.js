/// <reference types="cypress" />

const localhost = 'http://localhost:19006';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(localhost);
  });

  it("Display 'Do not have an account'", () => {
    cy.contains('Do not have an account?').should(
      'be.visible'
    );
  });

  it('Login button', () => {
    cy.get('div').should('contain', 'Login');
  });
});

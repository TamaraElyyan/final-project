describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should navigate to Home page', () => {
    cy.get('[data-cy=nav-home]').click();
    cy.url().should('include', '/home');
    cy.contains('Welcome to Home');
  });

  it('should navigate to About page', () => {
    cy.get('[data-cy=nav-about]').click();
    cy.url().should('include', '/about');
    cy.contains('About Us');
  });
});

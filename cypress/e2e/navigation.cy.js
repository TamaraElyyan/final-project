describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should navigate to Home page', () => {
    cy.get('[data-cy=nav-home]').click();

    cy.contains('A Digital Study Solution for the Modern World');
  });

  it('should navigate to About page', () => {
    cy.get('[data-cy=nav-about]').click();

    cy.contains('Flash Cards Anywhere Anytime');
  });

  it('should navigate to Card Sets page', () => {
    cy.get('[data-cy=nav-cardsets]').click();

    cy.contains('Study Set Library');
  });
});

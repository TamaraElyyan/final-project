describe('Forms Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/create-set');
  });

  it('should show error when submitting empty Create Set form', () => {
    cy.get('[data-cy=create-set-input]').clear();
    cy.get('[data-cy=create-set-submit]').click();
    cy.get('[data-cy=create-set-error]')
      .should('be.visible')
      .and('contain', 'Input cannot be empty');
  });
});

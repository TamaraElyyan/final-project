
describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  // Test for the toggle button functionality
  describe('Create Set Form', () => {
    beforeEach(() => {
      cy.get('#cardSetPage').click();
      cy.get('[data-cy="toggle_form"]').click();
    });

    // Check if the form is visible after clicking the toggle button
    it('submits successfully with valid input', () => {
      const setTitle = 'My New Set';
      cy.get('[data-cy="set_form"] input[name="titleInput"]').type(setTitle);
      cy.get('[data-cy="set_form"]').submit();

      cy.contains(setTitle).should('exist');
    });

    it('shows error when submitted with empty input', () => {
      cy.get('[data-cy="set_form"] input[name="titleInput"]').clear();
      cy.get('[data-cy="set_form"]').submit();

      cy.contains('TITLE CANNOT BE EMPTY').should('exist');
    });
  });

  // Test for the card form functionality
  describe('Add Card Form', () => {
    beforeEach(() => {
      cy.get('#cardSetPage').click();
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"] input[name="titleInput"]').type('Test Set');
      cy.get('[data-cy="set_form"]').submit();

      cy.contains('Test Set').click();

      cy.get('[data-cy="toggle_form"]').click();
    });

    // Check if the card form is visible after clicking the toggle button
    it('submits successfully with valid input', () => {
      cy.get('[data-cy="card_form"] input[name="termInput"]').type(
        'Example Term'
      );
      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type(
        'Example Description'
      );
      cy.get('[data-cy="card_form"]').submit();

      cy.contains('Example Term').should('exist');
      cy.contains('Example Description').should('exist');
    });

    // Check if the error messages are displayed correctly
    it('shows error when both inputs are empty', () => {
      cy.get('[data-cy="card_form"] input[name="termInput"]').clear();
      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').clear();
      cy.get('[data-cy="card_form"]').submit();

      cy.contains('TERM AND DESCRIPTION CANNOT BE EMPTY').should('exist');
    });

    // Check if the error messages are displayed correctly for individual inputs
    it('shows error when term input is empty', () => {
      cy.get('[data-cy="card_form"] input[name="termInput"]').clear();
      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type(
        'Valid Description'
      );
      cy.get('[data-cy="card_form"]').submit();

      cy.contains('TERM CANNOT BE EMPTY').should('exist');
    });

    // Check if the error messages are displayed correctly for individual inputs
    it('shows error when description input is empty', () => {
      cy.get('[data-cy="card_form"] input[name="termInput"]').type(
        'Valid Term'
      );
      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').clear();
      cy.get('[data-cy="card_form"]').submit();

      cy.contains('DESCRIPTION CANNOT BE EMPTY').should('exist');
    });
  });
});

describe('Sample E2E Test', () => {
  it('Visits the React App root url', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome').should('exist');
  });
});

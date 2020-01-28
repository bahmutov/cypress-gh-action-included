it('works', () => {
  cy.visit('index.html')
  cy.contains('Page').should('be.visible')
})

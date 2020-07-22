it('works in typescript', () => {
  cy.visit('index.html')
  cy.contains('Page').should('be.visible')
})

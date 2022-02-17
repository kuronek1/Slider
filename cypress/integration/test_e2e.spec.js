describe("App E2E", () => {
    it('Visit localhost', () => {
        cy.visit("/");
    })
    it('Check slider display', () => {
        cy.get('div').within(() => {
            cy.get('div').within(() => {
                cy.get('img')
            })
        })
    })
    it('Check setTimeout', () => {
        cy.get('setTimeout').should('have.value', 2000)
    })
});
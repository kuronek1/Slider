describe("App E2E", () => {
    it('Visit localhost', () => {
        cy.visit("/");
    })
    it('Check buttons display', () => {
        cy.get('div').within(() => {
                cy.get('img').should('have.attr', 'src').should('include', 'https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/ffffff/external-arrow-arrow-flatart-icons-solid-flatarticons-6.png');
        })
    })
//    it('Check display', () => {
//       cy.get('img').should('have.attr', 'src').should('include', 'jpeg')
//    })
});
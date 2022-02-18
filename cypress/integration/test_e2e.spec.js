describe("App E2E", () => {
    it('Visit localhost', () => {
        cy.visit("/");
    })
//Buttons available
    it('Check render buttons', () => {
        cy.get('div').within(() => {
                cy.get('img')
                    .should('have.attr', 'src')
                    .should('include', 'https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/ffffff/external-arrow-arrow-flatart-icons-solid-flatarticons-6.png');
        })
    })
//Slide available
    it('Check render slide', () => {
        cy.get('div')
            .should('have.class', 'sc-bdvvtL cYSELp')
            .within(() => {
                cy.get('img')
                    .get('#slide')
                    .should('have.attr', 'src')
                    .should('include', '/static/media/img1.8eba8b0536f9ae93e4f1.jpeg')
            })
    })    
//Buttons Click
    it('Should ckicked button nextBtn', () => {
        cy.get('#nextBtn').click()
    })
    it('Should ckicked button prevBtn', () => {
        cy.get('#prevBtn').click()
    })
    it('Slide be changed to the next slide', () => {
        cy.get('#nextBtn').click()
        cy.get('img')
            .get('#slide')
            .should('have.attr', 'src')
            .should('include', '/static/media/img2.25617b6c9709d7202904.jpeg')
    })
    it('Slide be changed to the prev slide', () => {
        cy.get('#prevBtn').click()
        cy.get('img')
            .get('#slide')
            .should('have.attr', 'src')
            .should('include', '/static/media/img1.8eba8b0536f9ae93e4f1.jpeg')
    })

//Check setTimeout 
    it('Slide is changed by SetTimeout', () => {
        cy.get('img')
            .get('#slide')
            .should('have.attr', 'src')
            .should('include', '/static/media/img1.8eba8b0536f9ae93e4f1.jpeg')
        cy.wait(2000).then(function () {
            cy.get('#slide')
            .should('have.attr', 'src')
            .should('include', '/static/media/img2.25617b6c9709d7202904.jpeg')
        })
        cy.wait(2000).then(function () {
            cy.get('#slide')
            .should('have.attr', 'src')
            .should('include', '/static/media/img3.583c4a95a5b99ec9b61c.jpeg')
        })
        cy.wait(2000).then(function () {
            cy.get('#slide')
            .should('have.attr', 'src')
            .should('include', '/static/media/img4.90ae07dff57f338e3127.jpeg')
        })
        cy.wait(2000).then(function () {
            cy.get('#slide')
            .should('have.attr', 'src')
            .should('include', '/static/media/img5.d45dd0d221ad778c7f76.jpeg')
        })
        cy.wait(2000).then(function () {
            cy.get('#slide')
            .should('have.attr', 'src')
            .should('include', '/static/media/img1.8eba8b0536f9ae93e4f1.jpeg')
        })    
    })
});
class BasePage {
    visitHome() {
        cy.visit('https://demoqa.com', {
            timeout: 120000,
            failOnStatusCode: false
        })

        cy.get('body', { timeout: 30000 }).should('be.visible')
    }
}

export default BasePage

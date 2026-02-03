class BrowserWindowsPage {

  acessarAlertsFrameWindows() {
    cy.contains('Alerts, Frame & Windows').click()
  }

  acessarBrowserWindows() {
    cy.contains('Browser Windows').click()
  }

  clicarNewWindow() {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })

    cy.get('#windowButton').click()
  }

  validarNovaJanela() {
    cy.get('@windowOpen').should('have.been.called')

    cy.visit('https://demoqa.com/sample', {
      failOnStatusCode: false
    })

    cy.contains('This is a sample page', { timeout: 10000 })
      .should('be.visible')
  }


}

export default BrowserWindowsPage

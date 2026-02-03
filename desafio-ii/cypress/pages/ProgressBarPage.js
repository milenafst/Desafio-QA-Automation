class ProgressBarPage {

  acessarWidgets() {
    cy.contains('Widgets').scrollIntoView().click()
  }

  acessarProgressBar() {
    cy.contains('Progress Bar').scrollIntoView().click()
    cy.url().should('include', '/progress-bar')
  }

  iniciarEPararAntes25() {
    cy.get('#startStopButton').should('be.visible').click()

    cy.get('.progress-bar', { timeout: 30000 })
      .invoke('text')
      .then(text => {
        const valor = parseInt(text)
        if (valor > 25) {
          cy.get('#startStopButton').click()
        }
      })
  }

  validarValorMenorOuIgual25() {
    cy.get('.progress-bar')
      .invoke('text')
      .then(text => {
        const valor = parseInt(text)
        expect(valor).to.be.lte(25)
      })
  }

  continuarAte100EResetar() {
    cy.get('#startStopButton')
      .should('be.visible')
      .click()

    cy.get('.progress-bar', { timeout: 20000 })
      .should(($bar) => {
        const value = parseInt($bar.text())
        expect(value).to.be.greaterThan(0)
      })

    cy.get('#resetButton', { timeout: 30000 })
      .should('be.visible')
      .click()


    cy.get('.progress-bar')
      .should('have.text', '0%')
  }


}

export default ProgressBarPage

class WebTablesPage {

  acessarElements() {
    cy.contains('h5', 'Elements', { timeout: 30000 })
      .should('be.visible')
      .click()
  }


  acessarWebTables() {
    cy.contains('span', 'Web Tables').click()
    cy.get('#addNewRecordButton').should('be.visible')
  }


  criarRegistro(dados = {}) {

    const registro = {
      firstName: dados.firstName || `Nome${Math.floor(Math.random() * 1000)}`,
      lastName: dados.lastName || `Sobrenome${Math.floor(Math.random() * 1000)}`,
      email: dados.email || `milena${Math.floor(Math.random() * 1000)}@qa.com`,
      age: dados.age || '34',
      salary: dados.salary || '15000',
      department: dados.department || 'QA'
    }

    cy.get('#addNewRecordButton').click()

    cy.get('#firstName').type(registro.firstName)
    cy.get('#lastName').type(registro.lastName)
    cy.get('#userEmail').type(registro.email)
    cy.get('#age').type(registro.age)
    cy.get('#salary').type(registro.salary)
    cy.get('#department').type(registro.department)

    cy.get('#submit').click()

   
    cy.contains('.rt-td', registro.email).should('exist')

   
    Cypress.env('registroCriado', registro)
  }

  editarRegistro() {
    const registro = Cypress.env('registroCriado')

    cy.contains('.rt-td', registro.email)
      .should('exist')

    cy.get('[id^="edit-record"]')
      .first()
      .click({ force: true })

    cy.get('#firstName', { timeout: 10000 })
      .should('be.visible')

    cy.get('#department')
      .clear()
      .type('Automation')

    cy.get('#submit').click()

    cy.contains('.rt-td', 'Automation')
      .should('exist')
  }


  deletarRegistro() {
    const registro = Cypress.env('registroCriado')

    cy.contains('.rt-tr-group', registro.email)
      .find('[title="Delete"]')
      .click()

    cy.contains('.rt-td', registro.email).should('not.exist')
  }
}

export default WebTablesPage

class PracticeFormPage {

  acessarForms() {
    cy.contains('h5', 'Forms').should('be.visible').click()
  }


  acessarPracticeForm() {
    cy.contains('span', 'Practice Form').click()
    cy.get('#firstName', { timeout: 10000 }).should('be.visible')
  }


  preencherFormulario(dados = {}) {
    const dadosFormulario = {
      firstName: dados.firstName || `Nome${Math.floor(Math.random() * 1000)}`,
      lastName: dados.lastName || `Sobrenome${Math.floor(Math.random() * 1000)}`,
      email: dados.email || `milena${Math.floor(Math.random() * 1000)}@qa.com`,
      gender: dados.gender || 'Female',
      mobile: dados.mobile || '11999999999',
      subject: dados.subject || 'Maths',
      hobby: dados.hobby || 'Reading',
      address: dados.address || 'Rua do QA, 123',
      state: dados.state || 'NCR',
      city: dados.city || 'Delhi'
    }

    cy.get('#firstName').type(dadosFormulario.firstName)
    cy.get('#lastName').type(dadosFormulario.lastName)
    cy.get('#userEmail').type(dadosFormulario.email)
    cy.contains('label', dadosFormulario.gender).click()
    cy.get('#userNumber').type(dadosFormulario.mobile)

    cy.get('#subjectsInput')
      .type(`${dadosFormulario.subject}{enter}`)

    cy.contains('label', dadosFormulario.hobby).click()

    cy.get('#uploadPicture')
      .selectFile('cypress/fixtures/arquivo-teste.txt')

    cy.get('#currentAddress')
      .type(dadosFormulario.address)

    cy.get('#state input')
      .type(`${dadosFormulario.state}{enter}`, { force: true })

    cy.get('#city')
      .should('not.have.css', 'pointer-events', 'none')

    cy.get('#city input')
      .type(`${dadosFormulario.city}{enter}`, { force: true })
  }


  submeterFormulario() {
    cy.get('#submit').click({ force: true })
  }

  validarPopup() {
    cy.get('.modal-content').should('be.visible')
    cy.contains('Thanks for submitting the form')
  }

  fecharPopup() {
    cy.get('#closeLargeModal')
      .scrollIntoView()
      .click({ force: true })

    cy.get('.modal-content').should('not.exist')
  }
}

export default PracticeFormPage

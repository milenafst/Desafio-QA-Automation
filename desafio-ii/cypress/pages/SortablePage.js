class SortablePage {

  acessarInteractions() {
    cy.contains('h5', 'Interactions').should('be.visible').click()
  }

  acessarSortable() {
    cy.contains('span', 'Sortable').click()
    cy.get('.vertical-list-container').should('be.visible')
  }

  ordenarEmOrdemCrescente() {
   
    cy.get('.vertical-list-container .list-group-item')
      .should('have.length', 6)
  }

  validarOrdemCrescente() {
    const ordemEsperada = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

    cy.get('.vertical-list-container .list-group-item')
      .then(($items) => {
        const textos = [...$items].map(el => el.innerText.trim())
        expect(textos).to.deep.equal(ordemEsperada)
      })
  }
}

export default SortablePage

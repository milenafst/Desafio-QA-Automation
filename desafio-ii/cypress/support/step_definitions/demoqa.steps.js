import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'


import BasePage from '../../pages/BasePage'


import PracticeFormPage from '../../pages/PracticeFormPage'
import BrowserWindowsPage from '../../pages/BrowserWindowsPage'
import WebTablesPage from '../../pages/WebTablesPage'
import ProgressBarPage from '../../pages/ProgressBarPage'
import SortablePage from '../../pages/SortablePage'


const basePage = new BasePage()
const practiceFormPage = new PracticeFormPage()
const browserWindowsPage = new BrowserWindowsPage()
const webTablesPage = new WebTablesPage()
const progressBarPage = new ProgressBarPage()
const sortablePage = new SortablePage()

//STEPS GLOBAIS

Given('que acesso o site DemoQA', () => {
  basePage.visitHome()
})

//CENÁRIO FORM

When('seleciono a opção Forms', () => {
  practiceFormPage.acessarForms()
});

When('acesso o Practice Form', () => {
  practiceFormPage.acessarPracticeForm()
});

When('preencho todo o formulário com dados aleatórios', () => {
  practiceFormPage.preencherFormulario()
});

When('submeto o formulário', () => {
  practiceFormPage.submeterFormulario()
});

Then('um popup de confirmação deve ser exibido', () => {
  practiceFormPage.validarPopup()
});

Then('fecho o popup', () => {
  practiceFormPage.fecharPopup()
})

//CENÁRIO BROWSER WINDOWS

When('seleciono a opção Alerts, Frame & Windows', () => {
  browserWindowsPage.acessarAlertsFrameWindows()
})

When('acesso o submenu Browser Windows', () => {
  browserWindowsPage.acessarBrowserWindows()
})

When('clico no botão New Window', () => {
  browserWindowsPage.clicarNewWindow()
})

Then('uma nova janela deve ser aberta com a mensagem {string}', (mensagem) => {
  browserWindowsPage.validarNovaJanela()
  cy.contains(mensagem).should('be.visible')
})


//CENÁRIO WEB TABLES

When('seleciono a opção Elements', () => {
  webTablesPage.acessarElements()
})

When('acesso o submenu Web Tables', () => {
  webTablesPage.acessarWebTables()
})

When('crio um novo registro', () => {
  webTablesPage.criarRegistro()
})

When('edito o registro criado', () => {
  webTablesPage.editarRegistro()
})

Then('deleto o registro criado', () => {
  webTablesPage.deletarRegistro()
})


//CENÁRIO PROGRESS BAR

When('seleciono a opção Widgets', () => {
  progressBarPage.acessarWidgets()
})

When('acesso o submenu Progress Bar', () => {
  progressBarPage.acessarProgressBar()
})

When('inicio a progress bar e paro antes de 25%', () => {
  progressBarPage.iniciarEPararAntes25()
})

Then('o valor da progress bar deve ser menor ou igual a 25%', () => {
  progressBarPage.validarValorMenorOuIgual25()
})

Then('continuo a progress bar até 100% e reseto', () => {
  progressBarPage.continuarAte100EResetar()
})


//CENÁRIO SORTABLE

When('seleciono a opção Interactions', () => {
  sortablePage.acessarInteractions()
})

When('acesso o submenu Sortable', () => {
  sortablePage.acessarSortable()
})

When('organizo os itens em ordem crescente', () => {
  sortablePage.ordenarEmOrdemCrescente()
})

Then('os itens devem estar em ordem crescente', () => {
  sortablePage.validarOrdemCrescente()
})


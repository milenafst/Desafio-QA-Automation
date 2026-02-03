import { AfterStep } from '@badeball/cypress-cucumber-preprocessor'

AfterStep(({ pickle }) => {
  const stepName = pickle.name.replace(/[^a-zA-Z0-9]/g, '_')
  cy.screenshot(stepName)
})

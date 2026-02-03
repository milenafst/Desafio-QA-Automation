const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } =
  require("@badeball/cypress-cucumber-preprocessor")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",

    specPattern: "**/*.feature",

   
    stepDefinitions: [
      "cypress/e2e/**/*.steps.{js,ts}",
      "cypress/e2e/**/*.step.{js,ts}"
    ],

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)

      on(
        "file:preprocessor",
        createBundler({
          plugins: [
            require("@badeball/cypress-cucumber-preprocessor/esbuild")
              .createEsbuildPlugin(config),
          ],
        })
      )

      return config
    },
  },
})

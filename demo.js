import { preprocess } from "./preprocess.js"

await preprocess({
  filePath: "./cypress/e2e/spec.cy.js",
  outputPath: "./dist/spec.cy.js",
})

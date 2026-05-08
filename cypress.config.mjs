import { defineConfig } from "cypress"
import { preprocess } from "./preprocess.js"

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', preprocess)
    },
  },
})

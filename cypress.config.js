const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 20000,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  projectId: 'nxcn65',
})

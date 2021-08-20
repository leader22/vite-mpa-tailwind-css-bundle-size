const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        app1: resolve(__dirname, 'app1/index.html'),
        app2: resolve(__dirname, 'app2/index.html'),
      }
    }
  }
})

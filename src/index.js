const { resolve } = require('path')

module.exports = (options, context) => ({
  name: 'vuepress-plugin-toc',

  extendMarkdown (md) {
    md.use(require('./markdown'), options)
  },

  enhanceAppFiles: resolve(__dirname, 'enhanceApp.js'),
})

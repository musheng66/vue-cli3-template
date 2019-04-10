const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',

  // 输出目录
  outputDir: 'dist',

  lintOnSave: true,

  // 是否为生产环境构建生成 source map
  productionSourceMap: false,

  // alias 配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))

    // 一个规则里的 基础Loader
    // svg是个基础loader
    const svgRule = config.module.rule('svg')

    // 清除已有的所有 loader
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}

module.exports = {
  'plugins': {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
    // 'postcss-px-to-viewport': {
    //   viewportWidth: 1440, //  视窗的宽度，对应的是我们设计稿的宽度，移动端一般是750，如果是pc端那就是类似1920这样的尺寸
    //   // viewportHeight: 1344, // 视窗的高度，移动端一般指定1334，也可以不配置
    //   unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
    //   viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
    //   selectorBlackList: ['.ignore', '.hairlines', '.postcss-ignore', 'el-icon', 'el-dropdown', 'el-popper', 'el-switch'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
    //   minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    //   exclude: [/^plugins$/, /^node_modules$/],
    //   mediaQuery: false // 允许在媒体查询中转换`px`
    // },
    'postcss-viewport-units': {
      filterRule: rule => rule.nodes.findIndex(i => i.prop === 'content') === -1 // 排除会产生警告的部份
    },
    'cssnano': {
      preset: 'default', // 设置成default将不会启用autoprefixer
      'postcss-zindex': false
    }
  }
}

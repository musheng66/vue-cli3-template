# vue-cli3-template
基于vue-cli3的Web前端通用开发项目模板

## 项目结构
<pre>
├── public                     // 静态资源文件，index.html，ico 等
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题、字体等静态资源
│   │   └── icons              // svg 图标
│   ├── components             // 全局公用组件
│   ├── locales                // 国际化
│   ├── plugins                // 插件
│   │   └── element-ui         // element-ui 定制
│   ├── router                 // 路由
│   ├── store                  // 全局 store 管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── views                  // views 所有页面
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口文件，加载组件、初始化等
│   └── permission.js          // 路由权限管理
├── .browserslistrc            // 需要 babel 转译的浏览器版本
├── .editorconfig              // 编辑器通用设置
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── babel.config.js            // babel 配置
├── package.json               // npm 项目信息，依赖库等
├── package-lock.json          // 项目全局配置
├── postcss.config.js          // postcss 配置
└── vue.config.js              // 可自定义 webpack 配置
</pre>

## 使用方法
### 安装依赖
```
npm install
```

### 开发模式启动项目
```
npm run serve
```

### 编译打包
```
npm run build
```

### 运行测试
```
npm run test
```

### 校验代码
```
npm run lint
```

### 自定义配置
详情请见[配置参考](https://cli.vuejs.org/zh/config/).
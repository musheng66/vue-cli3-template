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


## 命名规范

摘自：[https://yq.aliyun.com/articles/645697](https://yq.aliyun.com/articles/645697)

### 命名原则：

+ index.js 或者 index.vue，统一使用小写字母开头的(kebab-case)命名规范
+ 属于组件或类的，统一使用大写字母开头的(PascalCase)命名规范
+ 其他非组件或类的，统一使用小写字母开头的(kebab-case)命名规范

#### 文件夹命名： camelCase VS kebab-case
展开node_modules中的项目依赖，会发现，几乎所有的项目文件夹命名都是 kebab-case 命名的，
使用 kebab-case 命名的文件夹比 camelCase 命名的文件夹看起来更清晰。

#### 组件命名：kebab-case VS PascalCase
[vue官方风格指南](https://cn.vuejs.org/v2/style-guide/?spm=a2c4e.11153940.blogcont645697.6.13c030f0Fv6RLA#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)中关于组件文件名的推荐：
> 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

### 文件夹命名规范
+ 属于 components 文件夹下的子文件夹，使用大写字母开头的 PascalBase 风格
+ 全局通用的组件放在 /src/components 下
+ 其他业务页面中的组件，放在各自页面下的 ./components 文件夹下
+ 每个 components 文件夹下最多只有一层文件夹，且文件夹名称为组件的名称，文件夹下必须有 index.vue 或
index.js，其他 .vue 文件统一大写开头（Pascal case），components 下的子文件夹名称统一大写开头（PascalCase）
其他文件夹统一使用 kebab-case 的风格

#### 全局公共组件：/src/components 示例
```
- [components]
  - [Breadcrumb]
    - index.vue
  - [Hamburger]
    - index.vue
  - [SvgIcon]
    - index.vue
```

#### 业务页面内部封装的组件：以 /src/views/layout/components 示例
```
-[src]
  - [views]
    - [layout]
      - [components]
        - [Sidebar]
          - index.vue
          - Item.vue
          - SidebarItem.vue
        - AppMain.vue
        - index.js
        - Navbar.vue
```

#### index.js 中导出组件方式如下：
```
export { default as AppMain } from './AppMain'
export { default as Navbar } from './Navbar'
export { default as Sidebar } from './Sidebar'
```
看 index.js 中最后一行代码，不难发现，为什么 components 下的子文件夹要使用 PascalCase 命名：
```
export { default as Sidebar } from './sidebar' // 使用kebab-case命名的文件夹
export { default as Sidebar } from './Sidebar' // 使用 PascalCase命名的文件夹
```
对于组件的导出/导入，我们一般都是使用大写字母开头的 PascalCase 风格，
以区别于 .vue 组件内部的其他 camelCase 声明的变量，
Sidebar 作为【侧边栏组件】的一个整体被导出，文件夹的命名也采用 PascalCase，
有利于 index.js 中 export 时的前后统一，避免很多情况下不注意区分大小写。

### 文件命名规范
#### *.js文件命名规范
* 属于类的.js文件，除index.js外，使用PascalBase风格
* 其他类型的.js文件，使用kebab-case风格
* 属于Api的，统一加上Api后缀

#### *.vue文件命名规范
* 除index.vue之外，其他.vue文件统一用PascalBase风格

#### *.scss文件命名规范
* 统一使用kebab-case命名风格

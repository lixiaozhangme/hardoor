# react-webpack

react-webpack是一个webpack配置的react项目模板，额外引入了其它需要的工具模块，参考技术栈。

## 技术栈

#### 托管平台

- [x] github

#### 服务器

- [ ] windows server

#### 数据库

- [ ] sqlite

#### 后端

- [x] node8
    - [ ] koa2

#### 前端

- [x] react
    - [x] react-router-dom
    - [x] react-redux
    - [x] reselect
- [x] redux
    - [x] redux-thunk
- [x] axios
- [x] less

## 项目功能实现

- [ ] 1.待写入

## 参考资料

#### 1. 关于pages.config.js

- 简述

```
`pages.config.js` 是一个webpack多页面应用配置项，暂时还未实现完全动态化。
注意：如果你开发的是单页面应用无需改变pages.config.js的内容

配置说明：
pages：页面关联的js文件，这个配置关系到打包后生成的html文件数量

例如：
    只有一个index页面---pages:index
    多个页面，如存在index和about页面---["index","about"]
    如果页面需要特殊设置请传入一个对象---[{pageName:"index"}]

更加复杂的页面分割优化：需要进行chunks参数设置，同时要设置splitChunks
具体设置参考webpack chunks参数，chunks参数可以直接在`pages.config.js`中设置
```

- 页面对象可配置参数

```
{
    title: '页面标题',
    keywords: "页面关键字",
    description: "页面描述",
    iconPath: "./favicon.ico",
    style: "页面全局style",
    pageName: "index",//页面名称
    template: "./draft/template.html",//页面模板
    chunks: []//打入页面的chunks，与splitChunks参数配置有关
}
```

#### 2. 生产模式和开发模式

```
注意：为了不使打包出现未知错误，请在pages.config.js修改workEnv参数，指定当前环境
开发模式下切记不要设置workEnv:production，会给webpack造成困扰
```

#### 3. 资源模块化

```
图片导入建议使用，require("图片路径")
esModule默认被设置false，如果想启用请在webpack.config.js中设置
```

#### 4. 热更新HMR启用

```
webpack.config.js中启用hot参数

index.js中监听模块变化，并执行替换逻辑

    if (module.hot) { //告诉 webpack 接受热替换的模块
        module.hot.accept('./print.js', function() {
            // 当print.js模块变化时，执行的逻辑
            // 更新逻辑得自己写
        })
    }

```
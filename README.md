# React 多页面开发种子项目

本项目基于[create-react-app](https://github.com/facebook/create-react-app)脚手架创建，针对`React多页面`开发做了配置上的修改。

## 添加页面

### 目录结构

在`src`目录增加一个feature目录，如：`example`，增加页面`index.js`，如下:

<pre>
src
  example
    index.js
</pre>

页面内容如下:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>This is an example.</div>,
  document.getElementById('root')
);
```

### 注册页面

打开`config/pages.js`，增加如下配置:

```javascript
module.exports = [
  // ...
  {
    title: '例子',
    meta: {
      keywords: 'React,MPA,多页面',
      description: '这是一个例子',
      // 详见: https://github.com/jantimon/html-webpack-plugin
    },
    bundleKey: 'example',
    jsEntry: 'example/index.js',
    htmlEntry: 'example/index.html'
  },
];
```

## 可用命令

在项目（当前）目录下，你可以运行以下命令：

```shell
> npm install # 安装项目依赖

> npm run start # 启动项目在本地运行

> npm run test # 测试项目

> npm run build # 构建/编译项目
```

执行`npm run build`后，会在项目目录生成`build`目录用于发布。

## 修改配置

1. 新增`config/pages.js`文件，用于配置不同页面属性（如：标题，入口文件，构建后html文件等）;
2. 修改`config/paths.js`增加`appCommonHtmlTpl`及`appJsEntries`属性;
3. 修改`webpack.config.js`入口（entry）及插件（plugins）配置;
4. 修改`webpack.config.js`中`output.filename`，当`env=development`时;
5. 修改`webpack.config.js`中`optimization.splitChunks`;
6. 为了满足生产构建`publicUrl`采用相对路径，将`package.json`中`homepage`字段及`webpack.config.js`中`output.publicPath`配置删除，以便于`HtmlWebpackPlugin`插件自动采用相对路径。但`InlineChunkHtmlPlugin`插件的使用会报错(`endsWith readable error`)，故去掉`InlineChunkHtmlPlugin`插件使用;
7. 增加`src`目录别名`@`;
8. 修改`config/webpackDevServer.config.js`中`historyApiFallback: false`;
9. 移除`scripts/build.js`,`scripts/start.js`中`checkRequiredFiles`文件检查。
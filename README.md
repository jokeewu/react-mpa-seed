# React 多页面开发种子项目

本项目基于create-react-app创建，针对多页面开发做了配置上的修改

## 可用命令

在当前目录下，你可以运行以下命令：

### npm install

安装项目依赖

### `npm start`

启动项目在本地运行

### `npm test`

测试项目

### `npm run build`

构建

## 修改配置

1. 新增`config/pages.js`文件，用于配置不同页面属性（如：标题，入口文件，构建后html文件等）;
2. 修改`config/paths.js`增加`appCommonHtmlTpl`及`appJsEntries`属性;
3. 修改`webpack.config.js`入口（entry）及插件（plugins）配置;
4. 修改`webpack.config.js`中`optimization.splitChunks`;
4. 为了满足生产构建`publicUrl`采用相对路径，将`package.json`中`homepage`字段及`webpack.config.js`中`output.publicPath`配置删除，以便于`HtmlWebpackPlugin`插件自动采用相对路径。但`InlineChunkHtmlPlugin`插件的使用会报错(`endsWith readable error`)，故去掉`InlineChunkHtmlPlugin`插件使用;
5. 增加`src`目录别名`@`;
6. 修改`config/webpackDevServer.config.js`中`historyApiFallback: false`。
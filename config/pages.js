/**
 * 页面注册/配置
 * 
 * 这里定义了可被访问的页面
 */

module.exports = [
  {
    title: '首页',
    meta: {
      description: '页面描述',
      keywords: 'React,多页面,MPA',
      author: 'jakcy_coder@163.com'
    },
    bundleKey: 'index',
    jsEntry: 'home/index.js',
    htmlEntry: 'index.html'
  },
  {
    title: '例子',
    meta: {
      description: '这是一个例子',
    },
    bundleKey: 'example',
    jsEntry: 'example/index.js',
    htmlEntry: 'example/index.html'
  }
];
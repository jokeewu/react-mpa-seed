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
    bundleKey: 'home',
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
  },
  {
    title: '例子详情',
    meta: {
      description: '这是一个例子详情',
    },
    bundleKey: 'example_detail',
    jsEntry: 'example/detail.js',
    htmlEntry: 'example/detail.html'
  },
];
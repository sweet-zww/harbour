// 引入模板
var communityTpl = require('../tpl/community.string');

// 定义一个视图
SPA.defineView('community', {
  // 将模板写在body里
  html: communityTpl,

  plugins: [
    'delegated'
  ],

  bindActions: {

  }
});

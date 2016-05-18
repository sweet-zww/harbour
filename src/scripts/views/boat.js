// 引入模板
var boatTpl = require('../tpl/boat.string');

// 定义一个视图
SPA.defineView('boat', {
  // 将模板写在body里
  html: boatTpl,

  plugins: [
    'delegated'
  ],

  bindActions: {

  }
});

// 引入模板
var homeTpl = require('../tpl/home.string');

// 定义一个视图
SPA.defineView('home', {
  // 将模板写在body里
  html:homeTpl,

  plugins: [
    'delegated',
    {
			name:'avalon',
			option:function(vm){
				vm.homeList = [];
			}
		}

  ],
   // 给视图定义公共的属性和方法
  init: {
    formatArray: function (arr) {
      var newArr = [];
      for(var i = 0; i < Math.ceil(arr.length/2); i++){
        newArr[i] = [];
        newArr[i][0] = arr[2*i];
        newArr[i][1] = arr[2*i+1];
      }
      return newArr;
    },

    // 定义视图公共的home hot swiper对象
    myHomeHotSwiper: null,

    // 定义视图公共的home swiper对象
    myHomeSwiper: null
  },
		bindEvents:{
		beforeShow:function(){
			//保存视图对象
			var that = this;
			//获得avalon的vm
			var vm = that.getVM();
			 // 渲染数据
      $.ajax({
        url: '/api/homeList.php',
        success: function (res) {
          vm.homeList = that.formatArray(res.data)
        }
      });
			var mySwiper = new Swiper ('.swiper-container', {
			    autoplay:2000,
			    loop: true,
			    
			    // 分页器
			    pagination: '.swiper-pagination'
			})
		}
	},
  bindActions: {

  }
});

requirejs.config({
	baseUrl:"js/plugins",
	paths:{
		jq:"jquery.min",
		index:"index",
		ajax:"ajax",
		baidu:"baiduTemplate",
		details:"details",
		ui:"jquery-ui",
		extend:"jquery.extend",
		idcode:"jquery.idcode",
		layui:"layui",
		lazy:"lazyload",
		login:"login",
		move:"move",
		page:"pagination",
		regist:"regist",
		shop:"shop",
		subpages:"subpages",
		sw:"swiper.min"
	},
	shim:{
		jq:{
			exports:'jQuery'
		},
		sw:{
			deps:["jq"],
			exports:'Swiper'
		},
		// 首页
		index:{
			deps:["jq","sw","lazy"],
			exports:"index"
		},
		move:{
			deps:["index"],
			exports:"move"
		},

		// details
		details:{
			deps:["jq","lazy"],
			exports:"details"
		},
		// subpages
		subpages:{
			deps:["jq","lazy","baidu","page"],
			exports:"subpages"
		},
		idcode:{
			deps:["jq"],
			exports:"idcode"
		},
		login:{
			deps:["jq","idcode"],
			exports:"login"
		},
		regist:{
			deps:["jq"],
			exports:"regist"
		},
		shop:{
			deps:["jq","baidu"],
			exports:"shop"
		},
		
		baidu:{
			exports:'baidu'
		},
		extend:{
			deps:["jq"],
			init:function($){
				return $;
			}
		},
		lazy:{
			deps:["jq"]
		},
		page:{
			deps:["jq"]
		}
	}
});

requirejs(["jq","sw","index","ajax","baidu","details","ui","extend","idcode","layui","lazy","login","move","page","regist","shop","subpages"],function($,_$){

});
	
// 三角形
$(".head-r-t .service a,>span").mouseover(function(){
	$(".head-r-t .service span").addClass("active");
	$(".head-r-t .service .bon").show();
})
$(".head-r-t .service a,>span").mouseout(function(){
	$(".head-r-t .service span").removeClass("active");
	$(".head-r-t .service .bon").hide();
})
$(".head-r-t .service .bon").mouseover(function(){
	$(".head-r-t .service .bon").show();
})
$(".head-r-t .service .bon").mouseout(function(){
	$(".head-r-t .service .bon").hide();
})

// 导航
//鼠标在a标签上 
var timer = null;
$(".menu a").hover(function(){
	var that = this;
	clearTimeout(timer);
	timer = setTimeout(function(){
		$(".submenu").stop().fadeIn();
		$(that).addClass("active").siblings().removeClass("active");
		$(".submenu>div").eq($(that).index()-1).stop().fadeIn().siblings().stop().fadeOut();
	},100)
	
},function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		$(".submenu").stop().fadeOut();
		$(".menu a").removeClass("active");
	},100)
});
// 鼠标滑过二级菜单
$(".submenu").hover(function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		$(".submenu").stop().fadeIn();
	},100)
},function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		$(".submenu").stop().fadeOut();
		$(".menu a").removeClass("active");
	},100)
});

// lazyload 图片懒加载
$(".lazy").lazyload({
	threshold:-200
});

// baiduTemplate
$.get("../src/json/data1.json",function(data){
	// baiduTemplate
	$(".subpages-main-m").html(baidu.template("temp",data));
	//lazyload
	$(".lazy").lazyload({
		threshold:-100
	});
	//分页
	$('.pagination').jqPagination({
		// 最大页数
		max_page:"4",
		// input框显示的内容
		page_string:'当前 {current_page} / {max_page}',
		// 获取json文件夹中文件
		paged:function(page){
			$.get("../src/json/data"+page+".json",function(data){
				$(".subpages-main-m").html(baidu.template("temp",data));
				$(".lazy").lazyload({
					threshold:-100
				});
			})
		}
	});
});

// ajax
function ajax(option){
	var xhr = new XMLHttpRequest();

	xhr.open(option.method,option.url,true);

	xhr.setRequestHeader("Content-Type","application/json");

	xhr.send(JSON.stringify(option.param));

	xhr.onreadystatechange=function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				option.success(xhr.responseText);
			}else{
				option.error(xhr);
			}
		}
	}
}

// 添加购物车 
window.onload=function(){
	for(let i=0;i<$(".subpages_jrshop .btn").length;i++){
		$(".subpages_jrshop .btn").eq(i).click(function(){
			var url = $(this).parent().parent().first().find("img").attr("data-original");
			var name = $(this).parent().parent().find("p").find("a").html();
			var price = $(this).parent().parent().find("h3").find("span").html();
			var dataArrays = {"url":url,"name":name,"price":price};
			var shop_obj = {"shop":[dataArrays]}
			// console.log(dataArrays)
			/*
			ajax({
				url:"../src/json/shop.json",
				method:"post",
				dataType: "json",
				param:{
				},
				async: false,
				success:function(data){
					// 写文件
					// var fs = require("fs");
					// fs.writeFile("../src/json/shop.json",shop_obj,function(error){  //error 表示如果错误，则返回错误报告
					// 	console.log("写入文件成功！");
					// })
				},
				error:function(xhr){
					// console.log("写入错误!");
				}
			});*/

			// 存储cookie
			// var date = new Date();
			// date.setDate(date.getDate()+7);
			// document.cookie = dataArrays+date;
			// var acookie = document.cookie.split("; ");
			// console.log(acookie)
			// for(var i=0; i<acookie.length; i++){
			// 	var acook = acookie[i].split("=");
			// 	if(acook[0] == "age"){
			// 		console.log(acook[1]);
			// 	}
			// }
			setCookie("url",url,7);
		})
	}
}

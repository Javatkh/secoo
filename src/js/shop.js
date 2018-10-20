// 跳转头部
function backTop(){
	var ds = setInterval(function(){
		var h = document.documentElement.scrollTop;//卷去高度

		if(h>0){
			scrollBy(0,-100)
		}else{
			clearInterval(ds);
		}

	},20)
}

window.onscroll=function(){
	var top = document.documentElement.scrollTop;
	if(top>60){
		shop_fan.className = "shop_fan active";
	}else{
		shop_fan.className = "shop_fan";
	}
}


// var acookie = document.cookie.split("; ");
// console.log(acookie)
// for(var i=0; i<acookie.length; i++){
// 	var acook = acookie[i].split("=");
// 	if(acook[0] == "age"){
// 		console.log(acook[1]);
// 	}
// }


// 拿cookie
var acookie = document.cookie.split("=");
getCookie(acookie);
console.log(acookie[1])
// baiduTemplate
$.get("../src/json/shop.json",function(data){
	// baiduTemplate
	$(".shop_main_f_1").after(baidu.template("temp",data));
});

window.onload = function(){
	// 价格变化
	//获取所有商品价格为一个数组，遍历数组让对应的商品价格和总价格对应
	for(let i=0;i<$(".shop_main_f_2 .ff input").length;i++){
		// 点击第i个让对应的价格“加减”到总价格中
		$(".shop_main_f_2 .ff input").eq(i).click(function(){
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
			// check 选中是注意事项
			// console.log($(".shop_main_f_2 .ff input").eq(i).is('checked'))
			// console.log(String($(".shop_main_f_2 .ff input").eq(i).prop('checked')));
			if(String($(".shop_main_f_2 .ff input").eq(i).prop('checked')) =="true"){
				$(".whi>div span").eq(5).html(parseInt($(".whi>div span").eq(5).html()) + parseInt($('.shop_main_f_2 .cc_4 span').eq(i).html()));
			}
			if(String($(".shop_main_f_2 .ff input").eq(i).prop('checked')) =="false"){
				$(".whi>div span").eq(5).html(parseInt($(".whi>div span").eq(5).html()) - parseInt($('.shop_main_f_2 .cc_4 span').eq(i).html()));
				// this.checked = true;
			}
		})
	}
}
// 全选  获取父的checkbox点击事件
$(".shop_main_f_1 input").click(function(){
	// 先让下面的那个全选选中
	$(".whi_top input").prop("checked",this.checked);
	// 循环拿取
	var i=0; len = $(".shop_main_f_2 .ff input").length;
	for ( ;i<len;i++) {
		var checkbox = $(".shop_main_f_2 .ff input")[i];
		//让每一个子类选中状态和父类保持一致
		checkbox.checked= this.checked;
		if(String(this.checked) =="true"){
			var num_jia = parseInt($(".whi>div span").eq(5).html()) + parseInt($('.shop_main_f_2 .cc_4 span').eq(i).html());
			$(".whi>div span").eq(5).html(num_jia);
			// this.checked = false;
		}
		if(String(this.checked) =="false"){			
			var num_jian = parseInt($(".whi>div span").eq(5).html()) - parseInt($('.shop_main_f_2 .cc_4 span').eq(i).html());
			$(".whi>div span").eq(5).html(num_jian);
			// this.checked = true;
		}
	}
})


$(".whi_top input").click(function(){
	// 先让上面的那个全选选中
	$(".shop_main_f_1 input").prop("checked",this.checked);
	// 循环拿取
	var i=0; len = $(".shop_main_f_2 .ff input").length;
	for ( ;i<len;i++) {
		var checkbox = $(".shop_main_f_2 .ff input")[i];
		//让每一个子类选中状态和父类保持一致
		checkbox.checked = this.checked;
		if(String(this.checked) =="true"){
			var num_jia = parseInt($(".whi>div span").eq(5).html()) + parseInt($('.shop_main_f_2 .cc_4 span').eq(i).html());
			$(".whi>div span").eq(5).html(num_jia);
			// this.checked = false;
		}
		if(String(this.checked) =="false"){			
			var num_jian = parseInt($(".whi>div span").eq(5).html()) - parseInt($('.shop_main_f_2 .cc_4 span').eq(i).html());
			$(".whi>div span").eq(5).html(num_jian);
			// this.checked = true;
		}
	}
})

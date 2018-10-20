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
var zoom = document.querySelector('.zoom');
var simg = document.querySelector('.small_area img');
var bimg = document.querySelector('.big_area img');
var big = document.querySelector('.big_area');
var small = document.querySelector('.small_area');
var mask = document.querySelector('.mask');

// 设置遮罩层宽高  小图宽 除以 大图宽 乘以 大显示区域边框
mask.style.width = (simg.offsetWidth/bimg.offsetWidth)*big.clientWidth+"px";
mask.style.height = (simg.offsetHeight/bimg.offsetHeight)*big.clientHeight+"px";

// 定义遮罩层最大边距，也就是最大移动距离
var maxW = simg.clientWidth - mask.offsetWidth;
var maxH = simg.clientHeight - mask.offsetHeight;

// 鼠标移入小显示区域发生事件：1.遮罩层显示 2.大显示区域显示
small.onmouseenter=function(){
	mask.style.left = 0;
	big.style.left = 210+"px";
}

// 鼠标移出小显示区域发生事件：1.遮罩层消失 2.大显示区域消失
small.onmouseleave=function(){
	mask.style.left = -10000+"px";
	big.style.left = -10000+"px";
}
// 鼠标在小显示区域移动
small.onmousemove=function(e){
	// 解决兼容问题
	e = e || window.event;
	// 定义两个变量 让鼠标位置一直处于遮罩层位置中间
	var nLeft = e.pageX-zoom.offsetLeft-zoom.clientLeft-mask.offsetWidth/2;
	var nTop = e.pageY-zoom.offsetTop-zoom.clientTop-mask.offsetHeight/2;

	// 设置遮罩层永远显示在小显示区域内部 也就是判断nLeft、nTop值
	nLeft = Math.min(maxW,Math.max(0,nLeft));
	nTop = Math.min(maxH,Math.max(0,nTop));

	// 遮罩层位置
	mask.style.left = nLeft+"px";
	mask.style.top = nTop+"px";

	// 设置大图片移动位置 跟随遮罩层百分比移动（语法带入）
	bimg.style.left = -(bimg.offsetWidth-big.clientWidth)*(nLeft/(simg.offsetWidth-mask.offsetWidth))+"px";		
	bimg.style.top = -(bimg.offsetHeight-big.clientHeight)*(nTop/(simg.offsetHeight-mask.offsetHeight))+"px";			


}
var lis = document.querySelectorAll('.ul ul li');
// 如果把ul放在zoom上面，则需要修改.ul img 为.zoom img  英文var img需要获取的是右边区域的图片
var img = document.querySelector('.zoom img');
var bimg = document.querySelector('.big_area img');
for(var i=0; i<lis.length; i++){
	lis[i].onmouseenter=function(){
		img.src = this.getAttribute('src');
		bimg.src = this.getAttribute('src');
	}
}

// 商品数量增减
var num_jia = document.getElementById("num-jia");
var num_jian = document.getElementById("num-jian");
var input_num = document.getElementById("input-num");

num_jia.onclick = function() {
    input_num.value = parseInt(input_num.value) + 1;
}
num_jian.onclick = function() {
    if(input_num.value <= 0) {
        input_num.value = 0;
    } else {

        input_num.value = parseInt(input_num.value) - 1;
    }
}

// 吸顶
window.onscroll=function(){
	var top = document.documentElement.scrollTop;
	if(top>900){
		xi.className = "active";
	}else{
		xi.className = "";
	}
	if(top>500){
		fsFixedTopContent_2.className = "fsFixedTopContent_2 active";
	}else{
		fsFixedTopContent_2.className = "fsFixedTopContent_2";
	}
	if(top>1200){
		fsFixedTopContent_3.className = "fsFixedTopContent_3 active";
	}else{
		fsFixedTopContent_3.className = "fsFixedTopContent_3";
	}
}

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

// 懒加载
$(".lazy").lazyload({
	threshold:-300
});
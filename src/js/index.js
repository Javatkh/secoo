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

// 轮播
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// 第二个轮播
var index=0;
// 获取元素节点
var n_box=document.querySelector(".box");
var uls = document.querySelector(".box ul");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var spans = document.querySelectorAll(".dot span");

// 设置定时器，让ul每秒移动一个图片宽度  调用左翻转函数  每一秒调用一下
n_box.timer = setInterval(fnNext,2000);


// 鼠标移入box，图片不动
n_box.onmouseenter = function(){
	clearInterval(n_box.timer);
}
// 鼠标移出box，图片继续
n_box.onmouseleave = function(){
	n_box.timer = setInterval(fnNext,2000);
}

// 注册左右按钮事件
// 左边按钮往右翻转，右边按钮往左边翻转
prev.onclick=function(){
	fnPrev();
}
next.onclick = fnNext;  //第二种写法

// 处理左右按钮默认事件
prev.onmousedown=next.onmousedown=function(e){
	e = e || window.event;
	e.preventDefault?e.preventDefault():e.returnValue=false;
}

// span按钮事件
for(var i=0;i<spans.length;i++){
	// 注册下标
	spans[i].index = i;

	spans[i].onclick = function(){
		// 让当前点击的按钮下标 传给对应的li 调用函数找到对应图片
		index = this.index;
		n_move();
	}
}

// ---------------封装函数-----------------------------
// 封装一个往左翻转的函数，用于左按钮和默认轮播方向
function fnNext(){
	// 每一秒让index加1
	index++;
	// 如果index等于li数量时
	if(index==uls.children.length){
		// index = 0;
		// 无缝轮播 当下标为数组长度时，让下标为1（第二张图片的下标），left设置为0
		index = 1;
		uls.style.left = 0;
	}
	// 调用移动函数
	n_move();
}
// 封装一个往右翻转的函数
function fnPrev(){
	// 每一秒让index加1
	index--;
	// 如果index等于li数量时
	if(index<0){
		// 长度减去1就是index下标
		// index = uls.children.length-1;
		// 当下标小于0时，让index等于倒数第二张图片下标
		index = uls.children.length-2;
		// 设置left为倒数第一张的位置
		uls.style.left = -(uls.children.length-1)*n_box.clientWidth+"px";

	}
	// 调用移动函数
	n_move();
}
// 封装移动函数
function n_move(){
	// 定义一个num 不用index防止执行fnNext函数时index永远不到uls.children.length 
	// spans.length=4    uls.children.length=5
	var num = index;
	if(index == spans.length){
		num = 0;
	}
	// 轮播时设置span颜色
	for(var i=0;i<spans.length;i++){
		spans[i].className="";
	}
	// 设置背景色
	spans[num].className="active";
	move(uls,{
		left:-index*n_box.clientWidth
	},1000);
}

// lazyload 图片懒加载
$(".lazy").lazyload({
	threshold:-200
});
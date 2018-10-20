$.fn.extend({
	subMenu:function(){
		var timer = null;
		var container = this;
		container.children().eq(0).children().hover(function(){
			var that = this;
			clearTimeout(timer);
			timer = setTimeout(function(){
				container.children().eq(1).stop().fadeIn();
				$(that).addClass("active").siblings().removeClass("active");
				container.children().eq(1).children().eq($(that).index()).stop().fadeIn().siblings().stop().fadeOut();
			},400);
		},function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				container.children().eq(1).stop().fadeOut();
				container.children().eq(0).children().removeClass("active");
			},400)
		});

		container.children().eq(1).hover(function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				container.children().eq(1).stop().fadeIn();
			},400)
		},function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				container.children().eq(1).stop().fadeOut();
				container.children().eq(0).children().removeClass("active");
			},400)
		});
	}
});
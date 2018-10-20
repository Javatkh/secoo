function move(ele, props, duration,fn){
	if(ele.timer) return false;
	duration = duration || 1000;
	var ends = {};
	for(var attr in props){
		ends[attr] = props[attr];
	}

	var starts = {};
	for(var attr in props){
		starts[attr] = parseInt(getStyle(ele)[attr]);
	}

	var date = new Date();//运动起始时间
	
	ele.timer = setInterval(function(){
		var scale = (new Date()-date)/duration;
		if(scale > 1){
			scale = 1;
		}
		for(var attr in props){

			ele.style[attr] = starts[attr] + (ends[attr]-starts[attr])*scale + "px";
		}
		if(scale == 1){
			clearInterval(ele.timer);
			ele.timer = null;
			if(fn){
				fn();
			}
		}
	},10);

}

function getStyle(ele){
	return window.getComputedStyle?window.getComputedStyle(ele,null):ele.currentStyle;
}
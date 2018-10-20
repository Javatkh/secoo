
// 显示隐藏贵宾邀请码现象
var gb= $(".login_window_main .yao input")
var gb_input= $(".login_window_main .yao_2")

function ff(){
	if(gb.attr("check")=="true"){
		gb_input.html("<input type='text'>");
		gb.attr("check","false");
	}else{
		gb_input.empty();
		gb.attr("check","true");
	}
}
//改变“请输入手机号或者邮箱”
var user = $(".login_window_main .user input");
var user_num = $(".login_window_main .top").eq(0).find(".t2");

user.focus(function(){
	user_num.html("请输入正确的用户名和密码");
	user_num.css("color","red");
})
user.blur(function(){
	user_num.html("请输入手机号或者邮箱");
	user_num.css("color","#999999");
})


// 显示隐藏  密码输入框字
var pasw = $(".login_window_main .pasw input");
var pasw_num = $(".login_window_main .top").eq(1).find(".t2");

pasw.focus(function(){
	pasw_num.html("密码为数字字母下划线组成 6-18位");
	pasw_num.css("color","red");
})
pasw.blur(function(){
	pasw_num.empty();
})

// 显示隐藏  确认密码输入框字
var q_pasw = $(".login_window_main .pass input");
var q_pasw_num = $(".login_window_main .top").eq(2).find(".t2");

q_pasw.focus(function(){
	q_pasw_num.html("请输入确认密码");
	q_pasw_num.css("color","red");
})
q_pasw.blur(function(){
	q_pasw_num.empty();
})
// 获取按钮
var btns = document.querySelectorAll('.login_window .log_box .btns button');
// 获取下面的选项卡div
var divs = document.querySelectorAll('.login_window .log_box .dis>div');

for(var i=0; i<btns.length; i++){
	btns[i].index = i;   //获取下标
	btns[i].onclick=function(){
		// 循环遍历让对应的元素class属性值为空
		for(var i=0; i<btns.length; i++){
			btns[i].className = "";
			divs[i].className = "";
		}
		// 属性值为active,背景变化，div显示
		this.className = "active";
		divs[this.index].className = "active";
	}
}

$.idcode.setCode();		
$("#btns").click(function (){
	var IsBy = $.idcode.validateCode(); 
	alert(IsBy);
	console.log(IsBy);
});

// 正则验证
// 用户名、手机号、邮箱验证

// 匹配手机号
var verification_phone = /^1(3|5|6|7|8)\d{9}$/;
// 匹配用户名，只能包含数字字母下划线，不能以数字开头，6~21位
// var verification_u_name = /^[A-z_]\w{5,20}$/;
// 匹配邮箱 abc@def.com
var verification_mail = /^[\w]+@[A-z\d]+\.[A-z]{2,4}$/;
// 匹配密码  数字字母下划线组成 6-18位
var verification_password = /^\w{6,18}$/;

// 用户名
var login_input = $(".dis .user");
var login_password = $(".dis .usname");

$(".dis .btn").click(function(){
	// 用户名验证 13245678900
	if(login_input.val() !=""){
		if( verification_phone.test(login_input.val())==false  &&  verification_mail.test(login_input.val())==false){  
			login_input.val("用户名错误","placeholder").css({
			  "font-size":"9px",
			  "color":"#df7272",
			  "font-family":"Arial",
			  });
			// 用户名聚焦报错消失
			login_input.focus(function(){
				login_input.val("","用户名错误");
			})
			// 密码框聚焦报错消失
			login_password.focus(function(){
				login_password.val("","用户密码错误");
			});

			// if(login_password.val() == ""){
			// 	// 用户密码框报错
			// 	login_password.val("密码未填写，请先填写用户密码","placeholder").css({
			// 	  "font-size":"9px",
			// 	  "color":"#df7272",
			// 	  "font-family":"Arial",
			// 	  });
			// 	// 用户密码聚焦报错消失
			// 	login_password.focus(function(){
			// 		login_password.val("","密码未填写，请先填写用户密码");
			// 		login_input.val("","用户名错误");
			// 	})
			// }

		}else{
			login_input.css("color","#999999");
		}
	}
	// 密码验证
	if(login_password.val() !=""){
		if( verification_password.test(login_password.val())==false){  
			login_password.attr("type","text");
			login_password.val("用户密码错误","placeholder").css({
			  "font-size":"9px",
			  "color":"#df7272",
			  "font-family":"Arial",
			  });
			// 密码框聚焦报错消失
			login_password.focus(function(){
				login_password.attr("type","password");
				login_password.val("","用户名错误");
				login_input.val(login_input.val(),"用户名未填写，请先填写用户名");
			});

			if(login_password.val() == "用户密码错误"){
				
				// 用户名聚焦报错消失
				login_input.focus(function(){
					login_password.val("","用户名错误");
				})

			}
			if(login_input.val()==""){
				// 用户名框报错
				login_input.val("用户名未填写，请先填写用户名","placeholder").css({
				  "font-size":"9px",
				  "color":"#df7272",
				  "font-family":"Arial",
				  });
				// 用户名聚焦报错消失
				login_input.focus(function(){
					login_input.val("","用户名未填写，请先填写用户名");
					login_password.val("","用户名错误");
				})
			}
		}else{
			login_password.css("color","#999999");
		}
	}
	// 若都未填写 则报错
	if(login_password.val()=="" && login_input.val()==""){
		login_password.attr("type","text");
		login_password.val("用户密码未填写","placeholder").css({
		  "font-size":"9px",
		  "color":"#df7272",
		  "font-family":"Arial",
		  });
		// 密码框聚焦报错消失
		login_password.focus(function(){
			login_password.val("","用户密码未填写");
			login_input.val("","用户名未填写，请先填写用户名");
		});
		// 用户名框报错
		login_input.val("用户名未填写，请先填写用户名","placeholder").css({
		  "font-size":"9px",
		  "color":"#df7272",
		  "font-family":"Arial",
		  });
		// 用户名聚焦报错消失
		login_input.focus(function(){
			login_password.val("","用户密码未填写");
			login_input.val("","用户名未填写，请先填写用户名");
		})
	}
})

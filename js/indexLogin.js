$(document).ready(function() {
	$(".logins").validate({
		rules:{
			username:{
				required:true
			},
			password:{
				required:true
			}
		},
		messages:{
			username:{
				required:"用户名必填"
			},
			password:{
				required:"密码必填"
			}
		}
	})
	$(".regist").validate({
		rules:{
			username:{
				required:true
			},
			password:{
				required:true
			},
			password1:{
				equalTo:"#password"
			}
		},
		messages:{
			username:{
				required:"用户名必填"
			},
			password:{
				required:"密码必填"
			},
			password1:{
				equalTo:"两次密码输入不一致"
			}
		}
	})
    $(".code_box>img").click(function () {
        this.src = "index.php?m=index&f=login&a=imagecode";
    })
    $(".regitInput").blur(function () {
        let value = $(this).val();
        $.ajax({
            url:"index.php?m=index&f=login&a=registCheck",
            type:"post",
            data:{value},
            success:function (e) {
                if (e == "no"){
                    $(".reg_error").show().html("该用户名已被注册");
                }
            }
        })
    })
});
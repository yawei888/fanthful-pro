"use strict";$(".logins").on("click",function(){window.event.preventDefault(),$.ajax({url:"./api/login.php",method:"post",data:{username:$("#username").val(),password:$("#password").val()},dataType:"json",async:!0,success:function(o){console.log(o),1==o.code?(setCookie("login",$("#username").val()),confirm("登录成功")):confirm("登录失败")},error:function(o){console.log(o)}})});
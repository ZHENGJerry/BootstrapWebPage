$(function(){

// 登录
  // username文本框非空验证
  $("#outlogin-username").blur(function(){
    var username = $("#outlogin-username").val();
    if(username == null || username == ""){
      $("#outlogin-username").css("border", "1px solid red");
      $("#outlogin-errInfo").html("您输入的用户名有误！！");
      $("#outlogin-errInfo").css("color", "red");
    }
  });
  $("#outlogin-username").focus(function(){
    var username = $("#outlogin-username").val();
    if(username == null || username == ""){
      $("#outlogin-username").css("border", "1px solid #0290D8");
      
    }
  });
  // password文本框非空验证
  $("#outlogin-password").blur(function(){
    var password = $("#outlogin-password").val();
    if(password == null || password == ""){
      $("#outlogin-password").css("border", "1px solid red");
      $("#outlogin-errInfo").html("您输入的密码有误！！");
      $("#outlogin-errInfo").css("color", "red");
    }
  });
  $("#outlogin-password").focus(function(){
    var password = $("#outlogin-password").val();
    if(password == null || password == ""){
      $("#outlogin-password").css("border", "1px solid #0290D8");
    }
  });
  // 登录按钮
  $("#outlogin_btn").click(function(){
          var user1 = "zhengzhiwei";
          var pwd = "111111";

          var username = $("#outlogin-username").val();
          var password = $("#outlogin-password").val();
          
          if((username == user1)&&(password == pwd)){
            window.location.href = "index.html";
          }else{
            $("#outlogin-errInfo").html("您输入的账号或密码错误！！");
            $("#outlogin-errInfo").css("color", "red");
          }

        });

// 注册
  // username文本框非空验证
  $("#outregister-username").blur(function(){
    var username = $("#outregister-username").val();
    if(username == null || username == ""){
      $("#outregister-username").css("border", "1px solid red");
      $("#outregister-errInfo").html("您输入的用户名有误！！");
      $("#outregister-errInfo").css("color", "red");
    }
  });
  $("#outregister-username").focus(function(){
    var username = $("#outregister-username").val();
    if(username == null || username == ""){
      $("#outregister-username").css("border", "1px solid #0290D8");
    }
  });
  // password文本框非空验证
  $("#outregister-password").blur(function(){
    var password = $("#outregister-password").val();
    if(password == null || password == ""){
      $("#outregister-password").css("border", "1px solid red");
      $("#outregister-errInfo").html("您输入的密码有误！！");
      $("#outregister-errInfo").css("color", "red");
    }
  });
  $("#outregister-password").focus(function(){
    var password = $("#outregister-password").val();
    if(password == null || password == ""){
      $("#outregister-password").css("border", "1px solid #0290D8");
    }
  });
  // confirmpassword文本框非空验证
  $("#outregister-confirmPwd").blur(function(){
    var confirmPwd = $("#outregister-confirmPwd").val();
    var password = $("#outregister-password").val();
    if(confirmPwd == null || confirmPwd == ""){
      $("#outregister-confirmPwd").css("border", "1px solid red");
      $("#outregister-errInfo").html("您的确认密码有误！！");
      $("#outregister-errInfo").css("color", "red");
    }
    if (!(confirmPwd == password)) {
    	$("#outregister-confirmPwd").css("border", "1px solid red");
    	$("#outregister-errInfo").html("您两次输入的密码不一致！！");
    	$("#outregister-errInfo").css("color", "red");
    }
  });
  $("#outregister-confirmPwd").focus(function(){
    var confirmPwd = $("#outregister-confirmPwd").val();
    if(confirmPwd == null || confirmPwd == ""){
      $("#outregister-confirmPwd").css("border", "1px solid #0290D8");
    }
  });
// 注册按钮
  $("#outregister_btn").click(function(){
          

          var username = $("#outregister-username").val();
          var password = $("#outregister-password").val();
            $("#outregister-errInfo").html("注册成功！！");
            $("#outregister-errInfo").css("color", "green");
            window.location.href = "index.html";
          

        });
  
});
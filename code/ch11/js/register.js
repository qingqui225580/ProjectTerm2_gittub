/**
 * 注册功能模块
 */
$(function() {
    //选中调用
    $('#registerFrom').validate({
        //验证规则

        rules: {
            //用户名的验证
            username: {
                required: true, //非空
                rangelength: [5, 8] //长度
            },
            // 密码验证
            password: {
                required: true, //非空
                isPassword: true
            },
            // 确认密码
            checkPassword: {
                required: true, //非空
                equalTo: "#password" //验证密码一致性
            },
            //电话号码
            Tel: {
                required: true, //非空
                isTel: true //自定义电话号码验证
            }

        },
        //提示信息
        messages: {
            // 用户名提示信息
            username: {
                required: '用户名不能为空', //非空提示
                rangelength: '长度为:5~8位', //长度提示
            },
            //密码提供信息
            password: {
                required: '密码不能为空', //非空提示
                isPassword: '<br>请输入12-18个以字母开头,可带数字,“_”,“.”的密码！',
            },
            // 确认密码
            checkPassword: {
                required: '请再次输入密码！', //非空
                equalTo: "两次密码不一致" //验证密码一致性
            },
            //电话号码提示信息
            Tel: {
                required: '请再次输入电话号码！', //非空
                isTel: "电话号码格式不正确！"
            }

        }
    })

    // 密码自定义验证
    jQuery.validator.addMethod("isPassword", function(value, element) {
        var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    });

    // 电话号码自定义验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var telReg = /^[1]+[3,8，5，7，9]+\d{9}$/;
        return this.optional(element) || (telReg.test(value));
    });
})
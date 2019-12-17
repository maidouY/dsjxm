var user = {
    login: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    logout: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGOUT,
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    getUser: function (options) {
        $.ajax({
            url: GETUSER,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res);
                }
            }
        })
    },
    userinfo_g: function (options) {
        $.ajax({
            url: USERINFO_G,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res);
                }
            }
        })
    },
    userinfo_e: function (options) {
        var fd = new FormData($('form')[0]);
        $.ajax({
            type: 'POST',
            url: USERINFO_E,
            data: fd,
            contentType: false,    //不需要jQuery设置内容类型
            processData: false,    //不需要jQuery进行内容处理
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                }
            }
        })
    }
}

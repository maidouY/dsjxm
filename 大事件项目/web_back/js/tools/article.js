var article = {
    getCate: function (options) {
        $.ajax({
            url: CATEGORY_SEARCG,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res);
                }
            }
        })
    },
    addarticle: function (options) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/admin/category_add',
            data: $('form').serialize(),
            success: function (res) {
                // 检测是否成功
                if (res.code === 200) {
                    options.success();
                }
                // 如果失败，可能是因为名称或别名重复，提示即可
                else {
                    options.fail();
                }
            }
        })
    },
    editarticle: function (options) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/admin/category_edit',
            data: $('form').serialize(),
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    delarticle: function (options) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/admin/category_delete',
            data: {
                id: options.data.id
            },
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    }
}
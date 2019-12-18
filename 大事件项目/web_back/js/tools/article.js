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
            url: CATEGORY_EDIT,
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
            url: CATEGORY_DEL,
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
    },
    searcharticle: function (options) {
        $.ajax({
            url: SEARCH,
            data: {
                page: options.data.page,
                type: options.data.type,
                state: options.data.state
            },
            success: function (res) {
                if (res.code == 200) {
                    options.success(res);
                }
            }
        })
    }
}
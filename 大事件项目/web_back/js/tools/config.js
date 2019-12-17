// 这个js文件用来保存网站中的一下配置信息
// 例如，所有接口的地址都可以保存在这个文件中

var BASE_URL = 'http://localhost:8000';
// 用户登录
var LOGIN = BASE_URL + '/admin/login';
// 退出登录
var LOGOUT = BASE_URL + '/admin/logout';
// 获取用户信息
var GETUSER = BASE_URL + '/admin/getuser';
// 个人中心获取用户信息
var USERINFO_G = BASE_URL + '/admin/userinfo_get';
// 个人中心编辑用户信息
var USERINFO_E = BASE_URL + '/admin/userinfo_edit';
// 文章类别获取
var CATEGORY_SEARCG = BASE_URL + '/admin/category_search';
// 新增文章类别
var CATEGORY_ADD = BASE_URL + '/admin/category_add';
// 编辑文章类别
var CATEGORY_EDIT = BASE_URL + '/admin/category_edit';
// 删除文章类别
var CATEGORY_DEL = BASE_URL + '/admin/category_delete';



// 这个js文件用来保存网站中的一下配置信息
// 例如，所有接口的地址都可以保存在这个文件中

var BASE_URL = 'http://localhost:8000';
// 用户登录
var LOGIN = BASE_URL + '/admin/login';
// 退出登录
var LOGOUT = BASE_URL + '/admin/logout';
// 获取用户信息
var GETUSER = BASE_URL + '/admin/getuser';
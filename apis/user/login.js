import http, { decorRequest } from '@/plugins/axios/http.js';

const userLoginApiMap = {
  login: { url: '/login', method: 'POST' },
  logout: { url: '/logout', method: 'POST' },
};

/**
 * 登录请求格式
 */
const login_form_data = {
  ES_account: '',
  ES_password: '',
};
/**
 * 注册请求格式
 * 教务系统账号，教务系统密码
 * 名，性别，年龄，学院，专业，班级，学号，发展方向意向，个人描述
 */
const register_form_data = {
  ES_account: '',
  ES_password: '',
  user_name: '',
  user_gender: '',
  user_age: '',
  user_college: '',
  user_profession: '',
  user_class: '',
  user_studentId: '',
  user_intension: [],
  user_description: '',
};
/**
 * 招新请求格式
 * 名，性别，年龄，学院，专业，班级，学号，发展方向意向，个人描述
 */
const recruit_form_data = {
  user_name: '',
  user_gender: '',
  user_age: '',
  user_college: '',
  user_profession: '',
  user_class: '',
  user_studentId: '',
  user_intension: [],
  user_description: '',
};

const login = decorRequest(http, userLoginApiMap['login']);
const logout = decorRequest(http, userLoginApiMap['logout']);

export {
  login_form_data,
  recruit_form_data,
  register_form_data,
  login,
  logout,
};

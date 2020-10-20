import http, { decorRequest } from '@/plugins/axios/http.js';

const userLoginApiMap = {
  login: { url: '/login', method: 'POST' },
  logout: { url: '/logout', method: 'POST' },
};

/**
 * 登录请求格式
 */
const login_form_data = {
  ES_account: { type: String, text: '教务系统账号', value: null },
  ES_password: { type: String, text: '教务系统密码', value: null },
};
/**
 * 注册请求格式
 * 教务系统账号，教务系统密码
 * 名，性别，年龄，学院，专业，班级，学号，发展方向意向，个人描述
 */
const register_form_data = {
  ES_account: { type: String, text: '教务系统账号', value: null },
  ES_password: { type: String, text: '教务系统密码', value: null },
  user_name: { type: String, text: '阁下大名', value: null },
  user_gender: { type: String, text: '性别', value: null },
  user_age: { type: Number, text: '芳龄', value: null },
  user_college: { type: String, text: '所属学院', value: null },
  user_profession: { type: String, text: '所处专业', value: null },
  user_class: { type: String, text: '所在班级', value: null },
  user_studentId: { type: String, text: '你的学号', value: null },
  user_intension: { type: Array, text: '感兴趣的发展方向', value: null },
  user_description: {
    type: String,
    text: '为咱工作室描述一下神秘的你叭',
    value: null,
  },
};
/**
 * 招新请求格式
 * 名，性别，年龄，学院，专业，班级，学号，发展方向意向，个人描述
 */
const recruit_form_data = {
  user_name: { type: String, text: '阁下大名', value: null },
  user_gender: { type: String, text: '性别', value: null },
  user_age: { type: Number, text: '年龄', value: null },
  user_college: { type: String, text: '所属学院', value: null },
  user_profession: { type: String, text: '所处专业', value: null },
  user_class: { type: String, text: '所在班级', value: null },
  user_studentId: { type: String, text: '你的学号', value: null },
  user_intension: { type: Array, text: '感兴趣的发展方向', value: null },
  user_description: {
    type: String,
    text: '为咱工作室描述一下神秘的你叭',
    value: null,
  },
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

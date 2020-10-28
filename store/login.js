import {
  login_form_data,
  recruit_form_data,
  register_form_data,
  login,
  logout,
} from '../apis/user/login';
import { setToken, removeToken } from '@/utils/localStorage';
/**
 * 由于目前存在login，register，recruit，release多种提交表单界面且多个组件之间需要交互
 * 所以采用vuex内统一表单数据管理为佳，但此处只负责保存表单数据而不负责发送http请求即解耦于api
 */
export const state = () => ({
  token: null,
});
export const mutations = {
  update_form_data(state, form_obj) {
    if (!state.form_data) {
      state.form_data = new Map();
    } else {
      for (const key in form_obj) {
        state.form_data.set(key, form_obj[key]);
      }
    }
  },
  /**
   * 每次提交成功即清空
   */
  reset_form_data(state) {
    state.form_data = null;
  },
  //清除token和userInfo
  reset_user_state(state) {
    state.userInfo = {};
    state.token = '';
  },
  set_token(state, token) {
    state.token = token;
    setToken();
  },
  delete_token(state) {
    state.token = '';
    removeToken();
  },
  set_userInfo(state, userInfo) {
    state.userInfo = userInfo;
  },
  delete_userInfo(state) {
    state.userInfo = {};
  },
};
export const actions = {
  /**
   * 登出
   */
  async logout({ commit }) {
    try {
      await logout();
      commit('reset_user_state');
      removeToken();
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 登录失败，token过期，手动登出需要清空vuex内user模块的所有state，清空保存在localStorage的token，或清空动态增加的路由
   */
  async reset() {},
  /**
   * 登录
   */
  async login({ commit, state }) {
    try {
      const { token } = (await login()).data;
      commit('set_userInfo', (await get_userInfo({ token })).data);
    } catch (error) {
      console.log(error);
    }
    commit('set_userInfo', state.userInfo);
    setToken(state.userInfo.userId, token);
  },
};
export const getters = {
  login_form_data() {
    return login_form_data;
  },
  recruit_form_data() {
    return recruit_form_data;
  },
  register_form_data() {
    return register_form_data;
  },
};

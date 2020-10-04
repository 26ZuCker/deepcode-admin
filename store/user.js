import { setToken, removeToken } from '@/utils/localStorage/token.js';
import { get_userInfo, login, logout } from '@/apis/user.js';

export const state = () => ({
  userInfo: {},
  token: '',
});
export const mutations = {
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
  /**
   * 获取并更新用户信息
   */
  async getUserInfo({ commit, state }) {
    try {
      if (Object.keys(state.userInfo).length !== 0) {
        return state.userInfo;
      } else {
        commit('set_userInfo', (await get_userInfo({ token })).data);
        //容错处理如自定义状态码错误
        return state.userInfo;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
export const getters = {
  isLogin(state) {
    return Object.keys(state.userInfo).length !== 0;
  },
};

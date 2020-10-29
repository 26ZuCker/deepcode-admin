import { get_userInfo, login, logout } from '@/apis/user/information.js';
import { getToken, setToken, removeToken } from '@/utils/localStorage';
import { codeMap } from '@/plugins/axios';

const { ERRORCODE } = codeMap;

/**
 * 有关登录和登出的模块都归在login内，user只负责用户个人信息和权限的处理
 */
export const state = () => ({
  userInfo: {},
  permission: '',
  token: '',
  //此处只保存id，后续根据该id获取所属组
  memberList: [
    { header: '开发组' },
    {
      name: 'Sandra Adams',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    },
    {
      name: 'Ali Connors',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    },
    {
      name: 'Trevor Hansen',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    },
    {
      name: 'Tucker Smith',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    },
    { divider: true },
    { header: '算法组' },
    {
      name: 'Britta Holt',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    },
    {
      name: 'Jane Smith ',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    },
    {
      name: 'John Smith',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    },
    {
      name: 'Sandra Williams',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    },
    { divider: true },
    { header: '第三组' },
    {
      name: 'LeBron',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    },
    {
      name: 'James',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    },
    { divider: true },
    { header: '非工作室成员' },
    {
      name: 'zeng',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    },
    {
      name: 'Sandra',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    },
  ],
});
export const mutations = {
  /**
   * 设置token
   */
  set_token(state, token) {
    state.token = token;
    setToken(token);
  },
  /**
   * 清空vuex内的token
   */
  reset_token(state) {
    state.token = null;
  },
  /**
   * 清空vuex内的userInfo
   */
  set_userInfo(state, userInfo) {
    state.userInfo = userInfo;
    state.permission = userInfo.permission;
  },
  /**
   * 清空vuex内的userInfo
   */
  reset_userInfo(state) {
    state.userInfo = {};
    state.permission = '';
  },
  /**
   * 清空vuex内的token
   */
  reset_all(state) {
    state.userInfo = {};
    state.permission = '';
    state.token = null;
  },
};
export const actions = {
  /**
   * 获取并更新用户信息
   */
  async getUserInfo({ commit, state, getters }) {
    //获取失败的回调
    const reset = () => {
      /* commit('reset_all');
      removeToken(); */
      commit('reset_token');
    };
    try {
      //已登录
      if (getters('user/isLogin')) {
        return state.userInfo;
      }
      //未登录则根据token获取
      else {
        const params = { token: state.token };
        const { code, data, msg } = (await get_userInfo(params)).data;
        if (code !== ERRORCODE) {
          const { userInfo } = data;
          commit('set_userInfo', userInfo);
          //容错处理如自定义状态码错误
          return Promise.resolve(state.userInfo);
        } else {
          reset();
          return Promise.reject(msg);
        }
      }
    } catch (error) {
      reset();
      return Promise.reject(error);
    }
  },
  /**
   * 登录，先获取token再根据前者获取用户信息，注意token先根据缓存中取再去vuex内的，因为直接调用JavaScript效率显然高于缓存
   */
  async login({ commit, state }) {
    const localToken = getToken();
    if (localToken !== null) {
      if (state.token.length === 0) {
        commit('set_token', localToken);
      }
      return await this.getUserInfo();
    }
    //不存在token则先通过login获取token再发送token获取userInfo
    else {
      try {
        const { code, data, msg } = (await login()).data;
        if (code !== ERRORCODE) {
          const { token } = data;
          commit('set_token', token);
          return await this.getUserInfo();
        } else {
          return Promise.reject(msg);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  },
  /**
   * 登出
   * 清空vuex和localStorage即可
   */
  async logout({ commit, state }) {
    try {
      const { code, msg } = (await logout()).data;
      if (code !== ERRORCODE) {
        commit('reset_all');
        removeToken();
        return Promise.resolve('登出成功');
      } else {
        return Promise.reject(msg);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
export const getters = {
  /**
   * 注意：可能存在已进行响应login即获取token但未响应getUserInfo
   * 所以需要在getUserInfo失败的回调中清空token
   */
  isLogin(state) {
    return true;
    return state.token !== '';
  },
};

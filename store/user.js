import { get_userInfo } from '@/apis/user/information.js';

/**
 * 有关登录和登出的模块都归在login内，user只负责用户个人信息和权限的处理
 */
export const state = () => ({
  userInfo: {},
  //此处只保存id，后续根据该id获取所属组
  memberList: [
    {
      header: '开发组',
    },
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
    {
      divider: true,
    },

    {
      header: '算法组',
    },
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
    {
      divider: true,
    },

    {
      header: '第三组',
    },
    {
      name: 'LeBron',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    },
    {
      name: 'James',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    },
    {
      divider: true,
    },

    {
      header: '非工作室成员',
    },
    {
      name: 'zeng',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    },
    {
      name: 'Sandra',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    },
  ],
  permission: null,
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

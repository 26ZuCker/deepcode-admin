import { getToken } from '@/utils/localStorage/token.js';
export const actions = {
  //初始化根据token发送请求获取信息
  async nuxtServerInit({ commit, dispatch }, {}) {
    const token = getToken();
    if (token) {
      //token存在还要判断是否过期，但后者由后端判断
    } else {
      //token不存在则调用user模块中的actions以进行api
      //await dispatch('user/login');
    }
  },
};

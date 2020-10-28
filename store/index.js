import { getToken } from '@/utils/localStorage';
export const actions = {
  /**
   * 初始化填充vuex
   * @param {any} store
   * @param {any} context
   */
  async nuxtServerInit({ commit, dispatch }, { redirect }) {
    const token = getToken();
    if (token) {
      //token存在还要判断是否过期，但后者由后端判断
    } else {
      //token不存在则调用user模块中的actions以进行api
      //await dispatch('user/login');
    }
  },
};

import { getToken } from '@/utils/localStorage/token.js';
export const actions = {
  //初始化根据token发送请求获取信息
  async nuxtServerInit({}, {}) {
    const token = getToken();
    if (token) {
      //token存在还要判断是否过期
    } else {
      //token不存在
    }
  },
};

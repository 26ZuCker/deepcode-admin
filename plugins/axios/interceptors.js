import { getToken, setToken, removeToken } from '@/utils/localStorage';

/**
 * 请求拦截器，通过call能使用nuxt中的context
 * @param {any} config
 */
const reqInter = (config) => {
  const token = getToken();
};
/**
 * 请求失败拦截器，通过call能使用nuxt中的context
 * @param {any} error
 */
const errReqInter = (error) => {
  return Promise.reject(error);
};

/**
 * 响应成功拦截器，通过call能使用nuxt中的context
 * @param {any} response
 */
const resInter = async (response) => {};
/**
 * 响应失败拦截器，通过call能使用nuxt中的context
 * @param {any} error
 */
const errResInter = async (error) => {};

export { reqInter, resInter, errReqInter, errResInter };

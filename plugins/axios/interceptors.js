//import { getToken, setToken, removeToken } from '@/utils/localStorage';
import { whiteList } from './axiosConfig.js';
import { codeMap } from './index.js';
/**
 * 请求拦截器，通过call能使用nuxt中的context
 * 注入token，注意此处取token不能从localStorage而是vuex中取因为必须得是已登录状态
 * 发送失败自动重发
 * 拦截敏感api以避免暴露给外网
 * 跨域
 * 用户取消请求
 * 取消重复请求
 * 监听上传文件进度
 * @param {any} config
 */
const reqInter = (config) => {
  const { url } = config;
  //先判断是否跨域白名单，request.url内的子串在whiteList内
  const isWhiteList = whiteList.some((v) => {
    return url.includes(v);
  });
  //否则取出token并携带，vuex内是否存有token根据后端判断是否合法即可，前端只管取和传
  if (!isWhiteList) {
    if (store.user.getters.isLogin) {
      config.headers.common[
        'Authorization'
      ] = `Bearer ${store.user.state.token}`;
    }
  }
  return config;
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
 * 响应失败拦截器，通过call能使用nuxt中的context
 * 无效url
 * 响应接收超时
 * 错误响应码翻译
 * 统一错误响应处理
 * 监听下载文件进度
 * @param {any} response
 */
const resInter = async (response) => {
  const { data } = response;
  if (data.code === codeMap.ERRORCODE) {
  }
  return response;
};
/**
 * @param {any} error
 */
const errResInter = async (error) => {
  return Promise.reject(error);
};

export { reqInter, resInter, errReqInter, errResInter };

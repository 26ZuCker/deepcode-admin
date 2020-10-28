/**
 * axios配置项
 */
const axiosConfig = {
  //根据不同环境设置不同的url前缀，nuxt置于nuxt.config内的env
  baseURL: process.env.VUE_APP_BASE_URL,
  //跨域时发送cookies
  withCredentials: true,
  timeout: 5000,
  responseType: 'json',
  //xsrf设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  // 最多转发数，用于node.js
  maxRedirects: 5,
  // 最大响应数据大小
  maxContentLength: 2000,
};

/**
 * 自定义响应码，非默认状态码
 */
const codeMap = {
  ERRORCODE: -1,
};

/**
 * 不同环境下的api请求前缀
 */
const BASE_URL = {
  production: '',
  development: '',
  test: '',
};

export { axiosConfig, codeMap, BASE_URL };

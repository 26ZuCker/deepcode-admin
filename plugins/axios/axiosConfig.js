const axiosConfig = {
  //根据不同环境设置不同的url前缀，nuxt置于nuxt.config内的env
  baseURL: process.env.VUE_APP_BASEURL_API,
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

export default axiosConfig;

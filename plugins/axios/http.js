import Vue from 'vue';

import axios from 'axios';
import { reqInterceptors, resInterceptors, errReqInterceptors, errResInterceptors } from './interceptors.js';
import axiosConfig from './axiosConfig.js';

const http = axios.create(axiosConfig);

//请求和响应拦截器
http.interceptors.request.use(reqInterceptors, errReqInterceptors);
http.interceptors.response.use(resInterceptors, errResInterceptors);

//封装请求格式
const decorRequest = (http, { url, method }) => (data) => http[method](url, { data });

//挂载到vue实例上
Vue.prototype.$http = http;

export default http;

export { decorRequest };

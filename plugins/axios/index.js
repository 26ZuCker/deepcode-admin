import Vue from 'vue';

import axios from 'axios';

import {
  reqInter,
  resInter,
  errReqInter,
  errResInter,
} from './interceptors.js';

import { axiosConfig } from './axiosConfig.js';

const http = axios.create(axiosConfig);

//封装请求格式
const decorRequest = (http, { url, method }) => (data) =>
  http[method](url, { data });

const axiosService = ({ store, redirect }) => {
  const that = this;
  //请求和响应拦截器
  http.interceptors.request.use(reqInter.call(that), errReqInter.call(that));
  http.interceptors.response.use(resInter.call(that), errResInter.call(that));
};

export default axiosService;

//挂载到vue实例上
Vue.prototype.$http = http;

export { decorRequest, http };

export { codeMap } from './axiosConfig.js';

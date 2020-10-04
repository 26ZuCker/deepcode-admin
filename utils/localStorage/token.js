const getToken = (userId = 'token') => {
  if (process.client) {
    return window.localStorage.getItem(userId);
  }
};
const setToken = (userId = 'token', token) => {
  if (process.client) {
    return window.localStorage.setItem(userId, token);
  }
};
const removeToken = (userId = 'token') => {
  if (process.client) {
    return window.localStorage.removeItem(userId);
  }
};
//nuxt作为一个服务端渲染的库，代码应该在node环境执行，浏览器的执行环境和node的执行环境是有差异的即node上是没有window或document这样的对象，所以会报错
//后期需要做好当前浏览器是否支持localStorage
export { getToken, setToken, removeToken };

/**
 * 鉴权中间件：
 * 游客：即未登录状态，优先进入office页面
 * 普通用户：即已登录状态，优先进入user页面
 * 超级管理员：配置额外前端服务器
 */
const beforeLogin = ({ store, redirect }) => {
  if (store.getters['user/isLogin']) {
    return redirect('/user');
  } else {
    return redirect('/office');
  }
};
export default beforeLogin;

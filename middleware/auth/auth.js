/**
 * 如果未登录统一进入首页自动重定向至login，权限具体比较的逻辑存在vuex内
 * 需要鉴权的页面：login，user，project，schedule
 * 需要鉴权的组件：
 */
const auth = (allowedPermission = -2) => ({ store, redirect }) => {
  //传入-2或默认不传则代表不需要鉴权
  if (allowedPermission === -2) {
    return true;
  }
  //手动传入-1则表示至少需要登录
  else if (allowedPermission === -1) {
    return store.user.getters.isLogin ? true : redirect('/login');
  }
  //传入则必定需要鉴权则先判断是否已登录
  else {
    const current_per = store.user.state.permission;
    return comparePermission(current_per, allowedPermission);
  }
};

const comparePermission = (current_per, target_per) =>
  (target_per & current_per) > 0;

export default auth;

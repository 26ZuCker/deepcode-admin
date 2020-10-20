/**
 * 组件鉴权，注入组件类内即可，传入当前组件需要满足的权限等级，注意权限采用二进制
 * @param {number[]} reqPermission
 */
function validate({ store }, reqPermission) {
  return reqPermission.includes(store.user.state.permission);
}

export default validate;

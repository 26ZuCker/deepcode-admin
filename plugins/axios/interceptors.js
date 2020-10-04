/**
 * 请求拦截器
 * @param {any} config
 */
const reqInterceptors = (config) => {};
/**
 * 请求失败拦截器
 * @param {any} error
 */
const errReqInterceptors = (error) => {};

/**
 * 响应成功拦截器
 * @param {any} response
 */
const resInterceptors = async (response) => {};
/**
 * 响应失败拦截器
 * @param {any} error
 */
const errResInterceptors = async (error) => {};

export { reqInterceptors, resInterceptors, errReqInterceptors, errResInterceptors };

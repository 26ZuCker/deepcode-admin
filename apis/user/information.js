import { http, decorRequest } from '@/plugins/axios';

const userInfoApiMap = {
  get_userInfo: { url: '', method: 'POST' },
  login: { url: '', method: 'POST' },
  logout: { url: '', method: 'POST' },
};

/**
 * 成就列表
 */
const achievementBadgeMap = {
  bottom: 'mdi-glass-mug-variant',
  top: 'mdi-crown',
};
/**
 * 可选标签列表
 */
const tagMap = {};

/**
 * 获取用户信息
 */
const get_userInfo = decorRequest(http, userInfoApiMap['get_userInfo']);
/**
 * 登录即获取token
 */
const login = decorRequest(http, userInfoApiMap['login']);
/**
 * 登出
 */
const logout = decorRequest(http, userInfoApiMap['logout']);

export { get_userInfo, achievementBadgeMap, tagMap, login, logout };

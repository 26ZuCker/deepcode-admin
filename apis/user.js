import http, { decorRequest } from '@/plugins/axios/http.js';

const userApiMap = {
  get_userInfo: { url: '', method: 'POST' },
  login: { url: '/login', method: 'POST' },
  logout: { url: 'logout', method: 'POST' },
};

//成就徽章
const achievementBadgeMap = {
  bottom: 'mdi-glass-mug-variant',
  top: 'mdi-crown',
};

const get_userInfo = decorRequest(http, userApiMap['get_userInfo']);
const login = decorRequest(http, userApiMap['login']);
const logout = decorRequest(http, userApiMap['logout']);

export { get_userInfo, achievementBadgeMap, login, logout };

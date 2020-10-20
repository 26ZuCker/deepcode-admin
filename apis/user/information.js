import http, { decorRequest } from '@/plugins/axios/http.js';

const userInfoApiMap = {
  get_userInfo: { url: '', method: 'POST' },
};

//成就徽章
const achievementBadgeMap = {
  bottom: 'mdi-glass-mug-variant',
  top: 'mdi-crown',
};

const get_userInfo = decorRequest(http, userInfoApiMap['get_userInfo']);

export { get_userInfo, achievementBadgeMap };

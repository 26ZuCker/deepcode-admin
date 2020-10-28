import { http, decorRequest } from '@/plugins/axios';

const clockApiMap = {
  get_week_clock: { url: '', method: 'POST' },
  get_all_clock_id: { url: '', method: 'POST' },
};

/**
 * 获取用户一周的自定义通知
 */
const get_week_clock = decorRequest(http, clockApiMap['get_week_clock']);
/**
 * 获取用户所有自定义通知的id
 */
const get_all_clock_id = decorRequest(http, clockApiMap['get_all_clock_id']);

export { get_week_clock, get_all_clock_id };

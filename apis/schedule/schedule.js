import { http, decorRequest } from '@/plugins/axios';

const scheduleApiMap = {
  get_week_schedule: { url: '', method: 'POST' },
  get_all_schedule_id: { url: '', method: 'POST' },
};

/**
 * 获取用户一周的自定义日程
 */
const get_week_schedule = decorRequest(
  http,
  scheduleApiMap['get_week_schedule']
);
/**
 * 获取用户所有自定义日程的id
 */
const get_all_schedule_id = decorRequest(
  http,
  scheduleApiMap['get_all_schedule_id']
);

export { get_week_schedule, get_all_schedule_id };

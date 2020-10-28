import { http, decorRequest } from '@/plugins/axios';

const courseApiMap = {
  get_week_course: { url: '', method: 'POST' },
  get_all_course_id: { url: '', method: 'POST' },
};

/**
 * 获取用户单一周课程
 */
const get_week_course = decorRequest(http, courseApiMap['get_week_course']);
/**
 * 获取用户所有课程的id
 */
const get_all_course_id = decorRequest(http, courseApiMap['get_all_course_id']);

export { get_week_course, get_all_course_id };

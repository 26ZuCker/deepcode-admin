import http, { decorRequest } from '@/plugins/axios/http.js';

const scheduleApiMap = {
  get_course_all: { url: '', method: 'POST' },
  get_schedule_all: { url: '', method: 'POST' },
  get_clock_all: { url: '', method: 'POST' },
};

const get_course_all = decorRequest(http, scheduleApiMap['get_course_all']);
const course_data = [
  {
    name: { type: String, value: '' },
    start: { type: Date, value: null },
    end: { type: Date, value: null },
  },
];

const get_schedule_all = decorRequest(http, scheduleApiMap['get_schedule_all']);
const schedule_data = [
  {
    name: { type: String, value: '' },
    start: { type: Date, value: null },
    end: { type: Date, value: null },
  },
];

const get_clock_all = decorRequest(http, scheduleApiMap['get_clock_all']);
const clock_data = [
  {
    name: { type: String, value: '' },
    start: { type: Date, value: null },
    end: { type: Date, value: null },
  },
];

export {
  get_course_all,
  get_schedule_all,
  get_clock_all,
  course_data,
  clock_data,
  schedule_data,
};

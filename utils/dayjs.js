import dayjs from 'dayjs';

/**
 * 以YYYY-MM-DD hh:mm:ss返回目标时间戳，默认返回当前时间
 * @param {Date} unix
 */
const formatYMDHM = (unix = undefined) => dayjs(unix).format('YYYY/M/DD/H:mm');
/**
 * 返回本月第一天
 * @param {Date} unix
 */
const firstDayMoth = (unix = undefined) => dayjs(unix).startOf('M');

/**
 * 比较now是否早于tar
 * @param {Date} now
 * @param {Date} tar
 */
const isBefore = (now, tar) => dayjs(now).isBefore(tar);

//建议使用以下方法前先检测是否是合法的dayjs对象
export { formatYMDHM, firstDayMoth, isBefore };

//表格顶部类别
const headersData = [
  { text: '', value: 'nickname', align: 'center', sortable: false, id: '2' },
  {
    text: '排位',
    value: 'week_ranking',
    align: 'center',
    sortable: true,
    id: '1',
  },
  {
    text: '解题数',
    value: 'solved_num',
    align: 'center',
    sortable: true,
    id: '3',
  },
  {
    text: '通过率',
    value: 'pass_rate',
    align: 'center',
    sortable: true,
    id: '4',
  },
  {
    text: '本周提交',
    value: 'week_submit_num',
    align: 'center',
    sortable: true,
    id: '5',
  },
  {
    text: '本周解题',
    value: 'week_solved_num',
    align: 'center',
    sortable: true,
    id: '6',
  },
];
//表格主体数据
const rankData = [
  {
    id: '1',
    nickname: '小辉',
    solved_num: '66/99',
    pass_rate: '66%',
    week_submit_num: 50,
    week_solved_num: 46,
    week_ranking: 1,
    achievement: ['top'],
  },
  {
    id: '2',
    nickname: '小敏',
    solved_num: '56/89',
    pass_rate: '76%',
    week_submit_num: 40,
    week_solved_num: 36,
    week_ranking: 2,
    achievement: [],
  },
  {
    id: '3',
    nickname: '小黄',
    solved_num: '46/79',
    pass_rate: '86%',
    week_submit_num: 30,
    week_solved_num: 26,
    week_ranking: 3,
    achievement: ['bottom'],
  },
  {
    id: '4',
    nickname: '小红',
    solved_num: '36/69',
    pass_rate: '96%',
    week_submit_num: 20,
    week_solved_num: 16,
    week_ranking: 4,
    achievement: [],
  },
  {
    id: '5',
    nickname: '小青 ',
    solved_num: '26/59',
    pass_rate: '6%',
    week_submit_num: 10,
    week_solved_num: 6,
    week_ranking: 5,
    achievement: [],
  },
];
const lastWeek = [
  {
    name: '小敏',
    type: 'TOP',
    avatar: 'https://cdn.vuetifyjs.com/images/john.png',
    week_solved_num: 99,
    week_submit_num: 100,
  },
  {
    name: 'HR',
    type: 'LAST',
    avatar: 'https://cdn.vuetifyjs.com/images/john.png',
    week_solved_num: 0,
    week_submit_num: 2,
  },
];
export { headersData, rankData, lastWeek };

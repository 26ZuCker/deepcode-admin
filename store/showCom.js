//传值给顶部条当前路由中文名称，同时需要在LeftBar组件内更改中文的title
//假如需要动态设置名称则判断是否存在，否则直接返回null然后在具体组件内调整
const routeTitleMap = {
  'user-userId': '我的',
  office: '工作室',
  login: '登录',
  schedule: '日程安排',
  project: '任务',
};

/**
 * 布告栏：即首页，排行榜
 * 日程表：课程表，日程表
 * 工作室：成员一览
 * 我的：
 */
const routerItems = [
  { id: 1, title: '我的', icon: 'mdi-account-tie', url: '/user' },
  { id: 2, title: '任务', icon: 'mdi-file-tree', url: '/project' },
  {
    id: 3,
    title: '日程表',
    icon: 'mdi-calendar-multiselect',
    url: '/schedule',
  },
  { id: 4, title: '工作室', icon: 'mdi-account-group-outline', url: '/office' },
];

const darkBackGroundRoutes = ['login', 'release-releaseType'];

const floatBtnRoutes = ['schedule', 'project'];

//负责控制layout内组件的全局展示，保存一些全局组件状态如左侧边栏的显示
export const state = () => ({
  //初始化为false
  isShowLeftBar: false,
  isShowFullTopBar: false,
  routerItems,
  isShowNoticeBar: false,
});
export const mutations = {
  set_isShowLeftBar: (state) => {
    state.isShowLeftBar =
      state.isShowLeftBar === undefined ? false : !state.isShowLeftBar;
  },
  set_isShowFullTopBar: (state) => {
    state.isShowFullTopBar =
      state.isShowFullTopBar === undefined ? false : !state.isShowFullTopBar;
  },
  //考虑是否需要消除组件内部的计时器
  set_isShowNoticeBar: (state) => {
    state.isShowNoticeBar = true;
  },
};
//相当于computed同样可以二次传参即传自定义参数
export const getters = {
  //vuex所有函数都应该使用this以使用this展示960px > < 1264px*
  isLgScreen: () => ($vuetify) => $vuetify.breakpoint['smAndUp'],
  isMdScreen: () => ($vuetify) => $vuetify.breakpoint['mdAndUp'],
  //此处改为空值联合
  currentRouteTitle: () => (name) => routeTitleMap[name] || null,
  //需要整个页面的背景都改为深色的route.name
  isDarkBackGround: () => (name) => darkBackGroundRoutes.includes(name),
  isFloatBtnRoutes: () => (name) => floatBtnRoutes.includes(name),
};

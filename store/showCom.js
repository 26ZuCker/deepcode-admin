//传值给顶部条当前路由中文名称，同时需要在LeftBar组件内更改中文的title
//假如需要动态设置名称则判断是否存在，否则直接返回null然后在具体组件内调整
const routeTitleMap = {
  board: '布告栏',
  'user-userId': '我的',
  office: '工作室',
  login: '登录',
  schedule: '日程安排',
  mission: '任务',
}

/**
 * 布告栏：即首页，排行榜
 * 日程表：课程表，日程表
 * 工作室：成员一览
 * 我的：
 */
const routerItems = [
  { id: 1, title: '布告栏', icon: 'mdi-bulletin-board', url: '/board' },
  { id: 2, title: '任务', icon: 'mdi-file-tree', url: '/mission' },
  {
    id: 3,
    title: '日程表',
    icon: 'mdi-calendar-multiselect',
    url: '/schedule',
  },
  { id: 4, title: '工作室', icon: 'mdi-account-group-outline', url: '/office' },
  { id: 5, title: '我的', icon: 'mdi-account-tie', url: '/user' },
]

//负责控制layout内组件的全局展示，保存一些全局组件状态如左侧边栏的显示
export const state = () => ({
  //初始化为false
  isShowLeftBar: false,
  isShowFullTopBar: false,
  routerItems,
})
export const mutations = {
  set_isShowLeftBar: (state) => {
    state.isShowLeftBar =
      state.isShowLeftBar === undefined ? false : !state.isShowLeftBar
  },
  set_isShowFullTopBar: (state) => {
    state.isShowFullTopBar =
      state.isShowFullTopBar === undefined ? false : !state.isShowFullTopBar
  },
}
//相当于computed同样可以二次传参即传自定义参数
export const getters = {
  //vuex所有函数都应该使用this以使用this展示960px > < 1264px*
  isLgScreen: () => ($vuetify) => $vuetify.breakpoint['smAndUp'],
  //此处改为空值联合
  currentRouteTitle: () => (name) => routeTitleMap[name] || null,
}

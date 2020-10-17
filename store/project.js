export const state = () => ({
  groupTypes: [
    {
      name: '前端',
      des: '页面设计',
      icon: 'mdi-material-design',
    },
    {
      name: '后端',
      des: '数据管理',
      icon: 'mdi-server-security',
    },
    {
      name: '算法',
      des: '数据生成',
      icon: 'mdi-head-lightbulb-outline',
    },
    {
      name: '深度学习',
      des: '图像识别',
      icon: 'mdi-image-auto-adjust',
    },
  ],
});
export const mutations = {};
export const actions = {};
export const getters = {
  newPart() {
    return {
      color: 'red lighten-2',
      icon: 'mdi-star',
      title: '模块标题',
      des: '模块笔记',
      is_finish: false,
    };
  },
};

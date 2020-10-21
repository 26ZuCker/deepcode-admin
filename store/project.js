import { part_template } from '@/apis/project';

/**
 * state内保存在做项目即可因为一个人同时在做的项目不会很多且保存在vuex内不用再发送http请求获取
 * 而历史项目只保存id即通过id获取
 */
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
  /**
   * 按组分类的成员，只保存名，头像。id，所属组信息即可
   */
  memberByGroup: {},
  current_project: [],
  historical_project: [],
});
export const mutations = {};
export const actions = {};
export const getters = {
  part_template() {
    return part_template;
  },
};

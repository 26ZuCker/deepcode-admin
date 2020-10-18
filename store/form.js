/**
 * 由于目前存在login，register，recruit，release多种提交表单界面且多个组件之间需要交互
 * 所以采用vuex内统一表单数据管理为佳，但此处只负责保存表单数据而不负责发送http请求即解耦于api
 */
export const state = () => ({
  form_data: null,
  //以下模板用于渲染表单元素
  new_login_data: [],
  new_recruit_data: [],
});
export const mutations = {
  update_form_data(state, form_obj) {
    if (!state.form_data) {
      state.form_data = new Map();
    } else {
      for (const key in form_obj) {
        state.form_data.set(key, form_obj[key]);
      }
    }
  },
  /**
   * 每次提交成功即清空
   */
  reset_form_data(state) {
    state.form_data = null;
  },
};

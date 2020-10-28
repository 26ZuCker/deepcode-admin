import { http, decorRequest } from '@/plugins/axios';

const proApiMap = {
  create_project: { url: '/create_project', method: 'POST' },
  get_project_all_data: { url: '', method: 'POST' },
  delete_pro: { url: '', method: 'POST' },
  delete_my_part: { url: '', method: 'POST' },
  change_pro: { url: '', method: 'POST' },
  change_my_part: { url: '', method: 'POST' },
};

const proPart = {
  partTitle: '',
  partMember: [],
};
/**
 * 创建单个项目
 */
const create_project = decorRequest(http, proApiMap['create_project']);
/**
 * 获取单个项目，建议首屏只获取一个项目，然后默认获取该用户所有项目，再逐一后台请求
 */
const get_project_all_data = decorRequest(
  http,
  proApiMap['get_project_all_data']
);
/**
 * 删除单个项目
 */
const delete_pro = decorRequest(http, proApiMap['delete_pro']);
/**
 * 删除个人部分
{
  my_part_id,
}
 */
const delete_my_part = decorRequest(http, proApiMap['delete_my_part']);
/**
 * 发布者修改整个项目，除pub_id外任发其一亦可
 */
const change_pro = decorRequest(http, proApiMap['change_pro']);
/**
 * 修改个人部分，除my_part_id外任发其一即可
 */
const change_my_part = decorRequest(http, proApiMap['change_my_part']);

const part_template = {
  color: 'red lighten-2',
  icon: 'mdi-star',
  title: '定制你的模块标识',
  des: '记录你的模块历程',
  is_finish: false,
};

export {
  create_project,
  get_project_all_data,
  delete_pro,
  delete_my_part,
  change_pro,
  change_my_part,
  proPart,
  part_template,
};

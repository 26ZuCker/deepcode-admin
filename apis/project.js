import http, { decorRequest } from '@/plugins/axios/http.js';

const proApiMap = {
  project_create: { url: '/project_create', method: 'POST' },
  get_pro: { url: '', method: 'POST' },
  delete_pro: { url: '', method: 'POST' },
  delete_my_part: { url: '', method: 'POST' },
  change_pro: { url: '', method: 'POST' },
  change_my_part: { url: '', method: 'POST' },
};

const proPart = {
  partTitle: '',
  partMember: [],
};

const project_create = decorRequest(http, proApiMap['project_create']);
/**
 * 获取单个项目，建议首屏只获取一个项目，然后默认获取该用户所有项目，再逐一后台请求
{
  pro_id,
  pro_name,
  pro_des,
  pub_name,
  pro_complete,
  pro_begin_date,
  pro_e_end_date,
  pro_a_end_date,
  parts: [
    {
      part_user_id,
      part_user_name,
      part_des,
      part_complete,
      part_begin_date,
      part_end_date,
      my_parts: [
        {
          my_part_id,
          my_part_name,
          my_part_des,
          my_part_complete,
        },
      ],
    },
  ],
}
 */
const get_pro = decorRequest(http, proApiMap['get_pro']);
/**
 * 删除单个项目
{
  pro_id,
}
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
{
  pro_name,
  pro_des,
  pub_id,
  pro_parts: [
    {
      pro_part_name: '',
      pro_part_user_id: '',
    },
    {
      pro_part_name: '',
      pro_part_user_id: '',
    },
  ],
}
 */
const change_pro = decorRequest(http, proApiMap['change_pro']);
/**
 * 修改个人部分，除my_part_id外任发其一即可
{
  my_part_id,
  my_part_name,
  my_part_des,
  my_part_complete,
}
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
  project_create,
  get_pro,
  delete_pro,
  delete_my_part,
  change_pro,
  change_my_part,
  proPart,
  part_template,
};

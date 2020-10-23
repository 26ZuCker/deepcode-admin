/**
 * 项目
 */
interface project {
  name: string;
  description: string;
  begin_date: number;
  estimated_completed_date: number;
  publisher_id: string;
  part_list: Array<part>;
}
/**
 * 项目部分
 */
interface part {
  name: string;
  description: string;
  member_id: string;
  begin_date: number;
  end_date: number;
}
/**
 * 部分个人模块
 */
interface item {
  name: string;
  description: string;
  member_id: string;
  begin_date: number;
  end_date: number;
}

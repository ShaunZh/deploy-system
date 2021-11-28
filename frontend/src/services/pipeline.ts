/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-27 22:40:33
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-27 22:53:25
 */
import request from './request';

export const pipeline_list = (args: any): Promise<any> => request.post('/pipeline/list', args);
export const pipeline_template_list = (): Promise<any> => request.post('/pipeline/template/list');
export const pipeline_detail = (args: { id: string }): Promise<any> => request.post('/pipeline/detail', args);

export default {
  pipeline_list,
  pipeline_template_list,
  pipeline_detail
};


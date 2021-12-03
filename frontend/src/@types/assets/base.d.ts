/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-29 22:42:33
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-12-03 18:04:00
 */
interface IObject {
  [index: string]: string
}

type PromiseResponse<DATA> = Promise<{
  data: DATA;
  success: boolean
}>;
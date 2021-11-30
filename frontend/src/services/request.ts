/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-27 22:30:55
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-29 22:44:42
 */

import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
  baseURL: __BASE_URL__, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
});


// request interceptor
request.interceptors.request.use(
  config => {
    // do something before request is sent
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      if (res.code === 500) {
        // 出现该错误，则在控制台打印错误信息
        console.error(res.msg || res.message || '系统发生异常，请联系管理员');
        // Message.closeAll();
        // Message({
        //     message: res.msg || res.message || 'Error',
        //     type: 'error',
        //     duration: 2 * 1000
        // });
      }
      return Promise.reject(res);
    } else {
      return res;
    }
  },
  error => {
    if (axios.isCancel(error) === false) { // 主动取消时，message为空
      message.destroy();
      message.error(error.message);
    }
    return Promise.reject(error);
  }
);
export default request;

/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-29 22:35:11
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-29 22:43:27
 */


export const getUrlParam = (key?: string, url?: string): string | IObject => {
  const newUrl = url ? decodeURIComponent(url) : decodeURIComponent(window.location.href);
  const searchIndex = newUrl.indexOf('?');
  if (searchIndex === -1) {
    return '';
  }
  const searchArr = newUrl.substring(searchIndex + 1).split('&');
  const searchObj: IObject = {};
  for (let i = 0, len = searchArr.length; i < len; i++) {
    const t = searchArr[0].split('=');
    searchObj[t[0]] = t[1];
  }
  if (key) {
    return searchObj[key];
  }
  return searchObj;
};
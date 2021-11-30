/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-24 22:40:33
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-30 21:52:58
 */
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}
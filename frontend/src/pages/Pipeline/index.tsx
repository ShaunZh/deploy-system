/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-20 15:56:09
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-20 16:53:21
 */

import React from 'react';
export default function Pipeline(props: { children: React.ReactElement }): React.ReactElement {
  console.log('props', props);
  return (
    <div>{props.children}</div>
  );
}
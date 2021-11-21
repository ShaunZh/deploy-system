/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-20 15:56:09
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-21 23:34:58
 */

import React from 'react';
export default function Pipeline(props: { children: React.ReactElement }): React.ReactElement {
  return (
    <div>{props.children}</div>
  );
}
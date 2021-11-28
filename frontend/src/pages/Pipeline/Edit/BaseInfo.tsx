/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-28 20:23:49
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-28 22:45:02
 */
import React from 'react';
import { Tabs } from 'antd';
import PipelineEdit from './PipelineEdit';
import MemberEdit from './MemberEdit';

const { TabPane } = Tabs;

export default function BaseInfo(): React.ReactElement {

  return (
    <div className="base-info">

      <Tabs tabPosition="left">
        <TabPane tab="流水线信息" key="pipeline">
          <PipelineEdit></PipelineEdit>
        </TabPane>
        <TabPane tab="成员信息" key="member">
          <MemberEdit></MemberEdit>
        </TabPane>
      </Tabs>

    </div>
  );

}
/*
 * @Description: 侧边栏
 * @Author: Hexon
 * @Date: 2021-11-18 23:36:40
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-20 16:52:02
 */
import React from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export default function SideMenu(): React.ReactElement {
  return (
    <div className="side">
      <div className="logo">logo</div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <SubMenu key="pipeline" icon={<AppstoreOutlined />} title="流水线">
          <Menu.Item key="my"><Link to="/pipeline/my">我的流水线</Link></Menu.Item>
          <Menu.Item key="all"><Link to="/pipeline/all"></Link>全部流水线</Menu.Item>
        </SubMenu>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          异常监控
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          埋点系统
        </Menu.Item>
      </Menu>
    </div>
  );
}

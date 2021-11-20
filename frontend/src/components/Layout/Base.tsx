/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-18 23:45:45
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-20 16:54:51
 */
import React, { useState } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
import SideMenu from '../SideMenu';

import './index';

export default function LayoutBase(props: { children: React.ReactElement }): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false);

  const { children } = props;

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  console.log('base layout', props);

  return (
    <Layout style={{ height: '100%' }} className="layout">
      <Sider collapsed={collapsed}>
        <SideMenu></SideMenu>
      </Sider>
      <Layout className="right">
        <Header className="header" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: handleCollapsed,
          })}
        </Header>
        <Content
          className="content"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout >
  );
}

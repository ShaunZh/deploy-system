/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-18 23:45:45
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-19 00:05:26
 */
import React, { useState } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
import SideMenu from '../SideMenu';

export default function LayoutBase(): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: '100%' }}>
      <Sider>
        <SideMenu collapsed={collapsed}></SideMenu>

      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: handleCollapsed,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout >
  );
}

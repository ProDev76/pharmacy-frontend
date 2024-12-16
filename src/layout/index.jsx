import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" style={{ height: 64, background: '#001529', color: '#fff', textAlign: 'center', lineHeight: '64px' }}>
          Admin
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div style={{ padding: '0 16px' }}>Header Content</div>
        </Header>
        <Content style={{ margin: '16px', padding: '16px', background: '#fff' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin Dashboard ©2024 Created by You</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
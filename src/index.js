import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Typography } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Notes from './components/Notes/Notes';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

ReactDOM.render(
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo">
        <Title level={3} style={{color: 'white'}}>Cozy Notes</Title>
      </div>
      
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Notebook
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Todo
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Notes />
      <Footer style={{ textAlign: 'center' }}>Cozy Notes ©2021 Created by Sharon Wong</Footer>
    </Layout>
  </Layout>,
  document.getElementById('container'),
);
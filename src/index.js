import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Typography } from 'antd';
import Notes from './components/Notes/Notes';
import Todo from './components/Todo/Todo';
import Navbar from './components/Navbar/Navbar';

const { Header, Footer, Sider } = Layout;
const { Title } = Typography;

ReactDOM.render(
  <Layout>
    <HashRouter>
    <Sider
      style={{backgroundColor:"#ffbd90"}}
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
      <Navbar />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Route exact path="/notebook" component={Notes}/>
      <Route path="/todo" component={Todo}/>
      <Footer style={{ textAlign: 'center' }}>Cozy Notes ©2021 Created by Sharon Wong</Footer>
    </Layout>
    </HashRouter>
    
  </Layout>,
  document.getElementById('container'),
);
import React from 'react';
import { Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {
  NavLink,
} from 'react-router-dom';

const Navbar = () => {

    return (
        <Menu style={{backgroundColor:"#ffbd90"}} mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <NavLink to="/notebook">Notebook</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <NavLink to="/todo">Todo</NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
    )
}

export default Navbar
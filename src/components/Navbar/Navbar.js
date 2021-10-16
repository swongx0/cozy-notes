import React from 'react';
import { Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {
  NavLink,
} from 'react-router-dom';

const Navbar = () => {

    return (
        <Menu style={{backgroundColor:"#ffbd90"}} mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/notebook">Notebook</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/todo">Todo</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            Profile
          </Menu.Item>
        </Menu>
    )
}

export default Navbar
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './menu_side.css';
import 'antd/dist/antd.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const SideMenu = ({ stateCollapsed, handleClick }) => (
    
  <div>
    
    <div className="logo"/>

    <Menu 
      theme="dark" 
      defaultSelectedKeys={['1']} 
      mode="inline"
      inlineCollapsed={stateCollapsed}
      onClick={handleClick}
    >

      <Menu.Item key="1">
        <Icon type="pie-chart"/>
        <span>Dashboard</span>
      </Menu.Item>

      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user"/> 
            <span>Users Managment</span>
          </span>
        }
      >
        <Menu.Item key="2">
          <span>
            <Icon type="team"/> 
            <span>Users</span>
          </span>
        </Menu.Item>

        <Menu.Item key="3">
          <span>
            <Icon type="user"/> 
            <span>Roles</span>
          </span>
        </Menu.Item>

        <Menu.Item key="4">
          <span>
            <Icon type="star-o"/> 
            <span>Applications</span>
          </span>
        </Menu.Item>

        <Menu.Item key="5">
          <span>
            <Icon type="lock"/> 
            <span>Permissions</span>
          </span>
        </Menu.Item>

      </SubMenu>

    </Menu>
  
  </div>

);

export default SideMenu;
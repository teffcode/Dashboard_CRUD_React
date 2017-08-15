import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/menu_side.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ButtonHide from './components/button_hide';
import ContentView from './components/content_view';
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        collapsed: false,
      };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }

  render() {
    return (
      <Layout>

       <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
        <SideMenu 
          stateCollapsed={this.state.collapsed}
          handleClick={this.handleClick}
        />
       </Sider>

       <Layout>
       
        <Header style={{padding: '0px'}}>
          <ButtonHide 
            handleClick={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            toggleCollapsed={this.toggleCollapsed}
          />
        </Header>

        <ContentView/>

        <Footer style={{ textAlign: 'center' }}>
              Radar v2.0 ©2017 Created by Seti
        </Footer>

       </Layout>

      </Layout>
    );
  }
}

export default App;

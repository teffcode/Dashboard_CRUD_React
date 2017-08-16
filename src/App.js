import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/MenuSide.js';
import { Layout } from 'antd';
import ButtonHide from './components/ButtonHide';
import ContentApp from './components/ContentApp';

const { Header, Footer, Sider } = Layout;

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        isMenuCollapsed: false,
        currentMenuItem: "dashboard"
      };
  }

  toggleCollapsed = () => {
    this.setState({
      isMenuCollapsed: !this.state.isMenuCollapsed,
    });
  }

  setCurrentMenuItem = (e) => {
    this.setState({ currentMenuItem: e.key });
  }

  render() {
    return (
      <Layout>

       <Sider
          trigger={null}
          collapsible
          collapsed={this.state.isMenuCollapsed}
        >
        <SideMenu 
          stateCollapsed={this.state.isMenuCollapsed}
          handleClick={this.setCurrentMenuItem}
          currentItem={this.state.currentMenuItem}
        />
       </Sider>

       <Layout>
       
        <Header style={{padding: '0px'}}>
          <ButtonHide 
            handleClick={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            toggleCollapsed={this.toggleCollapsed}
          />
        </Header>

        <ContentApp currentView={this.state.currentMenuItem} />

        <Footer style={{ textAlign: 'center' }}>
              Radar v2.0 ©2017 Created by Seti
        </Footer>

       </Layout>

      </Layout>
    );
  }
}

export default App;

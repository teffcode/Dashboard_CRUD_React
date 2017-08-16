import React, { Component } from 'react';
import { Layout } from 'antd';
import ContentDashboard from './dashboard/ContentDashboard';
import ContentUsers from './users/ContentUsers';
import ContentRoles from './roles/ContentRoles';
import ContentApplications from './applications/ContentApplications';
import ContentPermissions from './permissions/ContentPermissions';

const { Content } = Layout;

class ContentApp extends Component{

    renderView() {
        const { currentView } = this.props;

        if(currentView === "dashboard"){
            return <ContentDashboard/>
        } if (currentView === "users") {
            return <ContentUsers/>
        } if (currentView === "roles") {
            return <ContentRoles/>
        } if (currentView === "applications") {
            return <ContentApplications/>
        } if (currentView === "permissions") {
            return <ContentPermissions/>
        } else {
            return <p>Bye</p>
        }
    }

    render(){
        
        return(

            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                {this.renderView()}
            </Content>

        );
    }
}

export default ContentApp;

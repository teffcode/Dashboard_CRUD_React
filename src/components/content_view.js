import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const ContentApp = ({ contentcontent }) => (

    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                
        <div className="contentWhite">
            {contentcontent}
        </div>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        ...
        <br />
        Really
        <br />...<br />...<br />...<br />
        long
        <br />...<br />...<br />...<br />...<br />...<br />
        content
        </div>

    </Content>
);

export default ContentApp;

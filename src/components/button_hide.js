import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

const ButtonHide = ({ handleClick, toggleCollapsed }) => (
    <div style={{ background: '#FFF', padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.12' }}>
        <Icon
            className="trigger"
            type={handleClick}
            onClick={toggleCollapsed}
        />
    </div>
);

export default ButtonHide;

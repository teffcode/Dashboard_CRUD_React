import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Button } from 'antd';

const ButtonHide = ({ handleClick, toggleCollapsed }) => (
    <div style={{marginBottom:"25px"}}>
        <Button type="primary" icon="user-add" ghost>
            Create
        </Button>
    </div>
);

export default ButtonHide;


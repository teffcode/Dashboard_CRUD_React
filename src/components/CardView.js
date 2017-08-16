import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const CardView = ({cardTitle, cardContent}) => (

    <Card 
        title={cardTitle} 
        style={{ width: 700 }}
    >
        <div>{cardContent}</div>
    </Card>
);
   
export default CardView;
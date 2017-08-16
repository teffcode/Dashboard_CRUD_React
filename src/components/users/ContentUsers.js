import React from 'react';
import CardView from '../CardView';
import TableUsers from './TableUsers';
import ButtonCreate from '../ButtonCreate';
import TimeLine from '../TimeLine';
import { Avatar, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './ContentUsers.css';

const ContentUsers = () => (

    <div>
        <Row gutter={16}>

            <Col span={6}>

                <Card bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                        <Avatar 
                            src="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png"
                            style={{
                                marginTop:'20px',
                                marginLeft: '60px',
                                width:'50%',
                                height:'50%',
                                borderRadius:'50%',    
                            }} 
                        />
                    </div>
                    <div className="custom-card">
                        <h3>Fullname</h3>
                        <p>Role</p>
                        <p>Permissions</p>
                        <p>Description</p>
                        <TimeLine/>
                    </div>
                </Card>
            </Col>

            <Col span={18}>
                <CardView 
                    cardTitle={"Users List"} 
                    cardContent={
                        <div>
                            <ButtonCreate/>
                            <TableUsers/>
                        </div>
                    }
                />   
            </Col>

        </Row>
    </div>
);

export default ContentUsers;
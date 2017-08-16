import React from 'react';
import CardView from '../CardView';
import TableUsers from './TableUsers';
import ButtonCreate from '../ButtonCreate';

const ContentUsers = () => (

    <CardView 
        cardTitle={"Users List"} 
        cardContent={
            <div>
                <ButtonCreate/>
                <TableUsers/>
            </div>
        }
    />
);

export default ContentUsers;
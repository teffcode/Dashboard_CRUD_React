import React, { Components } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import PopConfirm from '../PopConfirm';

const columns = [
  { title: 'First Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Last Name', width: 150, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Role', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Permissions', dataIndex: 'string', key: '2', width: 150 },
  { title: 'Description', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <PopConfirm/>
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Estefany ${i}`,
    age: 'Aguilar Restrepo',
    address: `London Park no. ${i}`,
  });
}

const TableUsers = () => (
            <Table columns={columns} dataSource={data} scroll={{ x: 900, y: 300 }} />
);

export default TableUsers;
import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Text, Title } = Typography;


const Todo = () => {

    return (
        <Content style={{ padding: '25px 50px', margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
                <Title level={3}>Todo List</Title>
            </div>
        </Content>
    )
}

export default Todo
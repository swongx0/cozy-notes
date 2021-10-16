import React, {useState} from 'react';
import { Layout, Typography, Card} from 'antd';
import { Link } from 'react-router-dom';


const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
    return (
        <Content style={{ padding: '25px 50px', margin: '24px 16px 0' }}>
            <Title level={1} strong style={{textAlign:'center'}}>Welcome to Cozy Notes!</Title>
            <Title level={4} style={{textAlign:'center'}}>Select an item to get started!</Title>
            <div style={{paddingTop:'20px', minHeight: 360 }}>
                
            </div>
        </Content>
    )
}

export default Home
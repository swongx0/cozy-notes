import React, {useState} from 'react';
import { Layout, Typography, Card} from 'antd';
import { Link } from 'react-router-dom';

import './styles.css'

const { Content } = Layout;
const { Title } = Typography;

const Notes = ({notes}) => {
    return (
        <Content style={{ padding: '25px 50px', margin: '24px 16px 0' }}>
            <Title level={3} strong>Personal Notes</Title>
            <Link to="/create" component={Typography.Link} style={{color: 'black'}}> + Create </Link>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {notes.map(() => (
                    <Card style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                ))}
            </div>
        </Content>
    )
}

export default Notes
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
            <div style={{paddingTop:'20px', minHeight: 360 }}>
                {notes.map((note) => (
                    <Card key={note.title} className="site-layout-background note-card" style={{ width: 300 }}>
                        <Title level={5} strong>{note.title}</Title>
                        <p>{note.body}</p>
                        <button>Delete</button>
                    </Card>
                ))}
            </div>
        </Content>
    )
}

export default Notes
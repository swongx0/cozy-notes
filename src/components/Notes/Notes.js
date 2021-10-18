import React, { useState } from 'react';
import { Layout, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';

import './styles.css'

const { Content } = Layout;
const { Text, Title } = Typography;

const Notes = ({ notes }) => {
    return (
        <Content style={{ padding: '25px 50px', margin: '24px 16px 0' }}>
            <Title level={3} strong>Personal Notes</Title>
            <Link to="/create" component={Typography.Link} style={{ color: 'black' }}> + Create </Link>
            <div style={{ paddingTop: '20px', minHeight: 360 }}>
                {notes.map((note) => (
                    <Card key={note.title} className="site-layout-background note-card" style={{ width: 300 }}>
                        <Title level={5} strong>{note.title}</Title>
                        <p style={{ overflow: "hidden" }}>{note.body}</p>
                        <span className="notecard-container">
                            <Text type="danger" className="notecard-links">Delete</Text>
                            <Text className="notecard-links">Edit</Text>
                        </span>
                    </Card>
                ))}
            </div>
        </Content >
    )
}

export default Notes
import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Notes = () => {

    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Note Taking App
            </div>
        </Content>
    )
}

export default Notes
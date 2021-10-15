import React, { useState } from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Typography } from 'antd';
import Notes from './components/Notes/Notes';
import Todo from './components/Todo/Todo';
import Navbar from './components/Navbar/Navbar';
import CreateNotes from './components/Notes/CreateNotes'

const { Header, Footer, Sider } = Layout;
const { Title } = Typography;

const App = () => {
    const [notes, setNotes] = useState([]);
    
    return (
        <Layout>
            <HashRouter>
            <Sider
            style={{backgroundColor:"#ffbd90"}}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {   
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >
            <div className="logo">
                <Title level={3} style={{color: 'white'}}>Cozy Notes</Title>
            </div>
            <Navbar />
            </Sider>
            <Layout>
            <Route exact path="/notebook">
                <Notes notes={notes}/>
            </Route>
            <Route path="/todo" component={Todo}/>
            <Route path="/create">
                <CreateNotes setNotes={setNotes} />
            </Route>
            <Footer style={{ textAlign: 'center' }}>Cozy Notes ©2021 Created by Sharon Wong</Footer>
            </Layout>
            </HashRouter>
            
        </Layout>
    )
}

export default App
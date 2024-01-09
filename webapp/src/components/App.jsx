import React from 'react';

import { Layout, Menu } from 'antd'
import JokesList from './JokesList';
import { Link, Route, Routes } from 'react-router-dom';
import JokeDetails from './JokeDetails';
import About from './About';

const { Header, Content } = Layout

const App = () => {

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Menu.Item>
            <Link to={"/jokes"}>
              Jokes
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/about"}>
              About
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        <Routes>
          <Route path={"/jokes"} element={<JokesList />} />
          <Route path={"/jokes/:id"} element={<JokeDetails />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App

import React from "react";
import "antd/dist/antd.css"; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Divider } from "antd";
import { MainStore } from "./Components/MainStore";

import OrdersScreen from "./Components/OrderScreen";
import HomeScreen from "./Components/HomeScreen";
import WorkersScreen from "./Components/WorkersScreen";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header>
              <Space size="large">
                <Link className="" to="/">
                  Home
                </Link>
                <Link to="/orders">Orders</Link>
                <Link to="/workers">Workers</Link>
              </Space>
        </Header>
        <Content>
          <Routes >
            <Route path="/" element={<HomeScreen MainStore={MainStore}/>} />
            <Route path="/orders" element={<OrdersScreen />} />
            <Route path="/workers" element={<WorkersScreen MainStore={MainStore}/>} />
          </Routes>
        </Content>
        <Divider ></Divider>
        <Footer>
        &reg; Simon Jankowski
          </Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

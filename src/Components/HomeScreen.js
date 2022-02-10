import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Space } from "antd";

const HomeScreen = () => {
  return (
    <div className="body">
      <Row>
      <Col span={7}></Col>
        <Col span={10}>
          <div style={{ textAlign: "center", marginTop:200}}>
            <h1 style={{ textAlign: "center", fontSize:50 }}>Welcome to Test App</h1>
            <Space size="large">
            <Link to="/orders"><Button type="primary" size="large">Orders</Button></Link>
            <Link to="/workers"><Button type="primary" size="large">Workers</Button></Link>
            </Space>
          </div>
        </Col>
        <Col span={7}></Col>
      </Row>
      </div>
   
  );
};

export default HomeScreen;

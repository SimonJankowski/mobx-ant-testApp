import React, { useState } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import timeDifference from "../helpers/timeago";
import {
  Form,
  Select,
  Button,
  Space,
  Divider,
  Row,
  Card
} from "antd";
const { Option } = Select;

const ToolList = observer(({ MainStore }) => {
  const [order, setOrder] = useState({ toolName: "", count: 1 });

  const onCancelButtonClick = (tool) => {
    MainStore.removeTool(tool);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    MainStore.addTool(order, Date.now());
  };

  const onSelectToolnameChange = (e) => {
    setOrder({ ...order, toolName: e });
  };

  const onSelectCountChange = (e) => {
    setOrder({ ...order, count: e });
  };

  const renderTools = () => {
    const clone = toJS(MainStore.toolList);
    return clone.map((tool) => {
      return (
        <Card key={tool.id} style={{ width: 300 }}> 
          <h3>{tool.toolName}</h3>
          <p>Count: {tool.count}</p>
          <p>Ordered: {timeDifference(Date.now(), tool.ordered)}</p>  
          <Button onClick={()=>onCancelButtonClick(tool)} type="danger">Cancel Order</Button>
        </Card>
      );
    });
  };

  return (
    <div style={{ margin: 10 }}>
      <Divider orientation="left">Make an order</Divider>
      <Space size="large">
        <Form onSubmit={onFormSubmit}>
          <Space>
          <Select
            value={order.toolName}
            name="toolName"
            onChange={onSelectToolnameChange}
            placeholder="Select a Tool"
            style={{ width: 170 }}
          >
            <Option value="Shovel">Shovel</Option>
            <Option value="Screwdriver">Screwdriver</Option>
            <Option value="Grua">Grua</Option>
            <Option value="Excavador">Excavador</Option>
          </Select>
          <Select
            value={order.count}
            onChange={onSelectCountChange}
            style={{ width: 70 }}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
          <Button onClick={onFormSubmit}>Order</Button>
          </Space>
        </Form>
      </Space>
      <Divider orientation="left">Your Orders</Divider>
      <Row>{renderTools()}</Row>
      
    </div>
  );
});

export default ToolList;

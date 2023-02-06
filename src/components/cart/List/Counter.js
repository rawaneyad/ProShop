import { Button, Input, Space } from "antd";
import React from "react";

const Counter = () => {
  let value = 1;
  return (
    <Space className="Counter">
      <Button onClick={() => value + 1}>+</Button>
      <Input type="number" value={value} />
      <Button onClick={() => value - 1}>-</Button>
    </Space>
  );
};

export default Counter;

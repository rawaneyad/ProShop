import { Button, Space, Typography } from "antd";
import React from "react";
const {Title}=Typography
const Header = () => {
  return (
    <Space>
      <Title level={3}>Order Details</Title>
      <Button type="link">Change</Button>
    </Space>
  );
};

export default Header;

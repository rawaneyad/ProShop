import { Button, Space, Typography } from "antd";
import React from "react";
const {Title}=Typography
const Header = ({name}) => {
  return (
    <Space>
      <Title level={3}>{name}</Title>
      <Button type="link">Change</Button>
    </Space>
  );
};

export default Header;

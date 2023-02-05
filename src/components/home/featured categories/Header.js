import React from "react";
import { Tabs } from "antd";
const Header = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          label: "Featured Categories",
          key: "1",
        },
      ]}
    />
  );
};

export default Header;

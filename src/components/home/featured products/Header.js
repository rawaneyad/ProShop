import React from "react";
import { Tabs } from "antd";
const Header = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={[
        {
          label: "Featured Products",
          key: "1",
        },
      ]}
    />
  );
};

export default Header;

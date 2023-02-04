import React from "react";
import { Tabs } from "antd";
import "./categories.css";
const Header = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "Featured Categories",
            key: "1",
          },
        ]}
      />
    </div>
  );
};

export default Header;

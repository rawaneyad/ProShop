import React from "react";
import { Tabs } from "antd";
const Header = ({ name }) => {
  return (
    <Tabs
      defaultActiveKey="1"
      centered={name === "Featured Products" ? true : false}
      items={[
        {
          label: name,
          key: "1",
        },
      ]}
    />
  );
};

export default Header;

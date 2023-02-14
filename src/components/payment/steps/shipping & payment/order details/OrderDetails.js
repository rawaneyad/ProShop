import { Divider, Space } from "antd";
import React from "react";
import Bill from "./Bill";
import Header from "./Header";
import ProductList from "./ProductList";

const OrderDetails = () => {
  return (
    <Space direction="vertical" className="OrderDetails">
      <Header />
      <ProductList/>
      <Bill />
    </Space>
  );
};

export default OrderDetails;

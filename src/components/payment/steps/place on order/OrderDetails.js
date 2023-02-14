import { Space } from "antd";
import React from "react";
import Bill from "../shipping & payment/order details/Bill";
import Header from "../shipping & payment/order details/Header";

const OrderDetails = () => {
  return (
    <Space direction="vertical" className="OrderDetails">
      <Header name='Order Details' />
      <Bill />
    </Space>
  );
};

export default OrderDetails;

import { Space, Typography } from "antd";
import React from "react";
import emptyCart from "../../Image/Group 491.png";
import TopRateProducts from "../home/featured products/TopRateProducts";
import "./Cart.css";
const { Text } = Typography;

const EmptyCart = () => {
  return (
    <Space direction="vertical" className="EmptyCartComponent">
      <Space className="EmptyCartHeader" direction="vertical" align="center">
        <Text>Your shopping cart is empty</Text>
        <img src={emptyCart} alt="emptyCart" />
      </Space>
      <TopRateProducts name="Recently viewed" />
    </Space>
  );
};

export default EmptyCart;

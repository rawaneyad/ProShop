import { Space } from "antd";
import React from "react";
import BreadcrumbCart from "../components/cart/BreadcrumbCart";
import EmptyCart from "../components/cart/EmptyCart";

const Cart = () => {
  return (
    <Space className="EmptyCart" direction="vertical">
      <BreadcrumbCart />
      <EmptyCart />
    </Space>
  );
};

export default Cart;

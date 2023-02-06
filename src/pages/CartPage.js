import { Space } from "antd";
import React from "react";
import BreadcrumbCart from "../components/cart/BreadcrumbCart";
import EmptyCart from "../components/cart/EmptyCart";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { count } = useSelector((state) => state.Cart);

  return (
    <Space className="Cart" direction="vertical">
      <BreadcrumbCart />
      {count===0
      ?<EmptyCart />
      :<Cart/>}
    </Space>
  );
};

export default CartPage;

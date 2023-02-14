import { Space } from "antd";
import React from "react";
import BreadcrumbCart from "../components/cart/BreadcrumbCart";
import EmptyCart from "../components/cart/EmptyCart";
import Cart from "../components/cart/Cart";

const CartPage = () => {
  return (
    <Space className="Cart" direction="vertical">
      <BreadcrumbCart title="Shopping Cart" />
      {!JSON.parse(localStorage.getItem("cart")) ||
      JSON.parse(localStorage.getItem("cart")).totalQty === 0 ? (
        <EmptyCart />
      ) : (
        <Cart />
      )}
    </Space>
  );
};

export default CartPage;

import { Space } from "antd";
import React from "react";
import BreadcrumbCart from "../components/cart/BreadcrumbCart";
import EmptyCart from "../components/cart/EmptyCart";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { UserData } = useSelector((state) => state.UserData);

  return (
    <Space className="Cart" direction="vertical">
      <BreadcrumbCart title='Shopping Cart' />
     {UserData.UserData.cart.totalQty === 0 
      ?<EmptyCart /> 
       : 
      <Cart/>
       } 
    </Space>
  );
};

export default CartPage;

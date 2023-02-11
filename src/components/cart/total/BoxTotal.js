import { Divider, Space, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ButtonCheckout from "./ButtonCheckout";
const { Title, Text } = Typography;
const BoxTotal = () => {
  const { UserData } = useSelector((state) => state.UserData);
  const total = UserData.UserData.cart.items.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);
  const discount = UserData.UserData.cart.totalPrice;
  return (
    <Space className="BoxTotal" direction="vertical">
      <Title className="Title">
        Subtotal ({UserData.UserData.cart.totalQty}) items
      </Title>
      {total != discount && <Text className="Text">$ {total}</Text>}
      <Title className="Title">${discount}</Title>
      <Divider />
      <ButtonCheckout />
    </Space>
  );
};

export default BoxTotal;

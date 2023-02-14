import { Divider, Space, Typography } from "antd";
import React from "react";
import ButtonCheckout from "./ButtonCheckout";
const { Title, Text } = Typography;
const BoxTotal = () => {
  const items = JSON.parse(localStorage.getItem("cart")).items;
  const totalPrice = JSON.parse(localStorage.getItem("cart")).totalPrice;
  const totalQty = JSON.parse(localStorage.getItem("cart")).totalQty;

  const total = items.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0);
  const discount = totalPrice;
  return (
    <Space className="BoxTotal" direction="vertical">
      <Title className="Title">Subtotal ({totalQty}) items</Title>
      {total != discount && <Text className="Text">$ {total}</Text>}
      <Title className="Title">${discount}</Title>
      <Divider />
      <ButtonCheckout />
    </Space>
  );
};

export default BoxTotal;

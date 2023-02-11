import { Divider, Space, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ButtonCheckout from "./ButtonCheckout";
const { Title } = Typography;
const BoxTotal = () => {
  const { UserData } = useSelector((state) => state.UserData);

  return (
    <Space className="BoxTotal" direction="vertical">
      <Title className="Title">Subtotal ({UserData.UserData.cart.totalQty}) items</Title>
      <Title className="Title">
        $
        {UserData.UserData.cart.totalPrice}
      </Title>
      <Divider />
      <ButtonCheckout />
    </Space>
  );
};

export default BoxTotal;

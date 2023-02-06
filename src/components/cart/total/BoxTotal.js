import { Divider, Space, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ButtonCheckout from "./ButtonCheckout";
const { Title } = Typography;
const BoxTotal = () => {
  const { count, total } = useSelector((state) => state.Cart);

  return (
    <Space className="BoxTotal" direction="vertical">
      <Title className="Title">Subtotal ({count}) items</Title>
      <Title className="Title">
        $
        {total}
      </Title>
      <Divider />
      <ButtonCheckout />
    </Space>
  );
};

export default BoxTotal;

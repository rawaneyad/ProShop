import { Space, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
const { Text, Title } = Typography;
const Bill = () => {
  const { UserData } = useSelector((state) => state.UserData);
  const discount = UserData.UserData.cart.totalPrice;
  const tax = 2.53;
  const shipping = 0.0;
  const totalPrice = discount + 2.53 + 0.0;
  return (
    <Space direction="vertical" className="bill">
      <Space className="billItem">
        <Text>Subtotal</Text>
        <Text>${discount}</Text>
      </Space>
      <Space className="billItem">
        <Text>Tax</Text>
        <Text>${tax}</Text>
      </Space>
      <Space className="billItem">
        <Text>Shipping</Text>
        <Text>${shipping}</Text>
      </Space>
      <Space className="billItem">
        <Title level={5}>Total</Title>
        <Title level={5}>${totalPrice}</Title>
      </Space>
    </Space>
  );
};

export default Bill;

import { Space, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import TopRateProducts from "../../home/featured products/TopRateProducts";
import "../payment.css";
const { Title, Text } = Typography;
const PaymentSuccess = () => {
  const { Order } = useSelector((state) => state.Order);
  const { UserData } = useSelector((state) => state.UserData);
  return (
    <Space direction="vertical">
      <Space direction="vertical" className="PaymentSuccess">
        <Space className="SuccessItem">
          <Title level={3}>Payment Success !</Title>
        </Space>
        <Space>
          <Title level={5}>Order number</Title>
          <Text>{Order.order.order._id}</Text>
        </Space>
        <Space>
          <Title level={5}>Shipping Address</Title>
          <Text>
            {Order.order.order.shippingAddress.address},{" "}
            {Order.order.order.shippingAddress.city},{" "}
            {Order.order.order.shippingAddress.country}{" "}-{" "}
            {Order.order.order.shippingAddress.postalCode}
          </Text>
        </Space>
        <Space>
          <Title level={5}>Order Items</Title>
            {UserData.UserData.cart.items.map(item=>
          <Text>{item.qty}*{item.product.name}
          </Text>
              )}
        </Space>
      </Space>
      <TopRateProducts name="Recently viewed" />
    </Space>
  );
};

export default PaymentSuccess;

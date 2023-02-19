import { List, Space, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import "./order.css"
const { Text, Title } = Typography;
const OrderProfile = () => {
  const { OrderDetails } = useSelector((state) => state.Order);

  return (
    <Space direction="vertical" className="Order">
      <Space className="DetailsItem">
        <Title level={3}>Order Details</Title>
      </Space>
      <Space>
        <Title level={5}>Order number</Title>
        <Text>{OrderDetails.orderDetails._id}</Text>
      </Space>
      <Space>
        <Title level={5}>Shipping Address</Title>
        <Text>
          {OrderDetails.orderDetails.shippingAddress.address},{" "}
          {OrderDetails.orderDetails.shippingAddress.city},{" "}
          {OrderDetails.orderDetails.shippingAddress.country} -{" "}
          {OrderDetails.orderDetails.shippingAddress.postalCode}
        </Text>
      </Space>
      <Space>
        <Title level={5}>Created At</Title>
        <Text>{OrderDetails.orderDetails.createdAt}</Text>
      </Space>
      <Space>
        <Title level={5}>Shipping Price</Title>
        <Text>{OrderDetails.orderDetails.shippingPrice}</Text>
      </Space>
      <Space>
        <Title level={5}>Tax Price</Title>
        <Text>{OrderDetails.orderDetails.taxPrice}</Text>
      </Space>
      <Space>
        <Title level={5}>Total Price</Title>
        <Text>{OrderDetails.orderDetails.totalPrice}</Text>
      </Space>
      <Space direction="vertical">
        <Title level={5}>Order Items</Title>
        <ProductList />
      </Space>
    </Space>
  );
};

export default OrderProfile;

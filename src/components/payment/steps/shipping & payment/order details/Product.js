import { List, Space, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;

const Product = ({ item }) => {
  return (
    <List.Item className="ProductBoxCart">
      <img
        src={item.product.images}
        alt="emptyCart"
        style={{ width: "100px" }}
      />
      <Title className="Title" level={5}>
        {item.product.name}
      </Title>
      <Space className="Price" direction="vertical">
        <Title className="Title" level={5}>
          ${item.product.price - item.product.discount}
        </Title>
        <Text className="Title">
          ${item.product.price - item.product.discount} * {item.qty}
        </Text>
      </Space>
    </List.Item>
  );
};

export default Product;

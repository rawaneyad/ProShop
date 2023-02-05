import React from "react";
import { Rate, Typography, Space, Button } from "antd";
import { Icon } from "@iconify/react";
const { Text } = Typography;

const Product = ({ item }) => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex" }}
      align={"center"}
    >
      <img
        alt="example"
        src={item.images}
        style={{ width: 250, height: 250 }}
      />
      <Text>{item.name}</Text>
      <Rate disabled allowHalf defaultValue={item.rating} />
      <Text>${item.price}</Text>
      <Space>
        <Button icon={<Icon icon="ant-design:heart-outlined" />} />
        <Button type="primary">Add to cart</Button>
      </Space>
    </Space>
  );
};

export default Product;

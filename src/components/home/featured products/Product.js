import React from "react";
import { Rate, Typography, Space, Button } from "antd";
import { Icon } from "@iconify/react";
import { addToCart } from "../../../redux";
import { useDispatch } from "react-redux";

const { Text } = Typography;

const Product = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex" }}
      align={"center"}
    >
      <img
        alt="Product"
        src={item.images}
        style={{ width: 250, height: 250 }}
      />
      <Text>{item.name}</Text>
      <Rate disabled allowHalf defaultValue={item.rating} />
      <Text>${item.price}</Text>
      <Space>
        <Button icon={<Icon icon="ant-design:heart-outlined" />} />
        <Button
          type="primary"
          onClick={() => {dispatch(addToCart(item))}}
        >
          Add to cart
        </Button>
      </Space>
    </Space>
  );
};

export default Product;

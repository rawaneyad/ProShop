import React from "react";
import { Rate, Typography, Space, Button } from "antd";
import { Icon } from "@iconify/react";
import { addToCart } from "../../../redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
      <Link to={`/product/${item._id}`}>
        <img
          alt="Product"
          src={item.images}
          style={{ width: 300, height: 300 }}
        />
        <Text>{item.name}</Text>
        <Rate disabled allowHalf defaultValue={item.rating} />
        <Text>${item.price}</Text>
        <Space>
          <Button icon={<Icon icon="ant-design:heart-outlined" />} />
          <Button
            type="primary"
            onClick={() => {
              dispatch(addToCart(item));
            }}
          >
            Add to cart
          </Button>
        </Space>
      </Link>
    </Space>
  );
};

export default Product;

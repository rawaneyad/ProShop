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
        {item.discount !== 0 && (
          <Text className="discount">
            {parseInt((item.discount / item.price) * 100)}%
          </Text>
        )}
        <img
          alt="Product"
          src={item.images}
          style={{ width: 300, height: 300 }}
        />
        <Text>{item.name}</Text>
        <Rate disabled allowHalf defaultValue={item.rating} />
        <Space>
          {item.discount !== 0 && (
            <Text style={{ color: "#FC4059" }} className="Title">
              ${item.price - item.discount}
            </Text>
          )}
          <Text className="Text">${item.price}</Text>
        </Space>
      </Link>
      <Space>
        <Button icon={<Icon icon="ant-design:heart-outlined" />} />
        <Button
          type="primary"
          onClick={() => {
            const qty = 1;
            dispatch(addToCart(item._id, qty));
          }}
        >
          Add to cart
        </Button>
      </Space>
    </Space>
  );
};

export default Product;

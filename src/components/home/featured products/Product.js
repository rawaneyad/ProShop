import React from "react";
import { Rate, Typography, Space, Button, message } from "antd";
import { Icon } from "@iconify/react";
import { addToCart } from "../../../redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const { Text } = Typography;
const Product = ({ item }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "The product added successfully",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "The product added failed",
    });
  };
  const dispatch = useDispatch();
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex" }}
      align={"center"}
    >
      {contextHolder}
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
            const qty = JSON.parse(localStorage.getItem("cart"))
              ? JSON.parse(localStorage.getItem("cart")).items.find(
                  (cart) => cart.product._id === item._id
                ).qty
              : 1;
            dispatch(addToCart(item._id, qty)).then(
              JSON.parse(localStorage.getItem("message")) === "error"
                ? error()
                : success()
            );
          }}
        >
          Add to cart
        </Button>
      </Space>
    </Space>
  );
};

export default Product;

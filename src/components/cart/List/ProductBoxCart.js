import { Space, Typography } from "antd";
import React from "react";
import Counter from "./Counter";
import { CloseOutlined } from "@ant-design/icons";
import { deleteFromCart } from "../../../redux";
import { useDispatch } from "react-redux";
const { Title, Text } = Typography;
const ProductBoxCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Space className="ProductBoxCart">
      <img src={item.images} alt="emptyCart" />
      <Title className="Title">{item.name}</Title>
      <Counter id={item._id} />
      <Space className="Price" direction="vertical">
        {item.discount !== 0 && <Text className="Text">${item.price}</Text>}

        <Title className="Title">${item.price - item.discount}</Title>
      </Space>
      <CloseOutlined
        className="CloseIcon"
        onClick={() => {
          dispatch(deleteFromCart(item._id));
        }}
      />
    </Space>
  );
};

export default ProductBoxCart;

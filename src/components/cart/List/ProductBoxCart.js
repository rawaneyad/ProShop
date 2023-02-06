import { Space, Typography } from "antd";
import React from "react";
import Counter from "./Counter";
import { CloseOutlined } from "@ant-design/icons";
import { deleteFromCart } from "../../../redux";
import { useDispatch } from "react-redux";
const { Title } = Typography;
const ProductBoxCart = ({ item }) => {
    
    const dispatch = useDispatch();
  return (
    <Space className="ProductBoxCart">
      <img src={item.images} alt="emptyCart" />
      <Title className="Title">{item.name}</Title>
      <Counter />
      <Title className="Title">${item.price}</Title>
      <CloseOutlined className="CloseIcon" onClick={()=>{dispatch(deleteFromCart(item._id, item.price))}} />
    </Space>
  );
};

export default ProductBoxCart;

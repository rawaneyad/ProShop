import { Button, Input, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux";

const Counter = ({ id }) => {
  const { UserData } = useSelector((state) => state.UserData);
  const dispatch = useDispatch();
  const qty = UserData.UserData.cart.items.find(
    (item) => item.product._id === id
  ).qty;
  return (
    <Space className="Counter">
      <Button onClick={() => dispatch(addToCart(id, qty + 1))}>+</Button>
      <Input type="number" value={qty} />
      <Button onClick={() => dispatch(addToCart(id, qty - 1))}>-</Button>
    </Space>
  );
};

export default Counter;

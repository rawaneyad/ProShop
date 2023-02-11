import { 
  // Button, 
  Input, Space } from "antd";
import React from "react";
import { 
  // useDispatch, 
  useSelector } from "react-redux";
// import { decrease, increase } from "../../../redux";

const Counter = ({ id }) => {
  const { Cart } = useSelector((state) => state.Cart);
  // const dispatch = useDispatch();

  return (
    <Space className="Counter">
      {/* <Button onClick={()=>dispatch(increase(id))}>+</Button> */}
      <Input
        type="number"
        value={Cart.find(cart => cart.product._id === id).qty}
      />
      {/* <Button onClick={()=>dispatch(decrease(id))}>-</Button> */}
    </Space>
  );
};

export default Counter;

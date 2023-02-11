import { List, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ProductBoxCart from "./ProductBoxCart";

const CartList = () => {
  const { UserData } = useSelector((state) => state.UserData);
  return (
    <Space direction="vertical" className="ListProduct">
      <List
        dataSource={UserData.UserData.cart.items}
        split={false}
        renderItem={(item) => (
          <List.Item key={item.product._id}>
            <ProductBoxCart
            item={item.product}
            />
          </List.Item>
        )}
      />
    </Space>
  );
};

export default CartList;

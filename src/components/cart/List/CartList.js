import { List, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ProductBoxCart from "./ProductBoxCart";

const CartList = () => {
  const { Cart } = useSelector((state) => state.Cart);
  return (
    <Space direction="vertical" className="ListProduct">
      <List
        dataSource={Cart}
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

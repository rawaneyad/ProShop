import { List, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const { OrderDetails } = useSelector((state) => state.Order);
  return (
    <Space direction="vertical">
      <List
        itemLayout="horizontal"
        dataSource={OrderDetails.orderDetails.orderItems}
        renderItem={(item) => <Product item={item} />}
      />
    </Space>
  );
};

export default ProductList;

import { List, Space } from "antd";
import React from "react";
import Product from "./Product";

const ProductList = () => {
  const items = JSON.parse(localStorage.getItem("cart")).items;
  return (
    <Space direction="vertical">
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item) => <Product item={item} />}
      />
    </Space>
  );
};

export default ProductList;

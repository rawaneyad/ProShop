import { List, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopProducts } from "../../../redux";
import Header from "./Header";
import Product from "./Product";

const TopRateProducts = () => {
  const { TopProducts } = useSelector((state) => state.Products);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getTopProducts());
  }, []);
  return (
    <Space direction="vertical" className="ListProduct">
      <Header name="TOP RATE PRODUCTS" />
      <List
        grid={{ gutter: 15, column: 3 }}
        dataSource={TopProducts}
        pagination={{
          pageSize: 3,
          position: "bottom",
          size: "small",
          showTitle: false,
        }}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Product item={item} />
          </List.Item>
        )}
      />
    </Space>
  );
};

export default TopRateProducts;

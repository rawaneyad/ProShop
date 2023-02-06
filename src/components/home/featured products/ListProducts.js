import React, { useEffect } from "react";
import Header from "./Header";
import { List, Skeleton, Space } from "antd";
import Product from "./Product";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux";

const ListProducts = ({from}) => {
  const { Search, Products } = useSelector((state) => state.Products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Space direction="vertical" className="ListProduct">
      <Header name="Featured Products" />
      {Products.isLoading ||Search.isLoading ? (
        <Skeleton active />
       ) : (
      <List
        grid={{ gutter: 15, column: 3 }}
        dataSource={from === 'Search'? Search.products.products:Products.products.products}
        pagination={{
          pageSize: 3,
          position: "bottom",
          size: "small",
          showTitle: false,
        }}
        renderItem={(item) => (
          <List.Item key={item._id}>
            <Product item={item} />
          </List.Item>
        )}
      />)}
    </Space>
  );
};

export default ListProducts;

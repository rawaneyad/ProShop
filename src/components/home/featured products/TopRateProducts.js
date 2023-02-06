import { List, Result, Skeleton, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopProducts } from "../../../redux";
import Header from "./Header";
import Product from "./Product";

const TopRateProducts = ({name}) => {
  const { TopProducts } = useSelector((state) => state.Products);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getTopProducts());
  }, []);
  return (
    <Space direction="vertical" className="ListProduct">
      <Header name={name} />
      {TopProducts.isLoading ? (
        <Skeleton active />
       ) :TopProducts.error!=='' ? (<Result
       status="error"
       title={`${name}Failed`}  
       subTitle={TopProducts.error  }
     />): (
      <List
        grid={{ gutter: 15, column: 3 }}
        dataSource={TopProducts.products}
        renderItem={(item) => (
          <List.Item key={item._id}>
            <Product item={item} />
          </List.Item>
        )}
      />)}
    </Space>
  );
};

export default TopRateProducts;

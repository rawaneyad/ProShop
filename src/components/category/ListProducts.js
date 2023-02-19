import React from "react";
import { List, Result, Skeleton, Space, Typography } from "antd";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
// import { getProductCategory } from "../../redux";
import { useParams } from "react-router-dom";
const { Title } = Typography;
const ListProducts = () => {
  const { Category } = useSelector((state) => state.Products);
  const { category } = useParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductCategory());
  // }, []);
  return (
    <Space direction="vertical" className="ListProduct">
      <Title level={3}>{category} Product</Title>
      {Category.isLoading ? (
        <Skeleton active />
      ) : Category.error !== "" ? (
        <Result
          status="error"
          title="Products Category Failed"
          subTitle={Category.error}
        />
      ) : (
        <List
          grid={{ gutter: 15, column: 3 }}
          dataSource={Category.products.products}
          pagination={{
            position: "bottom",
            size: "small",
            showTitle: false,
          }}
          renderItem={(item) => (
            <List.Item key={item._id}>
              <Product item={item} />
            </List.Item>
          )}
        />
      )}
    </Space>
  );
};

export default ListProducts;

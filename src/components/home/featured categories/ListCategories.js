import React, { useEffect } from "react";
import Header from "./Header";
import { List, Result, Skeleton, Space } from "antd";
import Category from "./Category";
import "./categories.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../redux";

const ListCategories = () => {
  const { Categories } = useSelector((state) => state.Categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <Space direction="vertical" className="ListCategories">
      <Header />
      {Categories.isLoading ? (
        <Skeleton active />
       ) :Categories.error !== "" ? (
        <Result
          status="error"
          title={`Categories Failed`}
          subTitle={Categories.error}
        />
      ) : (
        <List
          grid={{ gutter: 15, column: 4 }}
          dataSource={Categories.categories.categories}
          pagination={{
            pageSize: 4,
            position: "top",
            size: "small",
            showTitle: false,
          }}
          renderItem={(item) => (
            <List.Item>
              <Category item={item} />
            </List.Item>
          )}
        />
      )} 
    </Space>
  );
};

export default ListCategories;

import React from "react";
import Header from "./Header";
import { List } from "antd";
import Category from "./Category";
import { useGetProShopQuery } from "../../../Store/Services/Proshop";

const ListCategories = () => {
  const { data, isError, isSuccess, isLoading } = useGetProShopQuery();
  const renderProShop = () => {
    if (isLoading) {
      return <div> loading</div>;
    }
    if (isError) return <div className="error__card">Error </div>;

    const { categories } = data;
    if (isSuccess && categories.length === 0)
      return <div className="error__card"> empty</div>;
    return (
      <List
        grid={{ gutter: 15, column: 4 }}
        dataSource={categories}
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
    );
  };
  return (
    <div>
      <Header />
      {renderProShop()}
    </div>
  );
};

export default ListCategories;

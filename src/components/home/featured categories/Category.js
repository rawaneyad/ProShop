import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
const Category = ({ item }) => {
  return (
    <Link to={`/product/category/${item.name}`}>
      <Card cover={<img alt="category" src={item.image} />}>
        <Meta title={item.name} />
      </Card>
    </Link>
  );
};

export default Category;

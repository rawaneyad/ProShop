import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const Category = ({ item }) => {
  return (
    <Card
      cover={<img alt="category" src={item.image} />}
    >
      <Meta title={item.name} />
    </Card>
  );
};

export default Category;

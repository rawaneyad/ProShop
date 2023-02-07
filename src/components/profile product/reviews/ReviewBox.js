import { Rate, Space, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
const ReviewBox = ({ item }) => {
  return (
    <Space direction="vertical"
    >
      <Title className="name">{item.name}</Title>
      <Rate disabled allowHalf value={item.rating} />
      <Text>{item.comment}</Text>
    </Space>
  );
};

export default ReviewBox;

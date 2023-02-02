import React from "react";
import { Typography, Space } from "antd";
const { Title, Text } = Typography;

const FormHeader = ({title, text}) => {
  return (
    <Space align="center">
      <div>
        <Title className="title">{title}</Title>
        <Text className="text">{text}</Text>
      </div>
    </Space>
  );
};

export default FormHeader;

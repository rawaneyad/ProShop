import React from "react";
import { Form, Button } from "antd";

const ButtonItem = ({ name, type }) => {
  return (
    <Form.Item>
      <Button type={type} htmlType="submit">
        {name}
      </Button>
    </Form.Item>
  );
};

export default ButtonItem;

import React from "react";
import { Form, Input } from "antd";

const InputItem = ({ label, name, message }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: { message },
        },
      ]}
    >
      {name === "Password" ? (
        <Input.Password placeholder={name} />
      ) : (
        <Input placeholder={name} />
      )}
    </Form.Item>
  );
};

export default InputItem;

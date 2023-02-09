import React from "react";
import { Form, Input } from "antd";

const InputItem = ({ label, name, rules }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
    >
      {name === "password" || name ==="passwordConfirmation" ? (
        <Input.Password placeholder={name} />
      ) : (
        <Input placeholder={name} />
      )}
    </Form.Item>
  );
};

export default InputItem;

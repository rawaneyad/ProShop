import React from "react";
import { Form, Input } from "antd";

const InputItem = ({ label, name, rules, value }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
    >
      {name === "password" || name ==="passwordConfirmation" ? (
        <Input.Password placeholder={name} defaultValue={value} />
      ) : (
        <Input placeholder={name} defaultValue={value} />
      )}
    </Form.Item>
  );
};

export default InputItem;

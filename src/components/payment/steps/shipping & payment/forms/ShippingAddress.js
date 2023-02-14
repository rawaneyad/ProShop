import { Form, Typography } from "antd";
import React from "react";
// import ButtonItem from "./ButtonItem";
import InputItem from "./InputItem";
const {Title} =Typography
const ShippingAddress = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Title level={3}>Shipping Address</Title>
    <Form
      layout="vertical"
      name="basic"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <InputItem
        label="Country"
        name="Country"
        rules={[
          {
            required: true,
            message: "Please input your Country",
          },
        ]}
      />
      <InputItem
        label="City"
        name="City"
        rules={[
          {
            required: true,
            message: "Please input your City",
          },
        ]}
      />
      <InputItem
        label="Zip Code"
        name="Zip Code"
        rules={[
          {
            required: true,
            message: "Please input your Zip Code",
          },
        ]}
        
      />
      <InputItem
        label="Street Address"
        name="Street Address"
        rules={[
          {
            required: true,
            message: "Please input your Street Address",
          },
        ]}
      />
    </Form>
    </>
  );
};

export default ShippingAddress;

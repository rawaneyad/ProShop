import { Form, Typography } from "antd";
import React from "react";
import ButtonItem from "./ButtonItem";
import InputItem from "./InputItem";
const { Title } = Typography;
const ShippingAddress = () => {
  const onFinish = (values) => {
    localStorage.setItem("ShippingAddress", JSON.stringify(values));
    // console.log(values);
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
          name="country"
          rules={[
            {
              required: true,
              message: "Please input your Country",
            },
          ]}
        />
        <InputItem
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: "Please input your City",
            },
          ]}
        />
        <InputItem
          label="Zip Code"
          name="postalCode"
          rules={[
            {
              required: true,
              message: "Please input your Zip Code",
            },
          ]}
        />
        <InputItem
          label="Street Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your Street Address",
            },
          ]}
        />
        <ButtonItem type="primary" name="Save" />
      </Form>
    </>
  );
};

export default ShippingAddress;

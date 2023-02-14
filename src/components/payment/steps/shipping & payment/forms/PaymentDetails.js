import { Form, Typography } from "antd";
import React from "react";
// import ButtonItem from "./ButtonItem";
import InputItem from "./InputItem";
const {Title} =Typography
const PaymentDetails = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Title level={3}>Payment Details</Title>
      <Form
        layout="vertical"
        name="basic"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <InputItem
          label="Name on Card"
          name="Name on Card"
          rules={[
            {
              required: true,
              message: "Please input your Name on Card",
            },
          ]}
        />
        <InputItem
          label="Card Number"
          name="Card Number"
          rules={[
            {
              required: true,
              message: "Please input your Card Number",
            },
          ]}
        />
        <InputItem
          label="Expiration Date"
          name="Expiration Date"
          rules={[
            {
              required: true,
              message: "Please input your Expiration Date",
            },
          ]}
        />
        <InputItem
          label="CVC"
          name="CVC"
          rules={[
            {
              required: true,
              message: "Please input your CVC",
            },
          ]}
        />
      </Form>
    </>
  );
};

export default PaymentDetails;

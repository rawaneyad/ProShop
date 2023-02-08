import React from "react";
import ButtonItem from "./ButtonItem";
import FormHeader from "./FormHeader";
import InputItem from "./InputItem";
import { Link } from "react-router-dom";
import { Form, Divider, Typography } from "antd";
import './loginSignup.css'
const { Text } = Typography;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormSignup = () => {
  return (
    <div>
      <FormHeader
        title="Signup."
        text="Sign up and get exclusive offers from us"
      />
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <InputItem
          label="Enter your first name"
          name="FirstName"
          message="Please input your first name!"
        />
        <InputItem
          label="Enter your last name"
          name="LastName"
          message="Please input your last name!"
        />
        <InputItem
          label="Enter your email address"
          name="Email"
          message="Please input your username!"
        />
        <InputItem
          label="Enter your Password"
          name="Password"
          message="Please input your password!"
        />
        <InputItem
          label="Confirm your password"
          name="Password"
          message="Please input your password!"
        />
        <ButtonItem type="primary" name="Signup" />
        <Divider />
        <Text className="text footerText">Have an account ? <Link to="/login">Login</Link></Text>
      </Form>
    </div>
  );
};

export default FormSignup;

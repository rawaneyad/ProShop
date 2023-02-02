import React from "react";
import ButtonItem from "./ButtonItem";
import FormHeader from "./FormHeader";
import InputItem from "./InputItem";
import './loginSignup.css'
import { Checkbox, Form, Divider, Typography } from "antd";
import { Link } from "react-router-dom";
const { Text } = Typography;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormLogin = () => {
  return (
    <>
      <FormHeader
        title="Login."
        text="Login with your data that you entered during registration"
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
          label="Enter your email address"
          name="Email"
          message="Please input your username!"
        />
        <InputItem
          label="Enter your Password"
          name="Password"
          message="Please input your password!"
        />
        <ButtonItem type="primary" name="Login" />
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Text className="text footerText">Forgot your password?</Text>
      </Form>
      <Divider />
      <Link to="/signup">
        <ButtonItem type="default" name="Sign up now" />
      </Link>
    </>
  );
};

export default FormLogin;

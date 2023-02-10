import React from "react";
import ButtonItem from "./ButtonItem";
import FormHeader from "./FormHeader";
import InputItem from "./InputItem";
import "./loginSignup.css";
import { Checkbox, Form, Divider, Typography, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux";
const { Text } = Typography;
const FormLogin = () => {
  let navigate = useNavigate();
  
  const { UserData } = useSelector((state) => state.UserData);
  const dispatch = useDispatch();

  const onFinishFailed = () => {
    Modal.error({
      title: UserData.error !== "" ? UserData.error : "",
    });
  };

  const onFinish = (values) => {
    dispatch(login(values, navigate));
  };

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
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid Email!",
            },
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        />
        <InputItem
          label="Enter your Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 8,
              message: "Password must be minimum 8 characters.",
            },
            {
              pattern: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
              message:
                "Password must be include at least one capital and at least one digit.",
            },
          ]}
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

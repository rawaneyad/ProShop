import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import ButtonItem from "./ButtonItem";
import FormHeader from "./FormHeader";
import InputItem from "./InputItem";
import { Link } from "react-router-dom";
import { Form, Divider, Typography, Modal } from "antd";
import "./loginSignup.css";
import { signup } from "../../redux";
const { Text } = Typography;

const FormSignup = () => {
  const { UserData } = useSelector((state) => state.UserData);
  const dispatch = useDispatch();

  useEffect(() => {
    Modal.error({
      title:
        UserData.error !== "" ? UserData.error : "Please input correct data !",
    });
  }, [UserData.error]);

  const onFinish = (values) => {
    dispatch(signup(values));
  };
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
        autoComplete="off"
      >
        <InputItem
          label="Enter your first name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name",
            },
          ]}
        />
        <InputItem
          label="Enter your last name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name",
            },
          ]}
        />
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
        <InputItem
          label="Confirm your password"
          name="passwordConfirmation"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        />
        <ButtonItem type="primary" name="Signup" />
        <Divider />
        <Text className="text footerText">
          Have an account ? <Link to="/login">Login</Link>
        </Text>
      </Form>
    </div>
  );
};

export default FormSignup;

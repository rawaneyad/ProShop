import React from "react";
import { Space } from "antd";
import FormLogin from "../components/login & signup/FormLogin";
import LoginImage from "../Image/Group 240.png";
import Image from "../components/login & signup/Image";
const Login = () => {
  return (
    <Space align="center" className="LoginSignup">
      <FormLogin />
      <Image src={LoginImage} />
    </Space>
  );
};

export default Login;

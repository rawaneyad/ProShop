import React from "react";
import { Space } from "antd";
import FormSignup from "../components/login & signup/FormSignup";
import SignupImage from "../Image/Group 421.png";
import Image from "../components/login & signup/Image";

const SignUp = () => {
  return (
    <Space align="center" className="LoginSignup">
        <FormSignup />
      <Image src={SignupImage} />
    </Space>
  );
};

export default SignUp;

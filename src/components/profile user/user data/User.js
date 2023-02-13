import { Button, Form, Space, Typography, Upload } from "antd";
import Cookies from "js-cookie";
import React from "react";
// import { useDispatch } from "react-redux";
// import { imageUpload } from "../../../redux";
import ProfileButton from "./ProfileButton";
import ProfileImage from "./ProfileImage";
const { Title } = Typography;
const User = () => {
//   const dispatch = useDispatch();
//   const normFile = (e) => {
//       console.log('Upload event:', e.file[0]);
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e?.fileList;
//   };
//   const onFinish = (values) => {
//     dispatch(imageUpload(values));
//     console.log('Received values of form: ', values);
//   };
  return (
    <Space>
      <Space direction="vertical">
        <Title level={2}>My Profile</Title>
        <Space>
          <Title level={5}>First Name</Title>
          <Title level={3}>{JSON.parse(Cookies.get("user")).firstName}</Title>
        </Space>
        <Space>
          <Title level={5}>Last Name</Title>
          <Title level={3}>{JSON.parse(Cookies.get("user")).lastName}</Title>
        </Space>
        <Space>
          <Title level={5}>Email</Title>
          <Title level={3}>{JSON.parse(Cookies.get("user")).email}</Title>
        </Space>
        <Space>
          <Title level={5}>Birthday</Title>
          <Title level={3}>{JSON.parse(Cookies.get("user")).dateOfBirth}</Title>
        </Space>
        <Space>
          <ProfileButton name="Change Password" />
        </Space>
      </Space>
      <Space className="ProfileImage" direction="vertical">
        <ProfileImage size={150} />
        {/* <Form
          name="validate_other"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" listType="picture" >
              <Button>Upload new photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form> */}
      </Space>
    </Space>
  );
};

export default User;

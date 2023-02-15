import { Button, Form, Space, Typography, Upload } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import EditModal from "./modal/EditModal";
import { useDispatch } from "react-redux";
import { imageUpload } from "../../../redux";
import ProfileImage from "./ProfileImage";
const { Title } = Typography;
const User = () => {
  const { UserData } = useSelector((state) => state.UserData);
    const dispatch = useDispatch();
    const normFile = (e) => {
        // console.log('Upload event:', e.file[0]);
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
    };
    const onFinish = (values) => {
      dispatch(imageUpload(values));
      // console.log('Received values of form: ', values);
    };
  return (
    <Space>
      <Space direction="vertical">
        <Title level={2}>My Profile</Title>
        <Space>
          <Title level={5}>First Name</Title>
          <Title level={3}>{UserData.UserData.firstName}</Title>
        </Space>
        <Space>
          <Title level={5}>Last Name</Title>
          <Title level={3}>{UserData.UserData.lastName}</Title>
        </Space>
        <Space>
          <Title level={5}>Email</Title>
          <Title level={3}>{UserData.UserData.email}</Title>
        </Space>
        <Space>
          <Title level={5}>Birthday</Title>
          <Title level={3}>{UserData.UserData.dateOfBirth}</Title>
        </Space>
        <EditModal />
      </Space>
      <Space className="ProfileImage" direction="vertical">
        <ProfileImage size={150} />
        <Form
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
            // id="fileInput"
          >
            <Upload name="logo" listType="picture"  >
              <Button>Upload new photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Space>
  );
};

export default User;

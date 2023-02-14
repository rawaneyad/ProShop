import { Form, Modal, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonItem from "./ButtonItem";
import InputItem from "./InputItem";
import ProfileButton from "../ProfileButton";
import { updateProfile } from "../../../../redux";
import { useNavigate } from "react-router-dom";

const EditModal = () => {
  let navigate = useNavigate();
  const { UserData } = useSelector((state) => state.UserData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  const onFinishFailed = () => {
    setIsModalOpen(false);
    Modal.error({
      title: UserData.error !== "" ? UserData.error : "",
    });
  };
  const onFinish = (values) => {
    // console.log("values", {
    //   ...values,
    //   profileImage: "",
    //   isAdmin: true,
    //   dateOfBirth: "2023-02-12T06:56:03.808Z",
    // });
    dispatch(
      updateProfile(
        {
          ...values,
          profileImage: "",
          isAdmin: true,
          dateOfBirth: "2023-02-12T06:56:03.808Z",
        },
        navigate
      )
    );
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Edit Data"
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          name="basic"
          // initialValues={{
          //   remember: true,
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
            value={UserData.UserData.firstName}
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
            value={UserData.UserData.lastName}
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
            value={UserData.UserData.email}
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
            value={UserData.UserData.password}
          />
          <ButtonItem type="primary" name="Edit" />
        </Form>
      </Modal>
      <Space>
        <ProfileButton name="Edit Data" onClick={showModal} />
      </Space>
    </>
  );
};

export default EditModal;

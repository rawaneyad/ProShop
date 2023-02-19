import { Button, Form, Input, Rate, Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../../redux";
const { TextArea } = Input;

const AddReview = () => {
  const { ProfileProduct } = useSelector((state) => state.ProfileProduct);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(addReview(values, ProfileProduct.profileProduct._id));
  };
  return (
    <Space className="AddReview">
      <Form
        layout="vertical"
        name="basic"
        onFinish={onFinish}
      >
        <Title level={4}>Add Comment</Title>
        <Form.Item
          label="Enter your comment"
          name="comment"
          rules={[
            {
              required: true,
              message: "Please input your Comment!",
            },
          ]}
        >
          <TextArea
            placeholder="Enter your comment"
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
          />
        </Form.Item>
        <Form.Item name="rating" label="Rating">
          <Rate />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default AddReview;

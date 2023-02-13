import { Divider, Space, Typography } from "antd";
import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../user data/ProfileImage";
const { Title } = Typography;

const UserProfileMenu = () => {
  return (
    <div className="User">
      <Space direction="vertical">
        <Space>
          <ProfileImage size={100} />
          <Title level={3}>
            {JSON.parse(Cookies.get("user")).firstName}{" "}
            {JSON.parse(Cookies.get("user")).lastName}
          </Title>
        </Space>
        <Space direction="vertical">
          <Title level={4}>My Orders</Title>
          <Title level={4}>Wishlist</Title>
          <Title level={4}>Notifcations</Title>
          <Title level={4}>Settings</Title>
        </Space>
      </Space>
      <Divider />
      <Link to="/" onClick={() => Cookies.remove("user")}>
        <Title level={4}>Logout</Title>
      </Link>
    </div>
  );
};

export default UserProfileMenu;

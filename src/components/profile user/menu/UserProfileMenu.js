import { Button, Divider, Space, Typography } from "antd";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux";
import ProfileImage from "../user data/ProfileImage";
const { Title } = Typography;

const UserProfileMenu = () => {
  let navigate = useNavigate();

    const dispatch = useDispatch();

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
      <Button type="text" onClick={() => dispatch(logout(navigate))}>
        <Link to="/">Logout</Link>
      </Button>
    </div>
  );
};

export default UserProfileMenu;

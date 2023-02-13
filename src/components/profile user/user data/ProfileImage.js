import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const ProfileImage = ({ size }) => {
  const { UserData } = useSelector((state) => state.UserData);

  return (
    <>
      <Avatar
        className="ProfileImage"
        size={size}
        style={{
          fontSize: "60px",
          backgroundColor: "#fbef9c",
          borderColor: "#FCDD06",
        }}
        src={UserData.UserData.profileImage || <UserOutlined />}
      />
    </>
  );
};

export default ProfileImage;

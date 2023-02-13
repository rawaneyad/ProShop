import { Button } from "antd";
import React from "react";

const ProfileButton = ({ name, onClick }) => {
  return (
    <Button type="primary" onClick={() => onClick()}>
      {name}
    </Button>
  );
};

export default ProfileButton;

import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Badge } from "antd";
const IconBox = () => {
  return (
    <div className="iconsDev">
      <div className="iconDev">
        <UserOutlined />
        signup/login
      </div>
      <div className="iconDev">
        <Badge size="small" count={0} showZero>
          <Icon icon="ant-design:heart-outlined" />
        </Badge>
        wishlist
      </div>
      <div className="iconDev">
        <Badge size="small" count={0} showZero>
          <Icon icon="ant-design:shopping-cart-outlined" />
        </Badge>
        cart
      </div>
    </div>
  );
};

export default IconBox;

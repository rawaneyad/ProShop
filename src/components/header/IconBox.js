import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Badge } from "antd";
import { Link } from "react-router-dom";
const IconBox = () => {
  return (
    <div className="iconsDev">
      <div className="iconDev">
        <UserOutlined />
        <div>
          <Link to="/signup">Signup</Link>/<Link to="/login">Login</Link>
        </div>
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

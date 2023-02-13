import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
const IconBox = () => {
  const { UserData } = useSelector((state) => state.UserData);
  return (
    <div className="iconsDev">
      <div className="iconDev">
        <div>
          <Link
            to={
              Cookies.get("user")
                ? `/profile/${JSON.parse(Cookies.get("user"))._id}`
                : "/login"
            }
          >
            <UserOutlined />
            {Cookies.get("user")
              ? JSON.parse(Cookies.get("user")).firstName
              : "Signup/Login"}
          </Link>
        </div>
      </div>
      <div className="iconDev">
        <Badge size="small" count={0} showZero>
          <Icon icon="ant-design:heart-outlined" />
        </Badge>
        wishlist
      </div>
      <div className="iconDev">
        <Link to="/cart">
          <Badge
            size="small"
            count={
              // UserData.UserData.cart.totalQty === undefined
              //   ?
              0
              // : UserData.UserData.cart.totalQty
            }
            showZero
          >
            <Icon icon="ant-design:shopping-cart-outlined" />
          </Badge>
          cart
        </Link>
      </div>
    </div>
  );
};

export default IconBox;

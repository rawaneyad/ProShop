import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BreadcrumbCart = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Back </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Shopping Cart</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbCart;

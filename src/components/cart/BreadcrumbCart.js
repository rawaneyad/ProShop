import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BreadcrumbCart = ({title}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Back </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbCart;

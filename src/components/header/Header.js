import React from "react";
import "./header.css";
import IconBox from "./IconBox";
import SearchInput from "./SearchInput";
import { Layout } from "antd";
import logo from "../../Image/ProShop.png";
import { Link } from "react-router-dom";
const { Header } = Layout;
const HeaderMenu = () => {
  return (
    <Header>
      <Link to="/">
        <img width={200} src={logo} alt="logo" />
      </Link>
      <SearchInput />
      <IconBox />
    </Header>
  );
};

export default HeaderMenu;

import React from "react";
import "./header.css";
import IconBox from "./IconBox";
import SearchInput from "./SearchInput";
import { Layout } from "antd";
import logo from "../../Image/ProShop.png";
const { Header } = Layout;
const HeaderMenu = () => {
  return (
    <Header>
      <img width={200} src={logo} alt="logo" />
      <SearchInput />
      <IconBox />
    </Header>
  );
};

export default HeaderMenu;

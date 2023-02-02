import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/header/Header';

export default function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
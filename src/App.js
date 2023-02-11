import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import SignUp from "./pages/SignUp";
import { ConfigProvider } from "antd";
import Product from "./pages/Product";
import Cart from "./pages/CartPage";
import Profile from "./pages/Profile";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/404";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./pages/Dashboard";
import Protected from "./auth/Protected";
import Auth from "./auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./redux";
import Cookies from "js-cookie";
import { useEffect } from "react";

function App() {
  const { UserData } = useSelector((state) => state.UserData);
  const dispatch = useDispatch();
  useEffect(() => {
    if(Cookies.get('user'))dispatch(getProfile());
  }, [])
  return (
    <ConfigProvider
      ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FCDD06",
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/profile/:id"
            element={
              <Protected isAuth={UserData.isAuth}>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/product/add/"
            element={
              <Protected isAuth={UserData.isAuth}>
                <AddProduct />
              </Protected>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Protected isAuth={UserData.isAuth}>
                <Dashboard />
              </Protected>
            }
          />

          <Route
            path="/login"
            element={
              <Auth isAuth={UserData.isAuth}>
                <Login />
              </Auth>
            }
          />
          <Route
            path="/signup"
            element={
              <Auth isAuth={UserData.isAuth}>
                <SignUp />
              </Auth>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;

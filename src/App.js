import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import SignUp from "./pages/SignUp";
import { ConfigProvider } from 'antd';

function App() {
  return (
   <ConfigProvider ConfigProvider
    theme={{
      token: {
        colorPrimary: '#FCDD06',
      },
    }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
 </ConfigProvider>
  );
}

export default App;

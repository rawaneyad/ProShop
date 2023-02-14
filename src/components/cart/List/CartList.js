import { List, Space } from "antd";
// import Cookies from "js-cookie";
import React from "react";
// import { useSelector } from "react-redux";
import ProductBoxCart from "./ProductBoxCart";

const CartList = () => {
  // const { UserData } = useSelector((state) => state.UserData);
  // const items=JSON.parse(localStorage.getItem('cart')).items;
  // console.log(items);
  // const items=JSON.parse(Cookies.get('cart').cart.items)
  return (
    <Space direction="vertical" className="ListProduct">
      <List
        dataSource={JSON.parse(localStorage.getItem('cart')).items || []}
        split={false}
        renderItem={(item) => (
          <List.Item key={item.product._id}>
            <ProductBoxCart
            item={item.product}
            />
          </List.Item>
        )}
      />
    </Space>
  );
};

export default CartList;

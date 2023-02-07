import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../home/featured products/Header";
import ReviewBox from "./ReviewBox";

const ReviewList = () => {
    const { ProfileProduct } = useSelector((state) => state.ProfileProduct);
//   const image=ProfileProduct.profileProduct.reviews;
  return (
    <>
      <Header name="Reviews" />
      <List
        dataSource={ProfileProduct.profileProduct.reviews}
        renderItem={(item) => (
          <List.Item key={item._id}>
            <ReviewBox item={item} />
          </List.Item>
        )}
      />
    </>
  );
};

export default ReviewList;

import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../home/featured products/Header";
import AddReview from "./AddReview";
import ReviewBox from "./ReviewBox";

const ReviewList = () => {
    const { ProfileProduct } = useSelector((state) => state.ProfileProduct);
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
      <AddReview/>
    </>
  );
};

export default ReviewList;

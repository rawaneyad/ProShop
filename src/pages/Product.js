import { Result, Skeleton, Space, Spin } from "antd";
import React, { useEffect } from "react";
import ImagesGallery from "../components/profile product/ImagesGallery";
import MainData from "../components/profile product/MainData";
import ListProducts from "../components/home/featured products/ListProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProductProfile } from "../redux";
import { useParams } from "react-router-dom";
import ReviewList from "../components/profile product/reviews/ReviewList";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductProfile(id));
  }, []);
  const { ProfileProduct } = useSelector((state) => state.ProfileProduct);

  return (
    <div className="ProductProfile">
      {ProfileProduct.isLoading ? (
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      ) : ProfileProduct.error !== "" ? (
        <Result
          status="error"
          title={`Product Profile Failed`}
          subTitle={ProfileProduct.error}
        />
      ) : (
        <>
          <Space>
            <ImagesGallery />
            <MainData />
          </Space>
          <ReviewList />
          <ListProducts from="Products" />
        </>
      )}
    </div>
  );
};

export default Product;

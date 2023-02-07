import { Image } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import BreadcrumbCart from "../cart/BreadcrumbCart";
import "./profile.css";
const ImagesGallery = () => {
  const { ProfileProduct } = useSelector((state) => state.ProfileProduct);
  // const image=ProfileProduct.profileProduct.images;
  // console.log(image);
  return (
    <div className="PreviewGroup">
      <BreadcrumbCart title={ProfileProduct.profileProduct.name} />
      <Image.PreviewGroup>
        <Image
          width={307}
          src={ProfileProduct.profileProduct.images}
        />
        <Image
          width={100}
          src={ProfileProduct.profileProduct.images}
        />
        <Image
          width={100}
          src={ProfileProduct.profileProduct.images}
        />
        <Image
          width={100}
          src={ProfileProduct.profileProduct.images}
        />
      </Image.PreviewGroup>
    </div>
  );
};

export default ImagesGallery;

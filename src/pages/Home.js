import React from "react";
import ListCategories from "../components/home/featured categories/ListCategories";
import ListProducts from "../components/home/featured products/ListProducts";
import TopRateProducts from "../components/home/featured products/TopRateProducts";
import Slider from "../components/home/slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <ListCategories />
      <ListProducts />
      <TopRateProducts/>
    </>
  );
};

export default Home;

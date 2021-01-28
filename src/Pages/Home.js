import React, { createContext, useState } from "react";
import Carousel from "../Component/Home/Caousel/Carousel";
import Categories from "../Component/Home/Categories/Categories";
import Discount from "../Component/Home/Discount/Discount";
import Footer from "../Component/Footer/Footer";
import Newsletter from "../Component/Home/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Carousel />
      <Categories />
      <Discount />
      <Newsletter />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import PrewiewInfo from "./PrewiewInfo";
import ItemCard from "../../../components/ItemCard/ItemCard";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchGetProducts } from "../../../redux/products/actions";
import { fetchGetCategory } from "../../../redux/categories/thunk";
import { ProductsCardWrapper, SectionHead } from "../../../style/Global";
import ShoppingCart from "../../../components/ShopingCart/ShoppingCart";
import SliderCarousel from "../../../components/SliderCarousel/SliderCarousel";
import Title from "../../../components/shared/UI-elements/Title/Title";
import CarouselImage from "../ProductInfo/CarouselImage/CarouselImage";
const data = [
  {
    image:
      "https://cdn-global-hk.hobbyking.com/media/wysiwyg/HomePage/homepageSlider/may-2022/slider_corsair_desk.jpg",
  },
  {
    image:
      "https://cdn-global-hk.hobbyking.com/media/wysiwyg/HomePage/homepageSlider/april-2022/banner_night_tundra_desk.jpg",
  },
  {
    image:
      "https://cdn-global-hk.hobbyking.com/media/wysiwyg/HomePage/homepageSlider/January-2021/bnr_turnigy-rc-lipo-batteries-desktop-v2-min.jpg",
  },
];
const Home = () => {
  const { categories } = useAppSelector((states) => states.categories);
  const { products } = useAppSelector((state) => state.products);
  // const [time, setTime] = useState(0);

  // useEffect(() => {
  //   const i = setInterval(() => {
  //     setTime((p) => p + 1);
  //   }, 1000);
  //   //return () => clearInterval(i);
  // }, []);

  return (
    <>
      <CarouselWrapper>
        <CarouselImage imagess={data} autoScroll thumbnails={false} />
      </CarouselWrapper>
      <PageStyle>
        <PrewiewInfo
          title={"Найкращі продані товари"}
          products={products || []}
        />
        <PrewiewInfo title={"Акційні товари"} products={products || []} />
        <Introduction>
          <Title name={"WHAT IS HOBBYKING?"} />
          <p>
            <img
              src={
                "https://cdn-global-hk.hobbyking.com/media/wysiwyg/Marketing_CMS/category_cms/pic_what-is-hobbyking-min.jpg"
              }
            />
            Founded in 2005, HobbyKing is one of the leading online global Radio
            Control (RC) hobby shops. We're also designing, manufacturing, and
            distributing a wide selection of proprietary RC products including
            RC planes, cars, and boats; right through to batteries, parts, and
            accessories. HobbyKing's mission is to make the RC hobby more
            accessible for everyone to enjoy. Founded in 2005, HobbyKing is one
            of the leading online global Radio Control (RC) hobby shops. We're
            also designing, manufacturing, and distributing a wide selection of
            proprietary RC products including RC planes, cars, and boats; right
            through to batteries, parts, and accessories. HobbyKing's mission is
            to make the RC hobby more accessible for everyone to enjoy.
          </p>
        </Introduction>
      </PageStyle>
    </>
  );
};

export default Home;

export const PageStyle = styled.div`
  margin-top: 280px;
`;

const CarouselWrapper = styled.div`
  //width: 100vw;
  left: 0;
  position: absolute;
  width: 100%;
`;

const Introduction = styled.div`
  border: 1px solid black;
  margin-top: 50px;
  position: relative;
  border-radius: 15px;
  padding: 40px 40px 0 40px;
  h2 {
    font: 900 36px Roboto, sans-serif;
    color: #202020;
    text-transform: uppercase;
    text-align: left;
    margin: 0 0 50px 0;
    position: relative;

    &:after {
      content: "";
      width: 100px;
      border-bottom: 3px solid #f7941d;
      position: absolute;
      bottom: -25px;
      left: 0;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
  }
  img {
    float: right;
    width: 460px;
    height: auto;
    margin: 0 0 15px 30px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    -webkit-box-shadow: 0 0 30px 0 #c4c4c4;
    box-shadow: 0 0 30px 0 #c4c4c4;
  }
  p {
    font: 400 18px Roboto, sans-serif;
    color: #2c2c2c;
    line-height: 42px;
    text-align: left;
    margin: 0 0 25px 0;
  }
`;

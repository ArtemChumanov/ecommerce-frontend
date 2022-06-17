import React, { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components/macro";
//@ts-ignore
import RightArrow from "assets/icons/right-arrow-orange.svg";
import ItemCard from "../ItemCard/ItemCard";
import { ProductsType } from "../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderCarouselProps {
  products: ProductsType[] | null;
  isProducts?: boolean;
}

const SliderCarousel: FC<SliderCarouselProps> = ({
  products,
  isProducts = true,
}) => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <RightArrowStyled src={RightArrow} className="next" onClick={onClick} />
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <LeftArrowStyled src={RightArrow} className="prev" onClick={onClick} />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {products?.map((i, index) =>
          isProducts ? (
            <ItemCard key={i.id} isProduct={true} item={i} view={"grid"} />
          ) : (
            <img key={index} src={i.image} alt="" />
          )
        )}
      </Slider>
    </SliderWrapper>
  );
};

export default SliderCarousel;

const SliderWrapper = styled.div`
  font-family: sans-serif;
  margin: 50px 0 10px;
  position: relative;
  padding: 10px 0;
  .prev,
  .next {
    width: 50px !important;
  }

  & > div {
    place-items: center;
    padding: 0px;
  }
  .slick-dots {
    padding-top: 30px !important;
  }
`;
const RightArrowStyled = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  width: 50px;
  transform: translate(0%, -50%);
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
`;

const LeftArrowStyled = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  width: 50px;
  transform: translate(0%, -50%);
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
`;

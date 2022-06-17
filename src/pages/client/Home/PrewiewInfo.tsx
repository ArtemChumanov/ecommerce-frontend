import React, { FC } from "react";
import styled from "styled-components/macro";
// @ts-ignore
import RightArrow from "assets/icons/right-arrow.svg";
import { ProductsType } from "../../../types/types";
import SliderCarousel from "../../../components/SliderCarousel/SliderCarousel";
import Title from "../../../components/shared/UI-elements/Title/Title";

interface PreviewInfo {
  title: string;
  products: ProductsType[] | null;
}

const PreviewInfo: FC<PreviewInfo> = ({ title, products }) => {
  return (
    <PreviewInfoStyle>
      <Title name={title} />
      <SliderCarousel products={products} />
    </PreviewInfoStyle>
  );
};

export default PreviewInfo;

export const PreviewInfoStyle = styled.div`
  margin-top: 64px;
`;

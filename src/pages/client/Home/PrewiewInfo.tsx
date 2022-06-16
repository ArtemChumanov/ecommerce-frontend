import React, { FC } from "react";
import styled from "styled-components/macro";
// @ts-ignore
import RightArrow from "assets/icons/right-arrow.svg";
import ItemCard from "../../../components/ItemCard/ItemCard";
import List from "../../../components/List/List";
import { CategoryType, ProductsType } from "../../../types/types";
import { useHistory } from "react-router-dom";
import { RoutesConstants } from "../../../router/RoutesConstants";
import { Button } from "../../../style/common/Button";
import { SectionHead } from "../../../style/Global";
import SliderCarousel from "../../../components/SliderCarousel/SliderCarousel";
import Title from "../../../components/shared/UI-elements/Title/Title";

interface PrewiewInfo {
  title: string;
  products: ProductsType[] | null;
}

const PrewiewInfo: FC<PrewiewInfo> = ({ title, products }) => {
  return (
    <PrewiewInfoStyle>
      <Title name={title} />
      <SliderCarousel products={products} />
    </PrewiewInfoStyle>
  );
};

export default PrewiewInfo;

export const PrewiewInfoStyle = styled.div`
  //display: flex;
  //justify-content: space-between;
  margin-top: 64px;
`;

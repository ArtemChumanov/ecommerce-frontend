import React from "react";
import styled from "styled-components/macro";
import ItemCard from "../../../components/ItemCard/ItemCard";
import Subheader from "./Subheader";

const ProductsContainer = ({ products, category, setSortItem }) => {
  return (
    <ProductsContainerStyle>
      <Subheader category={category} setSortItem={setSortItem} />
      <Content>
        {products.map((p, i) => (
          <ItemCard key={i} isProduct item={p} view={"grid"} />
        ))}
      </Content>
    </ProductsContainerStyle>
  );
};

export default ProductsContainer;

const ProductsContainerStyle = styled.div`
  flex-grow: 1;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  //flex-wrap: wrap;
`;

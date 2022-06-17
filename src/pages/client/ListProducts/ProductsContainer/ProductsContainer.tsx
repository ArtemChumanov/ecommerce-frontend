import React, { FC } from "react";
import ItemCard from "../../../../components/ItemCard/ItemCard";
import Subheader from "../Subheader/Subheader";
import { ProductsContainerStyle, Content } from "./ProductsContainer.styled";
import { ProductsType } from "../../../../types/types";

interface ProductsContainer {
  products: ProductsType[];
  category: string;
  setSortItem: (arg) => void;
}

const ProductsContainer: FC<ProductsContainer> = ({
  products,
  category,
  setSortItem,
}) => {
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

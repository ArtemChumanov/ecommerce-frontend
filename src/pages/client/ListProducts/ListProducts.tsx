import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FilterSideBar from "./FilterSideBar";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import Subheader from "./Subheader";
import styled from "styled-components/macro";
import ProductsContainer from "./ProductsContainer";
import { productsGroupByCategory } from "../../../redux/products/productsSlice";
//import { Ring } from "react-awesome-spinners";
import { string } from "yup";
import {
  filterItems,
  reformatObject,
  sortProducts,
} from "../../../utils/helpers";
import Loader from "../../../components/shared/UI-elements/Loader/Loader";
const ratingS = [
  { status: 1, checked: false },
  { status: 2, checked: false },
  { status: 3, checked: false },
  { status: 4, checked: false },
  { status: 5, checked: false },
];
const ListProducts = () => {
  //@ts-ignore
  const { category } = useParams();
  const dispatch = useAppDispatch();

  const { categories, brands, isLoading } = useAppSelector(
    (state) => state.categories
  );
  const { showGroupedProduct } = useAppSelector((state) => state.products);

  const initState = {
    filterBrands: brands.map((b) => ({ ...b, checked: false })),
    filterCategories: categories.map((c) => ({ ...c, checked: false })),
    filterRating: ratingS,
    rangePrice: {
      from: 0,
      to: 20000,
    },
  };

  const [filter, setFilter] = useState(initState);
  const [itemInContainer, setItemInContainer] = useState<any>([]);
  const [sortItem, setSortItem] = useState<
    "descPrice" | "ascPrice" | "descPopular"
  >("descPopular");
  const [resetFilter, setResetFilter] = useState(false);

  useEffect(() => {
    dispatch(
      productsGroupByCategory({
        category: category,
      })
    );
  }, [category]);

  useEffect(() => {
    setFilter(initState);
  }, [brands]);
  useEffect(() => {
    setItemInContainer([...showGroupedProduct]);
    setResetFilter(false);
  }, [showGroupedProduct, resetFilter]);

  useEffect(() => {
    const sortableList = sortProducts(itemInContainer, sortItem);
    setItemInContainer(sortableList);
  }, [itemInContainer, sortItem]);

  const handleSubmitFilter = () => {
    const filteredItems = filterItems(showGroupedProduct, filter);
    setItemInContainer(filteredItems);
  };

  const handleResetFilter = () => {
    setFilter(initState);
    setResetFilter(true);
  };

  return (
    <div>
      <ContentWrapper>
        <FilterSideBar
          filter={filter}
          setFilter={setFilter}
          handleSubmitFilter={handleSubmitFilter}
          handleResetFilter={handleResetFilter}
        />
        <ProductsContainer
          products={itemInContainer}
          category={category}
          setSortItem={setSortItem}
        />
      </ContentWrapper>
    </div>
  );
};

export default ListProducts;
const ContentWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: flex-start;
`;

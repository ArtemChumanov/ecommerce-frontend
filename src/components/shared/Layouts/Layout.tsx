import React, { Suspense, useEffect, useState } from "react";
import Header from "../../Header/Header";
import Loader from "../UI-elements/Loader/Loader";
import Routes from "../../../router/Routes";
import {
  LayoutWrapper,
  Main,
  ShoppingCartStyle,
  Background,
} from "./Layout.styled";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import Footer from "../../Footer/Footer";
import ShoppingCart from "../../ShopingCart/ShoppingCart";
import {
  fetchBrands,
  fetchGetCategory,
} from "../../../redux/categories/actions";
import { fetchGetProducts } from "../../../redux/products/actions";
//@ts-ignore
import BasketIcon from "assets/icons/basket.svg";
import { setOpenShoppingCart } from "../../../redux/products/productsSlice";

const MainLayout = () => {
  const { openShoppingCart, shoppingCartList, isLoading } = useAppSelector(
    (state) => state.products
  );

  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetCategory());
    dispatch(fetchGetProducts());
    dispatch(fetchBrands());
  }, []);

  return (
    <LayoutWrapper>
      <Header />
      <ShoppingCart isOpen={openShoppingCart} />
      <Main>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </Main>
      <ShoppingCartStyle
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => {
          dispatch(setOpenShoppingCart());
        }}
      >
        <span>{shoppingCartList.reduce((a, b) => a + b.count, 0) || null}</span>
        <img src={BasketIcon} alt="" />
      </ShoppingCartStyle>
      <Background isVisible={isVisible} />
      <Footer />
      {isLoading && <Loader />}
    </LayoutWrapper>
  );
};

export default MainLayout;

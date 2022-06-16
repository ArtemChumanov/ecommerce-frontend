import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import Rating from "../../../components/Rating/Rating";
import Button from "../../../components/shared/UI-elements/Button/Button";
import CarouselImage from "./CarouselImage/CarouselImage";
import Comments from "./Comments/Comments";
import {
  fetchCurrentProduct,
  fetchReviewByProduct,
} from "redux/products/actions";
//import ReactHtmlParser from 'react-html-parser'
import {
  ProductsCardWrapper,
  SectionHead,
  TitleH1,
} from "../../../style/Global";
import ItemCard from "../../../components/ItemCard/ItemCard";
import Tabs from "../../../components/Tabs/Tabs";
import CharecteristicList from "./CharecteristicList/CharecteristicList";
import Description from "./Description/Description";
import { textDescription } from "../../../utils/mockData";
import { useParams } from "react-router-dom";
import { addProductToShoppingCart } from "redux/products/productsSlice";
import moment from "moment";
// @ts-ignore
import FacebookIcon from "assets/icons/facebook-svgrepo-com.svg";
// @ts-ignore
import ViberIcon from "assets/icons/viber-svgrepo-com.svg";
// @ts-ignore
import TelegramIcon from "assets/icons/telegram-svgrepo-com.svg";
// @ts-ignore
import InstagramIcon from "assets/icons/instagram-svgrepo-com.svg";
// @ts-ignore
import TwitterIcon from "assets/icons/twitter-svgrepo-com.svg";
import SliderCarousel from "../../../components/SliderCarousel/SliderCarousel";
import PrewiewInfo from "../Home/PrewiewInfo";

const ProductInfo = () => {
  const [counter, setCounter] = useState(1);
  const { currentProduct, comments, products } = useAppSelector(
    (state) => state.products
  );
  // @ts-ignore
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    id && dispatch(fetchCurrentProduct(id));
    dispatch(fetchReviewByProduct());
  }, [id]);

  const items = [
    { title: "Description" },
    { title: "Charactristics" },
    { title: "Video" },
    { title: "Reviews" },
    { title: "Questions" },
  ];
  const imagesToCarousel = currentProduct?.images?.map((i) => ({
    image: i,
  }));

  const handleCounter = (e) => {
    if (e.target.type === "text") {
      setCounter(+e.target.value);
    }
    switch (e.target.value) {
      case "+":
        setCounter((prev) => ++prev);
        break;
      case "-":
        setCounter((prev) => --prev);
        break;
      default:
        break;
    }
  };

  const addToShoppingCart = () => {
    dispatch(
      addProductToShoppingCart({
        id: currentProduct.id,
        image: currentProduct.image,
        name: currentProduct.name,
        price: currentProduct?.price * counter,
        discount: 300,
        date: moment().format("DD.MM.YYYY"),
        rating: 5,
        category: "Device",
        count: counter,
      })
    );
  };
  return (
    <div>
      <NavigationBar />
      <DetailInfoStyle>
        <ImageWrapper>
          {imagesToCarousel && (
            <CarouselImage
              imagess={imagesToCarousel}
              thumbnails
              autoScroll={false}
            />
          )}
        </ImageWrapper>
        <Charecteristics>
          <TitleH1>{currentProduct?.descriptionName}</TitleH1>
          <Rating countActive={currentProduct?.rating} size={"large"} />
          <Row>
            <div style={{ display: "flex", margin: 0 }}>
              <TitleSpan>Price:</TitleSpan>
              <Price>
                <span>{currentProduct?.price} USD</span>
              </Price>
            </div>
          </Row>
          <Row>
            <div>
              <TitleSpan>Count:</TitleSpan>
              <NumberCounter>
                <button onClick={handleCounter} value={"-"}>
                  -
                </button>
                <input onChange={handleCounter} type="text" value={counter} />
                <button onClick={handleCounter} value={"+"}>
                  +
                </button>
              </NumberCounter>
            </div>
          </Row>
          <ButtonGroupStyle>
            <Button
              onClick={addToShoppingCart}
              title={"Купити"}
              styles={{
                padding: [15, 30, 15, 30],
                margin: [0, 10, 0, 0],
                background: "#ff8b00",
                color: "#fff",
                border: "none",
                width: "auto",
              }}
            />
            <Button
              title={"Додати до списку favorite"}
              styles={{
                padding: [5, 30, 5, 30],
                background: "#fff",
                color: "#999999",
                border: "1px solid #999999",
                width: "auto",
              }}
            />
          </ButtonGroupStyle>
          <Row>
            <TitleSpan>Статус: В НАЯВНОСТІ</TitleSpan>
            <TitleSpan>АРТИКУЛ: 017000329-0</TitleSpan>
          </Row>
          <ShareButtonContainer>
            {[
              FacebookIcon,
              TwitterIcon,
              InstagramIcon,
              TelegramIcon,
              ViberIcon,
            ].map((i) => (
              <Button
                title={"dd"}
                imageButton
                imagePath={i}
                styles={{
                  imageSize: [25, 25],
                  margin: [0, 12, 0, 0],
                  padding: [0, 0, 0, 0],
                  background: "transparent",
                  border: "none",
                }}
              />
            ))}
          </ShareButtonContainer>
        </Charecteristics>
      </DetailInfoStyle>
      <TabsWrapper>
        <Tabs items={items}>
          <Description textDescription={currentProduct?.descriptionInfo} />
          <CharecteristicList />
          <div>
            {" "}
            <video width="400" height="300" controls={true}>
              <source
                src="https://www.youtube.com/watch?v=CYYtLXfquy0"
                type='video/duel.mp4; codecs="theora, vorbis"'
              />
            </video>
          </div>
          <Comments comments={comments} isReviews />
          <Comments comments={comments} isReviews={false} />
        </Tabs>
      </TabsWrapper>
      <PrewiewInfo title={"Similar products"} products={products || []} />
    </div>
  );
};

export default ProductInfo;

const Row = styled.div`
  display: flex;
  margin: 20px 0 20px;
  align-items: center;
  justify-content: space-between;
`;
const TitleSpan = styled.span`
  font-size: 18px;
`;

const NumberCounter = styled.div`
  button {
    background: grey;
    width: 34px;
    height: 34px;
    padding: 0;
    background: #f2f2f2;
    border-radius: 4px;
    //padding: 8px 5px 8px 5px;
    border: 1px solid #ddd;
    display: inline-block;
    vertical-align: middle;
    align-items: center;
    text-align: center;

  }
  input {
    height: 34px;
    width: 60px;
    text-align: center;
    font-size: 26px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
`;

const ButtonGroupStyle = styled.div`
  margin-bottom: 20px;
  display: flex;
  button {
    flex-grow: 1;
  }
  &:first-child {
    margin-right: 20px;
  }
`;
const DetailInfoStyle = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const ImageWrapper = styled.div`
  //flex-grow: 1;
  width: 40%;
  // height: 460px;
  margin-right: 50px;
`;
const Charecteristics = styled.div`
  width: 40%;
  p {
    padding: 42px 0 40px;
    margin: 0;
  }
`;

export const Price = styled.div`
  span {
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    color: #6a983c;
    margin-left: 15px;
  }
`;
export const Discount = styled.span`
  font-weight: 600;
  font-size: 12px;
  text-decoration-line: line-through;
  color: #a9a9a9;
`;

const TabsWrapper = styled.div`
  width: 100%;
`;

const ShareButtonContainer = styled.div`
  display: flex;
`;
const ShareButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  img {
    width: 25px;
    height: 24px;
  }
`;

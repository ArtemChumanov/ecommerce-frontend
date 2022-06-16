import React from "react";
import ModalCustom from "../shared/UI-elements/Modal/Modal";
import styled from "styled-components/macro";
import Rating from "../Rating/Rating";
import Button from "../shared/UI-elements/Button/Button";
// @ts-ignore
import FavoriteIcon from "assets/icons/favorite-icon.svg";
// @ts-ignore
import CompareIcon from "assets/icons/compare-icon.svg";
// @ts-ignore
import RemoveIcon from "assets/icons/close-icon.svg";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  closeShoppingCart,
  removeProductFromShoppingCart,
} from "../../redux/products/productsSlice";

const ShoppingCart = (props) => {
  const { shoppingCartList } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(closeShoppingCart());
  };
  return (
    <ModalCustom title={"ShoppingCart"} onClose={handleCloseModal} {...props}>
      <ShoppingCartWrapper>
        <ProductsWrapper>
          {shoppingCartList.map((i) => (
            <ShoppingCartItem key={i.id}>
              <LeftBlock>
                <img src={i.image} />
                <Options>
                  <button>
                    <img src={FavoriteIcon} /> WishList
                  </button>
                  <button>
                    <img src={CompareIcon} />
                    Порівняння
                  </button>
                  <button
                    onClick={() =>
                      dispatch(removeProductFromShoppingCart(i.id))
                    }
                  >
                    <img src={RemoveIcon} />
                    Видалити
                  </button>
                </Options>
              </LeftBlock>
              <RightBlock>
                <h3>{i.name}</h3>
                <Fields>
                  <div>
                    <span>Date:</span>
                    <span>{i.date}</span>
                  </div>
                  <div>
                    <span>Date:</span>
                    <span>{i.category}</span>
                  </div>
                </Fields>
                <Rating size={"small"} countActive={i.rating} />
                <PriceBlock>
                  <div>
                    <Price>{i.price}$</Price>
                    <br /> <Discount>{i.discount}$</Discount>
                  </div>
                  <span>{i.count} шт</span>
                </PriceBlock>
              </RightBlock>
            </ShoppingCartItem>
          ))}
        </ProductsWrapper>
        <FooterWrapper>
          <TotalPrice>
            <span>Subtotal</span>
            <h3>{shoppingCartList.reduce((a, b) => a + b.price, 0)}$</h3>
          </TotalPrice>
          <ButtonContainer>
            <Button
              onClick={handleCloseModal}
              title={"Продовжити покупки"}
              styles={{
                color: "#606060",
                borderRadius: "5px",
                border: "none",
                padding: [5, 8, 5, 8],
              }}
            />
            <Button
              title={"Оформити доставку"}
              styles={{
                background: "#f7941d",
                color: "#fff",
                borderRadius: "5px",
                border: "none",
                padding: [5, 8, 5, 8],
              }}
            />
          </ButtonContainer>
        </FooterWrapper>
      </ShoppingCartWrapper>
    </ModalCustom>
  );
};

export default ShoppingCart;
const ShoppingCartWrapper = styled.div`
  width: 400px;
  height: calc(100vh - 100px);
  padding: 0 17px;
  display: flex;
  flex-direction: column;
`;
const ProductsWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
const FooterWrapper = styled.div`
  padding-bottom: 12px;
`;

const ShoppingCartItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    border-bottom: 1px solid #f9f9f9;
    bottom: 0;
    width: 100%;
  }
`;
const LeftBlock = styled.div`
  width: 100px;
  margin-right: 15px;
  img {
    width: inherit;
    height: 67px;
  }
`;
const Options = styled.div`
  margin-top: 12px;
  button {
    background: transparent;
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    margin-bottom: 5px;
    font-size: 12px;
    cursor: pointer;
    img {
      width: 10px;
      height: 9px;
      margin-right: 10px;
    }
  }
`;

const RightBlock = styled.div`
  flex-grow: 1;
`;

const Fields = styled.div`
  font-size: 12px;
  margin-bottom: 13px;
`;
const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const Price = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #6a983c;
`;
const Discount = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #a9a9a9;
`;

const TotalPrice = styled.div`
  padding-bottom: 18px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    border-bottom: 1px solid #f9f9f9;
    bottom: 0;
    width: 100%;
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  }
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

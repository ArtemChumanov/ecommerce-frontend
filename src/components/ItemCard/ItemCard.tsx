import React, { FC } from "react";
import styled from "styled-components/macro";
import { Button as ButtonCommon } from "style/common/Button";
import Button from "../shared/UI-elements/Button/Button";
import { useHistory } from "react-router-dom";
import { RoutesConstants } from "../../router/RoutesConstants";
import { useAppDispatch } from "../../redux/store";
import { chooseProduct } from "../../redux/products/productsSlice";
import { appTheme } from "../../style/theme";
interface ItemCardProps {
  isProduct: boolean;
  item: any;
  view: "grid" | "line";
}

const ItemCard: FC<ItemCardProps> = ({ isProduct, item, view }) => {
  const { push } = useHistory();
  const dispatch = useAppDispatch();
  const handleClickItem = () => {
    push({
      pathname: `/product/${item.id}`,
    });
    dispatch(chooseProduct(item));
  };
  return (
    <CardStyle isProduct={isProduct}>
      <Image onClick={handleClickItem}>
        <img src={item.image} alt={"d"} />
        <span>-12%</span>
      </Image>

      <TitleName onClick={handleClickItem}>{item.name}</TitleName>
      <Description>{item.descriptionName}</Description>
      <PriceBlock>
        <div>
          <span>{item.price} USD</span>
          <br />
          <Zn>45.6 USD</Zn>
        </div>
        <Button
          title={"Купити"}
          styles={{
            background: "#f7941d",
            padding: [4, 10, 4, 10],
            borderRadius: "12px",
            border: "none",
            color: "#fff",
          }}
        />
      </PriceBlock>
    </CardStyle>
  );
};
export default ItemCard;

const CardStyle = styled.div<{ isProduct: boolean }>`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  border-radius: 12px;
  border: 1px solid black;
  max-width: ${({ isProduct }) => (isProduct ? "269px" : "420px")};
  padding: ${({ isProduct }) =>
    isProduct ? "16px 16px 20px" : "48px 33px 31px"};
  background: ${({ isProduct }) => (isProduct ? "#FFFFFF" : "#f4f8ec")};
  border: ${({ isProduct }) => (isProduct ? "1px solid #D1D1D1" : "none")};
  box-sizing: border-box;
  margin-right: 20px;
  transition: 0.3s;

  &:hover {
    scale: 1.1;
    transition: 0.3s;
  }
`;

const Title = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  margin-bottom: auto;
  //margin: 0;
`;
const Subtitle = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.primaryGreen};
`;

const ButtonStyle = styled(ButtonCommon)`
  background: transparent;
  border: 1px solid green;
  border-radius: 12px;
  width: 135px;
  padding: 8px 5px;
`;

/***********/
const Image = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 180px;
    border-radius: 12px;
    cursor: pointer;
  }

  span {
    display: inline-block;
    padding: 2px 5px;
    position: absolute;
    top: 12px;
    left: 20px;
    background: #f4f8ec;
    border-radius: 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #6a983c;
  }
`;

const TitleName = styled.h3`
  margin: 16px 0 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
  cursor: pointer;

  &:hover {
    color: red;
    text-decoration: underline;
  }
`;
const Description = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #575757;
`;

const Zn = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #a9a9a9;
`;
const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }
`;

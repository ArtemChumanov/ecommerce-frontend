import React, { FC } from "react";
import styled from "styled-components/macro";
import { Selector } from "../../../components/Header/SearchBar/SearchBar";
// @ts-ignore
import GridIcon from "assets/icons/grid-icon.svg";
// @ts-ignore
import LineIcon from "assets/icons/line-icon.svg";
import Button from "../../../components/shared/UI-elements/Button/Button";

interface SubheaderProps {
  category: string;
  setSortItem: any;
}
const styles = { background: "transparent", border: "none" };

const Subheader: FC<SubheaderProps> = ({ category, setSortItem }) => {
  return (
    <SubheaderStyle>
      <Navigation>{`HomePage / ${category}`}</Navigation>
      <Title>{category}</Title>
      <SortableWrapper>
        <PageCounterStyle>
          <span>Сторінка 1 з 1</span>
        </PageCounterStyle>
        <Right>
          <Selector setSortItem={setSortItem} />
          <Button
            imageButton={true}
            styles={styles}
            title={"p"}
            imagePath={GridIcon}
          />
          <Button
            imageButton={true}
            styles={styles}
            title={"p"}
            imagePath={LineIcon}
          />
        </Right>
      </SortableWrapper>
    </SubheaderStyle>
  );
};

export default Subheader;
const SubheaderStyle = styled.div`
  //position: relative;
  //height: 52px;
`;
const Navigation = styled.div`
  margin: 15px 0 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #151515;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
`;
const SortableWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 15px 0 20px;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const PageCounterStyle = styled.div`
  span {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

import React, { FC } from "react";
import { Selector } from "../../../../components/Header/SearchBar/SearchBar";
// @ts-ignore
import GridIcon from "assets/icons/grid-icon.svg";
// @ts-ignore
import LineIcon from "assets/icons/line-icon.svg";
import Button from "../../../../components/shared/UI-elements/Button/Button";
import {
  SubheaderStyle,
  Title,
  Navigation,
  SortableWrapper,
  PageCounterStyle,
  Right,
} from "./Subheader.styled";

interface SubheaderProps {
  category: string;
  setSortItem: (arg) => void;
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

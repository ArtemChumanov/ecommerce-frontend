import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useAppSelector } from "../../../redux/store";
import CheckBox from "../../../components/shared/UI-elements/Checkbox/CheckBox";
import { Slider } from "antd";
import Input from "../../../components/shared/UI-elements/Input/Input";
// @ts-ignore
import FilterIcon from "assets/icons/filter.svg";
// @ts-ignore
import Star from "assets/icons/star.svg";
import Rating from "../../../components/Rating/Rating";
import update from "immutability-helper";
import Button from "../../../components/shared/UI-elements/Button/Button";

const FilterSideBar = ({
  filter,
  setFilter,
  handleSubmitFilter,
  handleResetFilter,
}) => {
  const handleSliderChange = (value) => {
    setFilter((props) => ({
      ...props,
      rangePrice: { from: value[0], to: value[1] },
    }));
  };
  return (
    <FilterSideBarStyle>
      <HeaderSidebar>
        <img src={FilterIcon} alt={"catalog"} />
        Категорії
      </HeaderSidebar>
      <FilterContainer>
        <h3>Бренди</h3>
        <CategoryBlockStyle>
          {filter.filterBrands.map((brand, i) => (
            <CheckBoxListItem key={brand.name}>
              <CheckBox
                checked={brand.checked}
                value={i}
                setChecked={(e) => {
                  setFilter((props) => ({
                    ...props,
                    filterBrands: update(filter.filterBrands, {
                      [i as number]: {
                        $merge: {
                          ...filter.filterBrands[i],
                          checked: !filter.filterBrands[i].checked,
                        },
                      },
                    }),
                  }));
                }}
              />
              <span>{brand.name}</span>
            </CheckBoxListItem>
          ))}
        </CategoryBlockStyle>

        <h3>Рейтинг</h3>
        <CategoryBlockStyle>
          {filter.filterRating.map((r, index) => (
            <CheckBoxListItem key={index}>
              <CheckBox
                value={index}
                checked={r.checked}
                setChecked={() =>
                  setFilter((props) => ({
                    ...props,
                    filterRating: update(filter.filterRating, {
                      [index as number]: {
                        $merge: {
                          ...filter.filterRating[index],
                          checked: !filter.filterRating[index].checked,
                        },
                      },
                    }),
                  }))
                }
              />
              <Rating countActive={index} size={"small"} />
            </CheckBoxListItem>
          ))}
        </CategoryBlockStyle>

        <h3>Ціна</h3>
        <CategoryBlockStyle>
          <Slider
            range
            value={[filter.rangePrice.from, filter.rangePrice.to]}
            max={filter.rangePrice.to}
            onChange={handleSliderChange}
          />
          <InputRangeStyle>
            <div>
              <span>Min</span>
              <Input
                name={"from"}
                type={"text"}
                value={filter.rangePrice.from}
              />
            </div>
            <div>
              <span>Max</span>
              <Input name={"to"} type={"text"} value={filter.rangePrice.to} />
            </div>
          </InputRangeStyle>
        </CategoryBlockStyle>

        <ButtonGroupStyle>
          <Button
            onClick={handleSubmitFilter}
            title={"Save"}
            styles={{
              background: "#f7941d",
              color: "#fff",
              borderRadius: "5px",
              border: "none",
              padding: [0, 8, 0, 8],
              margin: [0, 10, 0, 0],
            }}
          />
          <Button
            onClick={handleResetFilter}
            title={"Reset"}
            styles={{
              color: "#606060",
              borderRadius: "5px",
              border: "none",
              padding: [0, 8, 0, 8],
            }}
          />
        </ButtonGroupStyle>
      </FilterContainer>
    </FilterSideBarStyle>
  );
};

export default FilterSideBar;

const HeaderSidebar = styled.div`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  padding: 4px 0 4px 8px;
  display: flex;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

const CheckBoxListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  span {
    padding-left: 10px;
  }
`;

const FilterSideBarStyle = styled.div`
  width: 268px;
  margin-right: 34px;
  background: ${({ theme }) => theme.backgrounds.greyBackgrounds};
  h3 {
    margin: 0 0 18px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }
`;
const FilterContainer = styled.div`
  padding: 8px 10px;
`;
const InputRangeStyle = styled.div`
  display: flex;
  margin-top: 23px;
`;
const ButtonGroupStyle = styled.div`
  display: flex;
  height: 25px;
`;

const CategoryBlockStyle = styled.div`
  margin-bottom: 50px;

  .ant-slider-handle {
    margin-top: -5px;
    border: solid 2px #f7941d !important;
    cursor: pointer;
    box-shadow: 0 0 0 !important;
  }

  .ant-slider-track {
    background-color: #f7941d !important;
  }
`;

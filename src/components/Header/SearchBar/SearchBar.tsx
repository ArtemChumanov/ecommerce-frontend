import React, { useState } from "react";
import styled from "styled-components/macro";
// @ts-ignore
import DownArrow from "assets/icons/down-arrow.svg";

const options = [
  {
    id: 1,
    name: "По рейтингу",
    type: "descPopular",
  },
  {
    id: 2,
    name: "Від дорогих до дешевих",
    type: "descPrice",
  },
  {
    id: 3,
    name: "Від  дешевих до дорогих",
    type: "ascPrice",
  },
];
export const Selector = ({ setSortItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleHandle = () => setIsOpen(!isOpen);

  const onOptionClickHandle = (value) => () => {
    setSelectedOption(value);
    setSortItem(value.type);
    setIsOpen(false);
  };
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggleHandle}>
        <span>{selectedOption.name}</span>
        <img src={DownArrow} alt="Down" />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClickHandle(option)} key={option.id}>
                {option.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

const SearchBar = () => {
  return (
    <SearchContainer>
      <input type={"text"} placeholder="Знайти товар..." />
    </SearchContainer>
  );
};

export default SearchBar;

export const SearchContainer = styled.div`
  background: white;
  display: flex;
  width: 500px;
  position: relative;
  height: 37px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 20px;
  align-items: center;
  input {
    width: 90%;
    border: none;
    padding-left: 22px;
    margin-left: 10px;
    &:focus {
      outline: none;
    }
  }
`;
const DropDownContainer = styled("div")`
  position: relative;
`;

const DropDownHeader = styled("div")`
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  padding: 4px 16px;
  cursor: pointer;
  border: ${({ theme }) => theme.borders.primary};
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;

  img {
    margin-left: 15px;
    width: 10px;
    height: 10px;

    &:after {
      content: "";
      border-right: 1px solid black;
      margin-left: 20px;
    }
  }
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 10;
`;

const DropDownList = styled("ul")`
  overflow: auto;
  margin-top: 5px;
  padding: 0;
  background: #ffffff;
  border: ${({ theme }) => theme.borders.primary};
  box-sizing: border-box;
  font-weight: 400;
  font-size: 15px;
  width: 210px;
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 3px 16px 3px 16px;

  &:hover {
    background: ghostwhite;
  }
`;

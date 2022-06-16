import React from "react";
import styled from "styled-components/macro";
// @ts-ignore
import SearchIcon from "assets/icons/search-icon.svg";

const SearchInput = () => {
  return (
    <InputStyleWrapper>
      <img src={SearchIcon} alt={"ww"} />
      <input type={"text"} value="" />
    </InputStyleWrapper>
  );
};

export default SearchInput;

const InputStyleWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 27px;
    transform: translate(-50%, -50%);
  }
  input {
    width: 100%;
    height: 38px;
    border: 0;
    border-radius: 8px;
    padding-left: 15px;
    box-sizing: border-box;
  }
`;

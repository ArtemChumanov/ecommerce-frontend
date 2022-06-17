import React, { FC } from "react";
import styled from "styled-components/macro";
//import { LoaderStyled } from "./Loader.styled";

const Loader: FC = () => {
  return (
    <LoaderStyled>
      <Spinner></Spinner>
    </LoaderStyled>
  );
};

export default Loader;
const LoaderStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  z-index: 40;
  top: 0;
`;
const Spinner = styled.div`
  //display: inline-block;
  position: relative;
  //width: 80px;
  //height: 80px;

  box-sizing: border-box;
  display: block;
  //position: absolute;
  width: 140px;
  height: 140px;
  //margin: 8px;
  border: 16px solid #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #f7941d transparent transparent transparent;
  top: 50%;
  left: 50%;
  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

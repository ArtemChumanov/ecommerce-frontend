import React, { FC } from "react";
import styled from "styled-components/macro";
interface TitleProps {
  img?: string;
  name: string;
}
const Title: FC<TitleProps> = ({ img, name }) => {
  return (
    <TitleWrapper>
      {img && <img src="" alt="" />}
      <h2>{name}</h2>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
  display: flex;

  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
  h2 {
    font: 900 36px Roboto, sans-serif;
    color: #202020;
    text-transform: uppercase;
    text-align: left;
    margin: 0 0 50px 0;
    position: relative;

    &:after {
      content: "";
      width: 100px;
      border-bottom: 3px solid #f7941d;
      position: absolute;
      bottom: -25px;
      left: 0;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
  }
`;

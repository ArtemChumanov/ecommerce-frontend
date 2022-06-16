import React, { FC } from "react";
import styled from "styled-components/macro";

import ReactHtmlParser from "react-html-parser";

interface DescriptionProps {
  textDescription: string;
}

const Description: FC<DescriptionProps> = ({ textDescription }) => (
  <DescriptionStyled>{ReactHtmlParser(textDescription)}</DescriptionStyled>
);

export default Description;

const DescriptionStyled = styled.div``;

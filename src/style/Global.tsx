import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Kanit', sans-serif;
}
body {
  margin: 0;
}
h1,h2,h3,h4,h5,h6{
  margin:0
}
`;
export const TitleH1 = styled.h1`
  margin: 0;
  font-size: 32px;
`;
export const SectionHead = styled.div`
  margin: 64px 0 10px;
  display: flex;
  justify-content: space-between;
`;
export const ProductsCardWrapper = styled.div`
  display: flex;
  //justify-content: space-between;
`;
export default GlobalStyle;

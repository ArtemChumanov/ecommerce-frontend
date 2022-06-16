import styled from "styled-components/macro";

export const LayoutWrapper = styled.div`
  //display: flex;
  //width: 80%;
  //margin: 0 auto;
`;
export const Background = styled.div<{ isVisible: boolean }>`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  opacity: 0.8;
  z-index: 20;
`;
export const Main = styled.div`
  margin: 93px auto 0;
  width: 80%;
  //padding: 0 45px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const ShoppingCartStyle = styled.div`
  position: fixed;
  background: #b2b2b2;
  border-radius: 50%;
  bottom: 50px;
  right: 10px;
  padding: 15px 20px 15px 15px;
  z-index: 30;
  cursor: pointer;
  span {
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: 800;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

import styled from "styled-components";
import { ButtonStyle as Button } from "../shared/UI-elements/Button/Button";

export const HeaderStyled = styled.header`
  position: relative;
  background: rgba(20, 18, 20, 0.23);
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: white;
  margin: 0;
`;

export const ButtonExit = styled(Button)`
  background: inherit;
  border: 1px solid white;
  color: white;
`;

export const FrameModal = styled.div`
  font-size: 18px;
  position: relative;
  width: 938px;
  height: 645px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  padding: 0 55px 0 55px;
`;
export const CloseModal = styled.img`
  position: absolute;
  z-index: 1;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;

export const BodyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
  margin-top: 25px;
`;

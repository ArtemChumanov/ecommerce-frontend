import styled from "styled-components/macro";

export const FrameModal = styled.div`
  font-size: 18px;
  position: relative;
  //width: 938px;
  height: 645px;
  background-color: #ffffff;
  border-radius: 4px;
  //box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  padding: 0 55px 0 55px;
`;

export const Photo = styled.div`
  position: relative;
  img {
    width: 60px;
    height: 60px;
    position: absolute;
  }
  button {
    position: absolute;
  }
`;

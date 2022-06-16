import styled from "styled-components/macro";

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: hidden;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  background: white;
`;
export const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 16px 15px;
  img {
    cursor: pointer;
  }
`;

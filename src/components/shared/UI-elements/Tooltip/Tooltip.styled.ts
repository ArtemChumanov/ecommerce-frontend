import styled from "styled-components/macro";

export const IconWrapper = styled.div`
  display: flex;
  width: max-content;
  position: relative;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const TooltipContent = styled.span<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  top: -100%;
  font-weight: 300;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: white;
  padding: 4px 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  z-index: 1;

  &::after {
    content: " ";
    position: absolute;
    left: 50%;
    top: 100%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
  }
`;

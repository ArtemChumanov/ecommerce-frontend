import styled from "styled-components/macro";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ isChecked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ isChecked, theme }) =>
    isChecked ? `${theme.colors.primaryOrange}` : `${theme.colors.white}`};
  border: 1.5px solid #d1d1d1;
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px black;
  }

  ${Icon} {
    visibility: ${({ isChecked }) => (isChecked ? "visible" : "hidden")};
    margin-bottom: 2px;
  }
`;

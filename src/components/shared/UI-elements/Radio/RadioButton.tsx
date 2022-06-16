import React, { FC, useRef } from "react";
import styled, { keyframes } from "styled-components/macro";
// @ts-ignore
import { ReactComponent as RadioDot } from "assets/icons/radioDot.svg";

interface IRadioButtonProps {
  checked: boolean;
  setChecked: () => void;
}
const RadioButton: FC<IRadioButtonProps> = ({ checked, setChecked }) => {
  return (
    <div>
      <Label disable={checked}>
        <Input
          type="radio"
          role="radio"
          name={"ddd"}
          value={"v"}
          disabled={checked}
          onChange={setChecked}
          checked={checked}
        />
        <Indicator />
      </Label>
    </div>
  );
};
export default RadioButton;

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const popIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5) ;
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) ;
}
`;

const Label = styled.label<{ disable: boolean }>`
  position: relative;
  display: inline-block;
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
  //margin: 0.6em 1em;
  font-size: 14px;
`;

const Indicator = styled.div`
  border: 1px solid;
  border-radius: 1em;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  //left: -10px;

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    border: solid #263238;
    border-radius: 1em;
    background-color: #263238;
    width: 0.5em;
    height: 0.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${Input}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;
const Title = styled.span`
  padding-left: 10px;
`;

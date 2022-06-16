import React, { FC } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "./Checkbox.styled";

interface ICheckBoxProps {
  checked: boolean;
  setChecked: (arg: unknown) => void;
  value: number;
}
const CheckBox: FC<ICheckBoxProps> = ({ checked, setChecked, value }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} value={value} readOnly />
      <StyledCheckbox isChecked={checked} onClick={setChecked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default CheckBox;

import React, { FC } from "react";
// import { ButtonStyle } from "./Button.styled";
import styled from "styled-components/macro";
import { Button as ButtonCommon } from "../../../../style/common/Button";

interface ButtonStyle {
  padding?: number[];
  margin?: number[];
  fontSize?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  color?: string;
  imageSize?: number[];
}
interface IButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "Small" | "Large";
  imagePath?: any;
  imageButton?: boolean;
  styles?: {
    padding?: number[];
    margin?: number[];
    fontSize?: string;
    border?: string;
    borderRadius?: string;
    background?: string;
    color?: string;
    imageSize?: number[] | undefined;
    width?: string;
  };
}

const Button: FC<IButtonProps> = ({
  title,
  onClick,
  disabled,
  imagePath,
  imageButton = false,
  ...props
}) => {
  return (
    <ButtonStyle onClick={onClick} {...props}>
      {imagePath && <img src={imagePath} />}
      {!imageButton && title}
    </ButtonStyle>
  );
};
type IStyledButton = Omit<IButtonProps, "title" | "onClick" | "disabled">;

export const ButtonStyle = styled.button<IStyledButton>`
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  border-radius: ${({ styles }) => styles?.borderRadius};
  width: ${({ styles }) => styles?.width};
  background: ${({ styles }) => styles?.background};
  border: ${({ styles }) => styles?.border};
  padding: ${({ styles }) =>
    styles?.padding?.length &&
    `${styles?.padding[0]}px ${styles?.padding[1]}px ${styles?.padding[2]}px ${styles?.padding[3]}px`};
  color: ${({ styles }) => styles?.color};
  margin: ${({ styles }) =>
    styles?.margin?.length &&
    `${styles?.margin[0]}px ${styles?.margin[1]}px ${styles?.margin[2]}px ${styles?.margin[3]}px`};
  color: ${({ styles }) => styles?.color};
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    scale: 1.1;
  }
  img {
    width: ${({ styles }) =>
      styles?.imageSize?.length && `${styles.imageSize[0]}px`};
    height: ${({ styles }) =>
      styles?.imageSize?.length && `${styles.imageSize[1]}px`};
  }
`;

export default Button;

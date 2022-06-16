import React, { FC } from "react";
import styled from "styled-components/macro";

interface FlexProps {
  children: any;
  justifyContent?: string;
  flexDirection?: string;
  alignItems?: string;
}
type FlexStyle = Omit<FlexProps, "children">;
const Flex: FC<FlexProps> = ({ children, ...props }) => {
  return <FlexWrapper {...props}>{children}</FlexWrapper>;
};

export default Flex;

const FlexWrapper = styled.div<FlexStyle>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

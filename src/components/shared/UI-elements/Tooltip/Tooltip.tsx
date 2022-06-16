import React, { useRef, useState } from "react";
import { IconWrapper, TooltipContent } from "./Tooltip.styled";
import { useOnClickOutside } from "../Modal/hooks/useOutSideAlert";
import styled from "styled-components/macro";

const Tooltip = ({ children, content }) => {
  const iconRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  useOnClickOutside(iconRef, () => setOpen(false));

  return (
    <IconWrapper onClick={toggleOpen} ref={iconRef}>
      <TooltipContent isOpen={isOpen}>{content}</TooltipContent>
      <Title
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </Title>
    </IconWrapper>
  );
};

export default Tooltip;

const Title = styled.div`
  padding: 3px 0;
`;

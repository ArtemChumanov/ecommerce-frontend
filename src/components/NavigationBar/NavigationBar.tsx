import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components/macro";

const NavigationBar = () => {
  const location = useLocation();
  return (
    <NavigationBarStyle>
      <span>Homepage</span>/<span>ListOfProduct</span>/
      <span>Carrots from Tomissy</span>
    </NavigationBarStyle>
  );
};

export default NavigationBar;
const NavigationBarStyle = styled.div`
  display: flex;
  margin: 20px 0;
`;

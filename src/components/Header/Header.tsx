import React, { FC, memo, useRef, useState } from "react";
import { HeaderStyled, Title, ButtonExit } from "./Header.styled";
// @ts-ignore
import MenuIcon from "assets/icons/menu-icon.svg";
import { useAppDispatch, useAppSelector } from "../../redux/store";
// import { logout } from "../../redux/user/userSlice";
import { RoutesConstants } from "../../router/RoutesConstants";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components/macro";
// @ts-ignore
import Sale from "assets/icons/sale-bag.svg";
// @ts-ignore
import Profile from "assets/icons/profile.svg";
import SearchBar from "./SearchBar/SearchBar";
import CategoryBar from "./CategoryBar/CategoryBar";

const Header: FC = () => {
  const { categories } = useAppSelector((states) => states.categories);

  return (
    <HeaderClientStyled>
      <FixedContainer>
        <HeaderInfo>
          <ContactInfo>
            <Link to={RoutesConstants.Home}>
              <Logo
                src={
                  "https://cdn-global-hk.hobbyking.com/skin/frontend/redesign/default/images/log_hobbyking-desktop.svg"
                }
                alt={"logo"}
              />
            </Link>
            <SearchBar />
          </ContactInfo>
        </HeaderInfo>
        <CategoryBar categories={categories} />
      </FixedContainer>
    </HeaderClientStyled>
  );
};

export default Header;

export const HeaderClientStyled = styled.div``;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0 8px 16px;
`;

const FixedContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 20;
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.backgrounds.darkBackgroundsSidebar};
`;

const Logo = styled.img`
  margin-right: 40px;
  width: 250px;
  height: 35px;
`;

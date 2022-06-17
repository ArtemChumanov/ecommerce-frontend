import React from "react";
import styled from "styled-components/macro";
import List from "../List/List";
import { useAppSelector } from "../../redux/store";
// @ts-ignore
import FacebookIcon from "assets/icons/facebook-svgrepo-com.svg";
// @ts-ignore
import ViberIcon from "assets/icons/viber-svgrepo-com.svg";
// @ts-ignore
import TelegramIcon from "assets/icons/telegram-svgrepo-com.svg";
// @ts-ignore
import InstagramIcon from "assets/icons/instagram-svgrepo-com.svg";
// @ts-ignore
import TwitterIcon from "assets/icons/twitter-svgrepo-com.svg";
import Button from "../shared/UI-elements/Button/Button";
import SliderCarousel from "../SliderCarousel/SliderCarousel";

const Footer = () => {
  const { categories } = useAppSelector((states) => states.categories);
  return (
    <FooterStyle>
      <FooterNavWrapper>
        <LiveContainer>
          <HelpButton></HelpButton>
          <LiveChatButton></LiveChatButton>
          <span>STAY CONNECTED.</span>
          <h4>Слідкуй за нами</h4>
          <IconsWrapper>
            {[
              FacebookIcon,
              TwitterIcon,
              InstagramIcon,
              TelegramIcon,
              ViberIcon,
            ].map((i) => (
              <Button
                key={i}
                title={"dd"}
                imageButton
                imagePath={i}
                styles={{
                  imageSize: [35, 35],
                  margin: [0, 8, 0, 0],
                  padding: [0, 0, 0, 0],
                  background: "transparent",
                  border: "none",
                }}
              />
            ))}
          </IconsWrapper>
        </LiveContainer>
        <ListWrapper>
          <List item={categories} title={"Категорії"} onClick={null} />
          <List item={categories} title={"Категорії"} onClick={null} />
          <List item={categories} title={"Категорії"} onClick={null} />
        </ListWrapper>
      </FooterNavWrapper>
      <Copy>
        <span>© 2022 HOBBYKING. ALL RIGHTS RESERVED.</span>
      </Copy>
    </FooterStyle>
  );
};

export default Footer;

export const FooterStyle = styled.div`
  margin: 64px 0 0;
  background: #202020;
  padding: 50px 7% 40px;
`;
const FooterNavWrapper = styled.div`
  display: flex;
`;
const LiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  span {
    font: 500 16px "Roboto", sans-serif;
    color: #f7941d;
    text-transform: uppercase;
  }
  h4 {
    font: 700 30px "Roboto", sans-serif;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
`;
const HelpButton = styled.div`
  max-width: 276px;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  height: 60px;
  position: relative;
  background: url("https://cdn-global-hk.hobbyking.com/skin/frontend/redesign/default/images/btn_need-help.png")
    no-repeat 0 0;
  background-size: contain;
`;
const LiveChatButton = styled.div`
  max-width: 276px;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  height: 60px;
  position: relative;
  background: url("https://chatserver15.comm100.io/DBResource/DBImage.ashx?campaignId=b85bd899-bc3e-4823-b28b-5b70c3f1fb9b&imgType=2&ver=01&siteId=40001407")
    no-repeat 0 0;
  background-size: contain;
`;
const IconsWrapper = styled.div`
  display: flex;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

export const Copy = styled.div`
  margin: 45px 0 0;
  text-align: center;
  display: block;
  color: #ffffff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
`;

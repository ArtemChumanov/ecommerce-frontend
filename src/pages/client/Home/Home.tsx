import React from "react";
import PreviewInfo from "./PrewiewInfo";
import { useAppSelector } from "../../../redux/store";
import Title from "../../../components/shared/UI-elements/Title/Title";
import CarouselImage from "../ProductInfo/CarouselImage/CarouselImage";
import { CarouselWrapper, PageStyle, Introduction } from "./Home.styled";

const data = [
  {
    image:
      "https://cdn-global-hk.hobbyking.com/media/wysiwyg/HomePage/homepageSlider/may-2022/slider_corsair_desk.jpg",
  },
  {
    image:
      "https://cdn-global-hk.hobbyking.com/media/wysiwyg/HomePage/homepageSlider/april-2022/banner_night_tundra_desk.jpg",
  },
  {
    image:
      "https://cdn-global-hk.hobbyking.com/media/wysiwyg/HomePage/homepageSlider/January-2021/bnr_turnigy-rc-lipo-batteries-desktop-v2-min.jpg",
  },
];

const Home = () => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <>
      <CarouselWrapper>
        <CarouselImage imagess={data} autoScroll thumbnails={false} />
      </CarouselWrapper>
      <PageStyle>
        <PreviewInfo
          title={"Найкращі продані товари"}
          products={products || []}
        />
        <PreviewInfo title={"Акційні товари"} products={products || []} />
        <Introduction>
          <Title name={"WHAT IS HOBBYKING?"} />
          <p>
            <img
              src={
                "https://cdn-global-hk.hobbyking.com/media/wysiwyg/Marketing_CMS/category_cms/pic_what-is-hobbyking-min.jpg"
              }
              alt={""}
            />
            Founded in 2005, HobbyKing is one of the leading online global Radio
            Control (RC) hobby shops. We're also designing, manufacturing, and
            distributing a wide selection of proprietary RC products including
            RC planes, cars, and boats; right through to batteries, parts, and
            accessories. HobbyKing's mission is to make the RC hobby more
            accessible for everyone to enjoy. Founded in 2005, HobbyKing is one
            of the leading online global Radio Control (RC) hobby shops. We're
            also designing, manufacturing, and distributing a wide selection of
            proprietary RC products including RC planes, cars, and boats; right
            through to batteries, parts, and accessories. HobbyKing's mission is
            to make the RC hobby more accessible for everyone to enjoy.
          </p>
        </Introduction>
      </PageStyle>
    </>
  );
};

export default Home;

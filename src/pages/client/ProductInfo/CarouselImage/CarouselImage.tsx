import React from "react";
import { Carousel } from "react-carousel-minimal";

const CarouselImage = ({ imagess, autoScroll, thumbnails }) => (
  <Carousel
    data={imagess}
    automatic={autoScroll}
    time={5000}
    width="100%"
    height="280px"
    //radius="10px"
    captionPosition="bottom"
    pauseIconColor="white"
    pauseIconSize="20px"
    slideBackgroundColor="darkgrey"
    slideImageFit="cover"
    thumbnails={thumbnails}
    thumbnailWidth="80px"
    style={{
      // height: "auto",
      // width: "auto",
      // maxWidth: "400px",
      // maxHeight: "280px",
      textAlign: "center",
    }}
  />
);

export default CarouselImage;

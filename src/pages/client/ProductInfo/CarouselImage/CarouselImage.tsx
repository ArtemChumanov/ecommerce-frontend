import React, { FC } from "react";
import { Carousel } from "react-carousel-minimal";

interface CarouselImageProps {
  imagess: { image: string }[];
  autoScroll: boolean;
  thumbnails: boolean;
}

const CarouselImage: FC<CarouselImageProps> = ({
  imagess,
  autoScroll,
  thumbnails,
}) => (
  <Carousel
    data={imagess}
    automatic={autoScroll}
    time={5000}
    width="100%"
    height="280px"
    captionPosition="bottom"
    pauseIconColor="white"
    pauseIconSize="20px"
    slideBackgroundColor="darkgrey"
    slideImageFit="cover"
    thumbnails={thumbnails}
    thumbnailWidth="80px"
    style={{
      textAlign: "center",
    }}
  />
);

export default CarouselImage;

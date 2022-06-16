import React from "react";
import styled from "styled-components/macro";
// @ts-ignore
import StarIcon from "assets/icons/star.svg";
// @ts-ignore
import StarHoverIcon from "assets/icons/star-hover.svg";

interface RatingProps {
  countActive: number;
  size: "small" | "large";
}
const Rating = ({ countActive, size }) => {
  return (
    <RatingStyle>
      {[1, 4, 9, 3, 4].map((_, i) => (
        <Star
          size={size}
          key={i}
          src={i <= countActive ? StarHoverIcon : StarIcon}
          alt={"Star"}
        />
      ))}
    </RatingStyle>
  );
};

export default Rating;

type StarType = Pick<RatingProps, "size">;

const RatingStyle = styled.div`
  display: flex;
`;
const Star = styled.img<StarType>`
  width:${({ size }) => (size === "small" ? "13px" : "18px")} ;
  height: ${({ size }) => (size === "small" ? "12px" : "18px")}
  margin-right: 4px;
`;

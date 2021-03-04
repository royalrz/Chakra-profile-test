import React from "react";
import styled, { css } from "styled-components";
import { Box } from "@chakra-ui/react";

interface StyledStarProps {
  filled: boolean;
}

const StyledStar = styled.div<StyledStarProps>`
  margin: 5px 0;
  position: relative;
  display: block;
  width: 0px;
  height: 0px;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  transform: rotate(35deg);
  ${(props) =>
    props.filled
      ? css`
          color: #4a4a4a;
          border-bottom: 7px solid #4a4a4a;
        `
      : css`
          color: #ccc6c6;
          border-bottom: 7px solid #ccc6c6;
        `}
  &:after {
    position: absolute;
    display: block;
    left: -10px;
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    transform: rotate(-70deg);
    content: "";
    ${(props) =>
      props.filled
        ? css`
            color: #4a4a4a;
            border-bottom: 7px solid #4a4a4a;
          `
        : css`
            color: #ccc6c6;
            border-bottom: 7px solid #ccc6c6;
          `}
  }
  &:before {
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -4px;
    left: -6px;
    display: block;
    content: "";
    transform: rotate(-35deg);
    ${(props) =>
      props.filled
        ? css`
            border-bottom: 8px solid #4a4a4a;
          `
        : css`
            border-bottom: 8px solid #ccc6c6;
          `}
  }
`;

type Props = {
  fillStatus: boolean;
};

const Star = ({ fillStatus }: Props) => {
  return (
    <Box m="2px">
      <StyledStar filled={fillStatus} />
    </Box>
  );
};

export default Star;

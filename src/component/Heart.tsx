import React from "react";
import { Box } from "@chakra-ui/react";
import styled, { css } from "styled-components";

interface StyledHeartProps {
  clickStatus: boolean;
}

const StyledHeart = styled.div<StyledHeartProps>`
  position: relative;
  width: 40px;
  height: 36px;
  margin-top: 4px;
  cursor: pointer;
  &:hover {
    &:after,
    &:before {
      background: red;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 21px;
    height: 32px;
    border-radius: 20px 20px 0 0;
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    ${(props) =>
      props.clickStatus
        ? css`
            background: red;
          `
        : css`
            background: rgb(172, 172, 172);
          `}
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 21px;
    height: 32px;
    border-radius: 20px 20px 0 0;
    left: 20px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    ${(props) =>
      props.clickStatus
        ? css`
            background: red;
          `
        : css`
            background: rgb(172, 172, 172);
          `}
  }
`;

type Props = {
  clicked: boolean;
  handleClick: (val: boolean) => void;
};

const Heart = ({ clicked, handleClick }: Props) => {
  return (
    <Box
      onClick={() => {
        handleClick(!clicked);
      }}
    >
      <StyledHeart clickStatus={clicked} />
    </Box>
  );
};

export default Heart;

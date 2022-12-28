import React from "react";
import styled, { css } from "styled-components";

const ClickBox = ({ text, borderBottom, onClick, isPageHere }) => {
  return (
    <Box borderBottom={borderBottom} onClick={onClick} isPageHere={isPageHere}>
      {text}
    </Box>
  );
};

const Box = styled.div`
  border: 1px solid var(--color-light-gray);
  font-size: 0.2rem;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-bottom: ${({ borderBottom }) =>
      borderBottom || "2px solid var(--color-black)"};
    font-weight: 800;
  }
  ${({ isPageHere }) =>
    isPageHere &&
    css`
      border-bottom: "2px solid var(--color-black)";
      font-weight: 800;
    `}
`;

export default ClickBox;

import React from "react";
import styled from "styled-components";

const ClickBox = ({ text }) => {
  return <Box>{text}</Box>;
};

const Box = styled.div`
  border: 1px solid var(--color-light-gray);
  font-size: 0.2rem;
  height: 1.4rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-bottom: ${({ borderBottom }) =>
      borderBottom || "2px solid var(--color-black)"};
    font-weight: 800;
  }
`;
export default ClickBox;

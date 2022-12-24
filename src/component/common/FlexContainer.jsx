import React from "react";
import styled from "styled-components";

const FlexContainer = ({ children, flex }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export default FlexContainer;

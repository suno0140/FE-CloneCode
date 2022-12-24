import React from "react";
import styled from "styled-components";
import FlexContainer from "../component/common/FlexContainer";

const Footer = () => {
  return (
    <FlexContainer>
      <Container>
        <h5>STUDY</h5>
        <p>항해 99 클론 코딩 2조</p>
      </Container>
    </FlexContainer>
  );
};

const Container = styled.h5`
  margin: none;
  text-align: center;
  padding: 2rem;
  border-top: 3px solid black;
  h5 {
    font-weight: 800;
    margin: 0;
    color: var(--color-gray);
  }
  p {
    font-weight: 200;
    margin-top: 0.5rem;
  }
`;

export default Footer;

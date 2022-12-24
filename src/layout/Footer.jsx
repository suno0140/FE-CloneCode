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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid black;
  padding: 0.9rem;
  min-width: 800px;
  max-width: 1200px;
  width: 90%;
  padding: 1.5rem 0 1rem 0;
  h5 {
    font-weight: 800;
    margin: 0;
    color: var(--color-black);
  }
  p {
    font-weight: 200;
    font-size: 0.2rem;
    margin-top: 0.5rem;
  }
`;

export default Footer;

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h5>STUDY</h5>
      <p>항해 99 클론 코딩 2조</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid black;
  padding: 1.5rem 0 1rem 0;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
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

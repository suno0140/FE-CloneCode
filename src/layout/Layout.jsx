import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import useScrollPosition from "../hooks/useScrollPosition";

const Layout = () => {
  const scrollPosition = useScrollPosition();
  return (
    <Container>
      <Header />
      <StLayout marginTop={scrollPosition <= 36 && "7.7rem"}>
        <Outlet />
      </StLayout>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StLayout = styled.div`
  flex: 1;
  margin-top: ${({ marginTop }) => marginTop || "4.5rem"};
  transition: all ease-in-out 0.2s;
`;

export default React.memo(Layout);

import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Container>
      <Header />
      <StLayout>
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
  width: 100vh;
  padding: 0.9rem;
  min-width: 800px;
  max-width: 1200px;
  flex: 1;
`;

export default Layout;

import React from "react";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <StContainer>
      <StTitle>Login</StTitle>

      <StDiv>
        <Stlabel>
          {/* <span><img src="/_dj/img/s62_login_login_icon.jpg"></span> */}
          <StInput></StInput>
        </Stlabel>
      </StDiv>
    </StContainer>
  );
};

export default LoginPage;

const StContainer = styled.div`
  min-width: 1150px;
  padding: 0 0 0;
  margin: 0 auto 0;
  position: relative;
`;

const StTitle = styled.h2`
  min-height: 30px;
  padding: 0 0 34px;
  text-align: center;
  transition: all 0.5s;
`;

const StDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Stlabel = styled.label`
  clear: both;
  overflow: hidden;
  display: block;
  width: 450px;
  margin: 0 0 9px;
  border: 1px solid #d9d9d9;
  color: #8f8f91;
`;

const StInput = styled.input`
  float: left;
  width: 300px;
  height: 45px;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 8px 2px 6px 3px;
  border: 0 none;
  color: #111;
`;

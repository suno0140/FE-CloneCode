import React from "react";
import styled from "styled-components";
import SocialLogin from "./sociallogin/SocialScreen";
import LoginIdInput from "./logininput/idinput/IdinputScreen";
import LoginPasswordInput from "./logininput/passwordinput/PasswordInputScreen";
import LoginBtn from "./logininput/loginbtn/LoginBtn";

const LoginPage = () => {
  return (
    <LoginContainerFirst>
      <Loginfieldset>
        <LoginTitle>Login</LoginTitle>
        <LoginLabel>
          <LoginIdInput />
        </LoginLabel>
        <LoginLabel>
          <LoginPasswordInput />
        </LoginLabel>
        <LoginBtn />
        <SocialLogin />
        <LoginPtag>
          아직 회원이 아니신가요? <br />
          고객을 위한 다양한 혜택이 준비되어 있습니다.
          <LoginAtag>회원가입</LoginAtag>
        </LoginPtag>
      </Loginfieldset>
    </LoginContainerFirst>
  );
};

export default LoginPage;

const LoginTitle = styled.div`
  font-size: 2rem;
  min-height: 30px;
  padding: 0 0 49px;
  text-align: center;
`;

const LoginContainerFirst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 410px;
`;

const LoginLabel = styled.div`
  display: flex;
  align-items: center;
  width: 410px;
  margin: 0 0 9px;
  border: 1px solid #d9d9d9;
  color: #8f8f91;
`;

const Loginfieldset = styled.div`
  border: none;
`;

const LoginPtag = styled.p`
  position: relative;
  font-size: 0.9rem;
  letter-spacing: 0;
  width: 410px;
  font-weight: 300;
  line-height: 1.5;
  margin: 30px 0 0 0;
  border: 1px solid #e1e1e1;
  text-align: center;
  padding: 33px 0 8px 0;
  color: #777;
`;

const LoginAtag = styled.a`
  font-weight: 500;
  letter-spacing: 0.05em;
  border: 2px solid #222;
  background: #fff;
  color: #111;
  padding: 13px 43px;
  margin: 20px 0 30px 0 !important;
  font-size: 1rem;
  display: inline-block;
  text-align: center;
`;

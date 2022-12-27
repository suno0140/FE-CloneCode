import React from "react";
import styled from "styled-components";
import SocialLogin from "../sociallogin/SocialScreen";
import LoginIdInput from "../logininput/IdinputScreen";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <LoginContainerFirst>
      <Loginfieldset>
        <LoginTitle>Login</LoginTitle>
        <LoginIdInput></LoginIdInput>
        <SocialLogin />
        <LoginPtag>
          아직 회원이 아니신가요? <br />
          고객을 위한 다양한 혜택이 준비되어 있습니다.
          <LoginAtag
            onClick={() => {
              navigate(`/signup`);
            }}
          >
            회원가입
          </LoginAtag>
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
  border: 1px solid var(--color-light-gray);
  text-align: center;
  padding: 33px 0 8px 0;
  color: var(--color-gray);
`;

const LoginAtag = styled.a`
  font-weight: 500;
  letter-spacing: 0.05em;
  border: 2px solid var(--color-black);
  background: white;
  color: var(--color-black);
  padding: 13px 43px;
  margin: 20px 0 30px 0 !important;
  font-size: 1rem;
  display: inline-block;
  text-align: center;
`;

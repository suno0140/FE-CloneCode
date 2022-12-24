import React from "react";
import styled from "styled-components";
import SignupInput from "./signupinputbox/SignupInputScreen";

const SignupPage = () => {
  return (
    <SignupContainer>
      <SignupTitle>회원 가입</SignupTitle>
      <SignupInput />
    </SignupContainer>
  );
};

export default SignupPage;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

const SignupTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  min-height: 20px;
  padding: 0 0 29px;
`;

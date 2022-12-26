import React from "react";
import styled from "styled-components";

const SignupBtn = () => {
  const onClickSignup = () => {};
  return <Signupbutton onClick={onClickSignup}>회원가입</Signupbutton>;
};

export default SignupBtn;

const Signupbutton = styled.button`
  width: 200px;
  background-color: #000000;
  box-shadow: 5px 5px 16px 0 rgb(0 0 0 / 30%);
  color: #ffffff;
  margin: 30px 1px 30px 330px;
  padding: 16px 30px 17px;
  font-weight: 550;
  font-size: 1.3rem;
  letter-spacing: 3px;
`;

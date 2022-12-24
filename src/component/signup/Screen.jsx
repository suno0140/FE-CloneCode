import React from "react";
import styled from "styled-components";

const SignupPage = () => {
  return (
    <SignupContainer>
      <SignupTitle>회원 가입</SignupTitle>
      <SignupBox>
        <SignupkakaoBtn>카카오계정 로그인</SignupkakaoBtn>
      </SignupBox>
    </SignupContainer>
  );
};

export default SignupPage;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const SignupTitle = styled.div`
  font-size: 1.7rem;
  min-height: 30px;
  padding: 0 0 49px;
  text-align: center;
`;

const SignupBox = styled.div``;

const SignupkakaoBtn = styled.button`
  width: 200px;
  margin: 5px 0 0;
  border: 0;
  border-radius: 2px;
  font-size: 0.8rem;
  color: #3c1e1e;
  text-align: center;
  height: 34px;
  line-height: 33px;
  padding: 1px 0 0 45px;
  background: #ffeb00
    url(//img.echosting.cafe24.com/skin/mobile/member/ico_btn_kakao.png)
    no-repeat 11px 1px;
  background-size: auto 33px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

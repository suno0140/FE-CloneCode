import React from "react";
import styled from "styled-components";

const SocialLogin = () => {
  return (
    <SignupBtnBox>
      <SignupNaverBtn>네이버 로그인</SignupNaverBtn>
      <SignupFacebookBtn>Facebook으로 로그인</SignupFacebookBtn>
      <SignupKakaoBtn>카카오계정 로그인</SignupKakaoBtn>
    </SignupBtnBox>
  );
};

export default SocialLogin;

const SignupBtnBox = styled.div``;

const SignupKakaoBtn = styled.button`
  width: 180px;
  margin: 5px 10px 0 0;
  border: 0;
  border-radius: 2px;
  font-size: 0.8rem;
  color: #3c1e1e;
  text-align: center;
  height: 29px;
  line-height: 27px;
  padding: 1px 0 0 45px;
  background: #ffeb00
    url(//img.echosting.cafe24.com/skin/mobile/member/ico_btn_kakao.png)
    no-repeat 11px 1px;
  background-size: auto 27px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;
const SignupNaverBtn = styled.button`
  width: 200px;
  margin: 5px 10px 0 0;
  border: 0;
  border-radius: 2px;
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  height: 29px;
  line-height: 27px;
  padding: 0 0 0 45px;
  background: #26c826
    url(//img.echosting.cafe24.com/skin/mobile/member/ico_btn_naver.png)
    no-repeat 13px 0;
  background-size: 33px 27px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const SignupFacebookBtn = styled.button`
  width: 200px;
  margin: 5px 10px 0 0;
  border: 0;
  border-radius: 2px;
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  height: 29px;
  line-height: 27px;
  padding: 0 0 0 45px;
  background: #3b5998
    url(//img.echosting.cafe24.com/skin/mobile/member/ico_btn_facebook.png)
    no-repeat 13px 0;
  background-size: 33px 27px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

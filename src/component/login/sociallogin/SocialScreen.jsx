import React from "react";
import styled from "styled-components";

const SocialLogin = () => {
  return (
    <LoginUl>
      <LoginNaverBtn>네이버계정 로그인</LoginNaverBtn>
      <LoginFacebookBtn>facebook계정 로그인</LoginFacebookBtn>
      <LoginKakaoBtn>카카오계정 로그인</LoginKakaoBtn>
    </LoginUl>
  );
};

export default SocialLogin;

const LoginUl = styled.div`
  flex-wrap: wrap;
  align-content: stretch;
  padding: 4px 0 5px;
  margin: 0;
  border: 0;
`;

const LoginKakaoBtn = styled.button`
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

const LoginFacebookBtn = styled.button`
  width: 200px;
  margin: 5px 0 0 10px;
  border: 0;
  border-radius: 2px;
  font-size: 0.8rem;
  color: white;
  text-align: center;
  height: 34px;
  line-height: 33px;
  padding: 1px 0 0 45px;
  background: #3b5998
    url(//img.echosting.cafe24.com/skin/mobile/member/ico_btn_facebook.png)
    no-repeat 11px 1px;
  background-size: auto 33px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const LoginNaverBtn = styled.button`
  width: 200px;
  margin: 5px 0 0;
  border: 0;
  border-radius: 2px;
  font-size: 0.8rem;
  color: white;
  text-align: center;
  height: 34px;
  line-height: 33px;
  padding: 1px 0 0 45px;
  background: #26c826
    url(//img.echosting.cafe24.com/skin/mobile/member/ico_btn_naver.png)
    no-repeat 11px 1px;
  background-size: auto 33px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

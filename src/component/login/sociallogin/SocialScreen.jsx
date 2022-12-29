import React from "react";
import styled from "styled-components";
import { githubId } from "../../../core";
import { kakaoId } from "../../../core";

import SocialLoginButton from "./components/SocialLoginButton";

const SocialLogin = () => {
  return (
    <LoginUl>
      <SocialLoginButton
        title="github계정 로그인"
        linkTo={`https://github.com/login/oauth/authorize?client_id=${githubId}`}
        color="white"
        background={`var(--color-black) url(https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU) no-repeat 8px 1px`}
      />
      <SocialLoginButton
        title="카카오계정 로그인"
        linkTo={`https://kauth.kakao.com/oauth/authorize?client_id=${kakaoId}&redirect_uri=http://2team-clone-code.s3-website.ap-northeast-2.amazonaws.com/login/kakao&response_type=code`}
        color="#3c1e1e"
        background={`#ffeb00
    url(//img.echosting.cafe24.com/skin/mobile/member/ico_btn_kakao.png)
    no-repeat 11px 1px`}
      />
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

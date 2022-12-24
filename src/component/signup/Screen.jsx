import React from "react";
import styled from "styled-components";

const SignupPage = () => {
  const img =
    "http://img.echosting.cafe24.com/skin/base/common/ico_required.gif";
  return (
    <SignupContainer>
      <SignupTitle>회원 가입</SignupTitle>
      <SignupBox>
        <SignupBtnBox>
          <SignupNaverBtn>네이버 로그인</SignupNaverBtn>
          <SignupFacebookBtn>Facebook으로 로그인</SignupFacebookBtn>
          <SignupKakaoBtn>카카오계정 로그인</SignupKakaoBtn>
        </SignupBtnBox>
        <SignupDiv>
          <SignupDivSecond>
            아이디
            <img src={img}></img>
          </SignupDivSecond>
          <SignupInput></SignupInput>
          <SignupPtag>(영문소문자/숫자,4~16자)</SignupPtag>
        </SignupDiv>
        <SignupDiv>
          <SignupDivSecond>
            비밀번호
            <img src={img}></img>
          </SignupDivSecond>
          <SignupDivThird>
            <SignupInput></SignupInput>
            <SignupPtagSecond>
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자 ~ 16자)
            </SignupPtagSecond>
          </SignupDivThird>
        </SignupDiv>
        <SignupDiv>
          <SignupDivSecond>
            비밀번호 확인
            <img src={img}></img>
          </SignupDivSecond>
          <SignupInput></SignupInput>
        </SignupDiv>
        <SignupDiv>
          <SignupDivSecond>
            이름
            <img src={img}></img>
          </SignupDivSecond>
          <SignupInput></SignupInput>
        </SignupDiv>
        <SignupDiv>
          <SignupDivSecond>
            이메일
            <img src={img}></img>
          </SignupDivSecond>
          <SignupInput></SignupInput>
        </SignupDiv>
      </SignupBox>
      <Signupbutton>회원가입</Signupbutton>
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

const SignupBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 900px;
`;
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

const SignupDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 800px;
  font-size: 1rem;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ececec;
`;

const SignupInput = styled.input`
  float: left;
  width: 250px;
  height: 30px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 2px 2px 2px 3px;
  border: 1px solid #d5d5d5;
  margin-left: 70px;
  margin-right: 10px;
  padding-right: 10px;
`;

const SignupPtag = styled.span`
  font-size: 0.8rem;
`;
const SignupPtagSecond = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  padding-left: 70px;
`;

const Signupbutton = styled.button`
  width: 200px;
  background-color: #000000;
  box-shadow: 5px 5px 16px 0 rgb(0 0 0 / 30%);
  color: #ffffff;
  margin: 30px 1px 10px 330px;
  padding: 16px 30px 17px;
  font-weight: 550;
  font-size: 1.3rem;
  letter-spacing: 3px;
`;

const SignupDivSecond = styled.div`
  width: 120px;
`;

const SignupDivThird = styled.div`
  display: flex;

  flex-direction: column;
`;

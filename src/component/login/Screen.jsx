import React from "react";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <StContainer>
      <StTitle>Login</StTitle>

      <StDiv>
        <Stfieldset>
          <Stlabel>
            <Stspan>
              <img src="http://iiinjeju.com/_dj/img/s62_login_login_icon.jpg"></img>
            </Stspan>

            <StInput></StInput>
          </Stlabel>
          <Stlabel>
            <Stspan>
              <img src="http://iiinjeju.com/_dj/img/s62_login_pw_icon.jpg"></img>
            </Stspan>
            <StInput></StInput>
          </Stlabel>
          <StLoginButton>로그인</StLoginButton>
          <Stul>
            <StkakaoBtn>카카오계정 로그인</StkakaoBtn>
          </Stul>
          <StPtag>
            아직 회원이 아니신가요? <br />
            고객을 위한 다양한 혜택이 준비되어 있습니다.
            <StAtag>회원가입</StAtag>
          </StPtag>
        </Stfieldset>
      </StDiv>
    </StContainer>
  );
};

export default LoginPage;

const StContainer = styled.div`
  min-width: 1150px;
  padding: 0 0 0;
  margin: 60px auto 0;
  position: relative;
`;

const StTitle = styled.div`
  font-size: 2rem;
  min-height: 30px;
  padding: 0 0 49px;
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
  display: flex;
  align-items: center;
  width: 450px;
  margin: 0 0 9px;
  border: 1px solid #d9d9d9;
  color: #8f8f91;
`;

const StInput = styled.input`
  float: left;
  width: 300px;
  height: 45px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 2px 2px 2px 3px;
  border: 0 none;
  color: #111;
`;

const Stspan = styled.span`
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-left: 7px;
  float: left;
  width: 90px;
  height: 35px;
  line-height: 38px;
  background: #fff;
  padding: 0 0 0 8px;
  color: #c9c9c9;
`;

const StLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  margin: 30px 0 5px;
  padding: 15px 0 15px;
  border: 1px solid #222;
  background-color: #222;
  color: white;
  font-size: 1.1rem;
`;

const Stfieldset = styled.fieldset`
  position: relative;
  width: 402px;
  margin: 0 auto;
  border: none;
  min-inline-size: min-content;
`;

const Stul = styled.ul`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  text-align: right;
  padding: 4px 0 5px;
  margin: 0;
  border: 0;
`;
const StkakaoBtn = styled.button`
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

const StPtag = styled.p`
  position: relative;
  font-size: 0.9rem;
  letter-spacing: 0;
  width: 448px;
  font-weight: 300;
  line-height: 1.5;
  margin: 30px 0 0 0;
  border: 1px solid #e1e1e1;
  text-align: center;
  padding: 33px 0 8px 0;
  color: #777;
`;

const StAtag = styled.a`
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

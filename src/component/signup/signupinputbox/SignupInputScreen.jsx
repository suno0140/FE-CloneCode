import React from "react";
import styled from "styled-components";
import SocialLogin from "../sociallogin/SocialScreen";
import IdInput from "./idinput/Screen";
import PasswordInput from "./passwordinput/Screen";
import NameInput from "./nameinput/Screen";
import EmailInput from "./emailinput/Screen";
import SignupBtn from "./signupbtn/SignupBtnScreen";

const SignupInput = () => {
  const img =
    "http://img.echosting.cafe24.com/skin/base/common/ico_required.gif";
  return (
    <SignupBox>
      <SocialLogin starImg={img} />
      <SignupDiv>
        <IdInput starImg={img} />
      </SignupDiv>
      <PasswordInput starImg={img} />
      <SignupDiv>
        <NameInput starImg={img} />
      </SignupDiv>
      <SignupDiv>
        <EmailInput starImg={img} />
      </SignupDiv>
      <SignupBtn />
    </SignupBox>
  );
};

export default SignupInput;

const SignupBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 900px;
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

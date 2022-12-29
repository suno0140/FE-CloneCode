import React, { useState } from "react";
import styled from "styled-components";
import SocialLogin from "../sociallogin/SocialScreen";
import SignupBtn from "./SignupBtnScreen";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../../redux/modules/signUpSlice";

const SignUpInput = () => {
  const [idMessage, setIdMessage] = useState("");
  const dispatch = useDispatch();
  const { form } = useSelector(({ signUpPost }) => ({
    form: signUpPost,
  }));

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      changeField({
        key: name,
        value,
      })
    );
    if (/^(?=.*\d)(?=.*[a-z0-9])[0-9a-z]{4,16}$/.test(form.loginId)) {
      setIdMessage(`사용가능한 아이디입니다.`);
    } else if (!/^(?=.*\d)(?=.*[a-z])[0-9a-z]{4,16}$/.test(form.loginId)) {
      setIdMessage("");
    }
  };

  const img =
    "http://img.echosting.cafe24.com/skin/base/common/ico_required.gif";
  return (
    <SignupBox>
      {/* <SocialLogin /> */}
      <SignupDiv>
        <SignupDivSecond>
          아이디
          <img src={img} alt="필수요소"></img>
        </SignupDivSecond>
        <SignupIdInput
          name="loginId"
          onChange={onChangeInputHandler}
        ></SignupIdInput>
        <SignupPtag>{idMessage}</SignupPtag>
        <SignupPtag>(영문소문자/숫자,4~16자)</SignupPtag>
      </SignupDiv>
      <SignupDiv>
        <SignupDivSecond>
          비밀번호
          <img src={img} alt="필수요소"></img>
        </SignupDivSecond>

        <SignupDivThird>
          <SignupInput
            name="password"
            type="password"
            onChange={onChangeInputHandler}
          ></SignupInput>
          <SignupPtagSecond>
            (영문 대소문자/숫자/특수문자 모두 포함, 10자 ~ 16자)
          </SignupPtagSecond>
        </SignupDivThird>
      </SignupDiv>
      <SignupDiv>
        <SignupDivSecond>
          비밀번호 확인
          <img src={img} alt="필수요소"></img>
        </SignupDivSecond>
        <SignupInput
          name="passwordcheck"
          type="password"
          onChange={onChangeInputHandler}
        ></SignupInput>
        {form.password !== form.passwordcheck && form.passwordcheck !== "" && (
          <SignupPtag>비밀번호가 일치하지 않습니다</SignupPtag>
        )}
      </SignupDiv>
      <SignupDiv>
        <SignupDivSecond>
          이름
          <img src={img} alt="필수요소"></img>
        </SignupDivSecond>
        <SignupInput name="name" onChange={onChangeInputHandler}></SignupInput>
      </SignupDiv>
      <SignupDiv>
        <SignupDivSecond>
          이메일
          <img src={img} alt="필수요소"></img>
        </SignupDivSecond>
        <SignupInput
          name="email"
          type="email"
          onChange={onChangeInputHandler}
        ></SignupInput>
      </SignupDiv>
      <SignupBtn />
    </SignupBox>
  );
};

export default SignUpInput;

const SignupBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 1000px;
`;

const SignupDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  font-size: 1rem;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-light-gray);
`;

const SignupDivThird = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignupPtagSecond = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  padding-left: 70px;
`;

const SignupInput = styled.input`
  float: left;
  width: 250px;
  height: 30px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 2px 2px 2px 3px;
  border: 1px solid var(--color-light-gray);
  margin-left: 70px;
  margin-right: 10px;
  padding-right: 10px;
`;

const SignupDivSecond = styled.div`
  width: 120px;
`;

const SignupPtag = styled.span`
  font-size: 0.8rem;
`;

const SignupIdInput = styled.input`
  float: left;
  width: 250px;
  height: 30px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 2px 2px 2px 3px;
  border: 1px solid var(--color-light-gray);
  margin-left: 70px;
  margin-right: 10px;
  padding-right: 10px;
`;

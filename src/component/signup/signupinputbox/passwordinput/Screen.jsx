import React, { useState } from "react";
import styled from "styled-components";

const PasswordInput = ({ starImg }) => {
  const [password, setPassWord] = useState("");
  // const [passwordMessage, setPassWordMessage] = useState("");
  const [isPassWord, setIsPassWord] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangePassword = (e) => {
    setPassWord(e.target.value);
    if (
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,16}$/.test(password)
    ) {
      setIsPassWord(false);
    } else {
      setIsPassWord(true);
    }
  };

  const onConfirmPassword = (e) => {
    setPasswordConfirm(e.target.value);
    if (password !== passwordConfirm) {
      // setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage(" ");
      setIsPasswordConfirm(true);
    }
  };

  return (
    <>
      <SignupDiv>
        <SignupDivSecond>
          비밀번호
          <img src={starImg}></img>
        </SignupDivSecond>

        <SignupDivThird>
          <SignupInput onChange={onChangePassword}></SignupInput>
          <SignupPtagSecond>
            (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자 ~ 16자)
          </SignupPtagSecond>
        </SignupDivThird>
      </SignupDiv>
      <SignupDiv>
        <SignupDivSecond>
          비밀번호 확인
          <img src={starImg}></img>
        </SignupDivSecond>
        <SignupInput onChange={onConfirmPassword}></SignupInput>

        <span style={{ fontSize: "0.8rem" }}>{passwordConfirmMessage}</span>
      </SignupDiv>
    </>
  );
};

export default PasswordInput;

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

const SignupDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 800px;
  font-size: 1rem;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-light-gray);
`;

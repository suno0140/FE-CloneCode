import React, { useState } from "react";
import styled from "styled-components";

const EmailInput = ({ starImg }) => {
  const [email, setEmail] = useState("");
  const [EmailMessage, setEmailMessage] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
        e.target.value
      )
    ) {
      setEmailMessage(" 유효한 이메일을 입력해주세요 ");
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };
  return (
    <>
      <SignupDiv>
        이메일
        <img src={starImg}></img>
      </SignupDiv>
      <SignupInput onChange={onChangeEmail}></SignupInput>
      {email.length > 0 && (
        <span style={{ fontSize: "0.8rem" }}>{EmailMessage}</span>
      )}
    </>
  );
};

export default EmailInput;

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

const SignupDiv = styled.div`
  width: 120px;
`;

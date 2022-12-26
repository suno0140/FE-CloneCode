import React from "react";
import styled from "styled-components";
import { useState } from "react";
import IdHook from "./Hook";

const IdInput = ({ starImg }) => {
  const [loginId, setLoginId] = useState("");
  const [loginIdMessage, setLoginIdMessage] = useState("");
  const [isLoginId, setIsLoginId] = useState(false);

  const onChangeLoginId = (e) => {
    setLoginId(e.target.value);
    if (!/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{4,16}$/.test(loginId)) {
      setLoginIdMessage(" 4자이상 16자이하여야 합니다. ");
      setIsLoginId(false);
    } else {
      setLoginIdMessage("사용 가능한 아이디입니다.");
      setIsLoginId(true);
    }
  };

  return (
    <>
      <SignupDiv>
        아이디
        <img src={starImg}></img>
      </SignupDiv>
      <SignupInput onChange={onChangeLoginId}></SignupInput>
      {loginId.length > 0 && (
        <span style={{ fontSize: "0.8rem" }}>{loginIdMessage}</span>
      )}

      <SignupPtag>(영문소문자/숫자,4~16자)</SignupPtag>
    </>
  );
};

export default IdInput;

const SignupDiv = styled.div`
  width: 120px;
`;

const SignupPtag = styled.span`
  font-size: 0.8rem;
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

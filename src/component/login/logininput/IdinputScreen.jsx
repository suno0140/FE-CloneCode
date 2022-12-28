import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { baseURLApiV1 } from "../../../core/api";

const LoginIdInput = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const postLogin = async () => {
    try {
      const userInfo = { loginId, password };
      const data = await baseURLApiV1.post("/members/login", userInfo);
      console.log(data);
      if (data.data.httpStatusCode === 200) {
        return data;
      } else {
        alert("아이디, 비밀번호를 잘못입력하셨습니다.");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const onClickLogin = () => {
    if (loginId === "" || password === "") {
      alert("아이디, 비밀번호를 확인해주세요.");
      return;
    } else {
    }
    postLogin({
      loginId,
      password,
    }).then((res) => {
      if (res === undefined) {
        navigate(`/login`);
        alert("아이디, 비밀번호를 확인해주세요.");
      } else {
        localStorage.setItem("Authorization", res.headers.authorization);
        navigate(`/`);
      }
    });
  };

  return (
    <>
      <LoginLabel>
        <Loginspan>
          <img src="http://iiinjeju.com/_dj/img/s62_login_login_icon.jpg"></img>
        </Loginspan>
        <LoginInput
          name="loginId"
          onChange={(e) => {
            const { value } = e.target;
            setLoginId(value);
          }}
        ></LoginInput>
      </LoginLabel>
      <LoginLabel>
        <Loginspan>
          <img src="http://iiinjeju.com/_dj/img/s62_login_pw_icon.jpg"></img>
        </Loginspan>
        <LoginPwInput
          type="password"
          name="password"
          onChange={(e) => {
            const { value } = e.target;
            setPassword(value);
          }}
        ></LoginPwInput>
      </LoginLabel>

      <LoginButton
        onClick={(event) => {
          onClickLogin(event);
        }}
      >
        로그인
      </LoginButton>
    </>
  );
};

export default LoginIdInput;

const LoginInput = styled.input`
  float: left;
  width: 300px;
  height: 25px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 2px 2px 2px 3px;
  border: 0 none;
  color: var(--color-black);
`;

const Loginspan = styled.span`
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-left: 7px;
  float: left;
  width: 90px;
  height: 35px;
  line-height: 38px;
  background: white;
  padding: 0 0 0 8px;
  color: var(--color-gray);
`;

const LoginPwInput = styled.input`
  float: left;
  width: 300px;
  height: 25px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 2px 2px 2px 3px;
  border: 0 none;
  color: var(--color-black);
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 410px;
  margin: 30px 0 5px;
  padding: 10px 0 10px;
  border: 1px solid var(--color-black);
  background-color: var(--color-black);
  color: white;
  font-size: 1rem;
`;

const LoginLabel = styled.div`
  display: flex;
  align-items: center;
  width: 410px;
  margin: 0 0 9px;
  border: 1px solid var(--color-light-gray);
  color: var(--color-gray);
`;

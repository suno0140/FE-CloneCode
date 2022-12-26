import React from "react";
import styled from "styled-components";

const LoginIdInput = () => {
  return (
    <>
      <Loginspan>
        <img src="http://iiinjeju.com/_dj/img/s62_login_login_icon.jpg"></img>
      </Loginspan>
      <LoginInput></LoginInput>
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

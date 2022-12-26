import React from "react";
import styled from "styled-components";

const LoginBtn = () => {
  return (
    <>
      <LoginButton>로그인</LoginButton>
    </>
  );
};

export default LoginBtn;

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

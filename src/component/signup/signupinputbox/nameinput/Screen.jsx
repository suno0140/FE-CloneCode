import React from "react";
import styled from "styled-components";

const NameInput = () => {
  return (
    <>
      <SignupDiv>
        이름
        <img src="http://img.echosting.cafe24.com/skin/base/common/ico_required.gif"></img>
      </SignupDiv>
      <SignupInput></SignupInput>
    </>
  );
};

export default NameInput;

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

const SignupDiv = styled.div`
  width: 120px;
`;

import React from "react";
import styled from "styled-components";
import { useState } from "react";

const NameInput = ({ starImg }) => {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value < 3) {
      setIsName(false);
    } else {
      setIsName(true);
    }
  };
  return (
    <>
      <SignupDiv>
        이름
        <img src={starImg}></img>
      </SignupDiv>
      <SignupInput onChange={onChangeName}></SignupInput>
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
  border: 1px solid var(--color-light-gray);
  margin-left: 70px;
  margin-right: 10px;
  padding-right: 10px;
`;

const SignupDiv = styled.div`
  width: 120px;
`;

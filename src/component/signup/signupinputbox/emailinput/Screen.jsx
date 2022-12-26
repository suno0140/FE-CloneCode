import React from "react";
import styled from "styled-components";
import { changeField } from "../../../../redux/modules/signUpSlice";
import { useDispatch } from "react-redux";

const EmailInput = ({ starImg }) => {
  const dispatch = useDispatch();

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      changeField({
        form: "signUp",
        key: name,
        value,
      })
    );
  };

  return (
    <>
      <SignupDiv>
        이메일
        <img src={starImg}></img>
      </SignupDiv>
      <SignupInput
        name="email"
        type="email"
        onChange={onChangeInputHandler}
      ></SignupInput>
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

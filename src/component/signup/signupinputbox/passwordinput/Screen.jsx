import React from "react";
import styled from "styled-components";
import { changeField } from "../../../../redux/modules/signUpSlice";
import { useDispatch } from "react-redux";

const PasswordInput = ({ starImg }) => {
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
        <SignupDivSecond>
          비밀번호
          <img src={starImg}></img>
        </SignupDivSecond>

        <SignupDivThird>
          <SignupInput
            name="password"
            type="password"
            onChange={onChangeInputHandler}
          ></SignupInput>
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
        <SignupInput
          name="passwordcheck"
          type="password"
          onChange={onChangeInputHandler}
        ></SignupInput>
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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { __postSignUp } from "../../../redux/modules/signUpSlice";

const SignupBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form } = useSelector(({ signUpPost }) => ({
    form: signUpPost,
  }));

  const onClickSignUp = () => {
    if (
      form.loginId === "" ||
      form.password === "" ||
      form.passwordcheck === "" ||
      form.name === "" ||
      form.email === ""
    ) {
      alert("빈값을 입력해주세요!");
    } else if (!/^(?=.*\d)(?=.*[a-z0-9])[0-9a-z]{4,16}$/.test(form.loginId)) {
      alert("아이디를 형식을 확인해주세요.");
    } else if (
      !/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{10,16}$/.test(
        form.password
      )
    ) {
      alert("비밀번호 형식을 확인해주세요.");
    } else if (
      !/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
        form.email
      )
    ) {
      alert("유효한 이메일을 입력해주세요.");
    } else {
      const payloadForm = {
        loginId: form.loginId,
        password: form.password,
        name: form.name,
        email: form.email,
      };
      dispatch(__postSignUp(payloadForm));

      navigate("/login");
    }
  };

  return <Signupbutton onClick={onClickSignUp}>회원가입</Signupbutton>;
};

export default SignupBtn;

const Signupbutton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  background-color: #000000;
  box-shadow: 5px 5px 16px 0 rgb(0 0 0 / 30%);
  color: #ffffff;
  margin: 70px 0 70px 390px;
  padding: 16px 30px 17px;
  font-weight: 550;
  font-size: 1.3rem;
  letter-spacing: 3px;
`;

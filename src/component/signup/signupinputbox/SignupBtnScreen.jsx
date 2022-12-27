import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { __postSignUp } from "../../../redux/modules/signUpSlice";

const SignupBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const result = useSelector(({ signUpPost }) => signUpPost.result);
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
    } else {
      const payloadForm = {
        loginId: form.loginId,
        password: form.password,
        name: form.name,
        email: form.email,
      };
      dispatch(__postSignUp(payloadForm));
      if (result === "success") {
        navigate("/login");
      }
    }
  };

  return <Signupbutton onClick={onClickSignUp}>회원가입</Signupbutton>;
};

export default SignupBtn;

const Signupbutton = styled.button`
  width: 200px;
  background-color: #000000;
  box-shadow: 5px 5px 16px 0 rgb(0 0 0 / 30%);
  color: #ffffff;
  margin: 50px 1px 130px 330px;
  padding: 16px 30px 17px;
  font-weight: 550;
  font-size: 1.3rem;
  letter-spacing: 3px;
`;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { justFadeInAnimation } from "../../../styles/animations";
import LinkButton from "./LinkButton";
import { useSelector, useDispatch } from "react-redux";
import { __getHeader } from "../../../redux/modules/headerSlice";

const HeaderFirst = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.header.login);

  const logOutHandler = () => {
    localStorage.removeItem("Authorization");
  };

  dispatch(__getHeader());

  return (
    <HeaderContainerFirst>
      <div>
        <LinkButton linkName="HANGHEA99" />
      </div>
      <img
        src="http://iiinjeju.com/_dj/img/logo.jpg"
        alt="iiin 로고"
        onClick={() => {
          navigate("/");
        }}
      />
      <div>
        {isLogin ? (
          // 체크 필요
          <>
            <LinkButton linkName="ORDER" linkTo="orderlist" />
            <LinkButton
              linkName="LOGOUT"
              onClick={() => {
                logOutHandler();
              }}
            />
          </>
        ) : (
          <>
            <LinkButton
              linkName="LOGIN"
              margin="0.1rem 1.8rem"
              linkTo="/login"
            />
            <LinkButton linkName="JOIN" linkTo="/signup" />
          </>
        )}
      </div>
    </HeaderContainerFirst>
  );
};

const HeaderContainerFirst = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  border-bottom: 2px solid var(--color-black);
  background: white;
  img {
    width: 6.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    ${justFadeInAnimation};
  }
  div {
    display: flex;
    justify-content: center;
  }
`;

export default HeaderFirst;

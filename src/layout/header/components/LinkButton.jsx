import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LinkButton = ({
  linkName,
  linkTo,
  fontsize,
  margin,
  isHoverNeed = false,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <LinkButtonForm margin={margin} fontsize={fontsize}>
        <Link
          to={linkTo}
          onMouseOver={() => {
            setIsMouseOver(true);
          }}
          onMouseOut={() => {
            setIsMouseOver(false);
          }}
        >
          {linkName}
        </Link>

        {isHoverNeed && isMouseOver && (
          <Container
            onMouseOver={() => {
              setIsMouseOver(true);
            }}
            onMouseOut={() => {
              setIsMouseOver(false);
            }}
          >
            <ul>
              <li
                onClick={() => {
                  navigate("/product/list?subcategory=iiin&page=1");
                }}
              >
                iiin
              </li>
              <li
                onClick={() => {
                  navigate("product/list?subcategory=finders&page=1");
                }}
              >
                FINDERS
              </li>
            </ul>
            <div>
              <img
                src="http://iiinjeju.com/_dj/img/category_item_img_1.jpg"
                alt="상품 추천"
              ></img>
            </div>
          </Container>
        )}
      </LinkButtonForm>
    </>
  );
};

const LinkButtonForm = styled.div`
  margin: ${({ margin }) => margin || "0.1rem"};
  font-size: ${({ fontsize }) => fontsize || "0.2rem"};
  transition: all ease-in-out 0.2s;
  position: relative;
  a {
    padding: 0.5rem;
    letter-spacing: 0.03rem;
    line-height: 1.5;
    font-weight: 400;
  }
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: baseline;
  background: white;
  transform: translate(-3rem, 0.3rem);
  padding: 1rem 2rem 1rem 1rem;
  border: 1px solid var(--color-black);
  width: 23rem;
  ul {
    position: relative;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      width: 7rem;
      text-decoration: none;
      list-style: none;
      padding-bottom: 0.5rem;
      cursor: pointer;
    }
  }
  div {
    img {
      position: relative;
      width: 17rem;
      height: fit-content;
      left: 0;
    }
  }
`;

export default LinkButton;

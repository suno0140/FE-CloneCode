import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const LinkButton = ({
  linkName,
  linkTo,
  fontsize,
  margin,
  onClick,
  isHoverNeed = false,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const navigate = useNavigate();
  const subCategories = useSelector((state) => state.header[linkName]);

  return (
    <>
      <LinkButtonForm margin={margin} fontsize={fontsize}>
        {/* 메인 카테고리 버튼 */}
        <Link
          to={linkTo}
          onMouseOver={() => {
            setIsMouseOver(true);
          }}
          onMouseOut={() => {
            setIsMouseOver(false);
          }}
          onClick={onClick}
        >
          {linkName}
        </Link>

        {/* 호버 시 세부 카테고리 버튼 */}
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
              {subCategories.map((subcategory) => {
                return (
                  <li
                    key={subcategory}
                    onClick={() => {
                      navigate(
                        `/product/list?subcategory=${subcategory}&page=1`
                      );
                    }}
                  >
                    {subcategory}
                  </li>
                );
              })}
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
  padding: 1rem 3rem 1rem 1rem;
  border: 1px solid var(--color-black);
  width: 23rem;
  ul {
    position: relative;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      width: 8rem;
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

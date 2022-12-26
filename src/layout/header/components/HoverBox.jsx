import React from "react";
import styled from "styled-components";

const HoverBox = () => {
  return (
    <Container>
      <ul>
        <li>iiin</li>
        <li>FINDERS</li>
      </ul>
      <div>
        <img
          src="http://iiinjeju.com/_dj/img/category_item_img_1.jpg"
          alt="상품 추천"
        ></img>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  background: white;
  padding: 1rem;
  border: 1px solid var(--color-black);
  ul {
    margin: 0;
    padding: 0;
    li {
      text-decoration: none;
      list-style: none;
      padding-bottom: 0.5rem;
    }
  }
  div {
    margin: 0 0 0 2rem;
    img {
      width: 17rem;
    }
  }
`;

export default HoverBox;

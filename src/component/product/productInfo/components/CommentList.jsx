import React from "react";
import styled from "styled-components";
import ClickBox from "./ClickBox";
import CommentItem from "./CommentItem";

const Comment = () => {
  return (
    <Container>
      <TitleContainer>
        <h3>REVIEW</h3>
        <ClickContainer>
          <ClickBox text="WRITE" />
          <ClickBox text="LIST" />
        </ClickContainer>
      </TitleContainer>
      <CommentContainer>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </CommentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  justify-content: center;
`;

const ClickContainer = styled.div`
  position: absolute;
  left: 100%;
  transform: translateX(-100%);
  display: flex;
`;

const CommentContainer = styled.div`
  width: 100%;
  margin-top: 0.8rem;
  border-bottom: 1px solid var(--color-light-gray);
`;

export default Comment;

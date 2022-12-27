import React from "react";
import styled from "styled-components";

const CommentItem = () => {
  return (
    <Container>
      <TitleContainer>
        <div>6</div>
        <div>배송문의</div>
      </TitleContainer>
      <UserInfoContainer>
        <div>한****</div>
        <Date>
          2022-04-06
          <br />
          00:16:12
        </Date>
      </UserInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid var(--color-light-gray);
  div {
    display: flex;
    div {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const TitleContainer = styled.div`
  div {
    font-size: 0.7rem;
  }
`;

const UserInfoContainer = styled.div`
  div {
    font-size: 0.1rem;
  }
`;

const Date = styled.div`
  text-align: center;
`;

export default CommentItem;

import React, { useCallback } from "react";
import styled from "styled-components";

const CarouselArrowButton = ({ setIndex, length }) => {
  const leftClickHandler = useCallback(() => {
    setIndex((prev) => (prev === length - 1 ? length - 1 : +prev + 1));
  }, [length, setIndex]);

  const rightClickHandler = useCallback(() => {
    setIndex((prev) => (prev === 0 ? 0 : +prev - 1));
  }, [setIndex]);
  return (
    <Container>
      <div>
        <img
          onClick={leftClickHandler}
          src="http://iiinjeju.com/_dj/img/btn_prev.png"
          alt="leftArrow"
        />
      </div>
      <div>
        <img
          onClick={rightClickHandler}
          src="http://iiinjeju.com/_dj/img/btn_next.png"
          alt="rightArrow"
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  top: 15rem;
  div {
    img {
      width: 2.5rem;
      cursor: pointer;
      &:first-child {
        margin-left: 1rem;
      }
      &:last-child {
        margin-right: 1rem;
      }
    }
  }
`;

export default React.memo(CarouselArrowButton);

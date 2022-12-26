import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import useResetTimeout from "../hooks/useResetTimeout";

const Carousel = () => {
  const timeoutRef = useRef(null);
  const delay = 4000;

  const [index, setIndex] = useState(0);
  const imgs = [
    "http://iiinjeju.com/_dj/img/main/%EC%82%AC%EB%B3%B8%20-22%EA%B0%80%EC%9D%84%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%B0%B0%EB%84%88%20%EB%B3%B5%EC%82%AC.png",
    "http://iiinjeju.com/_dj/img/main/1225_bg.jpg",
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index, imgs, setIndex]);

  return (
    <>
      <Container>
        <img
          src="http://iiinjeju.com/_dj/img/btn_prev.png"
          alt="leftArrow"
          onClick={() => {
            setIndex(0);
          }}
        />
        <img
          src="http://iiinjeju.com/_dj/img/btn_next.png"
          alt="rightArrow"
          onClick={() => {
            setIndex(1);
          }}
        />
      </Container>
      <SlideShow>
        <SlideShowSlider
          style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}
        >
          {imgs.map((img, index) => (
            <Slide key={index} src={img}></Slide>
          ))}
        </SlideShowSlider>
      </SlideShow>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  img {
    position: absolute;
    &:first-child {
      left: 1rem;
      top: 15rem;
      width: 2.5rem;
      cursor: pointer;
      z-index: 2;
    }
    &:last-child {
      right: 1rem;
      top: 15rem;
      width: 2.5rem;
      cursor: pointer;
      z-index: 2;
    }
  }
`;

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 78rem;
`;

const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

const Slide = styled.img`
  display: inline-block;
  width: 100%;
  transform: translateX(-100%);
  object-fit: cover;
`;

export default Carousel;

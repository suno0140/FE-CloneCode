import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import styled from "styled-components";
import CarouselArrowButton from "./CarouselArrowButton";
// import useResetTimeout from "../hooks/useResetTimeout";

const Carousel = () => {
  const timeoutRef = useRef(null);
  const delay = 4000;

  const [index, setIndex] = useState(0);
  const imgs = useMemo(() => {
    return [
      "http://iiinjeju.com/_dj/img/main/%EC%82%AC%EB%B3%B8%20-22%EA%B0%80%EC%9D%84%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%B0%B0%EB%84%88%20%EB%B3%B5%EC%82%AC.png",
      "http://iiinjeju.com/_dj/img/main/1225_bg.jpg",
      "https://iiinjeju.com/web/upload/category/editor/2022/12/27/7b9746c32aecf19bf3b82f218f8ed973.png",
    ];
  }, []);
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);
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
      <SlideShow>
        <CarouselArrowButton
          setIndex={setIndex}
          index={index}
          length={imgs.length}
        />
        {/* <Container>
          <div>
            <img
              onClick={() => {
                setIndex(index === 0 ? 0 : +index + 1);
              }}
              src="http://iiinjeju.com/_dj/img/btn_prev.png"
              alt="leftArrow"
            />
          </div>
          <div>
            <img
              onClick={() => {
                setIndex(
                  index === imgs.length - 1 ? imgs.length - 1 : +index - 1
                );
              }}
              src="http://iiinjeju.com/_dj/img/btn_next.png"
              alt="rightArrow"
            />
          </div>
        </Container> */}
        <SlideShowSlider
          style={{ transform: `translate3d(${(index - 1) * 100}%, 0, 0)` }}
        >
          {imgs.map((img, index) => (
            <Slide key={index} src={img}></Slide>
          ))}
        </SlideShowSlider>
      </SlideShow>
    </>
  );
};

// const Container = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   z-index: 1;
//   top: 15rem;
//   div {
//     img {
//       width: 2.5rem;
//       cursor: pointer;
//       &:first-child {
//         margin-left: 1rem;
//       }
//       &:last-child {
//         margin-right: 1rem;
//       }
//     }
//   }
// `;

const SlideShow = styled.div`
  position: relative;
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

export default React.memo(Carousel);

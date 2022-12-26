import { css, keyframes } from "styled-components";

const justFadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const fadeInFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-3rem);
}
to {
  opacity: 1;
}
`;

const fadeInFromBottom = keyframes`
from {
  opacity: 0;
  transform: translateY(3rem);
}
to {
  opacity: 1;
}
`;

export const justFadeInAnimation = css`
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-name: ${justFadeIn};
  animation-fill-mode: forwards;
`;

export const fadeInFromLeftAnimation = css`
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeInFromLeft};
  animation-fill-mode: forwards;
`;

export const fadeInFromBottomAnimation = css`
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeInFromBottom};
  animation-fill-mode: forwards;
`;

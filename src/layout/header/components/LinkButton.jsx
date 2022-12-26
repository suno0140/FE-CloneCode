import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HoverBox from "./HoverBox";

const LinkButton = ({
  linkName,
  linkTo,
  fontsize,
  margin,
  hoveringFeature = false,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <LinkButtonForm
        margin={margin}
        fontsize={fontsize}
        onMouseOver={() => {
          setIsHovering(true);
        }}
        onMouseDown={() => {
          setIsHovering(false);
        }}
      >
        <Link to={linkTo}>{linkName}</Link>
        {/* <HoverBox /> */}
        {/* {hoveringFeature & isHovering && <HoverBox />} */}
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
    letter-spacing: 0.03rem;
    line-height: 1.5;
    font-weight: 400;
  }
`;

export default LinkButton;

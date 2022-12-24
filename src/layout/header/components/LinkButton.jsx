import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = ({ linkName, linkTo, fontSize, margin }) => {
  return (
    <LinkButtonForm margin={margin}>
      <Link to={linkTo} fontSize={fontSize}>
        {linkName}
      </Link>
    </LinkButtonForm>
  );
};

const LinkButtonForm = styled.div`
  margin: ${({ margin }) => margin || "0.1rem"};
  a {
    font-size: 0.2rem;
    letter-spacing: 0.03rem;
    line-height: 1.5;
    font-weight: 400;
  }
`;

export default LinkButton;

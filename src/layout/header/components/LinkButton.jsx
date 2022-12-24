import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = ({ linkName, linkTo, fontsize, margin }) => {
  return (
    <LinkButtonForm margin={margin} fontsize={fontsize}>
      <Link to={linkTo}>{linkName}</Link>
    </LinkButtonForm>
  );
};

const LinkButtonForm = styled.div`
  margin: ${({ margin }) => margin || "0.1rem"};
  font-size: ${({ fontsize }) => fontsize || "0.2rem"};
  a {
    letter-spacing: 0.03rem;
    line-height: 1.5;
    font-weight: 400;
  }
`;

export default LinkButton;

import React from "react";
import styled from "styled-components";

const SubCategory = ({ subcategory, onClick }) => {
  return <Box onClick={onClick}>{subcategory}</Box>;
};

const Box = styled.button`
  padding: 0.5rem 0.8rem;
  font-size: 0.4rem;
  background: none;
  border: 1px solid var(--color-light-gray);
  margin: 0 0.1rem 0 0.1rem;
  &:hover {
    background: var(--color-black);
    color: white;
  }
  &:active {
    background: var(--color-black);
    color: white;
  }
`;
export default React.memo(SubCategory);

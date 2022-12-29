import React from "react";
import ProductInfoImg from "../components/ProductInfoImg";
import CommentList from "../components/CommentList";

const ProductInfoScreen = ({ showInfo }) => {
  return (
    <div>
      {showInfo === 1 && (
        <>
          <ProductInfoImg />
        </>
      )}
      {showInfo === 2 && (
        <>
          <CommentList />
        </>
      )}
    </div>
  );
};

export default ProductInfoScreen;

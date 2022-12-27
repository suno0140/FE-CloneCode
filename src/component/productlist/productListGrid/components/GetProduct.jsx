import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  __getProductList,
  __getSubCategoryProductList,
} from "../../../../redux/modules/productListSlice";
import ItemScreen from "../../../common/item/ItemScreen";

const GetProduct = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const page = searchParams.get("page");
  const productList = useSelector((state) => state.productList.productList);

  useEffect(() => {
    category && dispatch(__getProductList({ category, page }));
    subcategory && dispatch(__getSubCategoryProductList({ subcategory, page }));
  }, [dispatch, category, page, subcategory]);

  return (
    <>
      {productList.map((product) => (
        <div key={product.name}>
          <ItemScreen
            thumbnailImgUrl={product.thumbnailImgUrl}
            name={product.name}
            price={product.price}
            caption={product.caption}
            linkTo={`/product/${product.productId}`}
          />
        </div>
      ))}
    </>
  );
};

export default GetProduct;

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getProductList } from "../../../../redux/modules/productListSlice";
import ItemScreen from "../../../common/item/ItemScreen";

const GetProduct = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  const productList = useSelector((state) => state.productList.productList);

  useEffect(() => {
    dispatch(__getProductList({ category, page }));
  }, [dispatch, category, page]);
  return productList.map((product) => (
    <div key={product.name}>
      <ItemScreen
        thumbnailImgUrl={product.thumbnailImgUrl}
        name={product.name}
        price={product.price}
        caption={product.caption}
      />
    </div>
  ));
};

export default GetProduct;

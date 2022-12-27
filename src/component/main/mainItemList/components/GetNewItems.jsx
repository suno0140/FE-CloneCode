import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getNewItems } from "../../../../redux/modules/mainNewItemSlice";
import ItemScreen from "../../../common/item/ItemScreen";

const GetNewItems = () => {
  const dispatch = useDispatch();
  const newItems = useSelector((state) => state.newItems.newItems);

  useEffect(() => {
    dispatch(__getNewItems());
  }, [dispatch]);
  return newItems.map((product) => (
    <div key={product.name}>
      <ItemScreen
        thumbnailImgUrl={product.thumbnailImgUrl}
        name={product.name}
        price={product.price}
        caption={product.caption}
        linkTo={`/product/${product.productId}`}
      />
    </div>
  ));
};

export default GetNewItems;

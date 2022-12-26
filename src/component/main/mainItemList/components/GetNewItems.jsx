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
        mediumThumbnailImgUrl={product.mediumThumbnailImgUrl}
        name={product.name}
        price={product.price}
        caption={product.caption}
      />
    </div>
  ));
};

export default GetNewItems;

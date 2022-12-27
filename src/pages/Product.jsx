import React, { useEffect, useState } from "react";
import ProductCoreInfoScreen from "../component/product/productCoreInfo/screen/ProductCoreInfoScreen";
import ProductInfoButtonList from "../component/product/productInfoButtonList/screen/ProductInfoButtonList";
import ProductInfoScreen from "../component/product/productInfo/screen/ProductInfoScreen";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __getProduct } from "../redux/modules/productSlice";

// import ProductInfo
const Product = () => {
  const [showInfo, setShowInfo] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <ProductCoreInfoScreen />
      <ProductInfoButtonList showInfo={showInfo} setShowInfo={setShowInfo} />
      <ProductInfoScreen showInfo={showInfo} />
    </div>
  );
};

export default Product;

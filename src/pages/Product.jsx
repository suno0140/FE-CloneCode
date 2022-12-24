import React, { useState } from "react";
import ProductCoreInfoScreen from "../component/product/productCoreInfo/screen/ProductCoreInfoScreen";
import ProductInfoButtonList from "../component/product/productInfoButtonList/screen/ProductInfoButtonList";
import ProductInfoScreen from "../component/product/productInfo/screen/ProductInfoScreen";

// import ProductInfo
const Product = () => {
  const [showInfo, setShowInfo] = useState(1);
  return (
    <div>
      <ProductCoreInfoScreen />
      <ProductInfoButtonList showInfo={showInfo} setShowInfo={setShowInfo} />
      <ProductInfoScreen showInfo={showInfo} />
    </div>
  );
};

export default Product;

import { configureStore } from "@reduxjs/toolkit";

import productList from "../modules/productListSlice";
import newItems from "../modules/mainNewItemSlice";
import signUpPost from "../modules/signUpSlice";
import product from "../modules/productSlice";
import header from "../modules/headerSlice";
import cart from "../modules/cartSlice";

const store = configureStore({
  reducer: {
    productList,
    newItems,
    signUpPost,
    product,
    header,
    cart,
  },
});

export default store;

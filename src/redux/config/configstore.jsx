import { configureStore } from "@reduxjs/toolkit";

import productList from "../modules/productListSlice";
import newItems from "../modules/mainNewItemSlice";
import signUpPost from "../modules/signUpSlice";
import product from "../modules/productSlice";

const store = configureStore({
  reducer: {
    productList,
    newItems,
    signUpPost,
    product,
  },
});

export default store;

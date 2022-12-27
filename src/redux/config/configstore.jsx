import { configureStore } from "@reduxjs/toolkit";

import productList from "../modules/productListSlice";
import newItems from "../modules/mainNewItemSlice";
import signUpPost from "../modules/signUpSlice";
import header from "../modules/headerSlice";

const store = configureStore({
  reducer: {
    productList,
    newItems,
    signUpPost,
    header,
  },
});

export default store;

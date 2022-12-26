import { configureStore } from "@reduxjs/toolkit";

import productList from "../modules/productListSlice";
import newItems from "../modules/mainNewItemSlice";
import signUpPost from "../modules/signUpSlice";

const store = configureStore({
  reducer: {
    productList,
    newItems,
    signUpPost,
  },
});

export default store;

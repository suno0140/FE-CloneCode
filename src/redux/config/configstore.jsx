import { configureStore } from "@reduxjs/toolkit";
import productList from "../modules/productListSlice";
import newItems from "../modules/mainNewItemSlice";

const store = configureStore({
  reducer: {
    productList,
    newItems,
  },
});

export default store;

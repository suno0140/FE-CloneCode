import { configureStore } from "@reduxjs/toolkit";
import productList from "../modules/productListSlice";

const store = configureStore({
  reducer: {
    productList,
  },
});

export default store;

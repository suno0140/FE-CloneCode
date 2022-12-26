import { configureStore } from "@reduxjs/toolkit";
import signUpPost from "../modules/signUpSlice";
// import productList from "../modules/productListSlice";

const store = configureStore({
  reducer: {
    // productList,
    // productListSlice,
    signUpPost,
  },
});

export default store;

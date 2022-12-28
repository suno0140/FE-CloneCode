import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  subCategoryList: [],
  productList: [],
  totalPage: 2,
  page: 1,
  pageList: [1],
};

//thunk
export const __getProductList = createAsyncThunk(
  "productList/getProductList",
  async ({ category, page }, thunkAPI) => {
    try {
      const { data } = await instanceApiV1.get(
        `products?category=${category}&page=${page}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getSubCategoryProductList = createAsyncThunk(
  "productList/getSubCategoryProductList",
  async ({ subcategory, page }, thunkAPI) => {
    try {
      const { data } = await instanceApiV1.get(
        `products?subcategory=${subcategory}&page=${page}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getProductList.fulfilled, (state, action) => {
      state.productList = action.payload.data;
      state.subCategoryList = action.payload.subCategoryList;
      state.pageList = action.payload.pageList;
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(__getProductList.rejected, (state, action) => {
      console.log(action.payload);
      alert(action.payload);
    });
    builder.addCase(__getSubCategoryProductList.fulfilled, (state, action) => {
      state.productList = action.payload.data;
      state.subCategoryList = action.payload.subCategoryList;
      state.pageList = action.payload.pageList;
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(__getSubCategoryProductList.rejected, (state, action) => {
      console.log(action.payload);
      alert(action.payload);
    });
  },
});

export const {} = productListSlice.actions;
export default productListSlice.reducer;

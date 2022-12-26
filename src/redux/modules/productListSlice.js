import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  productList: [],
  totalPage: 2,
  page: 1,
  pageList: [1, 2],
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

//slice
const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getProductList.fulfilled, (state, action) => {
      state.productList = action.payload.data;
    });
    builder.addCase(__getProductList.rejected, (state, action) => {});
  },
});

export const {} = productListSlice.actions;
export default productListSlice.reducer;

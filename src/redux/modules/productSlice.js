import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  product: {},
};
//thunk
export const __getProduct = createAsyncThunk(
  "product/getProduct",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceApiV1.get(`/products/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getProduct.fulfilled, (state, action) => {
      state.product = action.payload.data;
    });
    builder.addCase(__getProduct.rejected, (state, action) => {});
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;

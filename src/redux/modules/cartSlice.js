import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  cart: [],
};
//thunk
export const __getCart = createAsyncThunk(
  "cart/getCart",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`/cart`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.delete(`/cart`, payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getCart.fulfilled, (state, action) => {
      state.cart = action.payload.data;
    });
    builder.addCase(__deleteCart.fulfilled, (state, action) => {
      state.cart = action.payload.data;
    });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;

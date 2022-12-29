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
      const cartItemId = payload.cartItemId;
      const cartItem = { cartItemId: cartItemId };
      console.log(cartItem);
      const { data } = await baseURLApiV1.delete(`/cart`, cartItem);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __upCart = createAsyncThunk(
  "cart/upCart",
  async (payload, thunkAPI) => {
    try {
      const productId = payload.productId;
      const quantity = payload.quantity + 1;
      const cartInfo = { productId, quantity };
      const { data } = await baseURLApiV1.patch(`/cart`, cartInfo);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __downCart = createAsyncThunk(
  "cart/downCart",
  async (payload, thunkAPI) => {
    try {
      const productId = payload.productId;
      const quantity = payload.quantity - 1;
      const cartInfo = { productId, quantity };
      const { data } = await baseURLApiV1.patch(`/cart`, cartInfo);
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
    builder.addCase(__upCart.fulfilled, (state, action) => {
      state.cart = state.cart.map((upcart) => {
        if (upcart.productId === action.payload.data.productId) {
          return {
            ...upcart,
            quantity: action.payload.data.quantity,
            summation: action.payload.data.summation,
          };
        }
        return upcart;
      });
    });
    builder.addCase(__downCart.fulfilled, (state, action) => {
      state.cart = state.cart.map((downCart) => {
        if (downCart.productId === action.payload.data.productId) {
          return {
            ...downCart,
            quantity: action.payload.data.quantity,
            summation: action.payload.data.summation,
          };
        }
        return downCart;
      });
    });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;

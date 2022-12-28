import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

const initialState = {
  orderList: [],
};

export const __getOrderList = createAsyncThunk(
  "orderList/getOrderList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`orders`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postOrderList = createAsyncThunk(
  "orderList/postOrderList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.post(`orders`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const orderListSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getOrderList.fulfilled, (state, action) => {
      state.orderList = action.payload.data;
    });
    builder.addCase(__getOrderList.rejected, (state, action) => {
      console.log(action.payload);
      alert(action.payload);
    });
    builder.addCase(__postOrderList.fulfilled, (state, action) => {
      alert(action.payload.msg);
      state.orderList = action.payload.data;
    });
    builder.addCase(__postOrderList.rejected, (state, action) => {
      console.log(action.payload);
      alert(action.payload);
    });
  },
});

export const {} = orderListSlice.actions;
export default orderListSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  newItems: [],
};

//thunk
export const __getNewItems = createAsyncThunk(
  "newItems/getNewItems",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceApiV1.get(`products/newitems`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const mainNewItemSlice = createSlice({
  name: "newItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getNewItems.fulfilled, (state, action) => {
      state.newItems = action.payload.data;
    });
    builder.addCase(__getNewItems.rejected, (state, action) => {});
  },
});

export const {} = mainNewItemSlice.actions;
export default mainNewItemSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrlApiV1 } from "../../core";

const initialState = {
  signUp: {
    loginId: "",
    password: "",
    passwordcheck: "",
    name: "",
    email: "",
  },
  isLoading: false,
  result: null,
  error: null,
};

export const __postSignUp = createAsyncThunk(
  "signUpPost/postSignUp",
  async (payload, thunkAPI) => {
    try {
      const { data } = await serverUrlApiV1.post("/members/signup", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("회원가입에 실패하였습니다");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const signUpSlice = createSlice({
  name: "signUpPost",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    initializeForm: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(__postSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__postSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contents = action.payload;
        state.result = "success";
      })
      .addCase(__postSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeField, initializeForm } = signUpSlice.actions;
export default signUpSlice.reducer;

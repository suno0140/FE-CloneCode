import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApiV1 } from "../../core/api";

const initialState = {
  loginId: "",
  password: "",
  passwordcheck: "",
  name: "",
  email: "",
};
export const __postSignUp = createAsyncThunk(
  "signUpPost/postSignUp",
  async (payload, thunkAPI) => {
    const loginId = payload.loginId;
    const password = payload.password;
    const name = payload.name;
    const email = payload.email;
    const userInfo = { loginId, password, name, email };
    try {
      const { data } = await instanceApiV1.post("/members/signup", userInfo);
      console.log(data);
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
    changeField: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__postSignUp.fulfilled, (state, action) => {
        state.result = "success";
      })
      .addCase(__postSignUp.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { changeField, initializeForm } = signUpSlice.actions;
export default signUpSlice.reducer;

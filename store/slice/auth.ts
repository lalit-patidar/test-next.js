import { createSlice, createAsyncThunk, isPending } from "@reduxjs/toolkit";
import axios from "axios";

export interface AuthState {
  user: {
    userName: string;
    email: string;
    password: string;
    token: string;
    role: string;
  } | null;
  isFetching: boolean;
  loginError: boolean;
}

const initialState: AuthState = {
  user: {
    userName: "",
    email: "",
    password: "",
    token: "",
    role: "",
  },
  isFetching: false,
  loginError: false,
};

export const loginUser = createAsyncThunk("login", async (data) => {
  const response = await axios.post("http://localhost:3000/api/login", data);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.body;
      state.isFetching = false;
    });

    builder.addCase(loginUser.rejected, (state) => {
      state.loginError = true;
      state.isFetching = false;
    });
  },
});

export default authSlice.reducer;

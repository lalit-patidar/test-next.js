import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface FormState {
    formValues: {
        email: string,
        password: string,
      },
      formErrors: {
        email: string,
        password: string,
      },
      formValidity: {
        email: boolean,
        password: boolean,
      },
}

export interface PayloadData {
    name: string,
    value: string
}

const initialState: FormState = {
    formValues: {
      email: "",
      password: "",
    },
    formErrors: {
      email: "",
      password: "",
    },
    formValidity: {
      email: false,
      password: false,
    },
  };

// form validation will be there
const handleValidation = (target:any, state:any) => {
    const { name, value } = target;
    const isEmail = name === "email";
    const isPassword = name === "password";
    const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    state.formValidity[name] = value.length > 0;
    state.formErrors[name] = state.formValidity[name]
      ? ""
      : `${name} is required and cannot be empty`;
    if (state.formValidity[name]) {
      if (isEmail) {
        state.formValidity[name] = emailRegx.test(value);
        state.formErrors[name] = state.formValidity[name]
          ? ""
          : `${name} should be valid number`;
      }
  
      if (isPassword) {
        state.formValidity[name] = value.length >= 5;
        state.formErrors[name] = state.formValidity[name]
          ? ""
          : `${name} should be 5 characters minimum`;
      }
    }
  };  

export const loginFromSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    textInputChange: (state, action: PayloadAction<PayloadData>) => {
        state.formValues[action.payload.name] = action.payload.value;
        handleValidation(action.payload, state);
    },

    formValidation: (state, action: PayloadAction<any>) => {
        handleValidation(action.payload, state);
    },
  },
});

export const {formValidation, textInputChange} = loginFromSlice.actions

export default loginFromSlice.reducer;

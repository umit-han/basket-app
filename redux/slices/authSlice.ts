import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  errorSignin: [],
  signinFields: [],
  userDetailsFields: [],
};

var userTokenObj = {
  expiresIn: "",
  refreshToken: "",
  token: "",
};

export const postSignin = createAsyncThunk(
  "auth/postSignin",

  async (signinData, thunkAPI) => {
    try {
      const resp = await axios.post(`http://localhost:9000/login`, signinData);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",

  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(`http://localhost:9000/users`, {
        headers: {
          Authorization: `bearer ${userTokenObj.token}`,
        },
      });
      return resp.data;
    } catch (errorUserDetails) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState(state: any) {
      state.signinFields = [];
      state.userDetailsFields = [];
    },
  },
  extraReducers: {
    // post signin
    [postSignin.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [postSignin.fulfilled as any]: (state: any, action: any) => {
      state.errorSignin = action.payload;
      state.signinFields = action.payload;
      userTokenObj = state.signinFields;
    },
    [postSignin.rejected as any]: (state: any, action: any) => {
      state.errorSignin = action.payload;
    },

    // get user details
    [getUserDetails.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getUserDetails.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.errorUserDetails = false;
      state.userDetailsFields = action.payload;
    },
    [getUserDetails.rejected as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.errorUserDetails = true;
    },
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;

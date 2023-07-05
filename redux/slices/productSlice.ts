import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  getproductsData: [],
};

export const getProducts = createAsyncThunk(
  "auth/postSignin",

  async (signinData, thunkAPI) => {
    try {
      const resp = await axios.post(
        `http://localhost:9000/products`,
        signinData
      );
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    // get product
    [getProducts.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.getproductsData = action.payload;
    },
    [getProducts.rejected as any]: (state: any, action: any) => {
      state.errorProducts = action.payload;
    },
  },
});

export default productsSlice.reducer;

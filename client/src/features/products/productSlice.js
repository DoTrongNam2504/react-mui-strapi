import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:1337/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (url, { rejectWithValue }) => {
    const response = await axios.get(`${BASE_URL}/${url}`);
    try {
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false, // đổi trạng thái về loading để báo cho người dùng biết rằng đang có quá trình loading dữ liệu
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice;

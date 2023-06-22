import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (url, { rejectWithValue }) => {
    const response = await axios.get(`${BASE_URL}/${url}?populate=*`);
    try {
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);




export const addCategories = createAsyncThunk(
  "todos/addCategories",
  async (data,url, { rejectWithValue }) => {
    console.log("Gọi đến hàm add data rồi");
    const response = await axios.post(`${BASE_URL}/${url}?populate=*`, {
      data,
    });
    try {
      console.log("Data  mới là : ", data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false, // đổi trạng thái về loading để báo cho người dùng biết rằng đang có quá trình loading dữ liệu
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(addCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice;

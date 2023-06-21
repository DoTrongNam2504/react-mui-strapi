import { configureStore, combineReducers } from '@reduxjs/toolkit';
import globalSlice from "../features/globalSlice.js";
import productSlice from "../features/products/productSlice.js";
import categorySlice from "../features/categories/categorySlice"; 
const rootReducer = combineReducers({
  global: globalSlice.reducer,
  product: productSlice.reducer,
  category: categorySlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});

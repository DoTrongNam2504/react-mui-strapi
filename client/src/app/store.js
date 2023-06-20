import { configureStore, combineReducers } from '@reduxjs/toolkit';
import globalSlice from "../features/globalSlice.js";
import productSlice from "../features/products/productSlice.js";
const rootReducer = combineReducers({
  global: globalSlice.reducer,
  product: productSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

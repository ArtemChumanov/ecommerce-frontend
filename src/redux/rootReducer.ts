import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import categorySlice from "./categories/categorySlice";

export const rootReducer = combineReducers({
  products: productsSlice,
  categories: categorySlice,
});

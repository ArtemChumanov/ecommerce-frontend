import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { mockCategory } from "../../utils/mockData";
import axios from "axios";

export const fetchGetCategory = createAsyncThunk(
  "category/fetchAllCategory",
  async (payload?: PayloadAction<any>) => {
    try {
      const { data } = await axios.get("http://localhost:3004/category");
      return data;
    } catch (e) {}
  }
);
export const fetchBrands = createAsyncThunk(
  "category/fetchAllBrands",
  async (payload?: PayloadAction<any>) => {
    try {
      const { data } = await axios.get("http://localhost:3004/brands");
      return data;
    } catch (e) {}
  }
);

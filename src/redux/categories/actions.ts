import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../config/config";

export const fetchGetCategory = createAsyncThunk(
  "category/fetchAllCategory",
  async (payload?: PayloadAction<any>) => {
    const { data } = await axios.get(`${url}/category`);
    return data;
  }
);

export const fetchBrands = createAsyncThunk(
  "category/fetchAllBrands",
  async (payload?: PayloadAction<any>) => {
    const { data } = await axios.get(`${url}/brands`);
    return data;
  }
);

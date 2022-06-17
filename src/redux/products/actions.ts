import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { mockComments, MockDataProducts } from "../../utils/mockData";
import axios from "axios";
import { url } from "../../config/config";

export const fetchGetProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (payload?: PayloadAction<any>) => {
    const { data } = await axios.get(`${url}/products`);
    return data;
  }
);

export const fetchCurrentProduct1 = createAsyncThunk(
  "products/fetchCurrentProduct",
  async (payload: string) => {
    const { data } = await axios.get(`${url}/products/${payload}`);
    return data;
  }
);

export const fetchReviewByProduct1 = createAsyncThunk(
  "products/fetchReviewsByProduct",
  async (payload?: PayloadAction<number>) => {
    //axios Request
    const { data } = await axios.get(`${url}/comments`);
    return data;
  }
);
export const addReviewByProduct = createAsyncThunk(
  "products/addReviewByProduct",
  async (payload?: any) => {
    //axios Request
    try {
      const { data } = await axios.post(`${url}/comments`, payload);
      return data;
    } catch (e) {}
  }
);
export const updateReviewByProduct = createAsyncThunk(
  "products/updateReviewByProduct",
  async (payload?: any) => {
    //axios Request
    try {
      const { data } = await axios.put(
        `${url}/comments/${payload?.id}`,
        payload
      );
      return data;
    } catch (e) {}
  }
);

export const fetchQuestionByProduct = createAsyncThunk(
  "products/fetchQuestionByProduct",
  async (payload?: PayloadAction<number>) => {
    //axios Request
    try {
      // const data = MockDataProducts;
      return mockComments;
    } catch (e) {}
  }
);

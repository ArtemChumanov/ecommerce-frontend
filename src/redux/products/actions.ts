import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { mockComments, MockDataProducts } from "../../utils/mockData";
import axios from "axios";

export const fetchGetProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (payload?: PayloadAction<any>) => {
    //axios Request
    try {
      const { data } = await axios.get(" http://localhost:3004/products");
      return data;
    } catch (e) {}
  }
);

export const fetchCurrentProduct = createAsyncThunk(
  "products/fetchCurrentProduct",
  async (payload: string) => {
    //axios Request
    try {
      const { data } = await axios.get(
        `http://localhost:3004/products/${payload}`
      );
      return data;
    } catch (e) {}
  }
);

export const fetchReviewByProduct = createAsyncThunk(
  "products/fetchReviewsByProduct",
  async (payload?: PayloadAction<number>) => {
    //axios Request
    try {
      const { data } = await axios.get(`http://localhost:3004/comments`);
      return data;
    } catch (e) {}
  }
);
export const addReviewByProduct = createAsyncThunk(
  "products/addReviewByProduct",
  async (payload?: any) => {
    //axios Request
    try {
      console.log(payload);
      debugger;
      const { data } = await axios.post(
        `http://localhost:3004/comments`,
        payload
      );
      return data;
    } catch (e) {}
  }
);
export const updateReviewByProduct = createAsyncThunk(
  "products/updateReviewByProduct",
  async (payload?: any) => {
    //axios Request
    try {
      console.log(payload);
      debugger;
      const { data } = await axios.put(
        `http://localhost:3004/comments/${payload?.id}`,
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

import { BrandType, CategoryType } from "../../types/types";
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import update from "immutability-helper";
import { fetchBrands, fetchGetCategory } from "./actions";

interface ICategoryState {
  isLoading: boolean;
  categories: CategoryType[];
  brands: BrandType[];
}

const initialState: ICategoryState = {
  isLoading: true,
  categories: [],
  brands: [],
};

const productSlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    addBrands: (state: ICategoryState, action: PayloadAction<BrandType>) => {
      state.brands?.push({
        id: String(state.brands?.length + 1),
        ...action.payload,
      });
    },
    editBrands: (
      state: ICategoryState,
      { payload }: PayloadAction<BrandType>
    ) => {
      const index = state.brands?.findIndex((el) => el.id === payload.id);
      state.brands = update(state.brands, {
        [index as number]: { $merge: payload },
      });
    },
    deleteBrands: (
      state: ICategoryState,
      { payload }: PayloadAction<number | undefined>
    ) => {
      state.brands =
        state.brands?.filter((_, index) => index !== payload) || [];
    },
    addCategory: (
      state: ICategoryState,
      action: PayloadAction<CategoryType>
    ) => {
      state.categories?.push({
        id: String(state.categories?.length + 1),
        ...action.payload,
      });
    },
    editCategory: (
      state: ICategoryState,
      { payload }: PayloadAction<CategoryType>
    ) => {
      const index = state.categories?.findIndex((el) => el.id === payload.id);
      state.categories = update(state.categories, {
        [index as number]: { $merge: payload },
      });
    },
    deleteCategory: (
      state: ICategoryState,
      { payload }: PayloadAction<number | undefined>
    ) => {
      state.categories =
        state.categories?.filter((_, index) => index !== payload) || [];
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<ICategoryState>) => {
    builder.addCase(fetchGetCategory.pending, (state: ICategoryState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchGetCategory.fulfilled,
      (state: ICategoryState, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
      }
    );

    builder.addCase(fetchBrands.pending, (state: ICategoryState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchBrands.fulfilled,
      (state: ICategoryState, { payload }) => {
        state.brands = payload;
        state.isLoading = false;
      }
    );
  },
});

export const {
  addCategory,
  editCategory,
  deleteCategory,
  addBrands,
  editBrands,
  deleteBrands,
} = productSlice.actions;

export default productSlice.reducer;

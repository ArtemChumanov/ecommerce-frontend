import { ProductsType, QuestionType } from "../../types/types";
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import update from "immutability-helper";
import {
  fetchCurrentProduct1,
  fetchGetProducts,
  fetchReviewByProduct1,
} from "./actions";

import _ from "lodash";

interface IProductsState {
  isLoading: boolean;
  products: ProductsType[] | null | any;
  currentProduct: ProductsType | null | any;
  comments: QuestionType[] | null | any;
  openShoppingCart: boolean;
  shoppingCartList: any[];
  showGroupedProduct: any[];
}

const initialState: IProductsState = {
  isLoading: true,
  openShoppingCart: false,
  shoppingCartList: [],
  products: [],
  showGroupedProduct: [],
  currentProduct: null,
  comments: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    chooseProduct: (
      state: IProductsState,
      { payload }: PayloadAction<ProductsType>
    ) => {
      state.currentProduct = payload;
    },
    addProduct: (
      state: IProductsState,
      action: PayloadAction<ProductsType>
    ) => {
      state.products?.push({
        id: String(state.products?.length + 1),
        ...action.payload,
      });
    },
    editProduct: (
      state: IProductsState,
      { payload }: PayloadAction<ProductsType>
    ) => {
      const index = state.products?.findIndex((el) => el.id === payload.id);
      state.products = update(state.products, {
        [index as number]: { $merge: payload },
      });
    },
    deleteProduct: (
      state: IProductsState,
      { payload }: PayloadAction<number | undefined>
    ) => {
      state.products =
        state.products?.filter((_, index) => index !== payload) || [];
    },
    setOpenShoppingCart: (state: IProductsState) => {
      state.openShoppingCart = true;
    },
    closeShoppingCart: (state: IProductsState) => {
      state.openShoppingCart = false;
    },
    addProductToShoppingCart: (
      state: IProductsState,
      { payload }: PayloadAction<any>
    ) => {
      const currentProduct = state.shoppingCartList.findIndex(
        (el) => el.id === payload.id
      );
      currentProduct === -1
        ? state.shoppingCartList.push(payload)
        : (state.shoppingCartList = update(state.shoppingCartList, {
            [currentProduct as number]: {
              $merge: {
                ...payload,
                count:
                  state.shoppingCartList[currentProduct].count + payload.count,
                price:
                  state.shoppingCartList[currentProduct].price + payload.price,
              },
            },
          }));
    },
    removeProductFromShoppingCart: (
      state: IProductsState,
      { payload }: PayloadAction<string | undefined>
    ) => {
      state.shoppingCartList = _.remove(
        state.shoppingCartList,
        (el) => el.id !== payload
      );
    },
    productsGroupByCategory: (
      state: IProductsState,
      { payload }: PayloadAction<any>
    ) => {
      state.showGroupedProduct = state.products.filter(
        (p) => p.category === payload.category
      );
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<IProductsState>) => {
    builder.addCase(fetchGetProducts.pending, (state: IProductsState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchGetProducts.fulfilled,
      (state: IProductsState, { payload }) => {
        state.products = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchGetProducts.rejected, (state: IProductsState) => {
      state.isLoading = true;
    });
    /*********************/
    builder.addCase(fetchCurrentProduct1.pending, (state: IProductsState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCurrentProduct1.fulfilled,
      (state: IProductsState, { payload }) => {
        state.currentProduct = payload;
        state.isLoading = false;
      }
    );

    // builder.addCase(
    //   fetchCurrentProduct.rejected,
    //   (state: IProductsState, { payload }) => {
    //     state.isLoading = true;
    //   }
    // );
    //******************//
    builder.addCase(fetchReviewByProduct1.pending, (state: IProductsState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchReviewByProduct1.fulfilled,
      (state: IProductsState, { payload }) => {
        state.comments = payload;
        state.isLoading = false;
      }
    );
  },
});

const selectProduct = (state: RootState) => state.products;

export const {
  addProduct,
  editProduct,
  deleteProduct,
  chooseProduct,
  setOpenShoppingCart,
  closeShoppingCart,
  addProductToShoppingCart,
  removeProductFromShoppingCart,
  productsGroupByCategory,
} = productSlice.actions;

export default productSlice.reducer;

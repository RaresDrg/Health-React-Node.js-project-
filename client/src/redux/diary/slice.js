import { createSlice } from "@reduxjs/toolkit";
import {
  getDiaryDateStats,
  addDiaryDateProduct,
  deleteDiaryDateProduct,
} from "./operations";

const initialState = {
  date: new Date().toLocaleDateString(),
  dailyRate: null,
  left: null,
  consumed: null,
  rateOfNormal: null,
  products: [],

  error: null,
  isLoading: false,

  productToDelete: null,
};

const utils = {
  handlePending: (state) => {
    state.isLoading = true;
  },

  handleRejected: (state, action) => {
    state.isLoading = false;
    state.error =
      action.payload?.response?.data?.message || "Internal server error";
  },
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    setCurrentDate: (state, action) => {
      state.date = action.payload;
    },
    setProductToDelete: (state, action) => {
      state.productToDelete = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // *Get Diary Date
      .addCase(getDiaryDateStats.pending, utils.handlePending)
      .addCase(getDiaryDateStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload?.response?.data?.message || "Internal server error";
        state.products = [];
        state.dailyRate = null;
        state.left = null;
        state.consumed = null;
        state.rateOfNormal = null;
      })
      .addCase(getDiaryDateStats.fulfilled, (state, action) => {
        state.dailyRate = action.payload.data.dailyRate;
        state.left = action.payload.data.left;
        state.consumed = action.payload.data.consumed;
        state.rateOfNormal = action.payload.data.rateOfNormal;
        state.products = action.payload.data.products;

        state.isLoading = false;
        state.error = null;
      })

      // *Add Diary Date Product
      .addCase(addDiaryDateProduct.pending, utils.handlePending)
      .addCase(addDiaryDateProduct.rejected, utils.handleRejected)
      .addCase(addDiaryDateProduct.fulfilled, (state, action) => {
        state.dailyRate = action.payload.data.dailyRate;
        state.left = action.payload.data.left;
        state.consumed = action.payload.data.consumed;
        state.rateOfNormal = action.payload.data.rateOfNormal;
        state.products = action.payload.data.products;

        state.isLoading = false;
        state.error = null;
      })

      // *Delete Diary Date Product
      .addCase(deleteDiaryDateProduct.pending, utils.handlePending)
      .addCase(deleteDiaryDateProduct.rejected, utils.handleRejected)
      .addCase(deleteDiaryDateProduct.fulfilled, (state, action) => {
        state.dailyRate = action.payload.data.dailyRate;
        state.left = action.payload.data.left;
        state.consumed = action.payload.data.consumed;
        state.rateOfNormal = action.payload.data.rateOfNormal;
        state.products = action.payload.data.products;

        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { setCurrentDate, setProductToDelete } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;

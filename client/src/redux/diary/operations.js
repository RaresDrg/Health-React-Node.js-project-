import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getDiaryDateStats = createAsyncThunk(
  "diary/getDiaryDate",
  async (currentDate, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get(`/api/diary/dates/${currentDate}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getPossibleProducts = async () => {
  try {
    const response = await axios.get("/api/diary/possibleProducts");
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};

const addDiaryDateProduct = createAsyncThunk(
  "diary/addDiaryDateProduct",
  async (productData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const currentDate = new Date(state.diary.date).toISOString();

      const response = await axios.post(
        `/api/diary/dates/${currentDate}/products`,
        productData
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteDiaryDateProduct = createAsyncThunk(
  "diary/deleteDiaryDateProduct",
  async (productId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const currentDate = new Date(state.diary.date).toISOString();

      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.delete(
        `/api/diary/dates/${currentDate}/products/${productId}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export {
  getDiaryDateStats,
  getPossibleProducts,
  addDiaryDateProduct,
  deleteDiaryDateProduct,
};

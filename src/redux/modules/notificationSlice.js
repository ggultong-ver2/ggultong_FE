import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../lib/axios";
import axios from "axios";

export const __getNotification = createAsyncThunk(
  "getNotification",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.get("/notifications");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const notification = createSlice({
  name: "notification",
  initialState: {
    notifications: [{ id: 0, content: {}, status: false, url: "" }],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [__getNotification.pending]: (state) => {
      state.isLoading = true;
    },
    [__getNotification.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action.payload", action.payload);
      state.notifications = action.payload;
    },
    [__getNotification.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
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
  reducers: {
    __addNotification(state, action) {
      state.notifications.data.unshift(action.payload);
    },
    __readNotification(state, action) {
      const a = state.notifications.data.findIndex(
        (v) => v.id === action.payload
      );
      state.notifications.data[a].status = true;
    },
    __deleteNotification(state, action) {
      const a = state.notifications.data.findIndex(
        (v) => v.id === action.payload
      );
      state.notifications.data.splice(a, 1);
    },
    __deleteNotification(state, action) {
      state.notifications.data.splice(0, state.notifications.data.length);
    },
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

export const {
  __addNotification,
  __readNotification,
  __deleteNotification,
  __deleteNotifications,
} = notification.actions;

export const __NreadNotification = createAsyncThunk(
  "NreadNotification",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.get("/notifications/count");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const NreadNotificationSlice = createSlice({
  name: "NreadNotification",
  initialState: {
    NreadNotifications: {
      data: { count: 0 },
      error: null,
      success: true,
    },
    isLoading2: false,
    error2: null,
  },
  reducers: {
    __minusNotification(state, action) {
      state.NreadNotifications.data.count -= action.payload;
    },
    __plusNotification(state, action) {
      state.NreadNotifications.data.count += action.payload;
    },
  },
  extraReducers: {
    [__NreadNotification.pending]: (state) => {
      state.isLoading2 = true;
    },
    [__NreadNotification.fulfilled]: (state, action) => {
      state.isLoading2 = false;
      state.NreadNotifications = action.payload;
    },
    [__NreadNotification.rejected]: (state, action) => {
      state.isLoading2 = false;
      state.error2 = action.payload;
    },
  },
});

export const { __minusNotification, __plusNotification } =
  NreadNotificationSlice.actions;

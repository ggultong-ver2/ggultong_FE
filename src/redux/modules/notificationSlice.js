import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, apis } from "../../lib/axios";
import axios from "axios";
import { async } from "q";
import thunk from "redux-thunk";

const initialState = {
  notifications: {
    id: 0,
    content: "",
    status: false,
    url: "",
  },
  isLoading: false,
  error: null,
};

// export const __getNotification = createAsyncThunk(
//   "getNotification",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await baseURL.get("/notifications");
//       console.log(data.data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __deleteNotification = createAsyncThunk(
  "deleteNotification",
  async (payload, thunkAPI) => {
    try {
      console.log("payload:", payload);
      await apis.deleteNotification(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: {
    // [__getNotification.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getNotification.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   console.log("action.payload", action.payload);
    //   state.notifications = action.payload;
    //   console.log(state);
    // },
    // [__getNotification.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    [__deleteNotification.pending]: (state) => {
      state.isLoading = true;
      console.log("state", state);
    },
    [__deleteNotification.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("state", state.notifications);
      console.log("action:", action);
      state.notifications = newList;
      const newList = state.notifications.filter((post) => {
        console.log("post", post);
        return Number(post.id) !== Number(action.payload);
      });
      console.log(newList);
      state.notifications = {
        id: 0,
        content: "",
        status: false,
        url: "",
      };
    },
    [__deleteNotification.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default notificationSlice.reducer;
export const {} = notificationSlice.actions;

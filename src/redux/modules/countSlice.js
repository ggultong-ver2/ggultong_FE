import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { apis, baseURL } from "../../lib/axios";

const initialState = {
  mypageCount: [],

  error: null,
  isLoading: false,
};

export const __getMypageCount = createAsyncThunk(
  "getMypageCount",
  async (payload, thunkAPI) => {
    try {
      const res = await baseURL.get(`/mypage/myPostCount`, "", {
        headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
      });
      console.log("res:", res.data);

      //   const data = await apis.getMypageCount();

      //   console.log("data: ", data.data);
      console.log("payload:", payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMypageCount]: (state) => {
      state.isLoading = true;
    },
    [__getMypageCount]: (state, action) => {
      state.isLoading = false;
      console.log("action", action);
      state.counter = action.payload;
      console.log("action::", action);
    },
    [__getMypageCount]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default countSlice.reducer;

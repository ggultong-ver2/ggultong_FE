import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis, baseURL } from "../../lib/axios";

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      const [addComment, postId] = payload;
      const newComment = { ...addComment, postId: postId };
      //   const data = await apis.createComment(payload);
      await baseURL.post(`/comment/${postId}`, newComment);
      //   console.log("data:", data);
      console.log("newComment:", newComment);
      return thunkAPI.fulfillWithValue(newComment);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      console.log("payload:", payload);
      const data = await apis.deleteComment(payload);
      console.log(data);
      console.log("deletepayload:", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editComment = createAsyncThunk(
  "editComment",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.put(
        `/api/comment/${payload.postId}/comment/${payload.commentId}`,
        payload.editComment
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action.payload:", action.payload);
      state.content.push(action.payload);
      console.log("state:", state);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteComment.pending]: (state) => {
      state.isLoadig = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoadig = false;
      state.content = state.content.filter(
        (comment) => comment.id !== action.payload.id
      );
      console.log("state.content:", state.content);
      console.log(action.payload);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action.payload.response.data.errorMessage);
      alert(action.payload.response.data.errorMessage);
    },

    [__editComment.pending]: (state, action) => {
      // state.isLoading = true;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.comment.findIndex(
        (comment) => comment.commentId === action.payload.commentId
      );
      state.comment.splice(index, 1, action.payload);
    },

    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.response.data.errorMessage);
    },

    // [__getComment.pending]: (state) => {
    //   state.isLoadig = true;
    // },
    // [__getComment.fulfilled]: (state, action) => {
    //   state.isLoadig = false;
    //   state.comment = action.payload;
    // },
    // [__getComment.rejected]: (state, action) => {
    //   state.isLoadig = false;
    //   state.error = action.payload;
    // },
  },
});

// export const {} = commentSlice.actions;
export default commentSlice.reducer;

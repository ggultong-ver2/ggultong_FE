// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { apis, baseURL } from "../../lib/axios";

// const initialState = {
//   comment: [],
//   isLoading: false,
//   error: null,
// };

// export const __getComment = createAsyncThunk(
//   "getComment",
//   async (payload, thunkAPI) => {
//     try {
//       // const data = await apis.get(`/api/posts/${payload.postId}`);
//       const data = await baseURL.get(`/api/comment/${payload.postId}`);
//       console.log(data.data.commentList);
//       return thunkAPI.fulfillWithValue(data.data.commentList);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __addComment = createAsyncThunk(
//   "addComment",
//   async (payload, thunkAPI) => {
//     try {
//       const comment = payload.comment;
//       // const data = await apis.createPost(payload);
//       const data = await baseURL.post(`/api/comment/${payload.postid}`, {
//         comment: comment
//       });
//       console.log(data.data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __deleteComment = createAsyncThunk(
//   "deleteComment",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await baseURL.delete(
//         `/api/comment/${payload}`
//       );
//       console.log(data);
//       return thunkAPI.fulfillWithValue(payload);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __editComment = createAsyncThunk(
//   "editComment",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await baseURL.put(
//         `/api/comment/${payload.postId}/comment/${payload.commentId}`,
//         payload.editComment
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const commentSlice = createSlice({
//   name: "comment",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [__addComment.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__addComment.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.comment.push(action.payload);
//     },
//     [__addComment.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     [__deleteComment.pending]: (state) => {
//       state.isLoadig = true;
//     },
//     [__deleteComment.fulfilled]: (state, action) => {
//       state.isLoadig = false;
//       state.comment = state.comment.filter(
//         (comment) => comment.commentId !== action.payload.commentId
//       );
//     },
//     [__deleteComment.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//       // console.log(action.payload.response.data.errorMessage);
//       alert(action.payload.response.data.errorMessage);
//     },

//     [__editComment.pending]: (state, action) => {
//       // state.isLoading = true;
//     },
//     [__editComment.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       const index = state.comment.findIndex(
//         (comment) => comment.commentId === action.payload.commentId
//       );
//       state.comment.splice(index, 1, action.payload);
//     },

//     [__editComment.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//       alert(action.payload.response.data.errorMessage);
//     },

//     [__getComment.pending]: (state) => {
//       state.isLoadig = true;
//     },
//     [__getComment.fulfilled]: (state, action) => {
//       state.isLoadig = false;
//       state.comment = action.payload;
//     },
//     [__getComment.rejected]: (state, action) => {
//       state.isLoadig = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {} = commentSlice.actions;
// export default commentSlice.reducer;
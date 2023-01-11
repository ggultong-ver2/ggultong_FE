import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const __postComment = createAsyncThunk(
  "postComment",
  async (payload, thunkAPI) => {
    try {
      const { post } = thunkAPI.getState();
      let newPost = post.post.find((post) => {
        return post.id === payload.id;
      });

      let maxNum = 1;
      if (newPost !== undefined && newPost.comment.length >= 1) {
        maxNum = newPost.comment.reduce((max, curr) =>
          max > curr ? max : curr
        );
      }
      const newComment = {
        commentId: maxNum.commentId === undefined ? 1 : maxNum.commentId + 1,
        commentContent: payload.commentContent,
      };

      newPost = {
        ...newPost,
        comment: [...newPost.comment, newComment],
      };
      const data = await axios.put(
        `http://localhost:3000/post/${payload.id}`,
        newPost
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put(
        `http://localhost:3100/post/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
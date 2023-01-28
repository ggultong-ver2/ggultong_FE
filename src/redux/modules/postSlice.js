import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis, baseURL } from "../../lib/axios";
import { current } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  login: [],
  signup: [],
  categoryPosts: [],
  details: {
    title: "",
    content: "",
    id: 0,
    comment: {},
    isLikedPost: false,
    likePostSum: 0,
  },
  // patch:[],
  error: null,
  isLoading: false,
};

// 데이터 불러오기
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getPost();
      console.log("payload: ", payload);
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const __addComment = createAsyncThunk(
//   "addComment",
//   async (payload, thunkAPI) => {
//     try {
//       const [addComment, postId] = payload;
//       const newComment = { ...addComment, postId: postId };
//       //   const data = await apis.createComment(payload);
//       await baseURL.post(`/comment/${postId}`, newComment);
//       //   console.log("data:", data);
//       console.log("newComment:", newComment);
//       return thunkAPI.fulfillWithValue(newComment);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    const [addComment, postId] = payload;

    const newComment = { ...addComment, postId: postId };
    // console.log(comment,postId);
    try {
      const data = await baseURL.post(`/comment/${postId}`, newComment);
      console.log("ssss::", data);
      // thunkAPI.dispatch(__getComment(postId));
      // 댓글을 추가하고 댓글 데이터를 가져옴
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
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
export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getComment();
      console.log("payload: ", payload);
      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 해당 아이디 값 데이터 불러오기 (안먹힘....)
export const __getIdPost = createAsyncThunk(
  "getIdPost",
  async (payload, thunkAPI) => {
    // console.log("payload", payload);
    try {
      const data = await apis.getIdPost(payload);
      //const data = await axios.get(`http://localhost:3001/postss/${payload}`);
      // console.log("payload: ", payload);
      // console.log("getIddata:: ", data);
      // const getId = data.data.filter((recipe) => recipe.id === payload)[0];
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// 데이터 추가
export const __addPost = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    try {
      console.log("payload:::", payload);
      const data = await apis.createPost(payload);
      //const data = await axios.post("http://localhost:3001/postss", payload, {
      //headers: { "Content-Type": "multipart/form-data" },
      // });
      console.log("payload: ", payload);
      console.log("addpostdata::: ", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// 데이터 삭제
export const __deletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    try {
      console.log("payload: ", payload);
      const data = await apis.deletePost(payload);
      //const data = await axios.delete(
      // `http://localhost:3001/postss/${payload}`
      //);
      console.log("data: ", data);
      //alert(data.data.msg);
      // if (data.data.statusCode === 400) {
      //   alert(data.data.msg);
      //   return;
      // }
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// 데이터 수정
export const __editPost = createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    try {
      const { id, formdata } = payload;
      console.log("payload: ", payload);
      const data = await apis.editPost(id, formdata);
      //const data = await axios.patch(`http://localhost:3001/postss/${payload}`);

      console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const __postLike = createAsyncThunk(
  "postLike",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.post(
        `/like/post/${payload}`,
        {},
        {
          headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
        }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data?.status);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 카테고리별 get
export const __getCategoryPost = createAsyncThunk(
  "getCategoryPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.getCategoryPost(payload);
      console.log("categorydata:", data);
      console.log(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//마이페이지 수정
export const __patchPost = createAsyncThunk(
  "patchPost",
  async (payload, thunkAPI) => {
    try {
      const { nickname, profileImg } = payload;
      const formData = new FormData();

      formData.append(
        "profileImg",
        profileImg === "" ? new File([], "") : profileImg
      );
      formData.append("nickname", nickname);
      //entries
      // appen 키값 file 중요! 백엔드와 맞춰야함!

      const data = await apis.patchPost(formData);
    } catch (error) {
      console.log("err", error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // 리스트 불러오기 ---------------
    [__getPost.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청 시작-> 로딩 true 변경합니다.
    },
    [__getPost.fulfilled]: (state, action) => {
      // action으로 받아온 객체를 store에 있는 값에 넣어준다
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // 에러 발생-> 네트워크 요청은 끝,false
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__patchPost.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청 시작-> 로딩 true 변경합니다.
    },
    [__patchPost.fulfilled]: (state, action) => {
      // action으로 받아온 객체를 store에 있는 값에 넣어준다
      state.isLoading = false;
      state.post = action.payload;
    },
    [__patchPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // 에러 발생-> 네트워크 요청은 끝,false
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // top5 데이터 가져오기

    // [__topPost.pending]: (state) => {
    //   state.isLoading = true;
    //   // 네트워크 요청 시작-> 로딩 true 변경합니다.
    // },
    // [__topPost.fulfilled]: (state, action) => {
    //   // action으로 받아온 객체를 store에 있는 값에 넣어준다
    //   state.isLoading = false;
    //   state.posts = action.payload;
    // },
    // [__topPost.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    //   // 에러 발생-> 네트워크 요청은 끝,false
    //   // catch 된 error 객체를 state.error에 넣습니다.
    // },

    // 해당 id 리스트만 불러오기
    [__getIdPost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getIdPost.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.details = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log("action.payload: ", action.payload);
      // console.log("state.details:", state.details);
      //console.log("state.posts: ", state.posts);
    },
    [__getIdPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 레시피 추가
    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      // 액션으로 받은 값 = payload 추가해준다.
      console.log("action.payload: ", action.payload);
      state.isLoading = false;
      console.log(current(state));
      const newList = [action.payload, ...current(state.categoryPosts)];
      state.categoryPosts = newList;
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 게시글 삭제 ------------------
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      // 미들웨어를 통해 받은 action값이 무엇인지 항상 확인한다
      console.log("action: ", action.payload);
      state.isLoading = false;
      state.details = state.details.filter(
        (post) => post.id !== action.payload
      );
      console.log("state------>", state);
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 게시글 수정
    [__editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__editPost.fulfilled]: (state, action) => {
      // console.log('state-store값',state.diary)
      console.log("action-서버값", action);
      state.isLoading = false;
      console.log(action.payload.formdata);
      state.details = state.details.map((detail) =>
        detail.id === action.payload.id
          ? {
              ...detail,
              title: action.payload.formdata.title,
              content: action.payload.formdata.content,
              file: action.payload.formdata.imagefile,
              category: action.payload.formdata.category,
            }
          : detail
      );
      // state.recipes = action.payload.recipe
      // const index = state.recipes.findIndex(
      //   (recipe) => recipe.id === action.payload[0]
      // );
      // state.recipes.splice(index, 1, action.payload[1]);
    },
    [__editPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 좋아요 토글
    [__postLike.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLike.fulfilled]: (state, action) => {
      if (action.payload === "true") {
        state.details.isLikedPost = true;
        state.details.likePostSum = state.details.likePostSum + 1;
      } else {
        state.details.isLikedPost = false;
        state.details.likePostSum = state.details.likePostSum - 1;
      }
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__postLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getCategoryPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCategoryPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categoryPosts = action.payload;
    },
    [__getCategoryPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action.payload:", action.payload);
      state.details.comment.push(action.payload);
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
      state.details.comment.pop(action.payload);
      // state.details.comment = state.details.comment.filter(
      //   (comment) => comment.id !== action.payload.id
      // );
      console.log("state.details.comment:", state.details.comment);
      console.log(action.payload);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action.payload.response.data.errorMessage);
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
    [__getComment.pending]: (state) => {},
    [__getComment.fulfilled]: (state, action) => {
      state.comment = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },

  // // 아이디 중복체크
  // [__checkUserName.pending]: (state) => {
  //   state.isLoading = true;
  //   // 네트워크 요청 시작-> 로딩 true 변경합니다.
  // },
  // [__checkUserName.fulfilled]: (state, action) => {
  //   // action으로 받아온 객체를 store에 있는 값에 넣어준다
  //   state.isLoading = false;
  //   state.posts = action.payload;
  // },
  // [__checkUserName.rejected]: (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  //   // 에러 발생-> 네트워크 요청은 끝,false
  //   // catch 된 error 객체를 state.error에 넣습니다.
  // },
});

// export const {} = recipesSlice.actions;
export default postSlice.reducer;
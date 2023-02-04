import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { apis, baseURL } from "../../lib/axios";
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
    worldCups: [],
    rankList: [],
    monthList: [],
    categoryCount: {},
    myPosts: [],
    mainPost: [],
  },
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

// 월드컵 리스트 불러오기
export const __getWorldCup = createAsyncThunk(
  "getWorldCup",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://sparta-sjl.shop/api/post/getWorldcupImage"
      );

      console.log("data: ", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __getRankList = createAsyncThunk(
  "getTopList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://sparta-sjl.shop/api/post/getWorldcupTop5"
      );

      console.log("data: ", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __getRankMonth = createAsyncThunk(
  "getRankMonth",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://sparta-sjl.shop/api/post/getWorldcupMonth"
      );

      console.log("data: ", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
    }
  }
);

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
      console.log("ppp==", payload);
      const data = await baseURL.put(`comment/${payload.commentId}`, {
        content: payload.editcomment,
      });
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
      return thunkAPI.fulfillWithValue(data.data);
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
      // console.log(payload);
      const { data } = await apis.getCategoryPost(
        payload.id,
        payload.currentPage
      );
      // console.log("categorydata:", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getMainPost = createAsyncThunk(
  "getMainPost",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const { data } = await baseURL.get("/post/likeTop6");
      console.log("maindata:", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCategoryCount = createAsyncThunk(
  "getCategoryCount",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getCategoryCount();

      // console.log("data: ", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err);
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

      const data = await apis.patchPost(formData);
    } catch (error) {
      console.log("err", error);
    }
  }
);

// 마이페이지 내가쓴글 가져오기
export const __getMyPost = createAsyncThunk(
  "getMyPost",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const res = await axios.get("https://tom-jelly.shop/api/mypage/myPost", {
        headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
      });
      // const data = await apis.getMyPost();
      console.log(res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
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
    [__getMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.details.myPosts = action.payload;
      console.log("action.payload:", action.payload);
    },
    [__getMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
      const data = { ...action.payload, comment: [] };
      const newList = [data, ...current(state.categoryPosts)];
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
      const newList = current(state.categoryPosts).filter(
        (post) => Number(post.id) !== Number(action.payload)
      );
      state.categoryPosts = newList;
      // state.categoryPosts = state.categoryPosts.filter(
      //   (post) => post.id !== action.payload
      // );
      state.details = {
        title: "",
        content: "",
        id: 0,
        comment: [],
        isLikedPost: false,
        likePostSum: 0,
      };
      console.log("state------>", newList);
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
      console.log(action.payload);
      const editList = state.categoryPosts.map((detail) => {
        if (Number(detail.id) === Number(action.payload.id)) {
          return {
            ...detail,
            title: action.payload.title,
            content: action.payload.content,
            file: action.payload.imagefile,
            category: action.payload.category,
          };
        } else {
          return detail;
        }
      });

      state.categoryPosts = editList;
      // [__editComment.fulfilled]: (state, action) => {
      //   state.isLoading = false;
      //   console.log("st", action.payload);
      //   const index = current(state.details.comment).map((e) => {
      //     if (e.id === action.payload.id) {
      //       return action.payload;
      //     } else {
      //       return e;
      //     }
      //   });
      //   state.details.comment = index;
      //   // state.comment.splice(index, 1, action.payload.content);
      //   console.log("index", index);
      // },
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
      // console.log(action.payload);
    },
    [__getCategoryPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getCategoryCount.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCategoryCount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
      // console.log("action", state.details);
    },
    [__getCategoryCount.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //월드컵 리스트
    [__getWorldCup.pending]: (state) => {
      state.isLoading = true;
    },
    [__getWorldCup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.details.worldCups = action.payload;
      console.log("action", state.details.worldCups);
    },
    [__getWorldCup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //월드컵 랭크 리스트
    [__getRankList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getRankList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.details.rankList = action.payload;
      console.log("action", state.details.rankList);
    },
    [__getRankList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //월드컵 1,2위 Get
    [__getRankMonth.pending]: (state) => {
      state.isLoading = true;
    },
    [__getRankMonth.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.details.monthList = action.payload;
      console.log("action", state.details.monthList);
    },
    [__getRankMonth.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 댓글 추가
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
      // state.details.comment.pop(action.payload);
      const newComment = state.details.comment.filter(
        (comment) => comment.id !== action.payload.commentId
      );
      state.details.comment = newComment;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action.payload.response.data.errorMessage);
    },

    [__editComment.pending]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("st", action.payload);
      const index = current(state.details.comment).map((e) => {
        if (e.id === action.payload.id) {
          return action.payload;
        } else {
          return e;
        }
      });
      state.details.comment = index;
      // state.comment.splice(index, 1, action.payload.content);
      console.log("index", index);
    },
    // 남은것 : 코멘트 CSS, 수정부분 랜더링, 수정폼 - 확인누르면 visible, 인풋창 초기화
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComment.pending]: (state) => {},
    [__getComment.fulfilled]: (state, action) => {
      state.comment = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //메인페이지 포스트 불러오기
    [__getMainPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMainPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.details.mainPost = action.payload;
      console.log("main", state.details.mainPost);
    },
    [__getMainPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

export default postSlice.reducer;

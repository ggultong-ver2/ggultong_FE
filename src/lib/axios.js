import axios from "axios";

// 기본 URL 토큰 담는 인터셉트 없음
const instance = axios.create({
  baseURL: "https://sparta-sjl.shop/api", //상정님
  //https://tom-jelly.shop/api
  //process.env.REACT_APP_URL
  //https://sparta-sjl.shop/api
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
//39.117.151.189 - 승섭님 아이피 / 마이페이지 전용
//13.209.15.249 - 재용님 아이피
//43.201.7.130 - 종열님 아이피
//
// baseURL 토큰 담는 인터셉트 있음
export const baseURL = axios.create({
  baseURL: "https://sparta-sjl.shop/api",
  withCredentials: true,

  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("Access_Token");

  config.headers["Access_Token"] = `${token}`;
  return config;
});

// apis
export const apis = {
  // 로그인 관련
  postLogin: (login) => instance.post("/user/login", login),
  postSignup: (signup) => instance.post("/user/signup", signup),
  checkUserName: (loginId) => instance.post(`/user/idCheck/${loginId}`),
  checkNickName: (nickname) => instance.post(`/user/nickCheck/${nickname}`),
  checkPw: (password) =>
    instance.post("/mypage/pwCheck", password, {
      headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
    }),
  changePw: (password) =>
    instance.patch("/mypage/pwChange/", password, {
      headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
    }),
  postLogout: () => instance.get("/user/logout"),
  checkEmail: (email) => instance.post("/user/emailCheck/", email),
  checkemailCode: (post) => instance.post("/user/emailCode/", post),
  pwfind: (pwfind) => instance.post("/user/findPw", pwfind),
  idfind: (idfind) => instance.post("/user/findId", idfind),
  // 게시글 관련
  getPost: () => instance.get("/post/postList"),

  getIdPost: (id) => {
    const token = localStorage.getItem("Access_Token");
    if (token) {
      return baseURL.get(`/post/${id}`);
    } else {
      return instance.get(`/post/${id}`);
    }
  },
  getCategoryPost: (category, pageNum) => {
    return instance.get(`/post/postList/${category}/${pageNum}`);
  },
  getCategoryCount: () => {
    return instance.get(`/post/postList/count`);
  },

  createPost: (post) => {
    // console.log("payload::", post);
    const data = baseURL.post("/post/create", post, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  },
  deletePost: (id) => baseURL.delete(`/post/${id}`),
  editPost: (id, post) =>
    // console.log("string", id, post);
    baseURL.put(`/post/${id}`, post, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  //댓글 관련

  deleteComment: ({ commentId }) => baseURL.delete(`/comment/${commentId}`),

  //마이페이지수정
  patchPost: (post) => {
    baseURL.patch("/mypage/update", post, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  deleteUser: (loginId) => {
    baseURL.delete(`/mypage/${loginId}`, "", {
      headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
    });
  },

  signNickname: (nickname) => {
    baseURL.patch(`/mypage/socialSetting/${nickname}`, "", {
      headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
    });
  },

  // 마이페이지 내가쓴글
  getMyPost: () => {
    baseURL.get(`/mypage/myPost`, "", {
      headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
    });
  },

  // 월드컵 관련
  getworldcup: () => {
    baseURL.get("/post/getWorldcupImage");
  },
  worldsend: (postId) => instance.post(`post/getWorldcupImage/${postId}`),

  // 좋아요 관련
};

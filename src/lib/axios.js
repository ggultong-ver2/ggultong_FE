import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: "http://39.117.151.189/api",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
//39.117.151.189 - 승섭님 아이피 / 마이페이지 전용
// baseURL
export const baseURL = axios.create({
  baseURL: "http://39.117.151.189/api",

  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");

  config.headers["Authorization"] = `${token}`;
  return config;
});

// apis
export const apis = {
  // 로그인 관련
  postLogin: (login) => instance.post("/user/login", login),
  postSignup: (signup) => instance.post("/user/signup", signup),
  checkUserName: (loginId) => instance.post(`/user/idCheck/${loginId}`),
  checkNickName: (nickname) => instance.post(`/user/nickCheck/${nickname}`),
  checkPw: (password) => instance.post(`/user/pwCheck/${password}`),
  postLogout: () => instance.get("/user/logout"),
  checkEmail: (email) => instance.post("/user/emailCheck/", email),
  checkemailCode: (emailCode) => instance.post("/user/emailCode/", emailCode),
  // 게시글 관련
  getPost: () => baseURL.get("/posts"),
  getIdPost: (id) => {
    return baseURL.get(`/post/${id}`);
  },

  createPost: (post) => {
    console.log("payload::", post);
    baseURL.post("/post", post, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  deletePost: (id) => baseURL.delete(`/post/${id}`),
  editPost: (id, post) =>
    // console.log("string", id, post);
    baseURL.put(`/post/${id}`, post, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  //마이페이지수정
  patchPost: (patch) => {
    console.log("patch::", patch);
    baseURL.patch("/user/mypage/update", patch, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  // 리뷰 관련

  // 좋아요 관련
};

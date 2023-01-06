import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: "http://13.209.15.249/api",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: "http://13.209.15.249/api",

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
  // 리뷰 관련

  // 좋아요 관련
};

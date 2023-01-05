import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: "http://3.38.247.14:8080/api",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: "http://3.38.247.14:8080/api",
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
  checkEmail: (email) => instance.post(`/user/emailCheck/${email}`),
  checkemailCode: (emailCode) => instance.post(`user/emailCode/${emailCode}`),
  // 게시글 관련

  // 리뷰 관련

  // 좋아요 관련
};

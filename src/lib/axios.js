import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: "http://localhost:3001/postss",

  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: "http://localhost:3001/postss",

  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// export const chatURL = axios.create({
//   baseURL: "",
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//     accept: "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// });

// export const kakaoLogin = axios.create({
//   baseURL: "i",
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//     accept: "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// });

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  const auth = localStorage.getItem("Authorization");
  config.headers["Authorization"] = token === null ? `${auth}` : `${token}`;
  // 혹시 3항 연산자가 안먹히면 수정
  return config;
});

// chatURL.interceptors.request.use((config) => {
//   if (config.headers === undefined) return;
//   const token = localStorage.getItem("id");
//   config.headers["Authorization"] = `${token}`;
//   return config;
// });

// apis
export const apis = {
  // 로그인 관련
  // postLogin: (login) => instance.post("/user/login", login),
  // postSignup: (signup) => instance.post("/user/signup", signup),
  // checkUserName: (username) => instance.get(`/user/idcheck/${username}`),
  // checkNickname: (nickname) => instance.get(`/user/nicknamecheck/${nickname}`),

  //kakaoLigin: (code) => kakaoLogin.get(`/user/kakao/callback?code=${code}`),

  // 게시글 관련
  getPost: () => baseURL.get("/post"),
  getIdPost: (id) => baseURL.get(`/post/${id}`),
  createPost: (post) => baseURL.post("/post", post),
  deletePost: (id) => baseURL.delete(`/post/${id}`),
  editPost: (id, post) => baseURL.put(`/post/${id}`, post),

  // getChatRoom: () => chatURL.get("/chat/room"),
  // getMessage: (roomId) => chatURL.get(`/chat/getmessage/${roomId}`),
  // createRoom: (postId) => chatURL.post(`/chat/room?postId=${postId}`),
  // getChatList: (nickname) => chatURL.get(`/chat/rooms/${nickname}`),
  // enterRoom: (roomId) => chatURL.get(`/chat/room/enter/${roomId}`),
  // findRoom: (roomId) => chatURL.get(`/room/${roomId}`),
};

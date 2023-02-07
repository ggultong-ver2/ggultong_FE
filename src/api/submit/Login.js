import { apis } from "../../lib/axios";
import Swal from "sweetalert2";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const IP = process.env.REACT_APP_URL;

// 비밀번호 변경
export const __pwchange = async (password) => {
  try {
    const data = await apis.changePw(password);
    console.log("password:::", password);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("response", data.response);
    }

    return data;
  } catch (error) {}
};

// pw 확인
export const __pwcheck = async (password) => {
  try {
    const data = await apis.checkPw(password);
    console.log("password:::", password);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("response", data.response);
    }

    return data;
  } catch (error) {}
};

// ID 중복확인
export const __idcheck = async (loginId) => {
  try {
    const data = await apis.checkUserName(loginId);

    if (data.data.status === 200) {
      console.log("response", data.response);
    }

    return data;
  } catch (error) {
    Swal.fire("잘못된 형식입니다", "특수문자는 불가능합니다.", "error");
  }
};

// 닉네임 중복확인
export const __nickCheck = async (nickname) => {
  try {
    const data = await apis.checkNickName(nickname);
    console.log("nickname:::", nickname);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("res:::", data.response);
    }

    return data;
  } catch (error) {
    Swal.fire(
      "중복된 nickname 입니다.",
      "다른 닉네임을 사용 해 주세요!",
      "error"
    );
  }
};

export const __socialNick = async (nickname) => {
  try {
    const data = await axios.patch(
      `${IP}/mypage/socialSetting/${nickname}`,
      "",
      {
        headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
      }
    );

    console.log("data: ", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// 회원가입
export const __postSignup = async (post) => {
  try {
    const data = await apis.postSignup(post);
    return data;
  } catch (error) {
    console.log("err :::", error);
    alert(error.response.data.statusMsg);
  }
};

// 회원탈퇴
export const __deleteId = async (loginId) => {
  try {
    const data = await apis.deleteUser(loginId);
    console.log("loginId:::", loginId);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("response", data.response);
    }

    return data;
  } catch (error) {}
};

// 이메일 코드 전송
export const __emailsend = async (email) => {
  try {
    const data = await apis.checkEmail(email);
    return data;
  } catch (res) {}
};

//월드컵 데이터 전송
export const __worldcupsend = async (worldcup) => {
  try {
    const data = await apis.worldsend(worldcup);
    return data;
  } catch (res) {}
};

// 인증번호 확인
export const __emailcode = async (emailcode) => {
  try {
    const data = await apis.checkemailCode(emailcode);
    console.log("emailcode:::", emailcode);
    console.log("data: ", data);
    if (data.data.statusCode === 400) {
    }

    return data;
  } catch (error) {}
};

// ID 찾기
export const __Idfind = async (idfind) => {
  try {
    const data = await apis.idfind(idfind);
    console.log("idfind:::", idfind);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("response", data.response);
    }

    return data;
  } catch (error) {}
};

// PW 찾기
export const __pwfind = async (pwfind) => {
  try {
    const data = await apis.pwfind(pwfind);
    console.log("pwfind:::", pwfind);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("response", data.response);
    }

    return data;
  } catch (error) {
    Swal.fire(error.data.msg, "정보를 다시 확인해주세요!", "error");
  }
};

// 로그인
export const __postLogin = async (post) => {
  try {
    const data = await apis.postLogin(post);
    return data;
  } catch (error) {
    Swal.fire(
      "아이디 및 비밀번호가 일치하지 않습니다.",
      "다시 확인해주세요!",
      "error"
    );
  }
};

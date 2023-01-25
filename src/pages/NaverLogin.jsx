import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const IP = "tom-jelly.shop";
  const navigate = useNavigate();
  const location = useLocation();
  const getToken = async () => {
    const NAVER_CODE = location.search.split("=")[1];
    const state = Math.random().toString(36).substring(3, 14);
    // const state = new URL(window.location.href).searchParams.get("state");
    console.log("state:::", state);

    //
    try {
      const data = axios
        .get(
          `http://${IP}/api/user/naver/callback?code=${NAVER_CODE}&state=${state}`
        )
        .then((res) => {
          console.log("RES", res.data);
          localStorage.setItem("Access_Token", res.headers.authorization);
          localStorage.setItem("nickname", res.data.nickname);
          localStorage.setItem("profileImg", res.data.profileImg);
          localStorage.setItem("email", res.data.email);
          return res;
        })
        .then((res) => {
          console.log("respone:::", res.data.nickname);
          if (res.data.nickname === "tlsrbrkdlqwk") {
            console.log("nickname", res.data.nickname);
            navigate("/socialnick");
          } else {
            console.log("else", res.data.nickname);
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      getToken();
      ////토큰수정////
    } catch (err) {
      console.log(err);
    }
  }, []);
  // const naverURL =
  //   `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=` +
  //   Math.random().toString(36).substring(3, 14);

  return <></>;
};

export default NaverLogin;

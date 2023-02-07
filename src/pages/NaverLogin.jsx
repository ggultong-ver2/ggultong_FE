import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const IP = process.env.SOCIAL_APP_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const getToken = async () => {
    const NAVER_CODE = location.search.split("=")[1];
    const STATE = Math.random().toString(36).substring(3, 14);

    try {
      const data = axios
        .get(
          `http://${IP}/api/user/naver/callback?code=${NAVER_CODE}&state=${STATE}`
        )
        .then((res) => {
          localStorage.setItem("Access_Token", res.headers.authorization);
          localStorage.setItem("nickname", res.data.nickname);
          localStorage.setItem("profileImg", res.data.profileImg);
          localStorage.setItem("email", res.data.email);
          return res;
        })
        .then((res) => {
          if (res.data.nickname === "tlsrbrkdlqwk") {
            navigate("/socialnick");
          } else {
            navigate("/");
          }
        });
    } catch (error) {
    }
  };

  useEffect(() => {
    try {
      getToken();
      ////토큰수정////
    } catch (err) {
    }
  }, []);

  return <></>;
};

export default NaverLogin;

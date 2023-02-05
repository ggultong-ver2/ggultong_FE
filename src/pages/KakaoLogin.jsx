import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function KakaoLogin() {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  const IP = process.env.SOCIAL_APP_URL;
  //https://tom-jelly.shop/api
  const navigate = useNavigate();
  const getToken = async () => {
    console.log("::::::");

    try {
      const data = axios
        .get(`http://${IP}/api/user/kakao/callback?code=${KAKAO_CODE}`)
        .then((res) => {
          console.log("RES", res.data);
          localStorage.setItem("Access_Token", res.headers.authorization);
          localStorage.setItem("nickname", res.data.nickname);
          localStorage.setItem("profileImg", res.data.profileImg);
          localStorage.setItem("email", res.data.email);
          return res;
        })
        .then((res) => {
          console.log(res.data.nickname);
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
  return <></>;
}
export default KakaoLogin;

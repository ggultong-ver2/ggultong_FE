import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function KakaoLogin() {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  const IP = process.env.SOCIAL_APP_URL;
  const navigate = useNavigate();
  const getToken = async () => {
    try {
      const data = await axios
        .get(`http://${IP}/api/user/kakao/callback?code=${KAKAO_CODE}`)
        .then((res) => {
          localStorage.setItem("Access_Token", res.headers.authorization);
          localStorage.setItem("nickname", res.data.nickname);
          localStorage.setItem("profileImg", res.data.profileImg);
          localStorage.setItem("email", res.data.email);
          return data;
        })
        .then((res) => {
          if (res.data.nickname === "tlsrbrkdlqwk") {
            navigate("/socialnick");
          } else {
            navigate("/");
          }
        });
    } catch (error) {}
  };

  useEffect(() => {
    try {
      getToken();
      ////토큰수정////
    } catch (err) {}
  }, []);
  return <></>;
}
export default KakaoLogin;

import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function SocialLogin() {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  const IP = "43.201.7.130:8080";

  const getToken = async () => {
    console.log("::::::");

    try {
      const data = axios
        .get(`http://${IP}/api/user/kakao/callback?code=${KAKAO_CODE}`)
        .then((res) => {
          localStorage.setItem("authorization", res.headers.authorization);
          localStorage.setItem("nickname", res.data.nickname);
          localStorage.setItem("profileImg", res.data.data.profileImg);
          localStorage.setItem("email", res.data.email);
        });
      window.location.replace("/");
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
export default SocialLogin;

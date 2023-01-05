import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function KakaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const IP = "52.79.64.171";

  useEffect(() => {
    try {
      const getToken = async () => {
        const data = await axios.get(
          `http://${IP}/api/user/kakao/callback?code=${KAKAO_CODE}`
        );
        console.log("data::", data.data.data);

        localStorage.setItem("id", data.data.data.jwtToken);
        localStorage.setItem("nickname", data.data.data.nickname);
        localStorage.setItem("profileImg", data.data.data.profileImg);
        return data;
      };

      ////토큰수정////
      getToken().then(() => window.location.assign("/home"));
    } catch (err) {
      console.log(err);
    }
    // fetch(`http://${IP}/api/user/kakao/callback?code=${KAKAO_CODE}`, {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     console.log("res:::", res);
    //     res.json();
    //   })
    //   .then((data) => {
    //     console.log("data:::::", data);
    //     localStorage.setItem("token", data.jwtToken);
    //     navigate("/home");
    //   });
  }, []);

  return <></>;
}
export default KakaoLogin;

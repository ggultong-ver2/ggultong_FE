// import axios from "axios";
// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function KakaoLogin() {
//   const location = useLocation();
//   const KAKAO_CODE = location.search.split("=")[1];
//   const IP = "tom-jelly.shop";
//   const navigate = useNavigate();
//   const getToken = async () => {
//     try {
//       const data = axios
//         .get(`https://${IP}/api/user/kakao/callback?code=${KAKAO_CODE}`)
//         .then((res) => {
//           console.log("social", res);
//           localStorage.setItem("Access_Token", res.headers.authorization);
//           localStorage.setItem("nickname", res.data.nickname);
//           localStorage.setItem("profileImg", res.data.profileImg);
//           localStorage.setItem("email", res.data.email);
//           return res;
//         })
//         .then((res) => {
//           if (res.data.nickname === "tlsrbrkdlqwk") {
//             navigate("/socialnick");
//           } else {
//             navigate("/");
//           }
//         });
//     } catch (error) {}
//   };

//   useEffect(() => {
//     try {
//       getToken();
//       ////토큰수정////
//     } catch (err) {}
//   }, []);
//   return <></>;
// }
// export default KakaoLogin;

import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function KakaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const IP = "tom-jelly.shop";

  useEffect(() => {
    try {
      const getToken = async () => {
        const data = await axios.get(
          `http://${IP}/api/user/kakao/callback?code=${KAKAO_CODE}`
        );

        localStorage.setItem("Access_Token", data.headers.authorization);
        localStorage.setItem("nickname", data.data.nickname);
        localStorage.setItem("profileImg", data.data.profileImg);
        localStorage.setItem("email", data.data.email);
        return data;
      };
      ////토큰수정////
      getToken().then((res) => {
        if (res.data.nickname === "tlsrbrkdlqwk") {
          navigate("/socialnick");
        } else {
          navigate("/");
        }
      });
    } catch (err) {
      alert(err);
    }
  }, []);

  return <></>;
}
export default KakaoLogin;

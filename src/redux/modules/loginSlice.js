import { apis } from "../../lib/axios";
// import axios from "axios";
import Swal from "sweetalert2";

const __postLogin = async (post) => {
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

export default __postLogin;

import { apis } from "../../lib/axios";
import Swal from "sweetalert2";

// id 중복체크
const __idcheck = async (loginId) => {
  try {
    const data = await apis.checkUserName(loginId);
    console.log("loginId:::", loginId);
    console.log("data: ", data);
    if (data.data.statusCode === 200) {
      // alert(Swal.fire("사용가능한 ID", "사용가능합니다!", "success"));
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    Swal.fire(
      error.response.data.msg,
      "다른 아이디를 사용 해 주세요!",
      "error"
    );
    // alert(error.response.data.msg);
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __idcheck;

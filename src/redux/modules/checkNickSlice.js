import { apis } from "../../lib/axios";
import Swal from "sweetalert2";

// 닉네임 중복체크
const __nickCheck = async (nickname) => {
  try {
    const data = await apis.checkNickName(nickname);
    console.log("nickname:::", nickname);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("res:::", data.response);
      // alert(Swal.fire("사용가능한 ID", "사용가능합니다!", "success"));
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    Swal.fire("dd", "다른 아이디를 사용 해 주세요!", "error");
    // alert(error.response.data.msg);
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __nickCheck;

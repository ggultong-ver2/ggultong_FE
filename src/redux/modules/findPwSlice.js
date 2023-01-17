import { apis } from "../../lib/axios";
import Swal from "sweetalert2";

// id 중복체크
const __pwfind = async (pwfind) => {
  try {
    const data = await apis.pwfind(pwfind);
    console.log("pwfind:::", pwfind);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("response", data.response);
      // alert(Swal.fire("사용가능한 ID", "사용가능합니다!", "success"));
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    Swal.fire(error.data.msg, "정보를 다시 확인해주세요!", "error");
    // alert(error.response.data.msg);
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __pwfind;

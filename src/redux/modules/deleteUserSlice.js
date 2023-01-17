import { apis } from "../../lib/axios";
import Swal from "sweetalert2";

// 회원탈퇴
const __deleteId = async (loginId) => {
  try {
    const data = await apis.deleteUser(loginId);
    console.log("loginId:::", loginId);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("response", data.response);
      // alert(Swal.fire("사용가능한 ID", "사용가능합니다!", "success"));
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    // alert(error.response.data.msg);
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __deleteId;

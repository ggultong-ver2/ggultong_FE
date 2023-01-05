import { apis } from "../../lib/axios";
import Swal from "sweetalert2";
const __sendemail = async (email) => {
  try {
    const data = await apis.checkEmail(email);
    console.log("email:::", email);
    console.log("data: ", data);
    if (data.data.statusCode === 200) {
      // alert(data.data.msg);
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    Swal.fire("유효하지 않은 Email 입니다", "", "error");
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __sendemail;

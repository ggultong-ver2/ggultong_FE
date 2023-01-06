import { apis } from "../../lib/axios";
import Swal from "sweetalert2";
const __emailsend = async (email) => {
  try {
    const data = await apis.checkEmail(email);
    return data;
  } catch (error) {
    Swal.fire("유효하지 않은 Email 입니다", "", "error");
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __emailsend;

import { apis } from "../../lib/axios";

const __pwchange = async (password) => {
  try {
    const data = await apis.changePw(password);
    console.log("password:::", password);
    console.log("data: ", data);
    if (data.data.status === 200) {
      console.log("response", data.response);
      // alert(Swal.fire("사용가능한 ID", "사용가능합니다!", "success"));
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    // Swal.fire("dd", "다른 아이디를 사용 해 주세요!", "error");
    // alert(error.response.data.msg);
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __pwchange;

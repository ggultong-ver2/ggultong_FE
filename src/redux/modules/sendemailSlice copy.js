import { apis } from "../../lib/axios";

const __sendemail = async (email) => {
  try {
    const data = await apis.checkEmail(email);
    console.log("email:::", email);
    console.log("data: ", data);
    if (data.data.statusCode === 200) {
      alert(data.data.msg);
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    alert(error.response.data.msg);
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __sendemail;

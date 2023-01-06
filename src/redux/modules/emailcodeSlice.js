import { apis } from "../../lib/axios";
import Swal from "sweetalert2";
import { useState } from "react";

const __emailcode = async (emailcode) => {
  // const [disabled, setDisabled] = useState(true);
  // const handleClick = () => {
  //   setDisabled(!disabled);
  // };

  try {
    const data = await apis.checkEmail(emailcode);
    console.log("emailcode:::", emailcode);
    console.log("data: ", data);
    if (data.data.statusCode === 400) {
      // Swal.fire(
      //   "인증번호가 일치하지 않습니다.",
      //   "인증번호를 다시 확인해주세요!",
      //   "error"
      // );
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __emailcode;

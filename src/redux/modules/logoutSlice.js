import { apis } from "../../lib/axios";
// import axios from "axios";

const __postLogout = async () => {
  try {
    await apis.postLogout();
    // localStorage.removeItem("username")
    // localStorage.removeItem("profileUrl")
    alert("로그아웃 성공");
  } catch (error) {
    alert(error.respose.data.statusMsg);
  }
};

export default __postLogout;

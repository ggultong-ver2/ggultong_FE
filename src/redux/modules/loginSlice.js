import { apis } from "../../lib/axios";
// import axios from "axios";

const __postLogin = async (post) => {
  try {
    const data = await apis.postLogin(post);
    return data;
  } catch (error) {
    alert(error.response.data.statusMsg);
  }
};

export default __postLogin;

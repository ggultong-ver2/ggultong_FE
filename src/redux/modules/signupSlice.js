import { apis } from "../../lib/axios";
// import axios from "axios";

const __postSignup = async (post) => {
  try {
    const data = await apis.postSignup(post);
    return data;
  } catch (error) {
    console.log("err :::", error);
    alert(error.response.data.statusMsg);
  }
};

export default __postSignup;

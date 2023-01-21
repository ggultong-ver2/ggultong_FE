const CheckLogin = () => {
    const authToken = localStorage.getItem("Access_Token");
    const isLogin = Boolean(authToken);
    return {authToken, isLogin};
}
export default CheckLogin
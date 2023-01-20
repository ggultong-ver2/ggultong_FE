import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __postLike } from "../../redux/modules/postSlice";
import "./style.css"
import CheckLogin from "../../hook/CheckLogin";
import { useEffect } from "react";

const Likes = ({ onClick }) => {
  const {authToken, isLogin} = CheckLogin();
  const dispatch = useDispatch();
  const { id } = useParams();
  const checkPostLike = useSelector(
    (state) => state.post.checkPostLike
  );
  console.log(checkPostLike)

  const likeCount = useSelector(
    (state) => state.post.likeCount
  );

  useEffect(() => {

  }, [likeCount])

  const likeToggle = () => {
    if(isLogin){
      dispatch(__postLike(id));
    }else{
      alert("로그인 시 이용가능합니다.");
    }
  };

  return (
    <div className="like_button">
        <button onClick={likeToggle}>
          <div>{checkPostLike === true ? "💛" : "🖤"}</div>
          <div>{likeCount}</div>
        </button>
    </div>
  );
};


export default Likes;

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __postLike } from "../../redux/modules/postSlice";
import "./style.css"
import CheckLogin from "../../hook/CheckLogin";
import { useEffect } from "react";

const Likes = () => {
  const {isLogin} = CheckLogin();
  const dispatch = useDispatch();
  const { id } = useParams();
  const checkPostLike = useSelector(
    (state) => state.post.checkPostLike
  );
  console.log(checkPostLike)

  const likePostSum = useSelector(
    (state) => state.post.likePostSum
  );

  const likeToggle = () => {
    if(isLogin){
      dispatch(__postLike(id));
    }else{
      alert("로그인 시 이용가능합니다.");
    }
  };

  useEffect(() => {

  }, [])

  return (
    <div className="like_button">
        <div onClick={likeToggle}>
          <div>
            {checkPostLike === true ? <button>💛</button> : <button>🖤</button>}
          </div>
          {/* <div>{likePostSum}</div> */}
        </div>
    </div>
  );
};


export default Likes;

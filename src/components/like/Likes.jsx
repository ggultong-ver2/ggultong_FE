import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __postLike } from "../../redux/modules/postSlice";
import "./style.css";
import CheckLogin from "../../hook/CheckLogin";

const Likes = () => {
  const { isLogin } = CheckLogin();
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector((state) => state?.details);
  const isLikedPost = useSelector(
    (state) => state?.details?.details?.isLikedPost
  );
  const likePostSum = useSelector(
    (state) => state?.details?.details?.likePostSum
  );
  // console.log(isLikedPost);
  // console.log(likePostSum);
  // console.log(post)

  const likeToggle = () => {
    if (isLogin) {
      dispatch(__postLike(id));
    } else {
      alert("로그인 시 이용가능합니다.");
    }
  };

  return (
    <>
      <div className="like_button">
        {isLikedPost ? (
          <div onClick={likeToggle} className="like_onclick_wrap">
            {likePostSum} <div className="like_onclick"></div>
          </div>
        ) : (
          <div onClick={likeToggle} className="like_default_wrap">
            {likePostSum}
            <div className="like_default"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Likes;

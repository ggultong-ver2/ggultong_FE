import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __postLike } from "../../redux/modules/postSlice";
import "./style.css";
import CheckLogin from "../../hook/CheckLogin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Likes = () => {
  const { isLogin } = CheckLogin();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => state?.details);
  const isLikedPost = useSelector(
    (state) => state?.details?.details?.isLikedPost
  );
  const likePostSum = useSelector(
    (state) => state?.details?.details?.likePostSum
  );

  const likeToggle = () => {
    if (isLogin) {
      dispatch(__postLike(id));
    } else {
      Swal.fire("로그인 후 이용해주세요!", "", "warning");
      navigate("/login");
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

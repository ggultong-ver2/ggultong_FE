import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __likeToggle } from "../../redux/modules/postSlice";

function Likes(props) {
    const navigate = useNavigate();
    const [likeToggle, setLikeToggle] = useState(false);
    const likes = useRef(0);
    const dispatch = useDispatch();

    const toggleButton = () => {
        if(!localStorage.getItem("id")){
            alert("로그인 후 이용 가능합니다");
            navigate("/login");
            return
        }else{
            likes.current += 1;
        }

        dispatch(__likeToggle(props.posts.id));

        setLikeToggle(!likeToggle);
    }
  return (
    <>
      <div className="likes">
        {likeToggle ? (
            <div onClick={toggleButton}>🖤</div>
        ) : (
            <div onClick={toggleButton}>💛</div>
        )}
        </div>
    </>
  );
}
export default Likes;

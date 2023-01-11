import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __likeToggle } from "../../redux/modules/postSlice";
import { Provider, LikeButton } from "@lyket/react";

function Likes() {
  const navigate = useNavigate();
  const [likeToggle, setLikeToggle] = useState(false);
  const likes = useRef(0);
  const dispatch = useDispatch();
  

  const toggleButton = () => {
    // if (!localStorage.getItem("id")) {
    //   alert("로그인 후 이용 가능합니다");
    //   navigate("/login");
    //   return;
    // } else {
    //   likes.current += 1;
    // }

    // dispatch(__likeToggle(props.posts.id));

    setLikeToggle(!likeToggle);
  };
  return (
    <>
      {/* <div className="likes">
        {likeToggle ? (
            <button onClick={toggleButton}>좋아요 취소하기</button>
        ) : (
            <button onClick={toggleButton}>좋아요 누르기</button>
        )}
      </div> */}
      <div className="like_button">
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
          <LikeButton namespace="testing-react" id="everybody-like-now" component={LikeButton.templates.Twitter}/>
        </Provider>
      </div>
    </>
  );
}
export default Likes;

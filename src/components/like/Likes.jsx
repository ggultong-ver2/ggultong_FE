// import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import {__postLike } from "../../redux/modules/postSlice";
// import { Provider, LikeButton } from "@lyket/react";
// import "./style.css"

// function Likes() {
//     return(
//       <div className="like_button">
//         <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
//           <LikeButton namespace="test_button" id="everybody-like-now" component={LikeButton.templates.Twitter}/>
//         </Provider>
//       </div>
//   );
// };

// export default Likes


import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __postLike } from "../../redux/modules/postSlice";
import "./style.css"

const Likes = ({ onClick }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const checkPostLike = useSelector(
    (state) => state.post.checkPostLike
  );
  console.log(checkPostLike)

  const likeCount = useSelector(
    (state) => state.post.likeCount
  );

  const onClickLikeToggle = () => {
    dispatch(__postLike(id));
  };

  const onClickNonLikeToggle = () => {
    alert("로그인 시 이용가능합니다.");
  };

  return (
    <div className="like_button">
      {localStorage.getItem("Access_Token") !== null ? (
        <button onClick={onClickLikeToggle}>
          <div>{checkPostLike === true ? "🤍" : "❤️"}</div>
          <div>{likeCount}</div>
        </button>
      ) : (
        <button onClick={onClickNonLikeToggle}>
          <div>{checkPostLike === true ? "🤍" : "❤️"}</div>
          <div>{likeCount}</div>
        </button>
      )}
    </div>
  );
};


export default Likes;

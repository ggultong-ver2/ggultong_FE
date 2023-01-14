// import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { __likeToggle, __postLike } from "../../redux/modules/postSlice";
// import { Provider, LikeButton } from "@lyket/react";

// function Likes() {
//   const navigate = useNavigate();
//   const [likeToggle, setLikeToggle] = useState(false);
//   const likes = useRef(0);
//   const dispatch = useDispatch();
  

//   const [isLike, setIsLike] = useState(false);
//   const onClickLike = () => {
//     dispatch(__postLike());
//     setIsLike(!isLike);
//   };




//   const toggleButton = () => {
//     if (!localStorage.getItem("Access_Token")) {
//       alert("로그인 후 이용 가능합니다");
//       navigate("/login");
//       return;
//     } else {
//       likes.current += 1;
//     }

//     // dispatch(__likeToggle(props.posts.id));

//     setLikeToggle(!likeToggle);
//   };
//   return (
//     <>
//       {/* <div className="likes">
//         {likeToggle ? (
//             <button onClick={toggleButton}>좋아요 취소하기</button>
//         ) : (
//             <button onClick={toggleButton}>좋아요 누르기</button>
//         )}
//       </div> */}

//       <div className="like_button">
//         <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
//           <LikeButton namespace="testing-react" id="everybody-like-now" component={LikeButton.templates.Twitter}/>
//         </Provider>
//       </div>

//       {isLike ? (
//         <div>
//           <button className="btn_like" onClick={onClickLike}>
//             좋아요취소
//           </button>
//         </div>
//       ) : (
//         <div>
//           <button className="btn_like" onClick={onClickLike}>
//             좋아요
//           </button>
//         </div>
//       )}
//     </>
//   );
// }
// export default Likes;










// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { __postLike } from "../../redux/modules/postSlice";
// import { Provider, LikeButton } from "@lyket/react";

// const Likes = ({ onClick }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();

// //   const [likeToggle, setLikeToggle] = useState(false);
// //   const likes = useRef(0);

//   const [isLike, setIsLike] = useState(false);
  
//   const onClickLike = () => {
//     dispatch(__postLike(id));
//     setIsLike(!isLike);
//   }

//   const checkPostLike = useSelector(
//     (state) => state.post.checkPostLike
//   );

//   const likeCount = useSelector(
//     (state) => state.post.likeCount
//   );

//   //   dispatch(__postLike(id));
//   // };

//   const onClickloginHandler = () => {
//     alert("로그인 후 이용할 수 있어요!");
//     navigate("/login");
//   };

//   return (
//     <>
//       <div>
//         {localStorage.getItem("Access_Token") !== null ? (
//           <div onClick={onClickLike}>
//             <div>좋아요{checkPostLike === true ? "💛" : "🖤"}</div>
//             <div>{likeCount}</div>
//           </div>
//         ) : (
//           <div onClick={onClickloginHandler}>
//             <div>좋아요{checkPostLike === true ? "💛" : "🖤"}</div>
//             <div>{likeCount}</div>
//           </div>
//         )}
//       </div>
      
//       <div className="like_button">
//         <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
//           <LikeButton namespace="testing-react" id="everybody-like-now" component={LikeButton.templates.Twitter}/>
//         </Provider>
//       </div>
//     </>
//   );
// };

// export default Likes;

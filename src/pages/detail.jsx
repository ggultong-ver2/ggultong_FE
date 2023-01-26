import "./reset.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  __getIdPost,
  __deletePost,
  __getComment,
  __editComment,
} from "../redux/modules/postSlice";
import Swal from "sweetalert2";
import Likes from "../components/like/Likes";
import { __addComment, __deleteComment } from "../redux/modules/postSlice";
import { timeCalculator } from "../utils/utils";

const Detail = () => {
  const location = useLocation;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const { id } = useParams();
  const [text, setText] = useState("");
  const [render, setRender] = useState("");
  // console.log(param, id);
  const [details, setDetails] = useState({});
  const [addComment, setAddComment] = useState({
    content: "",
  });

  const detailList = useSelector((state) => state.details.details);
  console.log("details:", detailList);
  const commentList = useSelector((state) => state.details.details.comment);

  //console.log("commentList:", commentList);
  const [isLogin, setIsLogin] = useState(false);
  // const [likeToggle, setLikeToggle] = useState(false);

  useEffect(() => {
    // console.log("param.id:", param.id);
    dispatch(__getIdPost(+param.id));
  }, [id, dispatch]);

  useEffect(() => {
    if (detailList) {
      setDetails(detailList);
    }
  }, [detailList]);
  // console.log("detailList:", details);

  //코멘트 핸들러

  const onClickAddCommentHandler = () => {
    dispatch(__addComment([addComment, Number(id)]));
    Swal.fire("댓글 작성완료!", "", "success");
  };

  const onClickDeleteCommentHandler = (commentId) => {
    try {
      dispatch(__deleteComment({ commentId: commentId, postId: id }));
      if (localStorage.getItem("Access_Token") !== null) {
        Swal.fire("댓글 삭제완료!", "", "success");
      } else {
        Swal.fire(
          "로그인 후 이용해주세요",
          "본인 외에 삭제할 수 없습니다.",
          "error"
        );
      }
    } catch (error) {
      // Swal.fire("본인만 삭제가능", "본인 외에 삭제할 수 없습니다.", "");
    }

    // if (res.data.) {
    //   Swal.fire("댓글 삭제완료!", "", "success");
    // } else {
    //   console.log("asdadsad", detailList.comment[2]);
    //   Swal.fire("본인만 삭제가능", "본인 외에 삭제할 수 없습니다.", "");
    // } catch{

    // }
  };

  const onClickEditCommentHandler = (commentId) => {
    dispatch(__editComment({ commentId: commentId, postId: id })).then(
      () => {}
    );
  };

  //게시글 핸들러

  const onClickDeletePostHandler = () => {
    if (localStorage.getItem("nickname") === detailList.nickname) {
      dispatch(__deletePost(id));
      Swal.fire("삭제 완료", "삭제 완료되었습니다!", "success");
      navigate(`/drinkList/drink`);
    } else {
      Swal.fire("로그인 후 이용해주세요!", "", "warning");
    }
  };

  const onClickEditPostHandler = () => {
    if (detailList.nickname === localStorage.getItem("nickname")) {
      //localStorage.getItem = key(nickname)로부터 data 읽기

      navigate(`/editpost/${id}`);
    } else {
      Swal.fire(
        "타인의 게시물을 수정할 수 없습니다",
        "",

        "warning"
      );
    }
  };

  const onChange = (e) => {
    setAddComment(e.target.value);
  };

  // console.log(details.createdAt);
  if (details.id) {
    return (
      <div>
        <StDetail>
          <p>{details?.id}</p>
          <Wrap>
            <StTitle>{details?.title}</StTitle>
            <Else>
              <Etc>
                <StNickname>{details?.nickname}</StNickname>
                <Date>{details?.createdAt.slice(0, 10)}</Date>
              </Etc>
              <Etcs>
                <Countcomment>댓글 {details?.comment.length} </Countcomment>
                <Heart>좋아요 {details?.likePostSum}</Heart>
              </Etcs>
            </Else>
            <StFile src={details?.imageFiles[0]} />
            <StContent
              dangerouslySetInnerHTML={{ __html: details?.content }}
            ></StContent>
            <StFiles src={details?.imageFiles[1]} />
            <Btns>
              <StEditBtn onClick={onClickEditPostHandler}>수정</StEditBtn>
              <StDeleteBtn onClick={onClickDeletePostHandler}>삭제</StDeleteBtn>
            </Btns>
          </Wrap>
          <div className="likes">
            <Likes />
            좋아요 {details?.likePostSum}
          </div>
          <Commentarea>
            <Writecomment>
              <Myprofile src={localStorage.getItem("profileImg")} />
              <Commentinput
                placeholder="댓글을 작성할 수 있어요."
                type="text"
                value={addComment.comment}
                onChange={(e) => {
                  setAddComment({ ...addComment, content: e.target.value });
                }}
              />
              <CommentBtn onClick={onClickAddCommentHandler}>확인</CommentBtn>
            </Writecomment>
            {commentList.map((comment) => {
              return (
                <Commentbox>
                  <Commenttextarea>
                    <Profileimg src={comment.profileImg} />
                    <WrapWritten>
                      <Writtenby>{comment.nickname}</Writtenby>
                      <Writtendate>
                        {timeCalculator(comment.createdAt)}
                        {/* {comment.createdAt.slice(0, 10)} */}
                      </Writtendate>
                      <Commentcontent>{comment.content}</Commentcontent>
                      <button>수정하기</button>
                      <button
                        onClick={() => onClickDeleteCommentHandler(comment.id)}
                      >
                        삭제하기
                      </button>
                    </WrapWritten>
                  </Commenttextarea>
                </Commentbox>
              );
            })}
          </Commentarea>
        </StDetail>
      </div>
    );
  }
};

const StDetail = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 1800px;
  margin: auto;
  margin-top: 30px;
  word-break: break-all;
`;
const Wrap = styled.div`
  margin-left: 200px;
  margin-top: 20px;
`;
const StTitle = styled.p`
  border: 1px solid blue;
  height: 60px;
  width: 800px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const StNickname = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  margin-right: 20px;
`;
const Etc = styled.div`
  width: 800px;
  display: flex;
  text-align: center;
`;
const Etcs = styled.div`
  display: flex;
  text-align: center;
`;
const Else = styled.div`
  width: 800px;
  justify-content: space-between;
`;
const Countcomment = styled.p`
  margin-right: 20px;
`;
const Heart = styled.p``;
const StFile = styled.img`
  border: 1px solid green;
  height: 500px;
  width: 800px;
  background-color: #d9d9d9;
`;
const StContent = styled.div`
  border: 1px solid yellow;
  height: 350px;
  width: 800px;
  padding: 10px;
  font-size: 18px; ;
`;
const StFiles = styled.img`
  height: 350px;
  width: 800px;
  background-color: #d9d9d9;
`;
const Btns = styled.div`
  margin-left: 270px;
  margin-top: 30px;
`;
const StEditBtn = styled.button`
  height: 60px;
  width: 120px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 25px;
  margin-right: 20px;
`;
const StDeleteBtn = styled.button`
  height: 60px;
  width: 120px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 25px;
`;

const CommentBtn = styled.button`
  margin-top: 10px;
  float: right;
  width: 68px;
  height: 32px;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    color: black;
    border: 1px solid black;
  }
  font-family: "Pretendard";
`;

const Date = styled.p``;
const Commentarea = styled.div`
  margin-top: 10px;
`;
const Writecomment = styled.div`
  margin: auto;
  width: 800px;
  height: 160px;
`;
const Myprofile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #d9d9d9;
  float: left;
  margin: 10px;
`;
const Commentinput = styled.textarea`
  padding-top: 10px;
  padding-left: 10px;
  width: 742px;
  height: 118px;
  float: left;
  resize: none;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  outline: none;
`;

const CommentEditinput = styled.textarea`
  padding-top: 10px;
  padding-left: 10px;
  width: 742px;
  height: 118px;
  float: left;
  resize: none;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  outline: none;
`;
const Commentbox = styled.div`
  width: 800px;
  height: 120px;
  margin-left: 200px;
`;
const Commenttextarea = styled.div`
  margin-top: 10px;
`;
const WrapWritten = styled.div`
  margin-top: 17px;
  width: 200px;
  height: 25px;
  float: left;
`;
const Writtenby = styled.p`
  font-size: 14px;
  font-weight: 600;
  float: left;
  margin-right: 10px;
`;
const Writtendate = styled.p`
  font-size: 14px;
  font-weight: 400;
  float: left;
  color: #979797;
`;
const Commentcontent = styled.div`
  // border: 1px solid green;
  font-size: 14px;
  font-weight: 400;
  width: 720px;
  margin-top: 25px;
`;
const Profileimg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin: 12px;
  float: left;
`;

export default Detail;

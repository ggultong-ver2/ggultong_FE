import "./reset.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  __getIdPost,
  __deletePost,
  __editComment,
} from "../redux/modules/postSlice";
import Swal from "sweetalert2";
import Likes from "../components/like/Likes";
import { __addComment, __deleteComment } from "../redux/modules/postSlice";
import { timeCalculator } from "../utils/utils";
import EditComment from "./EditComment";
import Scrap from "../components/scrap/scrap";
import "./style.css";

const Detail = () => {
  const location = useLocation;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const { id } = useParams();
  const [visible, setVisible] = useState(false);
  const [modifycomment, setModifyComment] = useState(0);
  // console.log(param, id);
  const [details, setDetails] = useState({});
  // const [editcomment, setEditComment] = useState({});
  const [addComment, setAddComment] = useState({
    content: "",
  });
  const detailList = useSelector((state) => state.details.details);
  console.log("details:", detailList);
  const commentList = useSelector((state) => state.details.details.commentList);
  console.log("comment:", commentList);
  useEffect(() => {
    // console.log("param.id:", param.id);
    dispatch(__getIdPost(+param.id));
  }, [id, dispatch]);

  useEffect(() => {
    if (detailList) {
      setDetails(detailList);
    }
  }, [detailList]);

  // useEffect(() => {
  //   if (commentList) {
  //     setEditComment(commentList);
  //   }
  // }, [commentList]);

  // console.log("detailList:", details);

  //코멘트 핸들러

  const onClickAddCommentHandler = () => {
    dispatch(__addComment([addComment, Number(id)]));
    console.log("add", addComment);
    setAddComment({ ...addComment, content: "" });
    if (localStorage.getItem("Access_Token") !== null) {
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "댓글 작성완료",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire("로그인 후 이용해주세요", "", "error");
    }
  };

  const onClickDeleteCommentHandler = (commentId) => {
    try {
      dispatch(__deleteComment({ commentId: commentId, postId: id }));
      if (localStorage.getItem("Access_Token") !== null) {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "댓글 삭제완료",
          showConfirmButton: false,
          timer: 1500,
        });
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

  //게시글 핸들러

  const onClickDeletePostHandler = () => {
    if (localStorage.getItem("nickname") === detailList.nickname) {
      dispatch(__deletePost(id));
      Swal.fire("삭제 완료", "삭제 완료되었습니다!", "success").then((res) => {
        if (res.isConfirmed) {
          navigate(`/drinkList/drink`);
        }
      });
    } else {
      Swal.fire("타인의 게시물을 삭제할 수 없습니다.", "", "warning");
    }
  };

  const onClickEditPostHandler = () => {
    if (detailList.nickname === localStorage.getItem("nickname")) {
      //localStorage.getItem = key(nickname)로부터 data 읽기

      navigate(`/editpost/${id}`);
    } else {
      Swal.fire(
        "타인의 게시물을 수정할 수 없습니다.",
        "",

        "warning"
      );
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   if (details.id) return;
  //   navigate(`/drinkList/drink`);
  // }, [details]);
  // // details가 없으면 실행시키지 않게다.

  console.log("----", details);
  if (details.id) {
    return (
      <>
        <div className="top_cat_wrap">
          <div className="top_cat">
            <ul className="clearfix">
              <li>
                <button onClick={() => navigate("/")}>홈</button>
              </li>
              <li className="list_active">
                <button onClick={() => navigate("/drinklist/drink")}>
                  꿀정보
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/gamelist")}>꿀잼</button>
              </li>
            </ul>
            <button onClick={() => navigate("/post")} className="top_post_btn">
              글쓰기
            </button>
          </div>
        </div>

        <div className="detail_body">
          <StDetail>
            {/* <p>{details?.id}</p> */}
            <Wrap>
              <div className="detail_title_wrap">
                <div className="detail_title">{details?.title}</div>
                {localStorage.getItem("nickname") === details.nickname ? (
                  <div className="toggle">
                    <div onClick={handleOpen} className="detail_toggle"></div>
                    {open ? (
                      <ul className="toggle_item_wrap">
                        <li
                          onClick={onClickEditPostHandler}
                          className="toggle_edit"
                        >
                          수정하기
                        </li>
                        <li
                          onClick={onClickDeletePostHandler}
                          className="toggle_delete"
                        >
                          삭제하기
                        </li>
                      </ul>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <Else>
                <Etc>
                  <Profile>{details?.profileImg}</Profile>
                  <StNickname>{details?.nickname}</StNickname>
                  <div className="detail_date">
                    {details?.createdAt.slice(0, 10)}
                  </div>
                </Etc>
                <Etcs>
                  <Countcomment>
                    댓글 {details?.commentList.length}{" "}
                  </Countcomment>
                  <Heart>좋아요 {details?.likePostSum}</Heart>
                </Etcs>
              </Else>
              <StContent
                dangerouslySetInnerHTML={{ __html: details?.content }}
              ></StContent>
            </Wrap>
            <div className="reaction">
              <Likes />
              <Scrap />
            </div>
            <div className="comment_top">
              <div>전체 댓글 {details?.commentList.length} </div>
              <div>게시글 신고</div>
            </div>
            <Commentarea>
              <Writecomment>
                <Myprofile src={localStorage.getItem("profileImg")} />
                <Commentinput
                  placeholder="댓글을 작성할 수 있어요."
                  minLength={1}
                  maxLength={500}
                  type="text"
                  value={addComment.content}
                  onChange={(e) => {
                    setAddComment({ ...addComment, content: e.target.value });
                  }}
                />
                <CommentBtn onClick={onClickAddCommentHandler}>확인</CommentBtn>
              </Writecomment>
              <div>
                {commentList.map((comment, index) => {
                  return (
                    <div key={index}>
                      {visible && comment.id === modifycomment ? (
                        <EditComment
                          commentId={comment.id}
                          setVisible={setVisible}
                        />
                      ) : (
                        <Commentbox key={index}>
                          <Commenttextarea>
                            <Profileimg src={comment.profileImg} />
                            <WrapWritten>
                              <Writtenby>{comment.nickname}</Writtenby>
                              <Writtendate>
                                {timeCalculator(comment.createdAt)}
                              </Writtendate>
                              <Commentcontent>{comment.content}</Commentcontent>
                              <StBox>
                                {localStorage.getItem("nickname") ===
                                comment.nickname ? (
                                  <>
                                    <EditBtn
                                      onClick={() => {
                                        setModifyComment(comment.id);
                                        setVisible(true);
                                      }}
                                    >
                                      수정
                                    </EditBtn>

                                    <DeleteBtn
                                      onClick={() =>
                                        onClickDeleteCommentHandler(comment.id)
                                      }
                                    >
                                      삭제
                                    </DeleteBtn>
                                  </>
                                ) : null}
                              </StBox>
                            </WrapWritten>
                          </Commenttextarea>
                        </Commentbox>
                      )}
                    </div>
                  );
                })}
              </div>
            </Commentarea>
          </StDetail>
        </div>
      </>
    );
  }
};
const Profile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const StDetail = styled.div`
  width: 1200px;
  margin: auto;
  word-break: break-all;
  background: white;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const Wrap = styled.div`
  margin-left: 200px;
`;
const StNickname = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  margin-right: 20px;
`;
const Etc = styled.div`
  font-size: 14px;
  display: flex;
  text-align: center;
  margin-top: 10px;
`;
const Etcs = styled.div`
  display: flex;
  text-align: center;
  font-size: 14px;
  color: #a0a0a0;
`;
const Else = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;
const Countcomment = styled.p`
  margin-right: 20px;
`;
const Heart = styled.p``;
const StContent = styled.div`
  /* border: 1px solid yellow; */
  width: 800px;
  padding: 10px;
  font-size: 18px;
  word-break: break-all;
  margin-top: 30px;
  margin-bottom: 50px;

  img {
    max-width: 800px;
    height: auto;
  }
`;

const CommentBtn = styled.button`
  margin-top: 10px;
  float: right;
  width: 68px;
  height: 32px;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 20px;
  color: #cbcbcb;
  cursor: pointer;

  &:hover {
    color: black;
    border: 1px solid black;
  }
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

const StBox = styled.div`
  width: 750px;
  display: flex;
  justify-content: right;
`;
const Commentinput = styled.textarea`
  padding-top: 10px;
  padding-left: 10px;
  width: 650px;
  height: 118px;
  float: left;
  resize: none;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  outline: none;
`;

const EditBtn = styled.button`
  margin-bottom: 30px;
  background-color: white;
  border: 0;
  padding-right: 10px;
  width: 40px;
  height: 16px;
  border-right: 1px solid #e4e4e4;
  color: #a0a0a0;
  font-size: 14px;
  font-family: "Pretendard";
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  margin-bottom: 30px;
  background-color: white;
  padding-left: 7px;
  padding-bottom: 4px;
  border: 0;
  width: 40px;
  height: 20px;
  color: #a0a0a0;
  font-size: 14px;
  font-family: "Pretendard";
  cursor: pointer;
`;

const Commentbox = styled.div`
  width: 800px;
  height: 100px;
  margin-left: 200px;
  margin-top: 30px;
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
  font-size: 14px;
  font-weight: 400;
  width: 650px;
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

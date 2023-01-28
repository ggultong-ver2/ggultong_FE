import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { __editComment } from "../redux/modules/postSlice";
function EditComment({ commentId, setVisible }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const detailList = useSelector((state) => state.details.details);
  const commentList = useSelector((state) => state.details.details.comment);
  console.log("commentid", commentId);
  const [editcomment, setEditComment] = useState({
    content: "",
  });
  const [content, setContent] = useState("");

  useEffect(() => {
    if (commentList) {
      setEditComment(commentList.filter((e) => e.id === commentId)[0].content);
    }
  }, [commentList]);

  const onClickEditCommentHandler = (id) => {
    dispatch(__editComment({ editcomment, commentId })).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "댓글 수정완료",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  console.log("visible", setVisible);
  return (
    <>
      <Writecomment
        onSubmit={(e) => {
          e.preventDefault();
          onClickEditCommentHandler(commentId);
          setVisible(false);
        }}
      >
        <Myprofile src={localStorage.getItem("profileImg")} />

        <Commentinput
          name="content"
          placeholder="댓글을 작성할 수 있어요."
          type="text"
          value={editcomment}
          onChange={(ev) => {
            const { value } = ev.target;
            setEditComment(value);
          }}
        />
        <CommentBtn
        // onClick={(e) => {
        //   setVisible(false);
        // }}
        >
          확인
        </CommentBtn>
      </Writecomment>
    </>
  );
}

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

const Writecomment = styled.form`
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
export default EditComment;

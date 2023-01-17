import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  __addComment,
  __deleteComment,
  __editComment,
  __getComment,
} from "../../redux/modules/commentSlice";
import CommentList from "./CommentList";
import "./style.css"

const Comments = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { isLoading, error, comment } = useSelector((state) => state.comment);

  const [addComment, setAddComment] = useState({
    comment: "",
  });

  useEffect(() => {
    dispatch(__getComment({ postId: id }));
  }, [dispatch, id]);

  const onClickAddCommentHandler = () => {
      dispatch(__addComment([addComment, id]));
      setAddComment({
        comment: "",
      });
  };
  console.log(comment);
  return (
    <div className="comment_wrap">
      <div className="comment_box">댓글</div>
      <div className="comment_input">
        <textarea
        className="comment_write"
          value={addComment.comment}
          placeholder="댓글을 입력해주세요."
          onChange={(e) => {
            setAddComment({
              ...addComment,
              comment: e.target.value,
            });
          }}
        ></textarea>
        <button onClick={onClickAddCommentHandler} className="comment_post_btn">등록하기</button>
      </div>

      {comment.map((comment) => (
        <CommentList comment={comment}/>
      ))}

    </div>
  );
};
export default Comments;

import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css"
import {
  __addComment,
  __deleteComment,
  __getComment,
  __editComment,
} from "../../redux/modules/commentSlice";

const CommentList = ({ comment }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const onClickDeleteCommentHandler = () => {
      dispatch(__deleteComment({ postId: id }));
  };
  const [isCommentChange, setIsCommentChange] = useState(false);

  const [editComment, setEditComment] = useState({
    comment: "",
  });

  const onClickEditCommentHandler = () => {
      if (isCommentChange === false) {
        setIsCommentChange(true);
      } else {
        dispatch(
          __editComment({
            editComment: editComment,
            postId: id,
          })
        );
        setIsCommentChange(false);
      }
  };

  return (
    <div>
      <div className="comment">
        {isCommentChange === false ? (
          <div className="comment_text">
            <div className="comment_nick">{comment.nickname}</div>
            <div className="comment_text">{comment.comment}</div>
          </div>
        ) : (
          <div className="comment_edit_input">
            <div className="comment_text">{comment.nickname}</div>
            <input
              type="text"
              onChange={(e) => {
                setEditComment({
                  ...editComment,
                  comment: e.target.value,
                });
                console.log(editComment);
              }}
            ></input>
          </div>
        )}

        <div>
          <button className="review_button"
            onClick={() => {
              onClickEditCommentHandler(comment);
            }}
          >
            수정
          </button>
          <button className="review_button"
            onClick={() => {
              onClickDeleteCommentHandler(comment);
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentList;

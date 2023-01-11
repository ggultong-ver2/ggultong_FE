const CommentPost = ({ onChangeComment, comment, commentHandler }) => {
  return (
    <div className="comment_box">
      <div>Comment</div>
      <textarea
        className="comment_textarea"
        onChange={onChangeComment}
        value={comment}
      ></textarea>
      <button onClick={commentHandler}>등록하기</button>
    </div>
  );
};

export default CommentPost;

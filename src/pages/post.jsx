import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";
import styled from "styled-components";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addPost, setAddPost] = useState({
    title: "",
    file: "",
    content: "",
    category: "",
  });

  const onClickAddPostHandler = () => {
    dispatch(__addPost(addPost));
    console.log(addPost);
  };

  return (
    <div>
      <p># 게시글 작성</p>
      <p>
        제목:
        <input
          type="text"
          onChange={(e) => {
            setAddPost({ ...addPost, title: e.target.value });
          }}
        ></input>
      </p>
      <p>
        카테고리:
        <select
          type="select"
          name="category"
          id="category"
          onChange={(e) => {
            setAddPost({ ...addPost, category: e.target.value });
          }}
        >
          <option value="choose">선택해주세요</option>
          <option value="tip">꿀팁</option>
          <option value="item">꿀템</option>
          <option value="room">꿀방</option>
          <option value="meal">꿀밥</option>
        </select>
      </p>
      <p>
        파일:
        <input
          type="file"
          id="fileUpload"
          multiple={true}
          width="500px"
          onChange={(e) => {
            setAddPost({ ...addPost, file: e.target.value });
          }}
        />
        <button>추가하기</button>
      </p>
      <p>
        내용:
        <textarea
          type="text"
          onChange={(e) => {
            setAddPost({ ...addPost, content: e.target.value });
          }}
        ></textarea>
        <button onClick={onClickAddPostHandler}>등록</button>
        <button>취소</button>
      </p>
    </div>
  );
};

export default Post;

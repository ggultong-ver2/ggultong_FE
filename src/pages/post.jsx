import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";
import styled from "styled-components";
import "./reset.css";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const onClickAddPostHandler = () => {
  //dispatch(__addPost(addPost));
  //console.log(addPost);
  //};

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [post, setPost] = useState([]);

  const onSubmitHandler = () => {
    console.log("addpost::", title, content, category, file);
    const formdata = new FormData();
    formdata.append("title", title.title);
    formdata.append("file", file);
    formdata.append("content", content.content);
    formdata.append("category", category.category);
    console.log(formdata);

    dispatch(__addPost(formdata));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(post);
      }}
    >
      <p># 게시글 작성</p>
      <p>
        제목:
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setTitle({ ...title, title: value });
          }}
          //onChange={(e) => {
          //setAddPost({ ...addPost, title: e.target.value });
          //}}
        ></input>
      </p>
      <p>
        카테고리:
        <select
          type="select"
          name="category"
          id="category"
          onChange={(ev) => {
            const { value } = ev.target;
            setCategory({ ...category, category: value });
          }}
        >
          <option value="choose">선택해주세요</option>
          <option value="tip">꿀팁</option>
          <option value="item">꿀템</option>
          <option value="room">꿀방</option>
          <option value="meal">꿀밥</option>
          <option value="free">자유게시판</option>
          <option value="question">Q&A</option>
        </select>
      </p>
      <p>
        파일:
        <input
          type="file"
          id="fileUpload"
          multiple={true}
          width="500px"
          onChange={(ev) => {
            const { value } = ev.target;
            setFile({ ...file, file: value });
          }}
        />
        <button>추가하기</button>
      </p>
      <p>
        내용:
        <textarea
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setContent({ ...content, content: value });
          }}
        ></textarea>
        <button>등록</button>
        <button>취소</button>
      </p>
    </form>
  );
};

export default Post;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __editPost, __getIdPost } from "../redux/modules/postSlice";
import { useParams, useNavigate } from "react-router";
import "./reset.css";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();

  const [editPost, setEditPost] = useState({
    title: "",
    file: "",
    content: "",
  });

  const selected = useSelector((state) => state.posts.detail);

  const onClickEditPostHandler = () => {
    const newPost = {
      title: "",
      file: "",
      content: "",
    };
    dispatch(__editPost([newPost, id]));
  };

  useEffect(() => {
    dispatch(__getIdPost(Number(id)));
  }, [dispatch, id]);

  console.log("selected:", selected);

  useEffect(() => {
    if (selected) {
      setTitle(selected.title);
      setFile(selected.file);
      setContent(selected.content);
    }
  }, [selected]);

  return (
    <div>
      <p>게시글 수정</p>
      제목:
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      카테고리:
      <select type="select" name="category" id="category">
        <option value="choole">선택해주세요</option>
        <option value="tip">꿀팁</option>
        <option value="item">꿀템</option>
        <option value="room">꿀방</option>
        <option value="meal">꿀밥</option>
      </select>
      이미지:
      <image>
        <input
          type="file"
          width="500px"
          value={file}
          onChange={(e) => {
            setFile(e.target.value);
          }}
        ></input>
      </image>
      {/* 추가하기 누르면 파일선택 늘어나게.. */}
      내용:
      <textarea
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <button onClick={onClickEditPostHandler}>완료</button>
      <button>취소</button>
    </div>
  );
};

export default EditPost;

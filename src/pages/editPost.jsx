import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __editPost, __getIdPost } from "../redux/modules/postSlice";
import { useParams, useNavigate } from "react-router";
import "./reset.css";
import styled from "styled-components";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => state.details.details);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState([]);
  const [content, setContent] = useState("");
  const { id } = useParams();

  const onEditPostHandler = (id) => {
    const formdata = new FormData();
    for (const f of Array.from(file)) {
      formdata.set("file", f);
    }
    formdata.set("title", title);
    formdata.set("content", content);
    formdata.set("category", category);
    dispatch(__editPost({ id, formdata }));
    // for (const pair of formdata) {
    //   console.log(pair[0] + "," + pair[1]);
    // }
    for (let key of formdata.keys()) {
      console.log(key);
    }
    for (let value of formdata.values()) {
      console.log(value);
    }
  };
  useEffect(() => {
    dispatch(__getIdPost(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setCategory(post.category);
      setContent(post.content);
      setFile(post.imageFiles); // 없음
    }
  }, [post]);

  // console.log(post.imageFiles);
  // console.log(file);
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onEditPostHandler(Number(id));
        }}
      >
        <Category>
          카테고리
          <CategorySelect
            type="select"
            name="category"
            value={category}
            id="category"
            onChange={(ev) => {
              const { value } = ev.target;
              setCategory(value);
            }}
          >
            <option value="choose">선택해주세요</option>
            <option value="tip">꿀팁</option>
            <option value="item">꿀템</option>
            <option value="room">꿀방</option>
            <option value="meal">꿀밥</option>
            <option value="free">자유게시판</option>
            <option value="question">Q&A</option>
          </CategorySelect>
        </Category>
        <Wrap>
          <Title>
            제목
            <TitleInput
              type="text"
              name="title"
              value={title}
              onChange={(ev) => {
                const { value } = ev.target;
                setTitle(value);
              }}
            ></TitleInput>
          </Title>
          <Content
            type="text"
            placeholder="자취하면서 궁금했던 점이나 나만 아는 꿀팁을 적어봐요!"
            value={content}
            onChange={(ev) => {
              const { value } = ev.target;
              setContent(value);
              console.log("value:", value);
            }}
          ></Content>
          <File>
            첨부파일
            <FileInput
              type="file"
              name="fileUpload"
              id="fileUpload"
              multiple={true}
              width="500px"
              onChange={(ev) => {
                const { files } = ev.target;
                setFile(files);
              }}
            />
          </File>
          <Btns>
            <BackButton>취소</BackButton>
            <EnterButton>확인</EnterButton>
          </Btns>
        </Wrap>
      </Form>
    </div>
  );
};

const Form = styled.form`
  border: 1px solid black;
  width: 900px;
  height: 1250px;
  margin: auto;
  margin-top: 50px;
  padding: 10px;
`;
const Category = styled.p`
  margin-bottom: 50px;
  font-size: 20px;
`;
const CategorySelect = styled.select`
  margin-left: 10px;
`;
const Wrap = styled.div`
  //border: 1px solid red;
  height: 1200px;
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const TitleInput = styled.input`
  border-bottom: 1px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 800px;
  height: 30px;
  margin-left: 10px;
  font-size: 30px;
  outline: none;
`;
const Content = styled.textarea`
  width: 850px;
  height: 900px;
  margin-left: 25px;
  resize: none;
  outline: none;
  border: none;
  font-size: 25px;
`;
const File = styled.div`
  font-size: 20px;
`;
const FileInput = styled.input`
  //border: 1px solid green;
  margin-left: 10px;
`;
const Btns = styled.div`
  margin-left: 350px;
  margin-top: 50px;
`;
const BackButton = styled.button`
  width: 90px;
  height: 35px;
  background-color: white;
  border-radius: 30px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const EnterButton = styled.button`
  width: 90px;
  height: 35px;
  background-color: #474747;
  color: white;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export default EditPost;

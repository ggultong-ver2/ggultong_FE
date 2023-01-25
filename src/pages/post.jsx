import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";
import styled from "styled-components";
import "./reset.css";
// import Editor from "../components/editor/Editor";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

  // const getValue = (e) => {
  //   const { value } = e.target;
  //   setContent({
  //     ...content,
  //     content: value,
  //   });
  //   console.log(content);
  // };

  const onSubmitHandler = (e) => {
    const formdata = new FormData();
    //console.log("addpost::", title, content, category, file);

    // formdata.append("file", file);
    for (const f of Array.from(file)) {
      formdata.append("file", f);
    }
    formdata.append("title", title.title);
    formdata.append("content", content.content);
    formdata.append("category", category.category);
    console.log(file);
    //for (let value of formdata.values()) {
    //console.log(key);
    //}
    // formdata의 값 확인하는 방법..values 대신 key 넣고 확인도 가능.
    dispatch(__addPost(formdata));
    Swal.fire("작성이 완료되었습니다!", "", "success");
    navigate(`/drinkList/drink`);

    for (const pair of formdata) {
      console.log(pair[0] + "," + pair[1]);
    }
  };

  const [viewContent, setViewContent] = useState([]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(post);
      }}
    >
      <Category>
        카테고리
        <CategorySelect
          type="select"
          name="category"
          id="category"
          onChange={(ev) => {
            const { value } = ev.target;
            setCategory({ ...category, category: value });
          }}
        >
          <option value="choose">선택해주세요</option>
          <option value="drink">혼술</option>
          <option value="meal">혼밥</option>
          <option value="recycle">리사이꿀</option>
        </CategorySelect>
      </Category>
      <Wrap>
        <Title>
          제목
          <TitleInput
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              setTitle({ ...title, title: value });
            }}
            //onChange={(e) => {
            //setAddPost({ ...addPost, title: e.target.value });
            //}}
          ></TitleInput>
        </Title>

        {/* <Content
          type="text"
          placeholder="자취하면서 궁금했던 점이나 나만 아는 꿀팁을 적어봐요!"
          onChange={(ev) => {
            const { value } = ev.target;
            setContent({ ...content, content: value });
          }}
        ></Content> */}
        {/* <Editor
          type="text"
          content={content}
          setContent={setContent}

          // content, setContent를 props로 Editor.jsx에 넘겨주는 방식
          // onChange={(e, editor) => {
          //   const data = editor.getData();
          //   console.log({ e, editor, data });
          //   setContent({ ...content, content: data });
          // }}
        /> */}
        <br></br>
        <ReactQuill type="text" onChange={(content) => {}} />
        {/* <Quill type="text" content={content} setContent={setContent} /> */}
        <File>
          첨부파일
          <FileInput
            type="file"
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
  );
};

const Form = styled.form`
  //border: 1px solid black;
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
  margin-top: 10px;
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

export default Post;

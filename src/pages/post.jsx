import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";
import styled from "styled-components";
import "./reset.css";
import Swal from "sweetalert2";
import Quill from "../components/editorComponent/quill";
import fileinput from "../assets/images/fileinput.png";
import { TiWarningOutline } from "react-icons/ti";
import "./style.css";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgRef = useRef();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [post, setPost] = useState([]);
  const [imageFile, setImageFile] = useState("");

  console.log(file);

  const onSubmitHandler = (e) => {
    const formdata = new FormData();
    for (const f of Array.from(file)) {
      formdata.append("file", f);
    }
    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("category", category);
    // formdata의 값 확인하는 방법..values 대신 key 넣고 확인도 가능.
    if (category === "") {
      Swal.fire("카테고리를 선택해주세요!", "", "warning");
    } else if (category === "choose") {
      Swal.fire("카테고리를 선택해주세요!", "", "warning");
    } else if (title === "") {
      Swal.fire("제목을 입력해주세요!", "", "warning");
    } else if (content === "") {
      Swal.fire("내용을 입력해주세요!", "", "warning");
    } else {
      dispatch(__addPost(formdata));
      Swal.fire("작성이 완료되었습니다!", "", "success").then((res) => {
        if (res.isConfirmed) {
          navigate(`/${category}List/${category}`);
        }
      });
    }
  };

  // const onChangeImage = () => {
  //   const file = imgRef.current.files[0];
  //   const reader = new FileReader();
  //   console.log(reader);
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImageFile(reader.result);
  //   };
  // };

  return (
    <Background>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(post);
        }}
      >
        <div className="post_top_container">
          <div className="post_top_wrap">
            <div className="post_top">
              <select
                name="category"
                id="category"
                className="post_top_select"
                onChange={(ev) => {
                  const { value } = ev.target;
                  setCategory(value);
                }}
              >
                <option value="choose">게시판 선택</option>
                <option value="drink">혼술</option>
                <option value="meal">혼밥</option>
                <option value="recycle">리사이꿀</option>
              </select>
              <button>저장</button>
            </div>
          </div>
        </div>
        <Wrap>
          <div className="post_input_wrap">
            <input
              type="text"
              maxLength={30}
              placeholder="제목을 입력해주세요"
              onChange={(ev) => {
                const { value } = ev.target;
                setTitle(value);
              }}
              className="post_searchinp"
            ></input>
          </div>
          <div className="post_file_wrap">
            <label htmlFor="file">썸네일 첨부</label>
            <input
              className="post_file_input"
              type="file"
              id="file"
              multiple={true}
              onChange={(ev) => {
                const { files } = ev.target;
                setFile(files);
              }}
              // ref={imgRef}
            />
            <img src={imageFile} width="100px" height="100px"></img>
            <p>썸네일은 음식 월드컵에 이용됩니다.</p>
          </div>

          <Quill type="text" content={content} setContent={setContent} />

        </Wrap>
      </Form>
    </Background>
  );
};
const Background = styled.div`
  background-color: #f9fafb;
  width: 100%;
  min-height: 100vh;
  padding-top: 112px;
  padding-bottom: 50px;
`;
const Form = styled.form`
  //border: 1px solid black;
  width: 1000px;
  height: 1330px;
  margin: auto;
  /* margin-top: 50px; */
  padding: 10px 50px;
  background-color: white;
`;
const Wrap = styled.div`
  //border: 1px solid red;
  height: 1200px;
`;

export default Post;

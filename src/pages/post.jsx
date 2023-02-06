import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";
import styled from "styled-components";
import "./reset.css";
// import Editor from "../components/editor/Editor";
import Swal from "sweetalert2";
import Quill from "../components/editorComponent/quill";
<<<<<<< HEAD
import fileinput from "../assets/images/fileinput.png";
import { TiWarningOutline } from "react-icons/ti";
=======
import "./style.css";
>>>>>>> 96817ebf9b4ee0bf4e3a30bc9eb9a75a2e7a67df

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgRef = useRef();

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
    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("category", category);
    console.log(file);
    //for (let value of formdata.values()) {
    //console.log(key);
    //}
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
        console.log(res);
        if (res.isConfirmed) {
          navigate(`/drinkList/drink`);
        }
      });
    }

    for (const pair of formdata) {
      console.log(pair[0] + "," + pair[1]);
    }
  };

  return (
<<<<<<< HEAD
    <Background>
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
              setCategory(value);
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
                setTitle(value);
              }}
            ></TitleInput>
          </Title>

          <br></br>

          <Quill type="text" content={content} setContent={setContent} />

          <File>
            <Filetext>썸네일 사진</Filetext>
            <TiWarningOutline className="icon" size="28" color="#e9e623" />
            <ThumbnailEx>
              썸네일 사진을 첨부하지 않으면 음식 월드컵에 참여할 수 없습니다.
            </ThumbnailEx>

            <label htmlFor="ex_file">
              <div className="fileinput">
                <img src={fileinput} alt="fileinput" />
              </div>
            </label>
            <input
              type="file"
              id="ex_file"
              ref={imgRef}
              multiple={false}
              onChange={(ev) => {
                const { files } = ev.target;
                setFile(files);
              }}
              width="92px"
              height="32px"
            />
          </File>
=======
    <>
      <Background>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler(post);
          }}
        >
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

          <Wrap>
            <div className="post_input_wrap">
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                onChange={(ev) => {
                  const { value } = ev.target;
                  setTitle(value);
                }}
                className="post_searchinp"
                //onChange={(e) => {
                //setAddPost({ ...addPost, title: e.target.value });
                //}}
              ></input>
            </div>

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
            {/* <h1 style={{ padding: "20px" }}>
            [#006888 YERIEL] React Quill Image Resize
          </h1> */}
            <Quill type="text" content={content} setContent={setContent} />
            <File>
              <FileInput
                type="file"
                id="fileUpload"
                multiple={false}
                width="500px"
                onChange={(ev) => {
                  const { files } = ev.target;
                  setFile(files);
                }}
              />
            </File>
>>>>>>> 96817ebf9b4ee0bf4e3a30bc9eb9a75a2e7a67df

            {/* <Btns>
              <BackButton
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                취소
              </BackButton>
              <EnterButton>확인</EnterButton>
            </Btns> */}
          </Wrap>
        </Form>
      </Background>
    </>
  );
};
const Background = styled.div`
  background-color: #f9fafb;
  width: 100%;
  min-height: 95vh;
  padding-top: 112px;
`;
const Form = styled.form`
  //border: 1px solid black;
  width: 900px;
  height: 1250px;
  margin: auto;
  /* margin-top: 50px; */
  padding: 10px;
  background-color: white;
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
<<<<<<< HEAD
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

=======
const Content = styled.textarea`
  width: 850px;
  height: 900px;
  margin-left: 25px;
  resize: none;
  outline: none;
  border: none;
  font-size: 25px;
`;
>>>>>>> 96817ebf9b4ee0bf4e3a30bc9eb9a75a2e7a67df
const File = styled.div`
  float: left;
  font-size: 20px;
  margin-top: 10px;
  label {
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 92px;
    height: 32px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    background-color: black;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
<<<<<<< HEAD

const Filetext = styled.p`
  float: left;
  font-size: 16px;
  margin-right: 5px;
=======
const FileInput = styled.input`
  //border: 1px solid green;
  margin-left: 10px;
  cursor: pointer;
>>>>>>> 96817ebf9b4ee0bf4e3a30bc9eb9a75a2e7a67df
`;
const ThumbnailEx = styled.p`
  margin-top: -30px;
  margin-left: 110px;
  font-size: 14px;
  /* border: 1px solid yellow; */
  width: 780px;
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

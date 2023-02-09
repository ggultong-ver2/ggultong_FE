import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __editPost, __getIdPost } from "../redux/modules/postSlice";
import { useParams, useNavigate } from "react-router";
import "./reset.css";
import "./style.css";
import styled from "styled-components";
import Swal from "sweetalert2";
import Quill from "../components/editorComponent/quill";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgRef = useRef();
  const post = useSelector((state) => state.details.details);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("wadf");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const [imageFile, setImageFile] = useState("");

  const onEditPostHandler = (id) => {
    const formdata = new FormData();

    if (!file) {
      formdata.set(file, "");
    } else {
      for (const f of Array.from(file)) {
        formdata.set("file", f);
      }
    }
    formdata.set("title", title);
    formdata.set("content", content);
    formdata.set("category", category);
    dispatch(__editPost({ id, formdata }));

    Swal.fire("수정완료", "수정 완료되었습니다!", "success").then((res) => {
      if (res.isConfirmed) {
        navigate(`/drinkList/drink`);
      }
    });
    for (let key of formdata.keys()) {
    }
    for (let value of formdata.values()) {
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

  const onChangeImage = (e) => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    console.log(reader);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(reader.result);
    };
  };

  return (
    <div>
      <Background>
        <form
          className="post_top_container"
          onSubmit={(e) => {
            e.preventDefault();
            onEditPostHandler(Number(id));
          }}
        >
          <div className="post_top_wrap">
            <div className="post_header">
              <div className="logo">
                <a href="/">LOGO</a>
              </div>
              <div className="post_top">
                <select
                  name="category"
                  id="category"
                  className="post_top_select"
                  value={category}
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
        </form>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            onEditPostHandler(Number(id));
          }}
        >
          <Wrap>
            <div className="edit_post_input_wrap">
              <input
                type="text"
                name="title"
                maxLength={30}
                className="post_searchinp"
                value={title}
                onChange={(ev) => {
                  const { value } = ev.target;
                  setTitle(value);
                }}
              ></input>
            </div>
            <div className="thumbnail_wrap">
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
                    onChangeImage();
                  }}
                  // ref={imgRef}
                />
                <p>썸네일은 음식 월드컵에 이용됩니다.</p>
              </div>
              <img
                src={imageFile}
                width="100px"
                height="100px"
                className="thumbmail"
              ></img>
            </div>

            <Quill type="text" content={content} setContent={setContent} />
          </Wrap>
        </Form>
      </Background>
    </div>
  );
};

const Background = styled.div`
  background-color: #f9fafb;
  width: 100%;
  min-height: 100vh;
  padding-top: 12px;
  padding-bottom: 50px;
`;

const Form = styled.form`
  width: 1000px;
  height: 1330px;
  margin: auto;
  margin-top: 50px;
  padding: 10px 50px;
  background-color: #fff;
`;
const Wrap = styled.div`
  //border: 1px solid red;
  height: 1200px;
`;

export default EditPost;

import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Editor = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   //const onClickAddPostHandler = () => {
  //   //dispatch(__addPost(addPost));
  //   //console.log(addPost);
  //   //};

  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [file, setFile] = useState("");
  //   const [post, setPost] = useState([]);

  //   const onSubmitHandler = (e) => {
  //     const formdata = new FormData();
  //     //console.log("addpost::", title, content, category, file);

  //     // formdata.append("file", file);
  //     for (const f of Array.from(file)) {
  //       formdata.append("file", f);
  //     }
  //     formdata.append("title", title.title);
  //     formdata.append("content", content.content);
  //     formdata.append("category", category.category);
  //     console.log(file);
  //     //for (let value of formdata.values()) {
  //     //console.log(key);
  //     //}
  //     // formdata의 값 확인하는 방법..values 대신 key 넣고 확인도 가능.
  //     dispatch(__addPost(formdata));

  //     for (const pair of formdata) {
  //       console.log(pair[0] + "," + pair[1]);
  //     }
  //   };

  return (
    <div className="App">
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default Editor;

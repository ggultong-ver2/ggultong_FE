import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo } from "react";
import { useRef } from "react";
import { baseURL } from "../../lib/axios";

const Quill = ({ content, setContent, value }) => {
  const quillRef = useRef();

  const toolbarOptions = [
    [{ header: [1, 2, false] }],
    ["bold", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }],
    ["clean"],
  ];

  // const base64toFile = (base_data, filename) => {
  //   const arr = base_data.split(","),
  //     mime = arr[0].match(/:(.*?);/)[1],
  //     bstr = atob(arr[1]),
  //     n = bstr.length,
  //     u8arr = new Uint8Array(n);

  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt9(n);
  //   }
  //   return new File([u8arr], filename, { type: mime });
  // };

  // 이미지 처리 핸들러
  const imageHandler = () => {
    console.log("에디터 이미지 버튼 클릭");
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 이미지 버튼 클릭하면 얘가 클릭됨

    input.addEventListener("change", async () => {
      console.log("뭔가 변화가 있었니?");
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);

      for (var key of formData.keys()) {
        console.log(key);
      }

      for (var value of formData.values()) {
        console.log(value);
      }

      try {
        const result = await baseURL.post("/post/imageUrlReturn", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("result", result);
        const IMG_URL = result.data[0];
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        console.log(error);
      }
    });
  };
  // 상정님한테 이미지를 하나씩 보낼건데 그거를 url로 바꿔주는 api주소가 필요합니다. 말하기

  // const imageHandler = () => {
  //   // get editor
  //   const editor = quillRef.current.getEditor();

  //   const input = document.createElement("input");
  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();

  //   input.onchange = async () => {
  //     const file = input.files[0];
  //     try {
  //       const link = IMAGE_LINK_HERE;
  //       editor.insertEmbed(editor.getSelection(), "image", link);
  //     } catch (err) {
  //       console.log("upload err:", err);
  //     }
  //   };
  // };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    "header",
    "bold",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <div style={{ height: "1050px" }}>
      <ReactQuill
        style={{ height: "1000px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        // value={value || ""}
        onChange={(content) => setContent(content)}
        value={content}
        ref={quillRef}
      />
    </div>
  );
};

export default Quill;

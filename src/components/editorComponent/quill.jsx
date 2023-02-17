import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { baseURL } from "../../lib/axios";
// import ImageResize from "@looop/quill-image-resize-module-react";

// Quill.register("modules/ImageResize", ImageResize);
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

  // 이미지 처리 핸들러
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 이미지 버튼 클릭하면 얘가 클릭됨

    input.addEventListener("change", async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const result = await baseURL.post("/post/imageUrlReturn", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        const IMG_URL = result.data[0];
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {}
    });
  };

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
    <div style={{ height: "750px" }}>
      <ReactQuill
        style={{ height: "700px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={(content) => setContent(content)}
        value={content}
        ref={quillRef}
      />
    </div>
  );
};

export default Quill;

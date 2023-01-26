import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useMemo } from "react";

const Quill = ({ content, setContent, value }) => {
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

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {},
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
        // onChange={(ev) => {
        //   const { value } = ev.target;
        //   console.log(value);
        //   setContent({ ...content, content: value });
        // }}
        modules={modules}
        formats={formats}
        // value={value || ""}
        // onChange={(content, delta, source, editor) =>
        //   onChange(editor.getHTML())
        // }
      />
    </div>
  );
};

export default Quill;

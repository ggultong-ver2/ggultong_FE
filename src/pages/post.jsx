import React, { useState, useRef } from "react";

const Post = () => {
  const imgRef = useRef();

  const onChangeImage = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    //console.log(reader);
    // const file = imgRef.current.files[0];
    //console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      // const image = reader.result;
      setPost({
        ...post,
        imageUrl: reader.result,
      });
    };
  };

  const [imagefile, setImageFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState([]);

  return (
    <div>
      <p>게시글 작성</p>
      제목:<input type="text"></input>
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
          ref={imgRef}
          onChange={onChangeImage}
          width="500px"
        ></input>
      </image>
      {/* 추가하기 누르면 파일선택 늘어나게.. */}
      내용:
      <textarea></textarea>
      <button>등록</button>
      <button>취소</button>
    </div>
  );
};

export default Post;

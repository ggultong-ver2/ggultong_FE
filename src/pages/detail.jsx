import "./reset.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getIdPost, __deletePost } from "../redux/modules/postSlice";
import Swal from "sweetalert2";
import Likes from "../components/like/Likes";
// import Comments from "../components/comment/Comments";


const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const { id } = useParams();

  const details = useSelector((state) => state.details.details);
  console.log("details:", details);
  const [isLogin, setIsLogin] = useState(false);
  // const [likeToggle, setLikeToggle] = useState(false);

  useEffect(() => {
    dispatch(__getIdPost(+param.id));
  }, [dispatch, param.id]);

  const onClickDeletePostHandler = () => {
    if (localStorage.getItem("nickname") === details.nickname) {
      dispatch(__deletePost(id));
      Swal.fire("삭제 완료", "삭제 완료되었습니다", "success");
    } else {
      Swal.fire("Warning", "로그인 후 이용 가능합니다!", "warning");
    }
  };

  const onClickEditPostHandler = () => {
    if (details.nickname === localStorage.getItem("nickname")) {
      //localStorage.getItem = key(nickname)로부터 data 읽기
      navigate(`/editpost/${id}`);
    } else {
      Swal.fire(
        "로그인 후 이용 가능합니다",
        "타인의 게시물을 수정할 수 없습니다",
        "warning"
      );
    }
  };

  return (
    <div>
      <StDetail>
        <p>{details?.id}</p>
        <Wrap>
          <StTitle>{details?.title}</StTitle>
          <Else>
            <Etc>
              <StNickname>{details?.nickname}</StNickname>
              <Date>{details?.createdAt.slice(0, 10)}</Date>
            </Etc>
            <Etcs>
              <Countcomment>댓글</Countcomment>
              <Heart>좋아요 {details?.likePostSum}</Heart>
            </Etcs>
          </Else>
          <StFile src={details?.imageFiles[0]} />
          <StContent>{details?.content}</StContent>
          <StFiles src={details?.imageFiles[1]} />
          <Btns>
            <StEditBtn onClick={onClickEditPostHandler}>수정</StEditBtn>
            <StDeleteBtn onClick={onClickDeletePostHandler}>삭제</StDeleteBtn>
          </Btns>
        </Wrap>
        <Likes />
        <Commentarea>
          <Writecomment>
            <Myprofile />
            {/* <Comments /> */}
            <Commentinput placeholder="댓글을 작성할 수 있어요." />
          </Writecomment>
          <Commentbox>
            <Commenttextarea>
              <Profileimg />
              <WrapWritten>
                <Writtenby>자취왕초보</Writtenby>
                <Writtendate>2023.01.12</Writtendate>
                <Commentcontent>
                  국, 카레, 찌개, 볶음 등 국물이 조금이라도 있는 음식을 하루
                  이상 먹을 분량을 조리했다면 그 날 먹을 예정이 없더라도
                  한번씩은 불을 켜서 데워줘야 한다.
                </Commentcontent>
              </WrapWritten>
            </Commenttextarea>
          </Commentbox>
        </Commentarea>
      </StDetail>
    </div>
  );
};

const StDetail = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 1800px;
  margin: auto;
  margin-top: 30px;
`;
const Wrap = styled.div`
  margin-left: 200px;
  margin-top: 20px;
`;
const StTitle = styled.p`
  border: 1px solid blue;
  height: 60px;
  width: 800px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const StNickname = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  margin-right: 20px;
`;
const Etc = styled.div`
  width: 800px;
  display: flex;
  text-align: center;
`;
const Etcs = styled.div`
  display: flex;
  text-align: center;
`;
const Else = styled.div`
  width: 800px;
  justify-content: space-between;
`;
const Countcomment = styled.p`
  margin-right: 20px;
`;
const Heart = styled.p``;
const StFile = styled.img`
  border: 1px solid green;
  height: 500px;
  width: 800px;
  background-color: #d9d9d9;
`;
const StContent = styled.div`
  border: 1px solid yellow;
  height: 350px;
  width: 800px;
  padding: 10px;
  font-size: 18px; ;
`;
const StFiles = styled.img`
  height: 350px;
  width: 800px;
  background-color: #d9d9d9;
`;
const Btns = styled.div`
  margin-left: 270px;
  margin-top: 30px;
`;
const StEditBtn = styled.button`
  height: 60px;
  width: 120px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 25px;
  margin-right: 20px;
`;
const StDeleteBtn = styled.button`
  height: 60px;
  width: 120px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 25px;
`;
const Date = styled.p``;
const Commentarea = styled.div`
  margin-top: 10px;
`;
const Writecomment = styled.div`
  width: 800px;
  height: 105px;
  margin-left: 200px;
`;
const Myprofile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d9d9d9;
  float: left;
  margin: 10px;
`;
const Commentinput = styled.textarea`
  width: 720px;
  height: 100px;
  float: left;
  resize: none;
`;
const Commentbox = styled.div`
  width: 800px;
  height: 80px;
  margin-left: 200px;
`;
const Commenttextarea = styled.div`
  margin-top: 10px;
`;
const WrapWritten = styled.div`
  width: 200px;
  height: 25px;
  float: left;
`;
const Writtenby = styled.p`
  float: left;
  margin-right: 10px;
`;
const Writtendate = styled.p`
  float: left;
  color: #979797;
`;
const Commentcontent = styled.div`
  // border: 1px solid green;
  height: 50px;
  width: 720px;
  margin-top: 25px;
`;
const Profileimg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin: 12px;
  float: left;
`;

export default Detail;

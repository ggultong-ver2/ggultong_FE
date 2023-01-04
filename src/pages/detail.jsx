import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./detail.css";
import { __getIdPost } from "../redux/modules/postSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const details = useSelector((state) => state.posts.detail);
  console.log("details:", details);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    dispatch(__getIdPost(+param.id));
  }, [dispatch, param.id]);

  return (
    <div>
      <div className="wrap">
        <p className="detailTitle">{details.title}</p>
        <div className="detailImg">{details.image}</div>
        <div className="detailContent">{details.content}</div>
        <div className="btns">
          <button className="button">수정</button>
          <button className="buttons">삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import "./reset.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getIdPost, __deletePost } from "../redux/modules/postSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state);
  console.log("details:", details);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const param = useParams();

  useEffect(() => {
    dispatch(__getIdPost(+param.id));
  }, [dispatch, param.id]);

  const onClickDeletePostHandler = (id) => {
    dispatch(__deletePost(id));
  };

  const onClickEditPostHandler = () => {
    navigate(`/editpost/${id}`);
  };

  return (
    <div>
      <StDetail>
        <StTitle>
          오늘은 뭘 먹어야할까? 고민이 된다면 자취요리 10선{details?.title}
        </StTitle>
        <StCategory>카테고리:{details?.category}</StCategory>
        <StFile>파일1:{details?.file}</StFile>
        <StContent>
          장을 볼때는 3일 간격으로, 아니면 비슷한 주기를 정해서 보도록 한다.
          균일하고 규칙성 있는 지출로 금액도 한 눈에 파악할 수 있다. 게다가 이
          이상으로 장을 많이 보면 음식물이 썩거나 처리하기 골치 아플 수 있고, 이
          이하로는 오히려 장을 보기 힘들거나 장보는 기간이 불규칙적이 될 수
          있다. 기억하자, 자취생에게 불규칙성과 게으름은 파멸로 직결된다. 뭘
          만들어 먹을지 모를때에는 요리 레시피 앱을 찾거나 네이버도 뒤져보자.
          각종 조미료는 필수인데, 특히 액젓을 포함한 간장류와 소금, 설탕, 식용유
          등은 요리에 매우 유용하다. 정 살 돈이 없다면 굵은 소금, 간장류, 된장,
          쌈장, 고추장은 꼭 비축해두자. 특히 쌈장은 마늘이나 각종 양념이 되어
          있어 의외로 국을 끓일 때 유용하다. 다시다나 식초도 구비해놓으면 좋다.
          요리를 잘 못하는 자취생은 요리에 쓸데없는 것을 이것저것 넣다보면
          괴랄한 맛의 요리가 나오는 경우가 많다. 소위 잡탕이다. 자취생이 잡탕을
          맛있게 끓이기란 하늘에 별따기와 가까우니 결코 시도하지 말자.
          가능하다면 이미지에 맞는 재료와 조미료만 사용하도록 하자. 식재료도
          아끼고 맛도 훌륭하게 변할 것이다. 정 잡탕을 시도해야 할 상황에
          부딪힌다면, 쌈장을 풀어보도록 하자. 양념장과 마찬가지이므로 꽤 맛있게
          먹을 수 있다. 제대로 된 요리가 하고 싶다면 포털 사이트에서 요리 레시피
          및 조리 방법을 검색해 그대로 따라하자.{details?.content}
        </StContent>
        <StFiles>파일2:</StFiles>
        <Btns>
          <StEditBtn onClick={onClickEditPostHandler}>수정</StEditBtn>
          <StDeleteBtn onClick={onClickDeletePostHandler}>삭제</StDeleteBtn>
        </Btns>
      </StDetail>
    </div>
  );
};

const StDetail = styled.div`
  //border: 1px solid red;
  width: 800px;
  height: 1800px;
  margin: auto;
  margin-top: 30px;
`;
const StTitle = styled.p`
  //border: 1px solid blue;
  height: 60px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
const StCategory = styled.div`
  font-size: 30px;
  text-align: center;
`;
const StFile = styled.div`
  //border: 1px solid green;
  height: 500px;
  width: 800px;
  background-color: #d9d9d9;
`;
const StContent = styled.div`
  //border: 1px solid yellow;
  height: 350px;
  margin-top: 30px;
  font-size: 18px; ;
`;
const StFiles = styled.div`
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

export default Detail;

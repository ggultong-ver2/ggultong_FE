import styled from "styled-components";
import { useNavigate } from "react-router";

const Lists = () => {
  const navigate = useNavigate();
  //const { title, file, content, id } = cardlist;

  return (
    <Card>
      <Textwrap>
        <StTitle>부엌 청소하기 귀찮을 때 완전 쉽게 해결하는 법</StTitle>

        <StContent>
          특히 혼자서 자취할 경우 외로움을 달래고자 애완동물을 섣불리 키우는
          경우가 있는데, 애완동물을 키우는 것은 애초에 힘들고 비용도 꽤 들어갈
          뿐 아니라, 자취생이 일이 있어서 주말을 끼고, 2-3일씩 집을 비워야
          한다면 애완동물은 그 기간 동안 자취방에 홀로 방치된다.
          또한이러이런등등
        </StContent>
        <Etcwrap>댓글12 좋아요100 스크랩400 2023.01.10</Etcwrap>
      </Textwrap>
      <StFile>file</StFile>
    </Card>
  );
};

const Card = styled.div`
  //border: 1px solid red;
  width: 1700px;
  height: 250px;
  margin-bottom: 40px;
`;
const Textwrap = styled.div`
  float: left;
`;
const StTitle = styled.div`
  //border: 1px solid green;
  height: 50px;
  width: 1400px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
`;
const StFile = styled.div`
  //border: 1px solid yellow;
  height: 240px;
  width: 240px;
  float: left;
  position: relative;
  top: 50%;
  left: 9%;
  transform: translate(-50%, -50%);
  background-color: #d9d9d9;
`;
const StContent = styled.div`
  //border: 1px solid blue;
  height: 120px;
  width: 1400px;
  font-size: 22px;
  margin-top: 20px;
`;
const Etcwrap = styled.div`
  //border: 1px solid grey;
  height: 30px;
`;

export default Lists;

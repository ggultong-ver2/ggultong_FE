import styled from "styled-components";
import { useNavigate } from "react-router";

const CardContainer = ({ cardlist }) => {
  const navigate = useNavigate();
  const { title, file, content, id } = cardlist;

  return (
    <Card>
      <StTitle>{title}</StTitle>
      <StFile>{file}</StFile>
      <StContent>{content}</StContent>

      <Btns>
        <ViewMoreBtn
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
        >
          View More
        </ViewMoreBtn>
      </Btns>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid red;
  width: 300px;
  height: 450px;
`;
const StTitle = styled.div`
  border: 1px solid green;
  height: 30px;
`;
const StFile = styled.div`
  border: 1px solid yellow;
  height: 200px;
`;
const StContent = styled.div`
  border: 1px solid blue;
  height: 150px;
`;
const Btns = styled.div``;
const ViewMoreBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  border-radius: 20px;
`;

export default CardContainer;

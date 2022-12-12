import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  const linkGo = () => navigate("/lists");

  return (
    <StDiv background>
      <StDiv>
        <StButton onClick={linkGo}>Go to Food-ing</StButton>
      </StDiv>
    </StDiv>
  );
};

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  ${(props) =>
    props.background &&
    css`
      width: 100%;
      background-image: url("https://cdn.discordapp.com/attachments/1037267111585792020/1051759567433896046/KakaoTalk_Photo_2022-12-12-16-16-40.jpeg");
      background-size: cover;
      opacity: 60%;
    `}
`;

const StButton = styled.button`
  padding: 10px 30px;
  font-size: 20px;
  border-radius: 20px;
  background-color: #b8dced;
  /* border: 2px solid black; */
  cursor: pointer;
  border: 0;
  color: #003751;
  font-weight: bold;
`;

export default Home;

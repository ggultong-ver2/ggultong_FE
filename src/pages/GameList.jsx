import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import __pwcheck from "../redux/modules/checkPwSlice";
import { useInput } from "../lib/utils/useInput";
import { useDispatch } from "react-redux";
import foodbox from "../assets/images/foodbox.png";

function GameList() {
  const [password, setPassword] = useInput();
  const navigate = useNavigate();

  const onCheckPassword = (password) => {
    __pwcheck({
      password,
    }).then((res) => {
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "비밀번호가 확인되었습니다.", "success");
        navigate("/myconfirm/pwchange");
      } else {
        navigate("/myconfirm");
        Swal.fire(res.data.msg, "비밀번호를 다시 확인해주세요!", "error");
      }
    });
  };

  return (
    <StContainer>
      <StTopBox>
        <StBannerBox>
          <StLeftBox>
            <div>
              꿀통 음식 월드컵
              <br />
              이번 달 우승음식은?
              <StButton>랭킹보기</StButton>
              <StButton2
                onClick={() => {
                  navigate("/gamelist/worldcupgame");
                }}
              >
                시작하기
              </StButton2>
            </div>
          </StLeftBox>
          <StRightBox>
            <StImgBox src={require("../assets/images/trophy.png")} />
          </StRightBox>
        </StBannerBox>
      </StTopBox>

      <StListBox>
        <StDiv>이전 월드컵</StDiv>
        <CardBox>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
        </CardBox>
        <CardBox>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
        </CardBox>
        <CardBox>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
          <StCard>
            <StCardImg />
            <StCardImg2 />
            <StP>1월 꿀통 음식 월드컵</StP>
          </StCard>
        </CardBox>
      </StListBox>
      <StFoodBox>
        <StLeftBox2>
          <div>
            오늘 뭐먹지?
            <br />
            고민될 땐 꿀통이 골라줄게!
            <StButton3>음식 랜덤뽑기</StButton3>
          </div>
        </StLeftBox2>

        <StRightBox2>
          <StImgBox2 src={require("../assets/images/food.png")} />
        </StRightBox2>
      </StFoodBox>
    </StContainer>
  );
}
const StContainer = styled.form`
  width: 100%;
  height: 1900px;
  background-color: black;
  background-size: cover;
  font-family: "Pretendard";
`;
const StTopBox = styled.div`
  width: 100%;
  height: 480px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  background-color: #ffd86a;
  flex-direction: column;
  font-family: "Pretendard";
`;
const StCenterBox = styled.div`
  width: 1200px;
  background-color: black;
  height: 100vh;
  border: 0;
  margin: auto;
  border-radius: 1px;
  font-family: "Pretendard";
`;
const StBannerBox = styled.div`
  width: 1000px;
  height: 480px;
  font-size: 24px;
  padding-top: 0px;
  justify-content: center;
  font-family: "Pretendard";
`;

const CardBox = styled.div`
  width: 1200px;
  height: 270px;
  font-size: 24px;
  display: flex;
  font-family: "Pretendard";
`;

const StLeftBox = styled.div`
  padding-top: 120px;
  float: left;
  width: 500px;
  height: 480px;
  font-size: 52px;
  display: flex;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StRightBox = styled.div`
  float: right;
  width: 500px;
  height: 480px;
  margin-top: 50px;
  padding-left: 10px;
  margin-bottom: 150px;
  font-family: "Pretendard";
`;

const StLeftBox2 = styled.div`
  padding-top: 60px;
  padding-left: 40px;
  color: white;
  float: left;
  width: 450px;
  height: 236px;
  font-size: 28px;
  display: flex;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StRightBox2 = styled.div`
  float: right;
  width: 450px;
  height: 236px;
  padding-left: 10px;
  font-family: "Pretendard";
`;

const StListBox = styled.div`
  /* padding-left: 23px; */
  font-size: 28px;
  font-weight: 600;
  margin: auto;
  width: 1200px;
  height: 950px;
`;

const StFoodBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 1200px;
  height: 236px;
  background-image: url("/images/foodbox.png");
  background-repeat: no-repeat;
`;

const StButton = styled.button`
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-top: 50px;
  width: 186px;
  height: 48px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid black;
  background-color: #ffd86a;
  font-family: "Pretendard";

  cursor: pointer;
  &:hover {
    color: black;
    background-color: #ffffff;
  }
`;

const StButton2 = styled.button`
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-top: 50px;
  width: 186px;
  height: 48px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  background-color: black;
  font-family: "Pretendard";
  color: white;

  cursor: pointer;
  &:hover {
    color: black;
    background-color: silver;
    font-weight: 600;
  }
`;

const StImgBox = styled.img`
  width: 451px;
  height: 367px;
`;

const StImgBox2 = styled.img`
  margin-top: 27px;
  margin-left: 200px;
  width: 180px;
  height: 180px;
`;

const StCard = styled.div`
  margin-right: 16px;
  width: 384px;
  height: 255px;
  background-color: orange;
  font-size: 18px;
  font-weight: 500;
  font-family: "Pretendard";
`;
const StP = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 18px;
  padding-top: 20px;
  color: white;
`;

const StDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 1200px;
  height: 50px;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 28px;
  padding-top: 20px;
  color: white;
`;

const StCardImg = styled.img`
  margin-bottom: 5px;
  background-color: green;
  border: 0;
  float: left;
  width: 192px;
  height: 220px;
`;
const StCardImg2 = styled.img`
  margin-bottom: 5px;
  background-color: limegreen;
  border: 0;
  float: right;
  width: 192px;
  height: 220px;
`;

const StButton3 = styled.button`
  margin-top: 20px;
  font-family: "Pretendard";
  width: 127px;
  height: 32px;
  border: 0;
  border-radius: 30px;
  font-size: 16px;
  background-color: #ffd86a;
  color: black;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 0;
    background-color: #ffffff;
    font-family: "Pretendard";
  }
`;
export default GameList;

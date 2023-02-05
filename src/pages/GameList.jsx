import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { __pwcheck } from "../api/submit/Login";
import { useInput } from "../lib/utils/useInput";
import { useDispatch, useSelector } from "react-redux";
import foodbox from "../assets/images/foodbox.png";
import { __getRankMonth } from "../redux/modules/postSlice";

function GameList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MonthData = useSelector((state) => state.details.details.monthList);
  console.log("MonthData", MonthData);
  const [displays, setDisplays] = useState([]);
  useEffect(() => {
    dispatch(__getRankMonth());

    console.log("res", MonthData);
  }, [dispatch]);

  useEffect(() => {
    const array = MonthData;
    // console.log("arr", array[0]);

    // setDisplays(array[0][0], array[0][1]);
    // console.log("wwwww", array[0][0]);
    // console.log("d", displays);
    if (MonthData) {
      for (let i = 0; i < array.length; i++) {
        console.log("a0", array[i][0]);
        console.log("a1", array[i][1]);

        const img1and2 = {
          img1: array[i][0].imageUrl,
          img2: array[i][1].imageUrl,
          month: array[i][0].month,
          id: array[i][0].id,
          id2: array[i][1].id2,
          category: array[i][0].category,
        };
        //
        setDisplays((old) => [...old, img1and2]);
      }
    }

    // console.log("newdata[0]", array[0]);
  }, [MonthData]);
  console.log("dis", displays);
  return (
    <>
      <div className="top_cat_wrap">
        <div className="top_cat">
          <ul className="clearfix">
            <li>
              <button onClick={() => navigate("/")}>홈</button>
            </li>
            <li>
              <button onClick={() => navigate("/drinklist/drink")}>
                꿀정보
              </button>
            </li>
            <li className="game_active">
              <button onClick={() => navigate("/gamelist")}>꿀잼</button>
            </li>
          </ul>
          <button onClick={() => navigate("/post")} className="top_post_btn">
            글쓰기
          </button>
        </div>
      </div>

      <StContainer>
        <StTopBox>
          <StBannerBox>
            <StLeftBox>
              <div>
                꿀통 음식 월드컵
                <br />
                이번 달 우승음식은?
                <StButton
                  onClick={() => {
                    navigate("/gamelist/worldcupgame/gamerankview");
                  }}
                >
                  랭킹보기
                </StButton>
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
          <StDiv>연간 월드컵 우승작 (1위,2위)</StDiv>
          {displays.map((rowdata, index) => {
            // console.log("rrr", rowdata);
            return (
              <StCard>
                <StCardBox>
                  <StCardImg
                    onClick={() => {
                      navigate(
                        `/${rowdata.category}List/${rowdata.category}/detail/${rowdata.id}`
                      );
                    }}
                    src={rowdata.img1}
                  />
                </StCardBox>
                <StCardBox2>
                  <StCardImg2
                    onClick={() => {
                      navigate(
                        `/${rowdata.category}List/${rowdata.category}/detail/${rowdata.id2}`
                      );
                    }}
                    src={rowdata.img2}
                  />
                </StCardBox2>
                <StP>{index + 1}월 꿀통 음식 월드컵</StP>
              </StCard>
            );
          })}
        </StListBox>
        <StFoodBox>
          <StLeftBox2>
            <div>
              오늘 뭐먹지?
              <br />
              고민될 땐 꿀통이 골라줄게!
              <StButton3
                onClick={(e) => {
                  e.preventDefault();
                  Swal.fire(
                    "현재 구현중입니다",
                    "조금만 더 기다려주세요~",
                    "warning"
                  );
                }}
              >
                음식 랜덤뽑기
              </StButton3>
            </div>
          </StLeftBox2>
          <StRightBox2>
            <StImgBox2 src={require("../assets/images/food.png")} />
          </StRightBox2>
        </StFoodBox>
      </StContainer>
    </>
  );
}
const StContainer = styled.form`
  width: 100%;
  height: 2300px;
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
  display: flex;
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
  display: flex;
  margin: auto;
  font-size: 28px;
  font-weight: 600;
  width: 1200px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;
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
  position: relative;
  overflow: hidden;
  width: 384px;
  height: 255px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 40px;
`;
const StCardBox = styled.div`
  float: left;
  overflow: hidden;
  width: 192px;
  height: 220px;
  margin-bottom: 10px;
`;
const StCardBox2 = styled.div`
  float: right;
  overflow: hidden;
  width: 192px;
  height: 220px;
  margin-bottom: 10px;
`;

const StP = styled.p`
  width: 384px;
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
  font-weight: 600;
  font-size: 28px;
  padding-top: 20px;
  color: white;
`;

const StCardImg = styled.img`
  transition: 0.4s;
  margin-bottom: 5px;
  border: 0;
  float: left;
  width: 192px;
  height: 220px;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;
const StCardImg2 = styled.img`
  margin-bottom: 5px;
  transition: 0.4s;
  border: 0;
  float: right;
  width: 192px;
  height: 220px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
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

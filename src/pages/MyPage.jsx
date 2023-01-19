import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useInput } from "../lib/utils/useInput";
import __nickCheck from "../redux/modules/checkNickSlice";
import addimage from "../assets/images/addimage.png";
import { __patchPost } from "../redux/modules/postSlice";
import { apis } from "../lib/axios";
import MySmallTab from "./Tabs/MySmallTab";
import __deleteId from "../redux/modules/deleteUserSlice";

function MyPage() {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const [profileImg, setProfileImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [post, setPost] = useState([]);
  const [nickname, setNickname] = useInput();
  const [password, setPassword] = useState("");
  const [PWPtag, setPWPtag] = useState();
  const [PWConfirm, setPWConfirm] = useState("");
  const [PWConfirmP, setPWConfirmP] = useState(false);

  const onChangeImage = (event) => {
    const file = event.target.files[0];
    setProfileImg(file);
    const reader = new FileReader();
    // const file = imgRef.current.files[0];
    console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
      // const image = reader.result;
      setPost({
        ...post,

        imageUrl: reader.result,
      });
    };
  };

  // 닉네임 중복 체크 확인
  const onCheckNickName = (nickname) => {
    console.log("nickname---->", nickname);
    __nickCheck(nickname).then((res) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "좋은 닉네임이군요!", "success");
      } else {
        Swal.fire(res.data.msg, "중복된 닉네임입니다", "error");
      }
    });
  };

  //회원탈퇴

  const onDeleteLoginId = () => {
    if (window.confirm("확인을 누르면 회원 정보가 삭제됩니다.")) {
      __deleteId(localStorage.getItem("loginId")).then(() => {
        localStorage.clear();
        alert("그 동안 이용해주셔서 감사합니다.");
        window.location.assign("/");
      });
    }
  };

  //회원정보수정
  const onSubmitPostHandler = (e) => {
    e.preventDefault();
    dispatch(
      __patchPost({
        profileImg,
        nickname,
      })
    ).then((res) => {
      console.log("res:::", res);
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "정보 수정이 완료되었습니다.", "success");
      } else {
        Swal.fire(res.data.msg, "정보 수정 실패!", "error");
      }
    });
  };

  return (
    <StContainer onSubmit={onSubmitPostHandler}>
      <StSubCon>
        <StCenterBox>
          <div>
            <MyBox>내 정보</MyBox>
            <MypageBox>
              프로필 사진
              <AppStyle>
                <label htmlFor="ex_file">
                  <div className="addImage">
                    <img src={addimage} alt="addimage" />
                  </div>
                </label>
                <input
                  type="file"
                  accept="image/jpg, image/png, image/jpeg"
                  id="ex_file"
                  ref={imgRef}
                  // onChange={onChangeImage}
                  onChange={onChangeImage}
                  width="140px"
                  height="140px"
                />
              </AppStyle>
              <Myprofile
                alt=""
                src={imgUrl ? imgUrl : localStorage.getItem("profileImg")}
              />
            </MypageBox>

            <MyNickBox>
              닉네임
              <StInput
                type="text"
                id="nickname"
                value={nickname}
                onChange={setNickname}
              />
              <StNickButton
                onClick={(e) => {
                  e.preventDefault();
                  onCheckNickName(nickname);
                }}
                type="button"
              >
                중복확인
              </StNickButton>
              <StP>현재 닉네임 : {localStorage.getItem("nickname")}</StP>
            </MyNickBox>

            <MyNickBox>
              가입한 이메일
              <StEmailInput disabled value={localStorage.getItem("email")} />
            </MyNickBox>
          </div>
        </StCenterBox>
        <StCenterBox2>
          <div>
            <SettingBox>설정</SettingBox>
            <SettingItm>&nbsp;알림</SettingItm>
            <SettingItm>
              <StButton onClick={() => window.location.assign("/myconfirm")}>
                비밀번호 재설정
              </StButton>
              <StP2>⚠️ 소셜로그인 계정은 비밀번호 재설정이 불가합니다.</StP2>
            </SettingItm>
            <SettingItm>
              <StDeleteButton
                onClick={(e) => {
                  e.preventDefault();
                  onDeleteLoginId();
                }}
              >
                회원탈퇴
              </StDeleteButton>
            </SettingItm>
          </div>
        </StCenterBox2>
        <div>
          <StLeftBox>
            <Icon />
            <div>
              <LikeBox>
                <p>좋아요 한 게시글</p>
              </LikeBox>
              <StCount>23</StCount>
            </div>
          </StLeftBox>
          <StRightBox>
            <Icon />
            <div>
              <LikeBox>
                <p>좋아요 한 게시글</p>
              </LikeBox>
              <StCount>32</StCount>
            </div>
          </StRightBox>
        </div>
        <div>
          <StCenterBox3>
            <MySmallTab />
          </StCenterBox3>
        </div>
        <StFoot>
          <StButton>프로필 수정</StButton>
        </StFoot>
      </StSubCon>
    </StContainer>
  );
}

const StContainer = styled.form`
  background-color: gray;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  justify-content: center;
  font-family: "Pretendard";
`;

const StSubCon = styled.div`
  background-color: gray;
  width: 1200px;
  height: 100vh;
  font-family: "Pretendard";
  background-color: white;
`;

const StCenterBox = styled.div`
  padding-top: 40px;
  padding-left: 40px;
  margin-top: 30px;
  max-width: 1000px;
  height: 650px;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  font-size: 100%;
  background-color: pink;
  font-family: "Pretendard";
`;

const StCenterBox2 = styled.div`
  padding-top: 20px;
  padding-left: 40px;
  margin-top: 30px;
  width: 1000px;
  height: 320px;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  font-size: 100%;
  background-color: orange;
  font-family: "Pretendard";
`;

const StCenterBox3 = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 1000px;
  height: 910px;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  font-size: 100%;
  background-color: red;
  font-family: "Pretendard";
`;

const StLeftBox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 490px;
  height: 225px;
  float: left;
  background-color: gray;
  font-family: Pretendard;
`;

const StRightBox = styled.div`
  margin-top: 30px;
  width: 490px;
  height: 225px;
  float: right;
  margin-right: 200px;
  background-color: gray;
  font-family: "Pretendard";
`;

const StFoot = styled.div`
  width: 1000px;
  height: 100px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
`;
const MyBox = styled.div`
  width: 920px;
  height: 50px;
  background-color: gray;
  font-size: 24px;
  font-family: "Pretendard";
`;
const SettingBox = styled.div`
  width: 920px;
  height: 50px;
  margin-top: 20px;
  border-bottom: 1px solid #ebebeb;
  font-size: 24px;
  font-family: "Pretendard";
`;

const SettingItm = styled.div`
  display: flex;
  align-items: center;

  width: 920px;
  height: 50px;
  margin-top: 10px;
  font-weight: bold;
  padding-bottom: 10px;
  font-family: "Pretendard";
  border-bottom: 1px solid #ebebeb;
  font-size: 16px;
`;

const MypageBox = styled.div`
  padding-left: 15px;
  width: 450px;
  height: 220px;
  background-color: orange;
  font-size: 14px;
  color: #9d9d9d;
  font-weight: 600;
  font-family: "Pretendard";
`;
const MyNickBox = styled.div`
  padding-left: 15px;
  width: 920px;
  height: 100px;
  background-color: orange;
  font-size: 14px;
  color: #9d9d9d;
  font-weight: 600;
  font-family: "Pretendard";
`;

const LikeBox = styled.div`
  font-weight: bold;
  float: left;
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  background-color: white;
  width: 200px;
  height: 80px;
  font-family: "Pretendard";
`;

const Myprofile = styled.img`
  margin-left: 150px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 2px solid black;
  font-family: "Pretendard";
`;
const StInput = styled.input`
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid #000000;
  background-color: #f5f6f9;
  margin-left: 115px;
  margin-bottom: 10px;
  width: 470px;
  height: 48px;
  font-family: "Pretendard";
`;
const StEmailInput = styled.input`
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid #000000;
  background-color: #f5f6f9;
  margin-left: 75px;
  width: 590px;
  height: 48px;
  font-family: "Pretendard";
`;

const StButton = styled.button`
  font-weight: bold;
  width: 110px;
  font-size: 16px;
  height: 50px;
  border: 0;
  background-color: pink;
  cursor: pointer;
  font-family: "Pretendard";
`;

const StDeleteButton = styled.button`
  font-weight: bold;
  width: 70px;
  font-size: 16px;
  height: 50px;
  border: 0;
  background-color: pink;
  cursor: pointer;
  font-family: "Pretendard";
`;
const StNickButton = styled.button`
  width: 110px;
  height: 46px;
  margin-top: 8px;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
  font-family: "Pretendard";
`;

const Icon = styled.img`
  margin-left: 20px;
  margin-top: 30px;
  background-color: white;
  width: 65px;
  height: 65px;
`;

const AppStyle = styled.div`
  float: right;
  margin: 0 8px 0 8px;
  img {
    max-width: 50px;
  }
  label {
    margin-top: 10px;
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const StP = styled.div`
  width: 800px;
  margin-left: 155px;
`;
const StP2 = styled.div`
  letter-spacing: 0.1em;
  color: #9d9d9d;
  width: 500px;
  margin-left: 20px;
  font-weight: 500;
`;

const StCount = styled.div`
  margin-top: 35px;
  margin-right: 30px;
  font-size: 38px;
  background-color: white;
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
`;
export default MyPage;

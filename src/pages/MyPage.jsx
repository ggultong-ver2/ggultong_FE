import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../lib/utils/useInput";
import { __nickCheck } from "../api/submit/Login";
import fileinput from "../assets/images/fileinput.png";
import { __patchPost, __getMyPost } from "../redux/modules/postSlice";
import MySmallTab from "./Tabs/MySmallTab";
import { __deleteId } from "../api/submit/Login";
import Toggle from "../components/Toggle/Toggle";

function MyPage() {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileImg, setProfileImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [post, setPost] = useState([]);
  const [nickname, setNickname] = useInput();
  const [db, setDb] = useState("");
  const [db2, setDb2] = useState("");

  const onChangeImage = (event) => {
    const file = event.target.files[0];
    setProfileImg(file);
    const reader = new FileReader();

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
    __nickCheck(nickname).then((res) => {
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "좋은 닉네임이군요!", "success");
      } else {
        Swal.fire(res.data.msg, "중복된 닉네임입니다", "error");
      }
    });
  };

  //회원탈퇴

  const onDeleteLoginId = () => {
    Swal.fire({
      title: "정말 꿀통을 떠나실 거예요? &nbsp;&nbsp;:(",
      text: "취소 눌러주세요 제발~",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "회원탈퇴",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        __deleteId(localStorage.getItem("loginId")).then(() => {
          localStorage.clear();
        });
        Swal.fire(
          "탈퇴 되었습니다!",
          "그동안 저희 서비스를 이용해 주셔서 감사합니다",
          "success"
        ).then(() => navigate("/"));
      }
    });

    // if (window.confirm("확인을 누르면 회원 정보가 삭제됩니다.")) {
    //   __deleteId(localStorage.getItem("loginId")).then(() => {
    //     localStorage.clear();
    //     alert("그 동안 이용해주셔서 감사합니다.");
    //     window.location.assign("/");
    //   });
    // }
  };

  //회원정보수정
  const onSubmitChangeHandler = (e) => {
    e.preventDefault();
    dispatch(
      __patchPost({
        profileImg,
        nickname,
      })
    ).then((res) => {
      if (res.payload.data.statusCode === 200) {
        const data = res.payload?.data;
        setDb(data);
        Swal.fire(
          res.payload.data.msg,
          "정보 수정이 완료되었습니다. 다시 로그인해주세요!",
          "success"
        );

        localStorage.setItem("nickname", data.nickname);
        localStorage.setItem("profileImg", data.profileImg);
      } else {
        Swal.fire(res.payload.data.msg, "다시 확인해주세요", "error");
      }
    });
  };

  return (
    <StContainer onSubmit={onSubmitChangeHandler}>
      <StSubCon>
        <StCenterBox>
          <AllBox>
            <MyBox>내 정보</MyBox>
            <ProfileBox>
              <MypageBox>
                프로필 사진
                <AppStyle>
                  <label htmlFor="ex_file">
                    <div className="fileinput">
                      <img src={fileinput} alt="fileinput" />
                    </div>
                  </label>
                  <input
                    type="file"
                    accept="image/jpg, image/png, image/jpeg"
                    id="ex_file"
                    ref={imgRef}
                    // onChange={onChangeImage}
                    onChange={onChangeImage}
                    width="92px"
                    height="32px"
                  />
                </AppStyle>
                <Myprofile
                  alt=""
                  src={imgUrl ? imgUrl : localStorage.getItem("profileImg")}
                />
              </MypageBox>
              <StFoot>
                <StProfileButton>프로필 수정</StProfileButton>
              </StFoot>
            </ProfileBox>
            <div>
              <MyNickBox>
                닉네임<br></br>
                <StInput
                  type="text"
                  id="nickname"
                  minLength={2}
                  maxLength={10}
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
                  중복 확인
                </StNickButton>
                <StP>
                  현재 닉네임 :&nbsp;
                  {localStorage.getItem("nickname")}
                </StP>
              </MyNickBox>
              <MyEmailBox>
                가입한 이메일<br></br>
                <StEmailInput disabled value={localStorage.getItem("email")} />
              </MyEmailBox>
            </div>
          </AllBox>
        </StCenterBox>
        <StCenterBox2>
          <AllBox2>
            <SettingBox>설정</SettingBox>
            <SettingItm>
              알림 <Toggle />
            </SettingItm>
            <SettingItm>
              <StSettingTitle>비밀번호 재설정</StSettingTitle>
              <StP2>⚠️ 소셜로그인 계정은 비밀번호 재설정이 불가합니다.</StP2>
              <StButton
                onClick={(e) => {
                  e.preventDefault();
                  window.location.assign("/myconfirm");
                }}
              >
                변경하기
              </StButton>
            </SettingItm>
            <SettingItm2>
              <StSettingTitle2>회원탈퇴</StSettingTitle2>
              <StDeleteButton
                onClick={(e) => {
                  e.preventDefault();
                  onDeleteLoginId();
                }}
              >
                탈퇴하기
              </StDeleteButton>
            </SettingItm2>
          </AllBox2>
        </StCenterBox2>
        <StCenterBox3>
          <MySmallTab />
        </StCenterBox3>
      </StSubCon>
    </StContainer>
  );
}

const StContainer = styled.form`
  background-color: #f3f3f3;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const StSubCon = styled.div`
  background-color: #f3f3f3;
  width: 996px;
  padding-bottom: 50px;
`;

const ProfileBox = styled.div`
  width: 920px;
  height: 150px;
`;

const StCenterBox = styled.div`
  padding-top: 40px;
  padding-left: 40px;
  margin-top: 30px;
  max-width: 996px;
  height: 370px;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  font-size: 100%;
  background-color: white;
  font-family: "Pretendard";
`;

const StCenterBox2 = styled.div`
  padding-top: 20px;
  padding-left: 40px;
  margin-top: 30px;
  width: 996px;
  height: 292px;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  font-size: 100%;
  background-color: white;
  font-family: "Pretendard";
`;

const StCenterBox3 = styled.div`
  margin-top: 30px;
  width: 996px;
  min-height: 50vh;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  font-size: 100%;
  background-color: white;
  font-family: "Pretendard";
`;

const AllBox2 = styled.div`
  margin-left: 30px;
`;

const StFoot = styled.div`
  float: right;
  margin-right: 130px;
  margin-top: -45px;
  width: 350px;
  height: 150px;
  display: flex;
  justify-content: right;

  font-family: "Pretendard";
`;
const MyBox = styled.div`
  width: 920px;
  height: 50px;
  font-size: 24px;
  font-weight: 600;
  font-family: "Pretendard";
`;
const SettingBox = styled.div`
  width: 860px;
  height: 40px;
  margin-top: 20px;
  padding-left: 30px;
  font-weight: 600;
  font-size: 24px;
  font-family: "Pretendard";
`;

const SettingItm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  height: 60px;
  padding-left: 30px;
  font-weight: 500;
  padding-bottom: 10px;
  font-family: "Pretendard";
  border-bottom: 1px solid #ebebeb;
  font-size: 16px;
`;

const SettingItm2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  height: 60px;
  font-weight: 500;
  font-family: "Pretendard";
  font-size: 16px;
`;

const MypageBox = styled.div`
  float: left;
  width: 310px;
  height: 150px;
  font-size: 14px;
  color: #9d9d9d;
  font-weight: 600;
  font-family: "Pretendard";
`;
const MyNickBox = styled.div`
  float: left;
  width: 430px;
  height: 100px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Pretendard";
`;

const MyEmailBox = styled.div`
  float: right;
  width: 490px;
  height: 100px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Pretendard";
`;

const AllBox = styled.div`
  margin-left: 60px;
`;

const Myprofile = styled.img`
  margin-left: 90px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  font-family: "Pretendard";
`;
const StInput = styled.input`
  background-color: #f5f6f9;
  border: 1px solid #cbcbcb;
  padding-left: 10px;
  width: 274px;
  height: 48px;
  margin-top: 15px;
  border-radius: 4px;
  font-family: "Pretendard";
`;
const StEmailInput = styled.input`
  padding-left: 10px;
  border-radius: 4px;
  margin-top: 15px;
  border: 1px solid #cbcbcb;
  background-color: #e4e4e4;

  width: 384px;
  height: 48px;
  font-family: "Pretendard";
`;

const StButton = styled.button`
  background-color: #cbcbcb;
  color: white;
  margin-right: 30px;
  width: 100px;
  margin-top: 13px;
  font-size: 16px;
  height: 40px;
  border: 0 none;
  border-radius: 30px;
  cursor: pointer;
  font-family: "Pretendard";

  &:hover {
    color: black;
    background-color: #ffd665;
  }
`;

const StProfileButton = styled.button`
  font-weight: 500;
  width: 112px;
  font-size: 14px;
  height: 32px;
  border: 0;
  color: white;
  border-radius: 30px;
  background-color: #cbcbcb;
  cursor: pointer;

  &:hover {
    font-weight: 500;
    color: black;
    background-color: #ffd665;
  }
`;

const StDeleteButton = styled.div`
  background-color: #cbcbcb;
  color: white;
  width: 100px;
  height: 40px;
  margin-right: 30px;

  font-size: 16px;
  border: 0;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #ffd665;
    color: #000;
  }
`;
const StNickButton = styled.button`
  width: 110px;
  height: 46px;
  margin-top: 8px;
  margin-left: 10px;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const AppStyle = styled.div`
  float: right;
  margin-top: 15px;
  label {
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 92px;
    height: 32px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    background-color: black;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const StP = styled.div`
  color: #979797;
  width: 800px;
  margin-top: 10px;
`;
const StP2 = styled.div`
  letter-spacing: -0.009em;
  color: #9d9d9d;
  width: 500px;
  font-size: 12px;
  margin-top: 15px;
  margin-left: -100px;
  font-weight: 500;
`;
const StSettingTitle = styled.div`
  width: 110px;
  margin-top: 33px;
  font-size: 16px;
  height: 40px;
`;
const StSettingTitle2 = styled.div`
  width: 110px;
  margin-top: 33px;
  font-size: 16px;
  height: 40px;
  margin-left: 30px;
`;
export default MyPage;

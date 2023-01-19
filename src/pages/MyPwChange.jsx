import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import __pwcheck from "../redux/modules/checkPwSlice";
import { useInput } from "../lib/utils/useInput";
import { useDispatch } from "react-redux";
function MyPwChange() {
  const [password, setPassword] = useInput();
  const [PWPtag, setPWPtag] = useState();
  const [PWConfirm, setPWConfirm] = useState("");
  const [PWConfirmP, setPWConfirmP] = useState(false);
  const navigate = useNavigate();

  const onCheckPassword = (password) => {
    console.log("password--->", password);
    __pwcheck({
      password,
    }).then((res) => {
      console.log("res:::::", res);
      if (res.data.statusCode === 200) {
        Swal.fire(res.data.msg, "반갑습니다!", "success");
        navigate("/mypage");
      } else {
        navigate("/myconfirm");
        Swal.fire(res.data.msg, "비밀번호를 다시 확인해주세요!", "error");
      }
    });
  };

  function isPassword(asValue) {
    const regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regExp.test(asValue);
  }

  const PWChk = () => {
    if (!isPassword(password)) {
      setPWPtag(
        <StPs>
          사용 불가능합니다. 숫자/영문/특수문자를 모두포함한, 8자~15자
        </StPs>
      );
    } else {
      setPWPtag(<StPs2>사용가능한 비밀번호 입니다</StPs2>);
    }
  };

  const PWConfirmChk = () => {
    if (password !== PWConfirm) {
      setPWConfirmP(<StPs>비밀번호가 일치하지않습니다</StPs>);
    } else {
      setPWConfirmP(<StPs2>비밀번호 확인되었습니다.</StPs2>);
    }
  };

  return (
    <StContainer>
      <StCenterBox>
        <StSignBox>비밀번호 재설정</StSignBox>
        <StLabel>비밀번호</StLabel>
        <MyPwBox>
          <StPwInput
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={PWChk}
            placeholder="숫자, 영문, 특수문자 조합 최소 8자"
            // required
            minLength={8}
            maxLength={15}
          />
          {<StP>{PWPtag}</StP>}
          <StPwInput
            type="password"
            id="PWConfirm"
            value={PWConfirm}
            onChange={(e) => {
              setPWConfirm(e.target.value);
            }}
            onBlur={PWConfirmChk}
            placeholder="비밀번호 재입력"
            // required
            minLength={8}
            maxLength={15}
          />
          {<StP>{PWConfirmP}</StP>}
        </MyPwBox>
        <StBtnBox>
          <StBack onClick={() => navigate("/mypage")}>이전</StBack>
          <StButton
            onClick={() => {
              onCheckPassword(password);
              navigate("/mypage");
            }}
          >
            확인
          </StButton>
        </StBtnBox>
      </StCenterBox>
    </StContainer>
  );
}
const StContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-family: "Pretendard";
`;

const StPwInput = styled.input`
  border-radius: 4px;
  margin-top: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
  border: 1px solid #000000;
  background-color: #f5f6f9;
  margin-left: 52px;
  width: 384px;
  height: 48px;
  font-family: "Pretendard";
`;

const StCenterBox = styled.div`
  width: 588px;
  height: 570px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  background-color: white;
  flex-direction: column;
  font-family: "Pretendard";
`;
const StSignBox = styled.div`
  width: 400px;
  height: 80px;
  font-size: 24px;

  margin-top: 50px;
  display: flex;
  padding-top: 0px;

  justify-content: center;
  font-family: "Pretendard";
`;

const StLabel = styled.label`
  margin-bottom: 10px;
  margin-left: 5px;
  justify-content: left;
  font-size: 14px;
  display: flex;
  margin-right: 340px;
  font-weight: 600;
  font-family: "Pretendard";
`;

const MyPW = styled.label`
  display: flex;
  align-items: center;
  padding-bottom: 50px;
  float: left;
  width: 100px;
  height: 170px;
  font-family: "Pretendard";
`;

const StButton = styled.button`
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  width: 186px;
  height: 48px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  background-color: #b5b5b5;
  font-family: "Pretendard";
  color: white;

  cursor: pointer;
  &:hover {
    color: black;
    background-color: #ffd665;
  }
`;

const StBtnBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 380px;
`;

const MyPwBox = styled.div`
  float: right;
  padding-left: 15px;
  width: 588px;
  margin-left: 70px;
  height: 150px;

  font-size: 14px;
  color: #9d9d9d;
  font-weight: 600;
  font-family: "Pretendard";
`;

const StP = styled.div`
  width: 588px;
  margin-left: 55px;
`;

const StPs = styled.p`
  width: 384px;
  margin-top: 3px;
  font-size: 12px;
  color: red;
  font-family: "Pretendard";
`;

const StPs2 = styled.p`
  width: 384px;
  margin-top: 3px;
  font-size: 12px;
  color: limegreen;
  font-family: "Pretendard";
`;

const StBack = styled.button`
  font-family: "Pretendard";

  width: 186px;
  height: 48px;
  border: 1px solid #a0a0a0;
  font-size: 18px;
  border-radius: 4px;
  background-color: #ffffff;
  color: black;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 0;
    background-color: #ffd665;
    font-family: "Pretendard";
  }
`;
export default MyPwChange;

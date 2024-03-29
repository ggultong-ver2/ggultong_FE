import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

function SignAgree() {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
      setPrivacyCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
      setPrivacyCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const usePrivacyEvent = () => {
    if (privacyCheck === false) {
      setPrivacyCheck(true);
    } else {
      setPrivacyCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (
      ageCheck === true &&
      privacyCheck === true &&
      useCheck === true &&
      marketingCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, privacyCheck, useCheck, marketingCheck]);

  useEffect(() => {
    if (ageCheck === true && privacyCheck === true && useCheck === true) {
      setDisabled(!disabled);
    } else {
      setDisabled(true);
    }
  }, [ageCheck, privacyCheck, useCheck]);

  const handleClickAgree = (e) => {
    Swal.fire({
      title: "개인정보 취급 방침",
      text: `회사는 회원 가입시 다음과 같이 개인정보를 수집에 대한 동의를 받고 있습니다. 가입자가 아래 내용을 읽고 동의를 선택하여 클릭하면 개인정보 수집에 대해 동의한 것으로 간주합니다.


      아래 내용은 수집하는 개인정보의 항목, 수집 및 이용 목적, 보유 및 이용 기간에 대한 안내이며 자세히 읽어보신 후 동의하여 주시기 바랍니다.
      
      
      1. 수집하는 개인정보 및 이용 목적
      회사는 이용자가 게시물 작성, 이벤트 참여, 상담 등의 서비스를 이용하기 위하여 회원가입을 신청할 경우, 회사는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
      
      
      - 수집 항목: ID, 비밀번호, 이메일 주소, 핸드폰 번호
      - 수집 목적: 회원제 서비스 이용, 본인 확인 및 개인 식별, 부정 이용 방지 등 회원 관리
      - 수집 항목: 이름, 생년월일, 핸드폰 번호, CI, DI
      - 수집 목적: 중복 가입 방지, 부정 이용 방지, 이벤트 당첨 경품 배송
      - 수집 항목: 클라이언트 정보, IP
      - 수집 목적: 회원관리, 부정 이용 방지, 오류 상황 확인, 통계활용
      
      2. 개인정보의 보유 및 이용기간
      회사는 회원이 회사가 제공하는 서비스를 받는 동안 회원의 개인정보를 보유합니다. 이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성된 시점에서 지체없이 파기합니다.
      
      
      ▶ 수집 및 이용 목적이 달성된 시점
      
      • 회원 가입 정보 : 회원을 탈퇴하거나 이용 계약을 해지할 때
      • 대금 지급 정보 : 대금의 완제일 또는 채권의 소멸시효기간이 만료된 때
      • 배송 정보 : 당해 설문조사나 이벤트 등이 종료한 때
      • 본인 확인 정보 : 본인임을 확인한 때
      회원이 서비스 이용 계약을 해지하거나 제명당한 경우라고 할지라도 서비스 이용의 혼선 방지, 권리남용 및 악용 방지, 명예훼손 등 권리 침해와 관련한 분쟁 및 수사 협조 의뢰에 대비하기 위한 목적으로 약관에 명시된 60일동안 이용자의 개인정보를 보유합니다. 이때에 해당 회원의 개인정보는 개인정보 보호를 위하여 별도로 분리하여 보관, 관리합니다.
      
      
      ※ 더 자세한 내용에 대해서는 사이트 하단의 개인정보처리방침을 참고하시기 바랍니다.`,
      width: 600,
      padding: "3em",
      color: "black",
      background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
      backdrop: `
        #000000
        
      `,
    });
    e.preventDefault();
  };

  const handleClickAgree2 = (e) => {
    Swal.fire({
      title: "이용약관",
      text: `제1조 목적

      본 이용약관은 “본 사이트"의 서비스의 이용조건과 운영에 관한 제반사항 규정을 목적으로 합니다.
      
      제2조 용어의 정의
      
      본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.
      
      ① 회원 : 본 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를 말합니다.
      ② 이용계약 : 본 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다.
      ③ 회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.
      ④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.
      ⑤ 운영자 : 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.
      ⑥ 해지 : 회원이 이용계약을 해약하는 것을 말합니다.
      
      제3조 약관외 준칙
      
      운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.
      
      제4조 이용계약 체결
      
      ① 이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로 성립합니다.
      ② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청시 본 약관을 읽고 아래에 있는 "동의합니다"를 선택하는 것으로 본 약관에 대한 동의 의사 표시를 합니다.
      
      제5조 서비스 이용 신청
      
      ① 회원으로 등록하여 사이트를 이용하려는 이용자는 본 사이트에서 요청하는 제반정보(이용자ID,비밀번호, 닉네임 등)를 제공해야 합니다.
      ② 타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한 정보를 등록하지 않은 회원은 사이트 이용과 관련하여 아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌 받을 수 있습니다.`,
      width: 600,
      padding: "3em",
      color: "black",
      background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
      backdrop: `
        #000000
        
      `,
    });
    e.preventDefault();
  };

  const handleClickAgree3 = (e) => {
    Swal.fire({
      title: "광고성 정보 수신 및 마케팅 활용동의",
      text: `귀하는 개인(신용)정보의 선택적인 수집∙이용, 제공에 대한 동의를 거부할 수 있습니다. 다만, 동의하지 않을 경우 관련 편의제공(이벤트 안내, 공지사항, 할인행사)안내 등 이용 목적에 따른 혜택에 제한이 있을 수 있습니다.
      그 밖에 계약과 관련된 불이익은 없습니다. 동의한 경우에도 귀하는 동의를 철회하거나 마케팅 목적으로 귀하에게 연락하는 것을 중지하도록 요청할 수 있습니다.
      
      1. 수집 및 이용목적
      고객에 대한 편의제공, 귀사 및 제휴업체의 상품·서비스 안내 및 이용권유, 사은·판촉행사 등의 마케팅 활동, 시장조사 및 상품·서비스 개발연구 등을 목적으로 수집·이용
      
      2. 수집 및 이용항목
      - 개인식별정보: 성명, 성별, 나이, 휴대전화번호, e-mail 등
      - 고객 ID, 접속 일시, IP주소 등
      
      3. 보유기간
      동의일로부터 회원 탈퇴 혹은 마케팅 동의 해제 시까지 보유·이용
      ※ 더 자세한 내용에 대해서는 개인정보처리방침을 참고하시기 바랍니다.`,
      width: 600,
      padding: "3em",
      color: "black",
      backdrop: `
        #000000
        
      `,
    });
    e.preventDefault();
  };

  return (
    <StContainer>
      <StCenterBox>
        <StSignBox>회원가입</StSignBox>
        <AllAgree>
          <StLabel htmlFor="all-check">꿀통 약관에 모두 동의합니다.</StLabel>
          <AgreeBigCheckBox
            type="checkbox"
            id="all-check"
            checked={allCheck}
            onChange={allBtnEvent}
          />
        </AllAgree>
        <StSmaillBox>
          <StCheckBox>
            <StChecklabel htmlFor="check1">
              <span>(필수)</span>&nbsp;만 14세 이상
            </StChecklabel>
            <AgreeCheckBox
              type="checkbox"
              id="check1"
              checked={ageCheck}
              onChange={ageBtnEvent}
            />
          </StCheckBox>
          <StCheckBox>
            <StChecklabel htmlFor="check2">
              <span>(필수)</span>&nbsp;개인정보 취급 방침
              <PrivacyButton onClick={(e) => handleClickAgree(e)}>
                보기
              </PrivacyButton>
            </StChecklabel>
            <AgreeCheckBox
              type="checkbox"
              id="check2"
              checked={privacyCheck}
              onChange={usePrivacyEvent}
            />
          </StCheckBox>
          <StCheckBox>
            <StChecklabel htmlFor="check3">
              <span>(필수)</span>&nbsp;이용약관
              <PrivacyButton onClick={(e) => handleClickAgree2(e)}>
                보기
              </PrivacyButton>
            </StChecklabel>
            <AgreeCheckBox
              type="checkbox"
              id="check3"
              checked={useCheck}
              onChange={useBtnEvent}
            />
          </StCheckBox>
          <StCheckBox>
            <StChecklabel htmlFor="check4">
              <span>(선택)</span>&nbsp;광고성 정보 수신 및 마케팅 활용동의
              <PrivacyButton onClick={(e) => handleClickAgree3(e)}>
                보기
              </PrivacyButton>
            </StChecklabel>
            <AgreeCheckBox
              type="checkbox"
              id="check4"
              checked={marketingCheck}
              onChange={marketingBtnEvent}
            />
          </StCheckBox>
        </StSmaillBox>
        <StBtnBox>
          <StBack onClick={() => navigate("/login")}>이전</StBack>
          <StButton
            onClick={() => navigate("/signup")}
            disabled={disabled}
            type="button"
            name="checkbutton"
            value=""
          >
            다음
          </StButton>
        </StBtnBox>
      </StCenterBox>
    </StContainer>
  );
}

const StContainer = styled.form`
  width: 100%;
  display: flex;
  min-height: 93vh;
  background-color: #f9fafb;
  justify-content: center;
  background-size: cover;
  font-family: "Pretendard";
`;

const StCenterBox = styled.div`
  background-color: #ffffff;
  width: 588px;
  height: 707px;
  margin: 100px 0;
  align-items: center;
  padding-top: 80px;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  float: right;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  font-family: "Pretendard";
`;

const AllAgree = styled.div`
  width: 384px;
  height: 48px;
  border: 1px solid #c2c2c2;
  padding-left: 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Pretendard";
`;

const StSignBox = styled.div`
  width: 400px;
  height: 60px;
  font-size: 45px;
  font-weight: 600;
  display: flex;
  font-size: 24px;

  justify-content: center;
  font-family: "Pretendard";
`;
const StSmaillBox = styled.div`
  width: 400px;
  height: 200px;
  padding-left: 10px;
  margin-top: 10px;
  font-family: "Pretendard";
`;

const StCheckBox = styled.div`
  width: 370px;
  height: 50px;
  display: flex;
  align-items: center;
  font-family: "Pretendard";
`;
const StChecklabel = styled.label`
  padding-left: 20px;
  font-size: 14px;
  font-family: "Pretendard";
  margin-right: auto;
`;

const AgreeCheckBox = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 9px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffd665;
  }
`;

const AgreeBigCheckBox = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 20px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffd665;
  }
`;
const PrivacyButton = styled.button`
  margin-left: 5px;
  width: 30px;
  height: 20px;
  border: 0;
  background-color: white;
  outline: none;
  border-bottom: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: yellow;
    border: 0px;
    outline: none;
    border-radius: 5px;
  }
`;

const StButton = styled.button`
  font-family: "Pretendard";
  letter-spacing: 0.1em;
  width: 186px;
  height: 48px;
  border: 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  background-color: #b5b5b5;
  color: white;
  cursor: pointer;
  &:hover {
    border: 0;
    color: black;
    background-color: #ffd665;
    font-family: "Pretendard";
  }
  &:disabled {
    background-color: #ddd8d8;
    font-family: "Pretendard";
  }
`;

const StBack = styled.button`
  margin-right: 10px;
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

const StBtnBox = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  width: 384px;
`;
const StLabel = styled.label`
  margin-right: auto;
  font-weight: 600;
  font-family: "Pretendard";
`;

export default SignAgree;

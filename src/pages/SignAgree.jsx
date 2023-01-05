import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

  //   useEffect(
  //     (checkbutton) => {
  //       if (ageCheck == true && privacyCheck == true && useCheck == true) {
  //         setDisabled(true);
  //       } else {
  //         setDisabled(false);
  //       }
  //     },
  //     [ageCheck, privacyCheck, useCheck]
  //   );

  // function agreeCheck(e) {
  //   if (ageCheck === true && privacyCheck === true && useCheck === true) {
  //     e.checkButton.disabled = true;
  //   } else {
  //     e.checkButton.disabled = false;
  //   }
  // }

  return (
    <StContainer>
      <StCenterBox>
        <StSignBox>회원가입</StSignBox>
        <Stlabel>꿀통 서비스 이용약관에 동의해주세요.</Stlabel>
        <AllAgree>
          <AgreeBigCheckBox
            type="checkbox"
            id="all-check"
            checked={allCheck}
            onChange={allBtnEvent}
          />
          &nbsp;
          <label htmlFor="all-check">모두 동의</label>
        </AllAgree>
        <StSmaillBox>
          <StCheckBox>
            <AgreeCheckBox
              type="checkbox"
              id="check1"
              checked={ageCheck}
              onChange={ageBtnEvent}
            />
            <StChecklabel htmlFor="check1">
              <span>(필수)</span>&nbsp;만 14세 이상
            </StChecklabel>
          </StCheckBox>
          <StCheckBox>
            <AgreeCheckBox
              type="checkbox"
              id="check2"
              checked={privacyCheck}
              onChange={usePrivacyEvent}
            />
            <StChecklabel htmlFor="check2">
              <span>(필수)</span>&nbsp;개인정보 취급 방침
            </StChecklabel>
          </StCheckBox>
          <StCheckBox>
            <AgreeCheckBox
              type="checkbox"
              id="check3"
              checked={useCheck}
              onChange={useBtnEvent}
            />
            <StChecklabel htmlFor="check3">
              <span>(필수)</span>&nbsp;이용약관
            </StChecklabel>
          </StCheckBox>
          <StCheckBox>
            <AgreeCheckBox
              type="checkbox"
              id="check4"
              checked={marketingCheck}
              onChange={marketingBtnEvent}
            />
            <StChecklabel htmlFor="check4">
              <span>(선택)</span>&nbsp;광고성 정보 수신 및 마케팅 활용동의
            </StChecklabel>
          </StCheckBox>
        </StSmaillBox>
        <StButton
          onClick={() => navigate("/signup")}
          disabled={disabled}
          type="button"
          name="checkbutton"
          value=""
        >
          다음
        </StButton>
      </StCenterBox>
    </StContainer>
  );
}

const StContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const StCenterBox = styled.div`
  width: 400px;
  height: 850px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
`;

const AllAgree = styled.div`
  width: 400px;
  height: 50px;
  border-bottom: 1px solid #c2c2c2;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const StSignBox = styled.div`
  letter-spacing: -0.1em;
  width: 400px;
  height: 80px;
  font-size: 45px;
  margin-bottom: 30px;
  margin-top: 50px;

  display: flex;
  padding-top: 0px;
  border-bottom: 6px solid #dcdcdc;
  justify-content: center;
`;
const StSmaillBox = styled.div`
  width: 400px;
  height: 200px;
  padding-left: 10px;
  margin-top: 20px;
`;
const Stlabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  letter-spacing: -0.1em;
`;

const StCheckBox = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
`;
const StChecklabel = styled.label`
  font-size: 16px;
  letter-spacing: 0.02em;
`;

const AgreeCheckBox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const AgreeBigCheckBox = styled.input`
  width: 24px;
  height: 24px;
`;

const StButton = styled.button`
  margin-top: 40px;
  margin-bottom: 10px;

  width: 380px;
  height: 48px;
  border: 0;
  font-size: 18px;
  border-radius: 4px;
  background-color: #b5b5b5;
  font-family: georgia;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #ddd8d8;
  }
`;

export default SignAgree;

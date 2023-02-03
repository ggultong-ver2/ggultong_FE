import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPost } from "../../redux/modules/postSlice";

const MySmallTab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getMyPost());
  }, [dispatch]);

  const myPost = useSelector((state) => state.details.details);
  console.log("myPost::", myPost);

  const menuArr = [
    {
      name: "내가 쓴 글 120",
      content: (
        <Card>
          <Textwrap>
            <StTitle>제목</StTitle>

            <Etcwrap>댓글10 좋아요&nbsp; 10 &nbsp;&nbsp; 2023.02.03</Etcwrap>
          </Textwrap>
          <StFile></StFile>
        </Card>
      ),
    },
    {
      name: "스크랩 4",
      content: (
        <Card>
          <Textwrap>
            <StTitle>제목</StTitle>

            <Etcwrap>댓글10 좋아요&nbsp; 10 &nbsp;&nbsp; 2023.02.03</Etcwrap>
          </Textwrap>
          <StFile>이미지</StFile>
        </Card>
      ),
    },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((ele, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {ele.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <h1>{menuArr[currentTab].content}</h1>
        </Desc>
      </div>
    </>
  );
};

const TabMenu = styled.ul`
  margin-left: 90px;
  width: 400px;
  height: 42px;
  font-size: 24px;
  font-weight: 600;
  color: #afafaf;

  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 30px;

  .submenu {
    display: flex;
    width: 170px;
    height: 36px;
    /* calc(100% / 3); */
    padding-left: 10px;
    font-size: 24px;
    transition: 0.5s;
    cursor: pointer;
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255, 255, 255);
    color: rgb(21, 20, 20);
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  margin-left: 30px;
  width: 940px;
  height: 800px;
`;

const Card = styled.div`
  /* border: 1px solid red; */
  border-bottom: 1px solid grey;
  margin-left: 30px;
  width: 880px;
  height: 250px;
  &:hover {
    cursor: pointer;
  }
`;
const Textwrap = styled.div`
  float: left;
  margin-top: 30px;
`;
const StTitle = styled.div`
  height: 50px;
  width: 850px;
  font-size: 30px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 20px;
`;
const StFile = styled.div`
  height: 200px;
  width: 200px;
  background-color: #d9d9d9;
  margin-left: 650px;
  margin-top: 20px;
`;
const Etcwrap = styled.div`
  height: 30px;
  font-size: 14px;
  line-height: 22px;
  color: #a0a0a0;
`;
export default MySmallTab;

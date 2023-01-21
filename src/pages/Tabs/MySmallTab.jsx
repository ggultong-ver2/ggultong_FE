import React, { useState } from "react";
import styled from "styled-components";

const MySmallTab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    {
      name: "내가 쓴 글 120",
      content: (
        <OneBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
          <CardBox>페이지</CardBox>
        </OneBox>
      ),
    },
    {
      name: "스크랩 4",
      content: (
        <OneBox>
          <CardBox>움직임</CardBox>
          <CardBox>움직임</CardBox>
          <CardBox>움직임</CardBox>
          <CardBox>움직임</CardBox>
          <CardBox>움직임</CardBox>
          <CardBox>움직임</CardBox>
          <CardBox>움직임</CardBox>
          <CardBox>움직임</CardBox>
        </OneBox>
      ),
    },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  // 머지Test 머지Test 머지Test 머지Test 머지Test
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
const OneBox = styled.div`
  margin-top: 20px;
  margin-left: 70px;
  width: 880px;
  height: 800px;
`;

const Desc = styled.div`
  margin-left: 30px;
  width: 940px;
  height: 800px;
`;

const CardBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 800px;
  height: 160px;
  border-bottom: 1px solid #979797;
  background-color: white;
`;

export default MySmallTab;

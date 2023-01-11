import React, { useState } from "react";
import styled from "styled-components";

const MySmallTab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    {
      name: "내 꿀정보",
      content: (
        <OneBox>
          <CardBox>
            <CardList></CardList>
            <CardList></CardList>
            <CardList></CardList>
          </CardBox>
          <CardBox>
            <CardList></CardList>
            <CardList></CardList>
            <CardList></CardList>
          </CardBox>
        </OneBox>
      ),
    },
    {
      name: "내 Q&A",
      content: (
        <OneBox>
          <QACard></QACard>
          <QACard></QACard>
          <QACard></QACard>
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
  margin-left: 60px;

  color: #afafaf;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-top: 30px;

  .submenu {
    display: flex;
    width: 100px;
    /* calc(100% / 3); */
    padding: 10px;
    font-size: 15px;
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
  background-color: gray;
  margin-top: 20px;
  margin-left: 30px;
  width: 880px;
  height: 800px;
`;

const Desc = styled.div`
  margin-left: 30px;
  background-color: pink;
  width: 940px;
  height: 800px;
`;

const CardBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 900px;
  height: 345px;
`;
const CardList = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  background-color: white;
  width: 280px;
  height: 340px;
  border: 1px solid black;
`;

const QACard = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 880px;
  height: 245px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid black;
`;

export default MySmallTab;

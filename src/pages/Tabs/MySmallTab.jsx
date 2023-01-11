import React, { useState } from "react";
import styled from "styled-components";

const MySmallTab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "내 꿀정보", content: <OneBox></OneBox> },
    { name: "내 Q&A", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
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
  margin-left: 30px;
  background-color: #dcdcdc;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-top: 30px;

  .submenu {
    display: flex;
    width: calc(100% / 3);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
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
  margin-left: 20px;
  width: 300px;
  height: 300px;
`;

const Desc = styled.div`
  margin-left: 30px;
  background-color: pink;
  width: 940px;
  height: 750px;
`;

export default MySmallTab;

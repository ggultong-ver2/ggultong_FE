import React, { useState } from "react";
import styled from "styled-components";

const MySmallTab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "내 꿀정보", content: "Tab menu ONE" },
    { name: "내 Q&A", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
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
          <p>바뀌는거 맞습니다..</p>
        </Desc>
      </div>
    </>
  );
};

const TabMenu = styled.ul`
  margin-top: 50px;
  margin-left: 30px;
  background-color: #dcdcdc;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width: 400px auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;
const Desc = styled.div`
  margin-left: 30px;
  background-color: pink;
  width: 940px;
  height: 750px;
`;

export default MySmallTab;

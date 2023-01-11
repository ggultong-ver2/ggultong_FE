import React, { useState } from "react";
import styled from "styled-components";

const MyTab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
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

const TabMenu = styled.div`
  background-color: #dcdcdc;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width: 100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;

const Desc = styled.div`
  background-color: black;
  width: 500px;
  height: 100%;
`;

export default MyTab;

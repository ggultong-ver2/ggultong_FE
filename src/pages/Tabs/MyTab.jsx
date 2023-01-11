import React, { Component } from "react";
import "./MyTab.css";
import MyPage from "../MyPage";
import styled from "styled-components";
import PostLoginPage from "../SignUpPage";

export const menuList = {
  0: <MyPage />,
  1: <PostLoginPage />,
};

class MyTab extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  };

  render() {
    return (
      <Wrap>
        <div className="menubar">
          <Tap>
            <ul className="mytabs">
              <li
                className={`${this.state.menu === 0 ? "active" : ""}`}
                onClick={() => this.changeMenu(0)}
              >
                프로필
              </li>
              <br></br>
              <li
                className={`${this.state.menu === 1 ? "active" : ""}`}
                onClick={() => this.changeMenu(1)}
              >
                내 채팅
              </li>
            </ul>
          </Tap>
        </div>

        <div className="contentArea">{menuList[this.state.menu]}</div>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Tap = styled.div`
  margin-left: 150px;
  margin-top: 30px;
`;
export default MyTab;

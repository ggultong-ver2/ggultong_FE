import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import WorldCupGame from "../components/Game/WorldCupGame";

const Game = () => {
  return (
    <Layout>
      <WorldCupGame />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: auto;
  background-color: black;
`;
export default Game;

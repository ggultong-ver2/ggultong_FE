import React from "react";
import styled from "styled-components";
import "./List.css";

const List = ({ title, imageUrl, body }) => {
  return (
    <Cardcontainer>
      <div>
        <Imagecontainer src={imageUrl} alt="" />
      </div>
      <Cardcontent>
        <Title>
          <h3>{title}</h3>
        </Title>
        <Body>
          <p style={{ wordBreak: "break-all" }}>{body}</p>
        </Body>
      </Cardcontent>
      <Btn>
        <Button>
          <div>
            <Href href="https://www.youtube.com/watch?v=Q3I_NwaCZI8">
              View more
            </Href>
          </div>
        </Button>
      </Btn>
    </Cardcontainer>
  );
};

const Cardcontainer = styled.div`
  width: 250px;
  height: 400px;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in;
  &:hover {
    transform: scale(1, 1);
    box-shadow: 0px 0px 15px 0px;
  }
  margin-top: 70px;
  margin-left: 10px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
`;
const Imagecontainer = styled.img`
  overflow: hidden;
  height: 200px;
  width: 250px;
  border-top-left-radius: 30px;
`;
const Cardcontent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;
`;
const Title = styled.div`
  color: #07254e;
  text-align: center;
`;
const Body = styled.div`
  color: #003881;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  padding: 10px;
  background-color: transparent;
  border: none;
  transition: 0.2s;
  margin-bottom: 0.5rem;
  border-radius: 30px;
  margin-bottom: 15px;
  &:hover {
    background: rgba(14, 15, 16, 0.1);
    transform: scale();
  }
`;
const Href = styled.a`
  text-transform: uppercase;
  color: #3282bc;
  text-decoration: none;
  font-weight: bold;
`;

export default List;

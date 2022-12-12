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
        <p style={{ wordBreak: "break-all" }}>{body}</p>
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
`;
const Imagecontainer = styled.img`
  overflow: hidden;
  height: 200px;
  width: 250px;
`;
const Cardcontent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;
`;
const Title = styled.div`
  color: #003881;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  padding: 1rem;
  background-color: transparent;
  border: none;
  transition: 0.2s;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  margin-top: -1rem;
  &:hover {
    background: rgba(114, 194, 255, 0.1);
    transform: scale();
  }
`;
const Href = styled.a`
  text-transform: uppercase;
  color: #95d3ff;
  text-decoration: none;
  font-weight: bold;
`;

export default List;

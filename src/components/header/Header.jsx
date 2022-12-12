import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StDiv>
      <Link to={`/`}>
        <StSpan style={{ cursor: "pointer" }}>Food-ing</StSpan>
      </Link>
      {/* <span>My Todo List</span> */}
      <span>React</span>
    </StDiv>
  );
};

const StDiv = styled.div`
  background-color: black;
  color: white;
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 24px;
`;

const StSpan = styled.span`
  text-decoration: none;
  color: white;
`;
export default Header;

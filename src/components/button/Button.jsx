import styled, { css } from "styled-components";

const Button = (props) => {
  const { onClick, children, add, back, view, borderColor, post } = props;
  return (
    <StButton
      add={add}
      back={back}
      view={view}
      post={post}
      borderColor={borderColor}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
};

const StButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.add &&
    css`
      background-color: #4ea1ba;
      width: 180px;
      height: 40px;
      border-radius: 10px;
      border: 0;
      font-size: 20px;
      margin: 20px;
      margin-top: 30px;
    `}
  ${(props) =>
    props.back &&
    css`
      width: 180px;
      height: 40px;
      border-radius: 10px;
      border: 0;
      font-size: 20px;
      margin: 20px;
      margin-top: 30px;
      background-color: #b9c6cb;
    `}
  ${(props) =>
    props.view &&
    css`
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
      font-weight: bold;
      color: #056683;
    `}
    ${(props) =>
    props.post &&
    css`
      width: 100px;
      height: 30px;
      background-color: #3282bc;
      color: white;
      border: 0px;
      border-radius: 30px;
      box-shadow: 0 2px 5px rgba(42, 52, 75, 0.658);
      font-weight: bold;
      &:hover {
        background: rgba(184, 217, 254, 0.366);
        transform: scale();
        cursor: pointer;
        color: #364d8f;
        font-weight: bold;
      }
      font-family: "Nanum Gothic", sans-serif;
    `}
`;

export default Button;

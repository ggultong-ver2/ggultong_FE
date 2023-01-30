import styled from "styled-components";

const Pagination = ({ totalPosts, limit, page, setPage }) => {
  const numPages = Math.ceil(totalPosts / limit);
  const firstNum = page - (page % 5) + 1;
  const lastNum = page - (page % 5) + 5;

  return (
    <div>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {firstNum}
        </Button>
        {Array(numPages).map((_, i) => {
          return (
            <Button key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </Button>
          );
        })}
        {/* {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1 + firstNum}
              onClick={() => {
                setPage(i + 1 + firstNum);
              }}
              aria-current={page === i + 1 + firstNum ? "page" : null}
            >
              {i + 1 + first}
            </Button>
          ))} */}
        {/* <Button
          key={i + 1}
          onClick={() => setPage(lastNum)}
          aria-current={page === lastNum ? "page" : null}
        >
          {lastNum}
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button> */}
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;

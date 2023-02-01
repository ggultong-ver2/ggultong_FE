import styled from "styled-components";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => paginate(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// const PageUl = styled.ul`
//   float: left;
//   list-style: none;
//   text-align: center;
//   border-radius: 3px;
//   color: white;
//   padding: 1px;
//   border-top: 3px solid #186ead;
//   border-bottom: 3px solid #186ead;
//   background-color: rgba(0, 0, 0, 0.4);
// `;

// const PageLi = styled.li`
//   display: inline-block;
//   font-size: 17px;
//   font-weight: 600;
//   padding: 5px;
//   border-radius: 5px;
//   width: 25px;
//   &:hover {
//     cursor: pointer;
//     color: white;
//     background-color: #263a6c;
//   }
//   &:focus::after {
//     color: white;
//     background-color: #263a6c;
//   }
// `;

// const PageSpan = styled.span`
//   &:hover::after,
//   &:focus::after {
//     border-radius: 100%;
//     color: white;
//     background-color: #263a6c;
//   }
// `;

export default Pagination;

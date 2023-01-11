// import React, { useState } from "react";
// import Magazine from "../../pages/Magazine";
// import Main from "../../pages/Home";
// import QNA from "../../pages/QNA";
// import DetailTab from "../../pages/DetailTab/DetailTab";
// import "../../pages/reset.css";
// import styled from "styled-components";

// export default function Category() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const tabClickHandler = (index) => {
//     setActiveIndex(index);
//   };

//   const tabContArr = [
//     {
//       tabTitle: (
//         <li
//           className={activeIndex === 0 ? "is-active" : ""}
//           onClick={() => tabClickHandler(0)}
//         >
//           홈
//         </li>
//       ),
//       tabCont: (
//         <div>
//           <Main />
//         </div>
//       ),
//     },
//     {
//       tabTitle: (
//         <li
//           className={activeIndex === 1 ? "is-active" : ""}
//           onClick={() => tabClickHandler(1)}
//         >
//           꿀정보
//         </li>
//       ),
//       tabCont: (
//         <div>
//           <DetailTab />
//         </div>
//       ),
//     },
//     {
//       tabTitle: (
//         <li
//           className={activeIndex === 2 ? "is-active" : ""}
//           onClick={() => tabClickHandler(2)}
//         >
//           Q&A
//         </li>
//       ),
//       tabCont: (
//         <div>
//           <QNA />
//         </div>
//       ),
//     },
//     {
//       tabTitle: (
//         <li
//           className={activeIndex === 3 ? "is-active" : ""}
//           onClick={() => tabClickHandler(3)}
//         >
//           꿀매거진
//         </li>
//       ),
//       tabCont: (
//         <div>
//           <Magazine />
//         </div>
//       ),
//     },
//     {
//       tabTitle: (
//         <li
//           className={activeIndex === 4 ? "is-active" : ""}
//           onClick={() => tabClickHandler(4)}
//         >
//           아카이빙
//         </li>
//       ),
//       tabCont: (
//         <div>
//           <Magazine />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <STTab className="category is-boxed clearfix">
//         {tabContArr.map((section, index) => {
//           return section.tabTitle;
//         })}
//       </STTab>
//       <div>{tabContArr[activeIndex].tabCont}</div>
//     </div>
//   );
// }
// const STTab = styled.ul`
//   display: flex;
//   align-items: center;
//   width: 1200px;
//   height: 45px;
//   margin: 0 auto;
//   padding: 0 40px;
//   font-size: 14px;

//   li {
//     float: left;
//     text-align: center;
//     font-size: 14px;
//     margin-left: 10px;
//     color: #828282;
//     border: 1px solid transparent;
//     padding: 10px;
//     cursor: pointer;
//   }

//   li:first-child {
//     margin-left: 0;
//   }

//   li:hover {
//     border-bottom: 2px solid black;
//     color: #000;
//   }

//   .is-active {
//     border-bottom: 2px solid black;
//     color: #000;
//   }
// `;

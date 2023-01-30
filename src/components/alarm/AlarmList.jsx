// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// const navigate = useNavigate();
// const dispatch = useDispatch();

// const closeModal = () => {
//     setShowAlarm(false)
//   }

// return (
//   <div onClick={closeModal}>
//     <div onClick={(e) => e.stopPropagation()}>
//       {alams?.data.length === 0 ? (
//         <div>
//           <div>알람이 없습니다</div>
//         </div>
//       ) : (
//         <>
//           <div>읽지 않은 알림</div>

//           <div>
//             {alams?.data.map((alam) => {
//               return (
//                 <div key={alam.id}>
//                   {!alam.status ? ( // 읽지 않은 알람
//                     <div
//                       onClick={() => {
//                         onclickReadAlam(alam.id);
//                         navigate(`/crews/${alam.content.crewId}`);
//                       }}
//                     >
//                       <div>
//                         <span>{alam.content.content}</span>
//                         <div
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             onclickDeleteAlam(alam.id);
//                           }}
//                         >
//                           삭제
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     // 읽은 알람
//                     <div
//                       onClick={() => {
//                         navigate(`/crews/${alam.content.crewId}`);
//                       }}
//                     >
//                       <div>
//                         <span>{alam.content.content}</span>
//                         <div
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             onclickDeleteAlam(alam.id);
//                           }}
//                         >
//                           삭제
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </>
//       )}

//       <div
//         onClick={(e) => {
//           e.stopPropagation();
//           onclickDeleteAlams();
//         }}
//       >
//         <div style={{ textAlign: "center" }}>전체 삭제</div>
//       </div>
//     </div>
//   </div>
// );

// export default AlarmList;

// import { useEffect, useState } from "react";
// import { useLocation, useParams, useSearchParams } from "react-router-dom";
// import axios from "axios";
// // import SearchPagination from "../pagination/searchpagination";
// import Pagination from "../pagination/pagination";
// import Lists from "../boards/lists/Lists";
// import Searchtab from "./Searchtab";

// function Search() {
//   const [keyword, setKeyWord] = useState("");
//   const [searchData, setSearchData] = useState([]);
//   const [query, setquery] = useSearchParams();
//   let [error, setError] = useState("");
//   const params = useParams;
//   const location = useLocation;


//   useEffect(() => {
//     async function fetchData() {
//       const result = await axios.get("post/search?keyword=");
//       console.log(result.data.result);
//       setSearchData(result.data.result);
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div>
//         <div className="search_title">
//           {searchData.length === 0 ? (
//             <strong>검색 결과가 없습니다</strong>
//           ) : (
//             <strong>
//               {`${searchData}에 대한 검색 결과입니다`}
//               {searchData.map((post) => {
//                 <Lists content={post.content.split(",")[0]} />;
//               })}
//             </strong>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
// export default Search;



import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `post/search?keyword=`
    )
      .then((response) => response.json())
      .then((result) => setPosts(result));
  }, [offset, limit]);

  const movePage = (pageNumber) => {
    // 1
    searchParams.set('offset', (pageNumber - 1) * 10);
    setSearchParams(searchParams);
  };

  return (
    <section>
      <h1>검색 결과</h1>
      {posts.map(({ id, title }) => (
        <post key={id}>
          <p>
            <div>id:{id}</div>
            <div>title:{title}</div>
          </p>
        </post>
      ))}
      <div>
        <button onClick={() => movePage(1)}>1</button>
        <button onClick={() => movePage(2)}>2</button> 
        <button onClick={() => movePage(3)}>3</button> 
      </div>
    </section>
  );
};

export default Search;

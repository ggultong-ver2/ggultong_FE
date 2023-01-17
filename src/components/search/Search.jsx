import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
// import SearchPagination from "../pagination/searchpagination";
import Pagination from "../pagination/pagination";
import Lists from "../boards/lists/Lists";
import Searchtab from "./Searchtab";

function Search() {
  const [keyword, setKeyWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [query, setquery] = useSearchParams();
  let [error, setError] = useState("");
  const params = useParams;
  const location = useLocation;

  // const getKeywords=async()=>{
  //     let searchQuery=query.get('q') || "";
  //     console.log("쿼리값??", searchQuery);
  //     let url = "/api/search?/?q=${keyword}"
  //     let response = await fetch(url);
  //     let data = await response.json()
  //     if(data.length < 1){
  //         setError(`${searchQuery}에 대한 검색 결과가 없습니다`)
  //     }else{
  //         setSearchData(data)
  //     }
  //     setSearchData(data)
  // }
  // useEffect(() => {
  //     getKeywords()
  // },[query])
  // return(
  //     <div>
  //         {error?(<alert variant = 'dark'>{error}</alert>):(
  //             <row>
  //                 {searchData.length>0 && searchData.map((content) => (<Lists />))}
  //             </row>
  //         )}
  //     </div>
  // );

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("post/search?keyword=");
      console.log(result.data.result);
      setSearchData(result.data.result);
    }
    fetchData();
  }, []);

  {
    searchData.map((post) => {
      // return(
      //     <>
      //         {/* <ul>
      //             <li key={post.id}>{post.content}</li>
      //         </ul> */}
      //         {/* <div post={post} key={post.id} getMutation="getSearch" /> */}
      //         {/* <Lists content={post.content.split(",")[0]}/> */}
      //         {/* <Pagination total={5} limit={5} page={10} setPage={setPage} /> */}
      //     </>
      // )
    });
  }

  return (
    <>
      <div>
        <div className="search_title">
          {searchData.length === 0 ? (
            <strong>검색 결과가 없습니다</strong>
          ) : (
            <strong>
              {`${searchData}에 대한 검색 결과입니다`}
              {searchData.map((post) => {
                <Lists content={post.content.split(",")[0]} />;
              })}
            </strong>
          )}
        </div>
      </div>
    </>
  );
}
export default Search;

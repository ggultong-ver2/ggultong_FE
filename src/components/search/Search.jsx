import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
// import SearchPagination from "../pagination/searchpagination";
import Pagination from "../pagination/pagination";
import { baseURL } from "../../lib/axios";

function Search() {
  const [keyword, setKeyWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [query, setquery] = useSearchParams();
  let [error, setError] = useState("");
  const params = useParams();
  const location = useLocation;
  console.log(params.keyword);
  console.log(searchData);

  useEffect(() => {
    async function fetchData() {
      // const result = await baseURL.get(`/post/search?keyword=${params.keyword}`);
      const { data } = await axios.get(
        `https://sparta-sjl.shop/api/post/search?keyword=${params.keyword}`
      );
      setSearchData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="search_title">
          {searchData?.length === 0 ? (
            <strong>검색 결과가 없습니다</strong>
          ) : (
            <strong>
              {`총 ${searchData.length}개의 검색 결과가 있습니다`}
              {searchData?.map((post) => (
                <div>{post.title}</div>
              ))}
            </strong>
          )}
        </div>
      </div>
    </>
  );
}
export default Search;

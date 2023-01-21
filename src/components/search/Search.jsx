import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"
import { baseURL } from "../../lib/axios";

function Search() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const {data} = await baseURL.get(`/post/search?keyword=${params.keyword}`)
      setSearchData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="search_container">
        <div>
          {searchData?.length === 0 ? (
            <h3 className="no_results">검색 결과가 없습니다</h3>
          ) : (
            <div className="search_results">
              <div className="search_top">
                <h3>{`총 ${searchData.length}개의 검색 결과가 있습니다`}</h3>
                <select name="search" id="search" className="search_sort">
                  <option value="">최신순</option>
                  <option value="0">좋아요순</option>
                  <option value="1">스크랩순</option>
                </select>
              </div>
              {searchData?.map((post) => (
                <li className="search_title">
                  {post.title}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Search;

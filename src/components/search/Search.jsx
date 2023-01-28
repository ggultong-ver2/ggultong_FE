import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import { baseURL } from "../../lib/axios";


function Search() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await baseURL.get(
        `/post/search?keyword=${params.keyword}`
      );
      setSearchData(data);
    }
    fetchData();
  }, []);

  const pageMove = (category, id) => {
    switch (category) {
      case "meal":
        navigate(`/mealList/meal/detail/${id}`);
        return;
      case "drink":
        navigate(`/drinkList/drink/detail/${id}`);
        return;
      case "recycle":
        navigate(`/recycleList/recycle/detail/${id}`);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <div className="search_container">
        <div>
          {searchData?.length === 0 ? (
            <h3 className="no_results">검색 결과가 없습니다</h3>
          ) : (
            <div className="search_results">
              <div className="search_top">
                <h3>{`'${params.keyword}'에 대한 총 ${searchData.length}개의 검색 결과가 있습니다`}</h3>
                <select name="search" id="search" className="search_sort">
                  <option value="">최신순</option>
                  <option value="0">좋아요순</option>
                  <option value="1">스크랩순</option>
                </select>
              </div>
              {searchData?.map((post) => (
                <div
                  className="search_title"
                  key={`search-${post.id}`}
                  onClick={() => {
                    pageMove(post.category, post.id);
                  }}
                >
                  <div className="search_post_title">{post.title}</div>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="search_post_content"
                  ></div>
                  <div className="search_post_wrap">
                    <ul className="clearfix">
                      <li className="search_post_nickname">{post.nickname}</li>
                      <li className="search_post_like">좋아요&nbsp;{post.likePostSum}</li>
                    </ul>
                    <div className="search_post_time">{post.createdAt.slice(0, 10)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Paging from "../pagination/paging";
import styled from "styled-components";

function Search() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState([]);
  const [likeData, setLikeData] = useState([]);
  const [scrapData, setScrapData] = useState([]);
  const params = useParams();
  const IP = process.env.REACT_APP_URL;
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [searchFilter, setSearchFilter] = useState("recent");

  const setPage = (page) => {
    setCurrentPage(page);
  };

  function handleChange(event) {
    setSearchFilter(event.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      const [searchDataResponse, likeDataResponse, scrapDataResponse] = await Promise.all([
        axios.get(`${IP}/post/search/${currentPage}/recent?keyword=${params.keyword}`),
        axios.get(`${IP}/post/search/${currentPage}/like?keyword=${params.keyword}`),
        axios.get(`${IP}/post/search/${currentPage}/scrap?keyword=${params.keyword}`)
      ]);
      setSearchData(searchDataResponse.data);
      setLikeData(likeDataResponse.data);
      setScrapData(scrapDataResponse.data);
      setCount(searchDataResponse.data[0].searchPostSum);
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

  //(searchData);

  return (
    <>
      <div className="search_container">
        <div className="search_wrap">
          <div>
            {searchData?.length === 0 ? (
              <div className="no_results_wrap">
                <div>{`'${params.keyword}' 에 대한 총 ${count}개의 검색 결과가 있습니다.`}</div>
                <div className="no_results_body">
                  <div className="no_results_image"></div>
                  <h3>검색 결과가 없습니다</h3>
                  <p>다른 키워드로 다시 시도해보세요</p>
                </div>
              </div>
            ) : (
              <div className="search_results">
                <div className="search_top">{`'${params.keyword}'에 대한 총 ${count}개의 검색 결과가 있습니다.`}</div>
                <div className="results_wrap">
                  <select
                    name="search"
                    id="search"
                    className="search_sort"
                    onChange={handleChange}
                  >
                    <option value="recent">최신순</option>
                    <option value="like">좋아요순</option>
                    <option value="scrap">스크랩순</option>
                  </select>

                  {searchFilter === "recent"
                    ? searchData?.map((post) => (
                        <div
                          className="search_title"
                          key={`search-${post.id}`}
                          onClick={() => {
                            pageMove(post.category, post.id);
                          }}
                        >
                          <div className="search_post_title">{post.title}</div>
                          <div className="search_post_wrap">
                            <ul className="clearfix">
                              <li>
                                <StProfile src={post.userProfile}></StProfile>
                              </li>
                              <li className="search_post_nickname">
                                {post.nickname}
                              </li>
                              <li className="search_post_comment">
                                댓글&nbsp;{post.commentCount}
                              </li>
                              <li className="search_post_like">
                                좋아요&nbsp;{post.likePostSum}
                              </li>
                              <li className="search_post_scrap">
                                스크랩&nbsp;{post.scrapPostSum}
                              </li>
                            </ul>
                            <div className="search_post_time">
                              {post.createdAt.slice(0, 10)}
                            </div>
                            <img
                              className="search_image"
                              src={
                                post.imageFile === ""
                                  ? "../images/default_image.png"
                                  : post.imageFile
                              }
                            ></img>
                          </div>
                        </div>
                      ))
                    : null}
                  {searchFilter === "like"
                    ? likeData?.map((post) => (
                        <div
                          className="search_title"
                          key={`search-${post.id}`}
                          onClick={() => {
                            pageMove(post.category, post.id);
                          }}
                        >
                          <div className="search_post_title">{post.title}</div>
                          <div className="search_post_wrap">
                            <ul className="clearfix">
                              <li>
                                <StProfile src={post.userProfile}></StProfile>
                              </li>
                              <li className="search_post_nickname">
                                {post.nickname}
                              </li>
                              <li className="search_post_comment">
                                댓글&nbsp;{post.commentCount}
                              </li>
                              <li className="search_post_like">
                                좋아요&nbsp;{post.likePostSum}
                              </li>
                              <li className="search_post_scrap">
                                스크랩&nbsp;{post.scrapPostSum}
                              </li>
                            </ul>
                            <div className="search_post_time">
                              {post.createdAt.slice(0, 10)}
                            </div>
                            <img
                              className="search_image"
                              src={
                                post.imageFile === ""
                                  ? "../images/default_image.png"
                                  : post.imageFile
                              }
                            ></img>
                          </div>
                        </div>
                      ))
                    : null}
                  {searchFilter === "scrap"
                    ? scrapData?.map((post) => (
                        <div
                          className="search_title"
                          key={`search-${post.id}`}
                          onClick={() => {
                            pageMove(post.category, post.id);
                          }}
                        >
                          <div className="search_post_title">{post.title}</div>
                          <div className="search_post_wrap">
                            <ul className="clearfix">
                              <li>
                                <StProfile src={post.userProfile}></StProfile>
                              </li>
                              <li className="search_post_nickname">
                                {post.nickname}
                              </li>
                              <li className="search_post_comment">
                                댓글&nbsp;{post.commentCount}
                              </li>
                              <li className="search_post_like">
                                좋아요&nbsp;{post.likePostSum}
                              </li>
                              <li className="search_post_scrap">
                                스크랩&nbsp;{post.scrapPostSum}
                              </li>
                            </ul>
                            <div className="search_post_time">
                              {post.createdAt.slice(0, 10)}
                            </div>
                          </div>
                          <img
                            className="search_image"
                            src={
                              post.imageFile === ""
                                ? "../images/default_image.png"
                                : post.imageFile
                            }
                          ></img>
                        </div>
                      ))
                    : null}
                </div>
                <Paging
                  currentPage={currentPage}
                  count={count}
                  setPage={setPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const StProfile = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;

export default Search;

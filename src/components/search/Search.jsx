import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import { baseURL } from "../../lib/axios";
import axios from "axios";
import Paging from "../pagination/paging";
import styled from "styled-components";

function Search() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const IP = process.env.REACT_APP_URL;
  // const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [postPerPage] = useState(10); // 한 페이지에 보여질 아이템
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  // const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
  }, [currentPage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${IP}/post/search/${currentPage}?keyword=${params.keyword}`
      );
      setSearchData(data);
      setCount(data[0].searchPostSum);
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
                  <select name="search" id="search" className="search_sort">
                    <option value="">최신순</option>
                    <option value="0">좋아요순</option>
                    <option value="1">스크랩순</option>
                  </select>
                  {searchData?.map((post) => (
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
                            댓글&nbsp;{post.comment.length}
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
                    </div>
                  ))}
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

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPost, __getMyScrap } from "../../redux/modules/postSlice";
import Paging from "../../components/pagination/paging";
import { __getMypageCount } from "../../redux/modules/postSlice";
import axios from "axios";

const MySmallTab = () => {
  const [displays, setDisplays] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [countData, setCountData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 내게시글 페이징
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

  const myPostCounts = useSelector((state) =>
    state?.postCount?.details?.myPosts?.data === undefined
      ? []
      : state?.postCount?.details?.myPosts?.data[0].myPostCount
  );
  console.log("postcount:", myPostCounts);

  // const myPostCounts = useSelector(
  //   (state) => state?.postCount?.details?.myPosts
  // );
  // console.log("postcount:", myPostCounts);

  useEffect(() => {
    if (!myPostCounts) return;
    setCount(myPostCounts);
    // setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [myPostCounts]);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  // 내 게시글 가져오기
  useEffect(() => {
    dispatch(__getMyPost(currentPage));
  }, [dispatch, currentPage]);

  // 내스크랩 페이징
  // const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [currentPages, setCurrentPages] = useState(1); // 현재 페이지
  const [counts, setCounts] = useState(0); // 아이템 총 개수
  const [postPerPages] = useState(10); // 한 페이지에 보여질 아이템
  const [indexOfLastPosts, setIndexOfLastPosts] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPosts, setIndexOfFirstPosts] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  // const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  // const myScrapCounts = useSelector((state) =>
  //   state?.postCount?.details?.myPosts?.data === undefined
  //     ? []
  //     : state?.postCount?.details?.myPosts?.data[0].myScrapCount
  // );
  // console.log("myScrapCount:", myScrapCounts);

  useEffect(() => {
    setIndexOfLastPosts(currentPages * postPerPages);
    setIndexOfFirstPosts(indexOfLastPosts - postPerPages);
  }, [currentPages, indexOfFirstPosts, indexOfLastPosts, postPerPages]);

  // useEffect(() => {
  //   if (!myScrapCounts) return;
  //   setCounts(myScrapCounts);
  //   // setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  // }, [myScrapCounts]);

  const setPages = (page) => {
    setCurrentPages(page);
  };
  useEffect(() => {
    dispatch(__getMyPost(currentPages));
  }, [dispatch, currentPages]);

  useEffect(() => {
    setCount(myPost?.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
  }, [currentPage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  const myPost = useSelector((state) => state?.details?.details?.myPosts?.data);
  console.log("myPost::", myPost);

  // 내 스크랩 가져오기
  useEffect(() => {
    dispatch(__getMyScrap(currentPage));
  }, [dispatch, currentPage]);

  const myScrap = useSelector((state) => state?.details?.details?.myScrap);
  console.log("myScrap:", myScrap);

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

  const menuArr = [
    {
      name: "내가 쓴 글",
      content: (
        <>
          {myPost &&
            myPost?.map((value, index) => {
              return (
                <Card
                  key={index}
                  onClick={() => {
                    pageMove(value.category, value.postId);
                  }}
                >
                  <Textwrap>
                    <StTitle>{value.title}</StTitle>
                    <StProfile src={value.profileImage}></StProfile>
                    <StNickname>{value.nickname}</StNickname>

                    <Etcwrap>
                      댓글&nbsp;{value.commentCount} 좋아요&nbsp;
                      {value.likeSum} &nbsp;&nbsp;
                      {value.createdAt.slice(0, 10)}
                    </Etcwrap>
                  </Textwrap>
                  <StFile src={value.imageFile}></StFile>
                </Card>
              );
            })}
          <Paging currentPage={currentPage} count={count} setPage={setPage} />
        </>
      ),
    },
    {
      name: "스크랩",
      content: (
        <>
          {myScrap &&
            myScrap?.map((value, index) => {
              return (
                <Card
                  key={index}
                  onClick={() => {
                    pageMove(value.category, value.postId);
                  }}
                >
                  <Textwrap>
                    <StTitle>{value.title}</StTitle>
                    <StProfile src={value.profileImage}></StProfile>
                    <StNickname>{value.nickname}</StNickname>

                    <Etcwrap>
                      댓글&nbsp;{value.commentCount} 좋아요&nbsp;
                      {value.likeSum} &nbsp;&nbsp;
                      {value.createdAt.slice(0, 10)}
                    </Etcwrap>
                  </Textwrap>
                  <StFile src={value.imageFile}></StFile>
                </Card>
              );
            })}
          <Paging
            currentPage={currentPages}
            count={counts}
            setPage={setPages}
          />
        </>
      ),
    },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((ele, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {ele.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
          <h1>{menuArr[currentTab].content}</h1>
        </Desc>
      </div>
    </>
  );
};

const TabMenu = styled.ul`
  margin-left: 90px;
  width: 400px;
  height: 42px;
  font-size: 24px;
  font-weight: 600;
  color: #afafaf;

  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 30px;

  .submenu {
    display: flex;
    width: 170px;
    height: 36px;
    /* calc(100% / 3); */
    padding-left: 10px;
    font-size: 24px;
    transition: 0.5s;
    cursor: pointer;
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255, 255, 255);
    color: rgb(21, 20, 20);
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  margin-left: 30px;
  width: 940px;
  height: 800px;
`;

const Card = styled.div`
  /* border: 1px solid red; */
  border-bottom: 1px solid grey;
  margin-left: 30px;
  width: 880px;
  height: 250px;
  &:hover {
    cursor: pointer;
  }
`;
const Textwrap = styled.div`
  float: left;
  margin-top: 30px;
`;
const StTitle = styled.div`
  height: 50px;
  width: 850px;
  font-size: 30px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 20px;
`;
const StProfile = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;
const StNickname = styled.div`
  color: black;
  font-size: 16px;
`;
const StFile = styled.img`
  height: 200px;
  width: 200px;
  background-color: #d9d9d9;
  margin-left: 650px;
  margin-top: 20px;
`;
const Etcwrap = styled.div`
  height: 30px;
  font-size: 14px;
  line-height: 22px;
  color: #a0a0a0;
`;
export default MySmallTab;

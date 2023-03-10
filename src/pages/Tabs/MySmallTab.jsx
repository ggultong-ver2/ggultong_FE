import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPost, __getMyScrap } from "../../redux/modules/postSlice";
import Paging from "../../components/pagination/paging";
import "./style.css";

const MySmallTab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [count, setCount] = useState(0); // 아이템 총 개수

  const myPostCount = useSelector((state) =>
    state?.postCount?.details?.myPosts === undefined
      ? []
      : state?.postCount?.details?.myPosts[0]?.myPostCount
  );

  useEffect(() => {
    if (!myPostCount) return;
    setCount(myPostCount);
  }, [myPostCount]);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  // 내 게시글 가져오기
  useEffect(() => {
    dispatch(__getMyPost(currentPage));
  }, [dispatch, currentPage, currentTab]);

  const myPost = useSelector((state) => state?.details?.details?.myPosts);

  // 내 스크랩 가져오기
  const myScrap = useSelector((state) => state?.details?.details?.myScrap);

  const [currentPages, setCurrentPages] = useState(1); // 현재 페이지
  const [counts, setCounts] = useState(0); // 아이템 총 개수

  useEffect(() => {
    dispatch(__getMyScrap(currentPages));
  }, [dispatch, currentPages, currentTab]);

  const myScrapCount = useSelector((state) =>
    state?.postCount?.details?.myScrap === undefined
      ? []
      : state?.postCount?.details?.myScrap[0]?.myScrapCount
  );

  useEffect(() => {
    if (!myScrapCount) return;
    setCounts(myScrapCount);
  }, [myScrapCount]);

  const setPages = (pages) => {
    setCurrentPages(pages);
  };

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
                  </Textwrap>
                  <div className="mypage_bottom">
                    <div className="list_bottom">
                      <div className="list_bottom_left">
                        <StProfile src={value.profileImage}></StProfile>
                        &nbsp;&nbsp;
                        <StNickname>{value.nickname}</StNickname>
                        &nbsp;&nbsp;&nbsp;
                        <div className="left_content">
                          댓글&nbsp;{value.commentCount} &nbsp;좋아요&nbsp;
                          {value.likeSum} 스크랩&nbsp; {value.scrapSum}
                        </div>
                      </div>
                      <div className="list_bottom_right">
                        {value.createdAt.slice(0, 10)}
                      </div>
                    </div>
                  </div>
                  <StFile
                    src={
                      value.imageFile === ""
                        ? "../images/default_image.png"
                        : value.imageFile
                    }
                  ></StFile>
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
                  </Textwrap>
                  <div className="mypage_bottom">
                    <div className="list_bottom">
                      <div className="list_bottom_left">
                        <StProfile src={value.profileImage}></StProfile>
                        &nbsp;&nbsp;
                        <StNickname>{value.nickname}</StNickname>
                        &nbsp;&nbsp;&nbsp;
                        <div className="left_content">
                          댓글&nbsp;{value.commentCount} &nbsp;좋아요&nbsp;
                          {value.likeSum} 스크랩&nbsp; {value.scrapSum}
                        </div>
                      </div>
                      <div className="list_bottom_right">
                        {value.createdAt.slice(0, 10)}
                      </div>
                    </div>
                  </div>
                  <StFile
                    src={
                      value.imageFile === ""
                        ? "../images/default_image.png"
                        : value.imageFile
                    }
                  ></StFile>
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
    setCurrentPage(1);
    setCurrentPages(1);
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
  padding-bottom: 30px;
`;

const Card = styled.div`
  position: relative;
  margin: 0 auto;
  border-bottom: 1px solid #e4e4e4;
  width: 800px;
  height: 160px;
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
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
  margin-bottom: 40px;
`;
const StProfile = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;
const StNickname = styled.div`
  color: black;
  font-size: 14px;
  line-height: 22px;
`;
const StFile = styled.img`
  height: 92px;
  width: 92px;
  background-color: #d9d9d9;
  position: absolute;
  top: 20px;
  right: 0;
`;

export default MySmallTab;

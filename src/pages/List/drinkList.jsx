import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  __getCategoryPost,
  __getCategoryCount,
} from "../../redux/modules/postSlice";
import Paging from "../../components/pagination/paging";
import "./style.css";

const DrinkList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [count, setCount] = useState(0); // 아이템 총 개수

  const [listFilter, setListFilter] = useState("recent");

  useEffect(() => {
    dispatch(__getCategoryCount());
  }, [dispatch]);

  const categoryDrinkCount = useSelector(
    (state) => state.details.details.drink
  );

  useEffect(() => {
    if (!categoryDrinkCount) return;
    setCount(categoryDrinkCount);
  }, [categoryDrinkCount]);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(__getCategoryPost({ id, currentPage, listFilter }));
  }, [dispatch, id, currentPage, listFilter]);

  const categoryPosts = useSelector((state) => state.details.categoryPosts);

  function handleChange(event) {
    setListFilter(event.target.value);
  }

  return (
    <>
      <div className="top_cat_wrap">
        <div className="top_cat">
          <ul className="clearfix">
            <li>
              <button onClick={() => navigate("/")}>홈</button>
            </li>
            <li className="list_active">
              <button onClick={() => navigate("/drinklist/drink")}>
                꿀정보
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/gamelist")}>꿀잼</button>
            </li>
          </ul>
          <button onClick={() => navigate("/post")} className="top_post_btn">
            글쓰기
          </button>
        </div>
      </div>

      <div className="list_body">
        <Buttons>
          <Button1 onClick={() => navigate("/drinkList/drink")}>혼술</Button1>
          <Button2 onClick={() => navigate("/mealList/meal")}>혼밥</Button2>
          <Button3
            onClick={() => navigate("/recycleList/recycle")}
            className="recycle"
          >
            리사이꿀
          </Button3>
        </Buttons>
        <div className="postlist_top">
          <ul className="clearfix">
            <p>
              '혼술'은 혼술할 때 좋은 꿀팁이나 정보를 공유하는 게시판입니다.
            </p>
            <li onClick={() => navigate("detail/12")}>
              <div className="post_card_wrap">
                <div
                  className="postlist_top_image1"
                  onClick={() => navigate("/drinkList/drink/detail/12")}
                ></div>
                <h3>
                  맥주 종류 별 40가지 먹어본 사람이
                  <br />
                  추천하는 맥주 탑5
                </h3>
              </div>
            </li>
            <li onClick={() => navigate("detail/31")}>
              <div className="post_card_wrap">
                <div className="postlist_top_image2"></div>
                <h3>칵테일 안주 레시피</h3>
              </div>
            </li>
          </ul>
        </div>

        <Wrapall>
          <Wrap>
            <div>

              <select
                name="drinkList"
                id="drinkList"
                className=""
                onChange={handleChange}
              >
                <option value="recent">최신순</option>
                <option value="like">좋아요순</option>
                <option value="scrap">스크랩순</option>
              </select>
              {listFilter === "recent"
                ? categoryPosts?.map((value, index) => {
                    return (
                      <Card
                        key={index}
                        onClick={() => navigate(`detail/${value.id}`)}
                      >
                        <Textwrap>
                          <StTitle>{value.title}</StTitle>
                          <div className="list_bottom">
                            <div className="list_bottom_left">
                              <Profile src={value.userProfile} />
                              &nbsp;
                              {value?.nickname}&nbsp;&nbsp; 댓글&nbsp;
                              {value && value?.commentCount} 좋아요&nbsp;
                              {value.likePostSum} 스크랩&nbsp;{" "}
                              {value.scrapPostSum}
                            </div>
                            <div className="list_bottom_right">
                              {value.createdAt.slice(0, 10)}
                            </div>
                          </div>
                        </Textwrap>
                        <StFile
                          src={
                            value.imageFile === ""
                              ? "../images/default_image.png"
                              : value.imageFile
                          }
                        ></StFile>
                      </Card>
                    );
                  })
                : null}
              {listFilter === "like"
                ? categoryPosts?.map((value, index) => {
                    return (
                      <Card
                        key={index}
                        onClick={() => navigate(`detail/${value.id}`)}
                      >
                        <Textwrap>
                          <StTitle>{value.title}</StTitle>
                          <div className="list_bottom">
                            <div className="list_bottom_left">
                              <Profile src={value.userProfile} />
                              &nbsp;
                              {value?.nickname}&nbsp;&nbsp; 댓글&nbsp;
                              {value && value?.commentCount} 좋아요&nbsp;
                              {value.likePostSum} 스크랩&nbsp;{" "}
                              {value.scrapPostSum}
                            </div>
                            <div className="list_bottom_right">
                              {value.createdAt.slice(0, 10)}
                            </div>
                          </div>
                        </Textwrap>
                        <StFile
                          src={
                            value.imageFile === ""
                              ? "../images/default_image.png"
                              : value.imageFile
                          }
                        ></StFile>
                      </Card>
                    );
                  })
                : null}
              {listFilter === "scrap"
                ? categoryPosts?.map((value, index) => {
                    return (
                      <Card
                        key={index}
                        onClick={() => navigate(`detail/${value.id}`)}
                      >
                        <Textwrap>
                          <StTitle>{value.title}</StTitle>
                          <div className="list_bottom">
                            <div className="list_bottom_left">
                              <Profile src={value.userProfile} />
                              &nbsp;
                              {value?.nickname}&nbsp;&nbsp; 댓글&nbsp;
                              {value && value?.commentCount} 좋아요&nbsp;
                              {value.likePostSum} 스크랩&nbsp;{" "}
                              {value.scrapPostSum}
                            </div>
                            <div className="list_bottom_right">
                              {value.createdAt.slice(0, 10)}
                            </div>
                          </div>
                        </Textwrap>
                        <StFile
                          src={
                            value.imageFile === ""
                              ? "../images/default_image.png"
                              : value.imageFile
                          }
                        ></StFile>
                      </Card>
                    );
                  })
                : null}

            </div>
            <Paging currentPage={currentPage} count={count} setPage={setPage} />
          </Wrap>
        </Wrapall>
      </div>
    </>
  );
};

const Wrapall = styled.div`
  width: 1000px;
  margin: auto;
  padding: 0 98px;
  background: white;
  position: relative;
  padding-bottom: 104px;
`;
const Wrap = styled.div`
  margin-left: 30px;
  margin-top: 20px;
`;
const Buttons = styled.div`
  width: 1200px;
  height: 32px;
  margin: 0 auto;
  padding-left: 40px;
  margin-bottom: 34px;
`;
const Button1 = styled.button`
  cursor: pointer;
  width: 73px;
  height: 32px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-weight: 500;
`;
const Button2 = styled.button`
  cursor: pointer;
  width: 73px;
  height: 32px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid grey;
  color: grey;
  &:hover {
    border: 1px solid black;
    color: black;
  }
  font-weight: 500;
`;
const Button3 = styled.button`
  cursor: pointer;
  width: 97px;
  height: 32px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid grey;
  color: grey;
  &:hover {
    border: 1px solid black;
    color: black;
  }
  font-weight: 500;
`;
const Card = styled.div`
  border-bottom: 1px solid #e4e4e4;
  width: 800px;
  height: 180px;
  &:hover {
    cursor: pointer;
  }
`;
const Textwrap = styled.div`
  float: left;
  margin-top: 30px;
`;
const Profile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const StTitle = styled.div`
  height: 50px;
  width: 850px;
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 20px;
`;
const StFile = styled.img`
  height: 92px;
  width: 92px;
  background-color: #d9d9d9;
  background-size: contain;
  position: absolute;
  right: 73px;
  margin-top: 40px;
`;

export default DrinkList;

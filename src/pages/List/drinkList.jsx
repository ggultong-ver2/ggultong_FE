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
// import { __getPost } from "../../redux/modules/postSlice";

const DrinkList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  // const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [postPerPage] = useState(10); // 한 페이지에 보여질 아이템
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  // const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    dispatch(__getCategoryCount());
  }, [dispatch]);

  const categoryDrinkCount = useSelector(
    (state) => state.details.details.drink
  );

  useEffect(() => {
    if (!categoryDrinkCount) return;
    setCount(categoryDrinkCount);
    // setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [categoryDrinkCount]);

  useEffect(() => {
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
  }, [currentPage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(__getCategoryPost({ id, currentPage }));
  }, [dispatch, id, currentPage]);

  const categoryPosts = useSelector((state) => state.details.categoryPosts);

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
            <li>
              <div className="postlist_top_image1"></div>
              <h3>
                맥주 종류 별 40가지 먹어본 사람이
                <br />
                추천하는 맥주 탑5
              </h3>
            </li>
            <li>
              <div className="postlist_top_image2"></div>
              <h3>칵테일 안주 레시피</h3>
            </li>
          </ul>
        </div>

        <Wrapall>
          <Wrap>
            <div>
              {categoryPosts?.map((post) => {
                return (
                  <Card
                    key={post.id}
                    onClick={() => navigate(`detail/${post.id}`)}
                  >
                    <Textwrap>
                      <StTitle>{post.title}</StTitle>
                      <StContent
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      ></StContent>
                      <div className="list_bottom">
                        <div className="list_bottom_left">
                          {/* <div className="list_profile">{post?.profileImg}&nbsp;</div> */}
                          {post?.nickname}&nbsp;&nbsp; 댓글&nbsp;
                          {post && post?.comment.length} 좋아요&nbsp;
                          {post.likePostSum}
                        </div>
                        <div className="list_bottom_right">
                          {post.createdAt.slice(0, 10)}
                        </div>
                      </div>
                    </Textwrap>
                    <StFile src={post.imageFile}></StFile>
                  </Card>
                );
              })}
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
  height: 290px;
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
  margin-top: 20px;
`;
const StFile = styled.img`
  height: 140px;
  width: 140px;
  background-color: #d9d9d9;
  background-size: contain;
  position: absolute;
  right: 98px;
  margin-top: 40px;
`;
const StContent = styled.div`
  overflow: hidden;
  height: 120px;
  width: 600px;
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
`;

export default DrinkList;

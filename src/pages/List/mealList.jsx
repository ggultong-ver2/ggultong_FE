import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getCategoryPost } from "../../redux/modules/postSlice";

const MealList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(__getCategoryPost(id));
  }, [dispatch, id]);

  const categoryPosts = useSelector((state) => state.details.categoryPosts);
  console.log("categoryPosts:", categoryPosts);

  return (
    <div className="list_body">
        <Buttons>
          <Button1
            onClick={() => navigate("/drinkList/drink")}
            className="drink"
          >
            혼술
          </Button1>
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
            {/* <div className="mask"></div> */}
          </li>
          <li>
            <div className="postlist_top_image2"></div>
            <h3>칵테일 안주 레시피</h3>
          </li>
        </ul>
      </div>

      <Wrapall>
        <Wrap>
          {categoryPosts.map((post) => {
            return (
              <Card key={post.id} onClick={() => navigate(`detail/${post.id}`)}>
                <Textwrap>
                  <StTitle>{post.title}</StTitle>
                  <StContent
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></StContent>
                  <Etcwrap>
                    댓글&nbsp;{post?.comment.length} 좋아요&nbsp;
                    {post.likePostSum} &nbsp;&nbsp;
                    {post.createdAt.slice(0, 10)}
                  </Etcwrap>
                </Textwrap>
                <StFile src={post.imageFile}></StFile>
              </Card>
            );
          })}
        </Wrap>
      </Wrapall>
    </div>
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
const Button2 = styled.button`
  cursor: pointer;
  width: 73px;
  height: 32px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
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
  &:hover{
    border: 1px solid black;
    color: black;
  }
`;
const Button1 = styled.button`
  cursor: pointer;
  width: 73px;
  height: 32px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid grey;
  color: grey;
  &:hover{
    border: 1px solid black;
    color: black;
  }
`;
const Card = styled.div`
  border-bottom: 1px solid grey;
  width: 800px;
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
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 20px;
`;
const StFile = styled.img`
  height: 140px;
  width: 140px;
  background-color: #d9d9d9;
  position: absolute;
  right: 98px;
  margin-top: 40px;
`;
const StContent = styled.div`
  height: 120px;
  width: 850px;
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
`;
const Etcwrap = styled.div`
  height: 30px;
  font-size: 14px;
  line-height: 22px;
  color: #A0A0A0;
`;

export default MealList;

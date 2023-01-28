import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getCategoryPost } from "../../redux/modules/postSlice";

const RecycleList = () => {
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
    <div>
      <Wrapall>
        <Buttons>
          <Button1
            onClick={() => navigate("/drinkList/drink")}
            className="drink"
          >
            혼술
          </Button1>
          <Button2 onClick={() => navigate("/mealList/meal")} className="meal">
            혼밥
          </Button2>
          <Button3
            onClick={() => navigate("/recycleList/recycle")}
            className="recycle"
          >
            리사이꿀
          </Button3>
        </Buttons>
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
                    {post.likePostSum} 스크랩400&nbsp;&nbsp;
                    {post.createdAt.slice(0, 10)}
                  </Etcwrap>
                </Textwrap>
                <StFile src={post.imageFiles}></StFile>
              </Card>
            );
          })}
        </Wrap>
      </Wrapall>
    </div>
  );
};

const Wrapall = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 2700px;
  margin: auto;
  padding: 20px;
  font-family: "Pretendard";
`;
const Wrap = styled.div`
  margin-left: 30px;
  margin-top: 20px;
`;
const Buttons = styled.div``;
const Button3 = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid black;
  color: black;
`;
const Button1 = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid grey;
  color: grey;
`;
const Button2 = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid grey;
  color: grey;
`;
const Card = styled.div`
  //border: 1px solid green;
  border-bottom: 1px solid grey;
  width: 1100px;
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
  //border: 1px solid green;
  height: 50px;
  width: 850px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
`;
const StFile = styled.img`
  // border: 1px solid yellow;
  height: 200px;
  width: 200px;
  float: left;
  position: relative;
  margin: 20px;
  background-color: #d9d9d9;
`;
const StContent = styled.div`
  // border: 1px solid blue;
  height: 120px;
  width: 850px;
  font-size: 20px;
  //margin-top: 20px;
  overflow: hidden;
`;
const Etcwrap = styled.div`
  // border: 1px solid grey;
  height: 30px;
`;

export default RecycleList;

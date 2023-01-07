import "./reset.css";
import "./style.css";

function Main() {
  return (
    <>
      <div className="hero_side">
        <h1>
          자취하면서 궁금했던 점을 <br /> 공유해봐요!
        </h1>
        <button>글쓰기</button>
      </div>
      <div className="main_container">
        <div className="main_category">
          <ul className="clearfix">
            <li>
              <div className="category_text">
                <h3>꿀매거진</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
            <li>
              <div className="category_text">
                <h3>자취 꿀방</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
            <li>
              <div className="category_text">
                <h3>자취 꿀팁</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
            <li>
              <div className="category_text">
                <h3>자취 꿀밥</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
            <li>
              <div className="category_text">
                <h3>자취 꿀템</h3>
                <p>에디터가 엄선한 자취 생활 정보</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="main_magazine">
          <h3>에디터가 엄선한 자취 꿀매거진</h3>
          <ul className="clearfix">
            <li>
              {/* <img src={post.imageUrl} alt="image" /> */}
              <div>
                <div className="magazine_image"></div>
                <p>자취방에서 위잉거리는 소리가 나요</p>
              </div>
            </li>
            <li>
              <div>
                <div className="magazine_image"></div>
                <p>자취방에서 위잉거리는 소리가 나요</p>
              </div>
            </li>
            <li>
              <div>
                <div className="magazine_image"></div>
                <p>자취방에서 위잉거리는 소리가 나요</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="main_room">
          <ul className="clearfix">
            <li>
              <h3>지금 자취방을 <br />구하고 있다면?</h3>
              <button>글 구경하기</button>
            </li>
            <li>
              <div className="room_image"></div>
              <p>벌레가 나왔을 때 퇴치법 A to Z</p>
            </li>
            <li>
              <div className="room_image"></div>
              <p>벌레가 나왔을 때 퇴치법 A to Z</p>
            </li>
            <li>
              <div className="room_image"></div>
              <p>벌레가 나왔을 때 퇴치법 A to Z</p>
            </li>
          </ul>
        </div>
        <div className="main_recipe">
          <ul className="clearfix">
            <li>
              <h3>간단하게 할 수 있는 <br />요리 레시피 추천!</h3>
              <button>글 구경하기</button>
            </li>
            <li>
              <div className="recipe_image"></div>
              <p>벌레가 나왔을 때 퇴치법 A to Z</p>
            </li>
            <li>
              <div className="recipe_image"></div>
              <p>벌레가 나왔을 때 퇴치법 A to Z</p>
            </li>
            <li>
              <div className="recipe_image"></div>
              <p>벌레가 나왔을 때 퇴치법 A to Z</p>
            </li>
          </ul>
        </div>
        <div className="main_qna">
          <h3>실시간 Q&A</h3>
          <div className="qna_wrap">
            <div className="qna">
              <h4>복층 힘든 점이 뭔가요? 궁금해여</h4>
              <p>자취하는 어린이</p>
            </div>
            <div className="qna">
              <h4>복층 힘든 점이 뭔가요? 궁금해여</h4>
              <p>자취하는 어린이</p>
            </div>
            <div className="qna">
              <h4>복층 힘든 점이 뭔가요? 궁금해여</h4>
              <p>자취하는 어린이</p>
            </div>
            <div className="qna">
              <h4>복층 힘든 점이 뭔가요? 궁금해여</h4>
              <p>자취하는 어린이</p>
            </div>
            <div className="qna">
              <h4>복층 힘든 점이 뭔가요? 궁금해여</h4>
              <p>자취하는 어린이</p>
            </div>
            <div className="qna">
              <h4>복층 힘든 점이 뭔가요? 궁금해여</h4>
              <p>자취하는 어린이</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

import "../pages/reset.css"
import "../pages/style.css"

function Magazine() {
  return (
    <>
      <div className="main_magazine">
        <h3>에디터가 엄선한 자취 꿀매거진</h3>
        <ul className="clearfix">
          <li>
            {/* <img src={post.imageUrl} alt="image" /> */}
            <div>
              <div className="magazine_image"></div>
              <p>필수템부터 꾸미기 팁까지, 자취 고수들의 4가지 노하우</p>
            </div>
          </li>
          <li>
            <div>
              <div className="magazine_image"></div>
              <p>독립을 하기로 했다 : 자취 준비를 위한 체크리스트</p>
            </div>
          </li>
          <li>
            <div>
              <div className="magazine_image"></div>
              <p>자취 집들이 선물 리스트 (1 ~ 4만원대) </p>
            </div>
          </li>
          <li>
            <div>
              <div className="magazine_image"></div>
              <p>잠옷 입고 자기 vs 아무거나 입고 자기</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Magazine;

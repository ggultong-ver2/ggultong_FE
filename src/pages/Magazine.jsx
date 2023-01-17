import "../pages/reset.css";
import "../pages/style.css";

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
          <li>
            <div>
              <div className="magazine_image"></div>
              <p>자취방에서 위잉거리는 소리가 나요</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Magazine;

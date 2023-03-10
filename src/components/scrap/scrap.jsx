import "./scrap.css";
import { __postScrap } from "../../redux/modules/postSlice";
import { useParams } from "react-router";
import CheckLogin from "../../hook/CheckLogin";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Scrap = () => {
  const { isLogin } = CheckLogin();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const scrapToggle = () => {
    if (isLogin) {
      dispatch(__postScrap(id));
    } else {
      Swal.fire("로그인 후 이용해주세요!", "", "warning");
      navigate("/login");
    }
  };

  const scrapPost = useSelector((state) => state.details.details.isScrapPost);

  const scrapPostSum = useSelector(
    (state) => state.details.details.scrapPostSum
  );

  return (
    <>
      <div className="scrap_button">
        {scrapPost ? (
          <div onClick={scrapToggle} className="scrap_onclick_wrap">
            {scrapPostSum}
            <div className="scrap_onclick"></div>
          </div>
        ) : (
          <div onClick={scrapToggle} className="scrap_default_wrap">
            {scrapPostSum}
            <div className="scrap_default"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Scrap;

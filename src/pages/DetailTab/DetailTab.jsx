import "./DetailTab.css";
import { useState, useEffect } from "react";
import { __getPost } from "./../../redux/modules/postSlice";
import Lists from "../../components/boards/lists/Lists";
import Pagination from "../../components/pagination/pagination";
import { useSelector, useDispatch } from "react-redux";

const DetailTab = () => {
  const [toggleState, setToggleState] = useState(1);
  const dispatch = useDispatch();

  //const posts = useSelector((posts) => state.details.details);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const Categorycontent = () => {
  //   if (toggleState === 1) {
  //     if (posts.category === "room") {
  //       return;
  //       posts.map((post) => <Lists key={posts.id} />);
  //     } else {
  //       return null;
  //     }
  //   } else if (toggleState === 2) {
  //     if (posts.category === "room") {
  //       return posts.map((post) => <Lists key={posts.id} />);
  //     } else {
  //       return null;
  //     }
  //   } else if (toggleState === 3) {
  //     if (posts.category === "tip") {
  //       return posts.map((post) => <Lists key={posts.id} />);
  //     } else {
  //       return null;
  //     }
  //   } else if (toggleState === 4) {
  //     if (posts.category === "meal") {
  //       return posts.map((post) => <Lists key={posts.id} />);
  //     } else {
  //       return null;
  //     }
  //   }

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          전체
        </button>

        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          자취꿀방
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          자취꿀팁
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          자취꿀밥
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div className="banners">
            <div className="banner" />
            <div className="banner" />
          </div>
          <div className="lists"></div>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <div>
            <Lists />
          </div>
          <Pagination total={5} limit={5} page={10} setPage={setPage} />
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <Lists />
          <Lists />
          <Lists />
          <Pagination total={5} limit={5} page={10} setPage={setPage} />
        </div>
        <div
          className={toggleState === 4 ? "content active-content" : "content"}
        >
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Pagination total={5} limit={5} page={10} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default DetailTab;

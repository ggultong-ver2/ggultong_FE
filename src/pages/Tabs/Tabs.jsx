import "./Tabs.css";
import { useState } from "react";
import Lists from "../../components/boards/lists/Lists";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
          인기
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          꿀매거진
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          자취꿀방
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          자취꿀팁
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          자취꿀밥
        </button>
        <button
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(7)}
        >
          자취꿀템
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <p>content1</p>
          <hr />
          <p>content1's content</p>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <Lists />
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <p>content3</p>
          <hr />
          <p>content3's content</p>
        </div>
        <div
          className={toggleState === 4 ? "content active-content" : "content"}
        >
          <Lists />
        </div>
        <div
          className={toggleState === 5 ? "content active-content" : "content"}
        >
          <Lists />
        </div>
        <div
          className={toggleState === 6 ? "content active-content" : "content"}
        >
          <Lists />
        </div>
        <div
          className={toggleState === 7 ? "content active-content" : "content"}
        >
          <p>content7</p>
          <hr />
          <p>content's content</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

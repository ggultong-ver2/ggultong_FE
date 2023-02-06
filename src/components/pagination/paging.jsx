import React from "react";
import Pagination from "react-js-pagination";
import "./paging.css";

const Paging = ({
  currentPage,
  count,
  setPage,
  currentPages,
  counts,
  setPages,
}) => {
  return (
    <>
      {Pagination.activePage !== { currentPage } ? (
        <div>
          <Pagination
            activePage={currentPage} // 현재페이지
            itemsCountPerPage={10} // 한 페이지 당 보여줄 아이템 수
            totalItemsCount={Number(count)} // 총 아이템 수
            pageRangeDisplayed={10} // paginator에서 보여줄 페이지 범위
            prevPageText={"‹"} // 이전페이지로 가기를 나타내는 텍스트
            nextPageText={"›"} // 다음 페이지로 가기를 나타내는 텍스트
            onChange={setPage} // 페이지가 바뀔 때 핸들링하는 함수
          />
        </div>
      ) : (
        <div>
          <Pagination
            activePage={currentPages} // 현재페이지
            itemsCountPerPage={10} // 한 페이지 당 보여줄 아이템 수
            totalItemsCount={Number(counts)} // 총 아이템 수
            pageRangeDisplayed={10} // paginator에서 보여줄 페이지 범위
            prevPageText={"‹"} // 이전페이지로 가기를 나타내는 텍스트
            nextPageText={"›"} // 다음 페이지로 가기를 나타내는 텍스트
            onChange={setPages} // 페이지가 바뀔 때 핸들링하는 함수
          />
        </div>
      )}
    </>
  );
};

export default Paging;

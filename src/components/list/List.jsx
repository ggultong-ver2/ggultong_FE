import React from "react";
import "./List.css";

const List = ({ title, imageUrl, body }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-body">
          <p style={{ wordBreak: "break-all" }}>{body}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <a href="https://www.youtube.com/watch?v=Q3I_NwaCZI8">View more</a>
        </button>
      </div>
    </div>
  );
};

export default List;

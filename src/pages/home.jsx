import "./home.css";

const Home = () => {
  return (
    <div>
      <button>꿀팁</button>
      <button>꿀템</button>
      <button>꿀방</button>
      <button>꿀밥</button>
      <p>꿀팁</p>
      <div className="cardBox">
        <p className="cardTitle">title</p>
        <div className="cardImg">imagearea</div>
        <p className="cardContent">content</p>
        <button className="cardBtn">View More</button>
      </div>
    </div>
  );
};

export default Home;

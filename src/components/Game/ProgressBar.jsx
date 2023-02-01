import "./progress.css";
import Progress from "./progress.jsx";

function ProgressBar({ rowdata }) {
  const percentData = rowdata;

  const testData = [{ bgcolor: "#F4C748", completed: percentData.percent }];
  console.log("rowDATA", percentData.percent);
  return (
    <div className="ProgressBar">
      {testData.map((item, idx) => (
        <Progress key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
  );
}

export default ProgressBar;

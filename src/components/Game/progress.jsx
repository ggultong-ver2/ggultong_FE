const Progress = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: 510,
    backgroundColor: "#0A0909",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    transition: "width 1s ease-in-out",
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 1,
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default Progress;

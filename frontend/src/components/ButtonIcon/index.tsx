import "./styles.css";

const ButtonIcon = () => {
  return (
    <button
      className="btn btn-primary btn-icon"
      onClick={() => {
        console.log("Hello World");
      }}
    >
      <h6>START YOUR SEARCH NOW</h6>
    </button>
  );
};

export default ButtonIcon;

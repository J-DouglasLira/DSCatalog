import "./styles.css";

const ButtonIcon = () => {
  return (
    <button
      className="btn btn-primary btn-icon"
      onClick={() => {
        console.log("Hello World");
      }}
    >
      <p>START YOUR SEARCH NOW</p>
    </button>
  );
};

export default ButtonIcon;

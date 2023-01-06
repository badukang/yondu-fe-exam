import inputKeys from "../../constants/inputKeys.json";

const Numpad = (props) => {
  return (
    <div className="numpad-container">
      {Object.keys(inputKeys).map((key) => {
        let val = inputKeys[key];
        return (
          <button
            className={key}
            onClick={props.onKeypadClick}
            key={key}
            value={val}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Numpad;

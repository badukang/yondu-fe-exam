import operatorKeys from "../../constants/operatorKeys.json";

const Operators = (props) => {
  return (
    <div className="operator-container">
      {Object.keys(operatorKeys).map((key) => {
        let val = operatorKeys[key];

        return (
          <button onClick={props.onOperatorClick} key={key} value={val}>
            {val}
          </button>
        );
      })}
    </div>
  );
};
export default Operators;

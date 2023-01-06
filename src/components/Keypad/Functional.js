const Functional = (props) => {
  return (
    <div className="function-container">
      <button
        index="key-clear"
        value={props.clearText}
        onClick={props.onClearDisplayValue}
      >
        {props.clearText}
      </button>

      <button index="key-sign" onClick={props.onToggleSign}>
        ±
      </button>

      <button index="key-percent" value="%" onClick={props.onPercentClick}>
        %
      </button>
    </div>
  );
};

export default Functional;

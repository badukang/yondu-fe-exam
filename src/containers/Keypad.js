import React, { useContext } from "react";

import Functional from "../components/Keypad/Functional";
import Numpad from "../components/Keypad/Numpad";
import Operators from "../components/Keypad/Operators";

import CalculatorContext from "../store/calculator-context";

const Keypad = () => {
  const ctx = useContext(CalculatorContext);

  return (
    <div className="keypad-container">
      <Functional
        clearText={ctx.clearText}
        onClearDisplayValue={ctx.onClearDisplayValue}
        onToggleSign={ctx.onToggleSign}
        onPercentClick={ctx.onPercentClick}
      />
      <Numpad onKeypadClick={ctx.onKeypadClick} />
      <Operators onOperatorClick={ctx.onOperatorClick} />
    </div>
  );
};

export default Keypad;

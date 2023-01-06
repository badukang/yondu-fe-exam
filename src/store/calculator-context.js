import React, { useState, useEffect } from "react";
import { stringToOperator } from "../helpers";

const constantContext = {
  prevDisplayValue: "0", //also act as first num
  displayValue: "0",
  operator: false,
  operatorWaiting: false, //for reset display
  clearText: "AC",
};
const actionContext = {
  onKeypadClick: () => {},
  onClearDisplayValue: () => {},
  onOperatorClick: () => {},
  onPercentClick: () => {},
  onToggleSign: () => {},
};
const CalculatorContext = React.createContext({
  ...constantContext,
  ...actionContext,
});
export default CalculatorContext;

export const CalculatorContextProvider = (props) => {
  const [calculatorInput, setCalculatorInput] = useState(constantContext);

  const onClearDisplayValue = () => {
    setCalculatorInput({ ...constantContext });
  };
  const onToggleSign = () => {
    setCalculatorInput((prevState) => ({
      ...prevState,
      displayValue: (
        prevState.displayValue -
        prevState.displayValue * 2
      ).toString(),
    }));
  };
  const onKeypadClick = (e) => {
    //  check parseable
    let clickedValue = isNaN(e.target.value)
      ? e.target.value
      : parseFloat(e.target.value);

    //  check dot
    if (clickedValue === ".") {
      if (calculatorInput.displayValue.includes(".")) {
        return;
      }
      if (calculatorInput.displayValue === "0") {
        clickedValue = `0${clickedValue}`;
      }
    }

    let newDisplayValue = `${calculatorInput.displayValue}${clickedValue}`;
    console.log("haeas", calculatorInput.operatorWaiting);
    // check empty
    if (
      calculatorInput.displayValue === "0" ||
      calculatorInput.operatorWaiting
    ) {
      newDisplayValue = `${clickedValue}`;
    }

    setCalculatorInput((prevState) => ({
      ...prevState,
      displayValue: newDisplayValue,
      operatorWaiting: false,
    }));

    //   //check empty
    //   if (prevState === "0" || operatorWaiting) {
    //     setOperatorWaiting(constantContext.operatorWaiting);

    //     return `${clickedValue}`;
    //   }
  };
  const onPercentClick = (e) => {
    let clickedOperator = e.target.value;

    setCalculatorInput((prevState) => ({
      ...prevState,
      displayValue: stringToOperator(
        parseFloat(prevState.displayValue),
        clickedOperator
      ).toString(),
    }));
  };
  const onOperatorClick = (e) => {
    let clickedOperator = e.target.value;

    if (calculatorInput.prevDisplayValue === "0") {
      setCalculatorInput((prevState) => ({
        ...prevState,
        prevDisplayValue: prevState.displayValue,
        operator: clickedOperator,
        operatorWaiting: true,
      }));
    } else {
      let newDisplayValue = stringToOperator(
        parseFloat(calculatorInput.prevDisplayValue),
        calculatorInput.operator,
        parseFloat(calculatorInput.displayValue)
      ).toString();

      //on equals
      let newPrevDisplayValue = newDisplayValue;
      if (clickedOperator === "=") {
        newPrevDisplayValue = calculatorInput.displayValue;
        clickedOperator = calculatorInput.operator;
      }

      setCalculatorInput((prevState) => ({
        ...prevState,
        prevDisplayValue: newPrevDisplayValue,
        displayValue: newDisplayValue,
        operator: clickedOperator,
        operatorWaiting: true,
      }));
    }
  };

  useEffect(() => {
    //update text
    setCalculatorInput((prevState) => ({
      ...prevState,
      clearText: prevState.displayValue !== "0" ? "C" : "AC",
    }));
  }, [calculatorInput.displayValue]);

  return (
    <CalculatorContext.Provider
      value={{
        ...calculatorInput,
        onClearDisplayValue,
        onToggleSign,
        onKeypadClick,
        onOperatorClick,
        onPercentClick,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

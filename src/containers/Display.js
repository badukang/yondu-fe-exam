import { useContext } from "react";
import CalculatorContext from "../store/calculator-context";

const Display = () => {
  const ctx = useContext(CalculatorContext);

  return <div className="display-container">{ctx.displayValue}</div>;
};

export default Display;

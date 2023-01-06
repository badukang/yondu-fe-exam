const operators = {
  "+": (a, b) => {
    return a + b;
  },
  "-": (a, b) => {
    return a - b;
  },
  "*": (a, b) => {
    return a * b;
  },
  "/": (a, b) => {
    return a / b;
  },
  "%": (a) => {
    return a / 100;
  },
};
const stringToOperator = (a, operator, b) => {
  return operators[operator](a, b);
};

export { stringToOperator };

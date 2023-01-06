import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { CalculatorContextProvider } from "./store/calculator-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </React.StrictMode>
);

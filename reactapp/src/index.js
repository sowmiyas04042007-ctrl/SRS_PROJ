import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PatientProvider } from "./context/PatientContext";

ReactDOM.render(
  <PatientProvider>
    <App />
  </PatientProvider>,
  document.getElementById("root")
);

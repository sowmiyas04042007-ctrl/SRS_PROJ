import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PatientProvider } from "./context/PatientContext";
import { DataProvider } from "./context/DataContext";

ReactDOM.render(
  <PatientProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </PatientProvider>,
  document.getElementById("root")
);

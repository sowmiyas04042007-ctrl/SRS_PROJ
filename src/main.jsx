import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PatientProvider } from "./context/PatientContext";
import { DataProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PatientProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </PatientProvider>
  </React.StrictMode>
);

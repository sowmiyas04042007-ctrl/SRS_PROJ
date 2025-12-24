import { createContext, useState, useReducer } from "react";
import { treatmentReducer } from "./TreatmentReducer";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [treatments, dispatch] = useReducer(treatmentReducer, []);

  const addPatient = (patient) => setPatients([...patients, patient]);

  return (
    <PatientContext.Provider value={{ patients, addPatient, treatments, dispatch }}>
      {children}
    </PatientContext.Provider>
  );
};

import { createContext, useState, useReducer } from "react";
import { treatmentReducer } from "./TreatmentReducer";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [treatments, dispatch] = useReducer(treatmentReducer, []);

  const addPatient = (patient) => {
    setPatients([
      ...patients,
      { ...patient, medicalRecords: [], treatmentHistory: [] }
    ]);
  };

  const addMedicalRecord = (patientId, record) => {
    setPatients(
      patients.map(p =>
        p.id === patientId
          ? { ...p, medicalRecords: [...p.medicalRecords, record] }
          : p
      )
    );
  };

  return (
    <PatientContext.Provider value={{
      patients,
      addPatient,
      addMedicalRecord,
      treatments,
      dispatch
    }}>
      {children}
    </PatientContext.Provider>
  );
};

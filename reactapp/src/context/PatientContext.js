import { createContext, useState, useReducer } from "react";
import { treatmentReducer } from "./TreatmentReducer";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [treatments, dispatch] = useReducer(treatmentReducer, []);

  // ✅ Add patient WITH medical records support
  const addPatient = (patient) => {
    setPatients([
      ...patients,
      {
        ...patient,
        medicalRecords: []   // 🔹 patient-specific records
      }
    ]);
  };

  // ✅ Add medical record (report / prescription / lab result)
  const addMedicalRecord = (patientId, record) => {
    setPatients(
      patients.map((p) =>
        p.id === patientId
          ? { ...p, medicalRecords: [...p.medicalRecords, record] }
          : p
      )
    );
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        addPatient,
        addMedicalRecord,   // 🔹 exposed to components
        treatments,
        dispatch
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

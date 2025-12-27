import { createContext, useState } from "react";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  /* ADD PATIENT */
  const addPatient = (patient) => {
    setPatients([
      ...patients,
      {
        ...patient,
        medicalRecords: [],
        treatmentHistory: [],
        prescriptions: []        // ✅ NEW
      }
    ]);
  };

  /* ADD MEDICAL RECORD */
  const addMedicalRecord = (patientId, record) => {
    setPatients(
      patients.map(p =>
        p.id === patientId
          ? { ...p, medicalRecords: [...p.medicalRecords, record] }
          : p
      )
    );
  };

  /* ADD TREATMENT (FIXES "NO TREATMENT ADDED") */
  const addTreatmentToPatient = (patientId, treatment) => {
    setPatients(
      patients.map(p =>
        p.id === patientId
          ? {
              ...p,
              treatmentHistory: [...p.treatmentHistory, treatment]
            }
          : p
      )
    );
  };

  /* ADD PRESCRIPTION */
  const addPrescription = (patientId, prescription) => {
    setPatients(
      patients.map(p =>
        p.id === patientId
          ? {
              ...p,
              prescriptions: [...p.prescriptions, prescription]
            }
          : p
      )
    );
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        addPatient,
        addMedicalRecord,
        addTreatmentToPatient,
        addPrescription
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

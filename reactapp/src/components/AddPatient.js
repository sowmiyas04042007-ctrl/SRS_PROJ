import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useHistory } from "react-router-dom";   // v5 compatible

function AddPatient() {
  const { addPatient } = useContext(PatientContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");   // ✅ ADDED

  const submitHandler = (e) => {
    e.preventDefault();

    addPatient({
      id: Date.now(),
      name,
      diagnosis,
      treatmentHistory: [treatment]   // ✅ Treatment Plan stored
    });

    history.push("/");   // redirect to patient list
  };

  return (
    <form onSubmit={submitHandler} style={formStyle}>
      <h2>Add Oncology Patient</h2>

      <input
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Diagnosis"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        required
      />

      {/* ✅ TREATMENT PLAN INPUT */}
      <input
        placeholder="Treatment Plan (Chemotherapy / Radiation / Surgery)"
        value={treatment}
        onChange={(e) => setTreatment(e.target.value)}
        required
      />

      <button type="submit">Add Patient</button>
    </form>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
  margin: "20px auto",
  gap: "10px",
};

export default AddPatient;

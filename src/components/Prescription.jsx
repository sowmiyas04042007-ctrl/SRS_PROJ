import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

function Prescription() {
  const { id } = useParams();
  const { patients, addPrescription } = useContext(PatientContext);
  const [text, setText] = useState("");

  const patient = patients.find(p => p.id === Number(id));
  if (!patient) return <p>Patient not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Prescriptions – {patient.name}</h2>

      <input
        placeholder="Medicine / Dosage / Duration"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={() => {
        addPrescription(patient.id, text);
        setText("");
      }}>
        Add Prescription
      </button>

      {patient.prescriptions.length === 0 ? (
        <p>No prescriptions added</p>
      ) : (
        <ul>
          {patient.prescriptions.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Prescription;

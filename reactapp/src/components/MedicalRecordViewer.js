import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

function MedicalRecordViewer() {
  const { id } = useParams();
  const { patients, addMedicalRecord } = useContext(PatientContext);

  const patient = patients.find(p => p.id === Number(id));
  const [record, setRecord] = useState("");

  if (!patient) return <p>Patient not found</p>;

  const addRecord = () => {
    if (!record) return;
    addMedicalRecord(patient.id, record);
    setRecord("");
  };

  return (
    <div>
      <h2>Medical Records – {patient.name}</h2>

      <input
        placeholder="Report / Prescription / Lab Result"
        value={record}
        onChange={e => setRecord(e.target.value)}
      />

      <button onClick={addRecord}>Add Record</button>

      <ul>
        {patient.medicalRecords.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default MedicalRecordViewer;

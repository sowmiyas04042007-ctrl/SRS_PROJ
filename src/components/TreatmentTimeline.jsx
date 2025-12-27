import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useParams } from "react-router-dom";

function TreatmentTimeline() {
  const { id } = useParams();
  const { addTreatmentToPatient } = useContext(PatientContext);
  const [type, setType] = useState("");

  const addTreatment = () => {
    if (!type) return;
    addTreatmentToPatient(Number(id), type);
    setType("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Treatment</h2>

      <input
        placeholder="Chemotherapy / Radiation"
        value={type}
        onChange={e => setType(e.target.value)}
      />

      <button onClick={addTreatment}>Add Treatment</button>
    </div>
  );
}

export default TreatmentTimeline;

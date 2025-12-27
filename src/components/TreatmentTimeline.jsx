import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

function TreatmentTimeline() {
  const { treatments, dispatch } = useContext(PatientContext);
  const [type, setType] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Treatment Timeline</h2>

      <input
        placeholder="Chemotherapy / Radiation"
        value={type}
        onChange={e => setType(e.target.value)}
      />

      <button onClick={() => dispatch({ type: "ADD_TREATMENT", payload: type })}>
        Add
      </button>

      <ul>
        {treatments.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

export default TreatmentTimeline;

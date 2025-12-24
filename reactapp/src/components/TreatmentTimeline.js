import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

function TreatmentTimeline() {
  const { treatments, dispatch } = useContext(PatientContext);
  const [type, setType] = useState("");

  const addTreatment = () => {
    if (!type) return;
    dispatch({ type: "ADD_TREATMENT", payload: type });
    setType("");
  };

  return (
    <div>
      <h2>Treatment Timeline</h2>
      <input value={type} onChange={e => setType(e.target.value)} placeholder="Chemotherapy / Radiation" />
      <button onClick={addTreatment}>Add</button>

      <ul>
        {treatments.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

export default TreatmentTimeline;

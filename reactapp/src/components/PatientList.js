import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { Link } from "react-router-dom";

function PatientList() {
  const { patients, addPatient } = useContext(PatientContext);
  const [name, setName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !diagnosis) {
      setError("All fields required");
      return;
    }
    addPatient({ id: Date.now(), name, diagnosis });
    setName("");
    setDiagnosis("");
    setError("");
  };

  return (
    <div>
      <h2>Patient List</h2>

      <form onSubmit={submitHandler}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={diagnosis} onChange={e => setDiagnosis(e.target.value)} placeholder="Diagnosis" />
        <button>Add Patient</button>
        {error && <p style={{ color: "red" }}>[Error - You need to specify the message]</p>}
      </form>

      {patients.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>{p.diagnosis}</p>
          <Link to={`/patient/${p.id}`}>View Profile</Link>
        </div>
      ))}
    </div>
  );
}

export default PatientList;
